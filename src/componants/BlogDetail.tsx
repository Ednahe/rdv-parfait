import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/dbConfig";

// typage des données du post de blog
interface BlogPost {
  title: string;
  content: string;
  createdAt: Date;
  imageUrl: string;
  tag: string;
}

// composant qui affiche l'article selectionné par l'utilisateur
const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // récupération de l'id dans l'url
  const [post, setPost] = useState<BlogPost | null>(null);

  // récupération des données à afficher
  const fetchBlog = async (): Promise<void> => {
    if (id) {
        try {
            const docRef = doc(db, 'blogPosts', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setPost({
                    title: data.title,
                    content: data.content,
                    createdAt: new Date(data.createdAt.toDate()),
                    imageUrl: data.imageUrl,
                    tag: data.tag,
                })
            } else {
                console.log('aucun post trouvé avec cet id');              
            }
        } catch (error) {
            console.error('erreur :', error);
        }
    }
  }

  useEffect(() => {
    fetchBlog();
  }, [id]);

  return (
    <section className="first-section">
      {!post ? (
        <p>Erreur, post inconnu</p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <img src={post.imageUrl} className="img-blog" />
          <p>{post.content}</p>
          <span>Date de création : {post.createdAt.toLocaleDateString()}</span>
          <p>Tag : {post.tag}</p>
        </>
      )}
    </section>
  );
};

export default BlogDetail;
