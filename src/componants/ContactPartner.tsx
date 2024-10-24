import React from "react";

const ContactPartner: React.FC = () => {
  return (
    <form className="contact-form">
      <h2 className="contact-title">Contact entreprise</h2>
      <div className="contain-input">
      <input type="text" name="nom" placeholder="Nom" />
        <input type="text" name="prenom" placeholder="Prénom" />
      </div>
      <div className="contain-input">
        <input type="email" name="email" placeholder="Email" />
        <input type="tel" name="telephone" placeholder="Téléphone" />
      </div>
      <input type="text" name="societe" placeholder="Société" />
      <textarea name="message" maxLength={2000} placeholder="Entrez votre message ici..."></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactPartner;
