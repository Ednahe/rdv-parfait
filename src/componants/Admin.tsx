import React, { useState } from "react";
import { db } from "../config/dbConfig";
import { useAuthAdmin } from "../hooks/useAuthAdmin";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// typage des données d'un article de blog
interface BlogPost {
  title: string;
  content: string;
  createdAt: Date;
  imageUrl: string;
  tag: string;
}

// composant admin
const Admin: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [postSuccess, setPostSuccess] = useState<boolean>(false);
  const { user, isAdmin, login, logout } = useAuthAdmin();

  // fonction pour poster un article
  const postArticle = async (e: React.FormEvent) => {
    e.preventDefault();

    // si aucune image n'est mise
    if (!imageFile) {
      console.error("aucune image détectée.");
      return;
    }

    try {
      const storage = getStorage(); // Récupérer l'instance de stockage
      const storageRef = ref(storage, `images/${imageFile.name}`); // Créer une référence pour le fichier

      // Télécharger le fichier
      await uploadBytes(storageRef, imageFile);
      // Obtenir l'URL de téléchargement
      const downloadURL = await getDownloadURL(storageRef);

      const newPost: BlogPost = {
        title,
        content,
        createdAt: new Date(),
        imageUrl: downloadURL,
        tag,
      };

      // ajout du post à la collection firebase
      await addDoc(collection(db, "blogPosts"), newPost);
      // affichage du message de réussite et réinitialisation des champs du formulaire
      setPostSuccess(true);
      setTitle("");
      setContent("");
      setImageFile(null);
      setTag("");

      // le message de réussite disparait au bout de 4 secondes
      setTimeout(() => setPostSuccess(false), 4000);
    } catch (error) {
      console.error("erreur :", error);
    }
  };

  // fonction pour télécharger une image
  const downloadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Prendre le premier fichier
    if (file) {
      setImageFile(file); // Stocker le fichier
    }
  };

  return (
    <section className="first-section">
      {user ? (
        <div>
          <button onClick={logout}>Déconnexion</button>
          {isAdmin ? (
            <form onSubmit={postArticle}>
              <input
                type="text"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Contenu"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <input type="file" accept="image/*" onChange={downloadImage} />
              <input
                type="text"
                placeholder="Tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <button type="submit">Poster</button>
            </form>
          ) : (
            <p>Vous n'êtes pas autorisé à poster des articles.</p>
          )}
        </div>
      ) : (
        <button onClick={login}>Connexion avec Google</button>
      )}
      {postSuccess && <p className="center">Post publié avec succès.</p>}
    </section>
  );
};

export default Admin;
