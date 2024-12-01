import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/dbConfig";

// typage des données du post de blog
interface BlogPost {
  slug: string;
  title: string;
  content: string;
  createdAt: Date;
  imageUrl: string;
  tag: string;
}

// composant qui affiche l'article selectionné par l'utilisateur
const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // récupération du slug dans l'url
  const [post, setPost] = useState<BlogPost | null>(null);

  // récupération des données à afficher
  const fetchBlog = async (): Promise<void> => {
    if (slug) {
      try {
        //     const docRef = doc(db, 'blogPosts', slug);
        //     const docSnap = await getDoc(docRef);
        //     if (docSnap.exists()) {
        //         const data = docSnap.data();
        //         setPost({
        //             slug: data.slug,
        //             title: data.title,
        //             content: data.content,
        //             createdAt: new Date(data.createdAt.toDate()),
        //             imageUrl: data.imageUrl,
        //             tag: data.tag,
        //         })
        //     } else {
        //         console.log('aucun post trouvé avec cet id');
        //     }
        // } catch (error) {
        //     console.error('erreur :', error);
        const q = query(collection(db, "blogPosts"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setPost({
            slug: data.slug,
            title: data.title,
            content: data.content,
            createdAt: new Date(data.createdAt.toDate()),
            imageUrl: data.imageUrl,
            tag: data.tag,
          });
        } else {
          console.log("Aucun article trouvé pour ce slug");
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  return (
    <section className="first-section section-blog-detail">
      {!post ? (
        <p>Erreur, post inconnu</p>
      ) : (
        <>
          <h1 className="title-blog">{post.title}</h1>
          <div className="contain-img-blog">
            <img src={post.imageUrl} className="img-blog" />
          </div>
          <p>Tag : {post.tag}</p>
          <p className="p-blog">{post.content}</p>
          <span className="published-date">
            Publié le : {post.createdAt.toLocaleDateString()}
          </span>
        </>
      )}
    </section>
  );
};

export default BlogDetail;
