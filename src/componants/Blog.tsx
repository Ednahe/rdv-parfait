import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/dbConfig";

// typage attendu des données du blog
interface BlogPost {
  id: string,
  slug: string;
  title: string;
  content: string;
  categories: string[];
  createdAt: Date;
  imageUrl: string;
  tag: string;
}

const Blog: React.FC = () => {
  // Définir l'état pour stocker les posts de blog
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // charger les données du blog
  const fetchBlog = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogPosts"));
      const postsData: BlogPost[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        slug: doc.data().slug,
        title: doc.data().title,
        content: doc.data().content,
        categories: doc.data().categories,
        createdAt: new Date(doc.data().createdAt.toDate()),
        imageUrl: doc.data().imageUrl,
        tag: doc.data().tag,
      }));
      setBlogPosts(postsData);
    } catch (error) {
      console.error("Erreur lors de la récupération des posts :", error);
    }
  };

  // Charger les posts de blog lors de l'initialisation du composant
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <section className="first-section">
      <h1 className="center">Découvrez nos articles</h1>
      <div className="contain-blog">
        {blogPosts.map((post) => (
          <article className="article-blog" key={post.slug || post.id}>
            <Link to={`/blog/${post.slug}`}>
              <h2 className="title-blog">{post.title}</h2>
              <img src={post.imageUrl} />
              <p className="blog-content">{post.content}</p>
              <p>{post.createdAt.toLocaleDateString()}</p>
              <p>Tag: {post.tag}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
