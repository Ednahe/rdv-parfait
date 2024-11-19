import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../images/arrow-left.svg";
import "../styles/error404.css";

const Error404: React.FC = () => {
  return (
    <section className="error-section">
      <h1 className="title-error">erreur 404</h1>
      <p>page non trouvée</p>
      <div className="container-link-error">
        <Link to="/">
          <img src={arrowLeft} alt="flèche pointant vers la gauche" className="arrow-left"/>
          <p>Retourner sur la page d'accueil</p>
        </Link>
      </div>
    </section>
  );
};

export default Error404;
