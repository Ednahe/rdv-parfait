import React from "react";
import { Link } from "react-router-dom";

const Error404: React.FC = () => {
  return (
    <section className="first-section error-section">
      <h1>erreur 404</h1>
      <div>
        <Link to='/'>Retourner sur la page d'accueil</Link>
      </div>
    </section>
  );
};


export default Error404;