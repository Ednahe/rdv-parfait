import React, { useState } from "react";
import { db } from "../config/dbConfig";
import sendEmail from "../config/emailConfig";
import { collection, addDoc } from "firebase/firestore";

// typage du retour attendu du formulaire
interface UserData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  societe: string;
  message: string;
}

const ContactPartner: React.FC = () => {
  // etat local du formulaire
  const [userData, setUserData] = useState<UserData>({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    societe: "",
    message: "",
  });

  // récupération des données saisies par l'utilisateur
  const data = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // mise à jour de l'état local du formulaire
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // envoi du formulaire à la base de donnée
  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // envoi les données saisie par l'utilisateur à la base de donnée
      await addDoc(collection(db, "contacts-partenaire"), userData); 
      // envoi les données saisie par l'utilisateur par mail
      await sendEmail(userData);
    } catch (error) {
      console.error("erreur :", error);
    }
  };

  return (
    <form className="contact-form" onSubmit={send}>
      <h2 className="contact-title">Contact entreprise</h2>
      <div className="contain-input">
        <input
          type="text"
          name="nom"
          value={userData.nom}
          onChange={data}
          placeholder="Nom"
        />
        <input
          type="text"
          name="prenom"
          value={userData.prenom}
          onChange={data}
          placeholder="Prénom"
        />
      </div>
      <div className="contain-input">
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={data}
          placeholder="Email"
        />
        <input
          type="tel"
          name="telephone"
          value={userData.telephone}
          onChange={data}
          pattern="\d{8,16}"
          placeholder="Téléphone"
        />
      </div>
      <input
        type="text"
        name="societe"
        value={userData.societe}
        onChange={data}
        placeholder="Société"
      />
      <textarea
        name="message"
        value={userData.message}
        onChange={data}
        maxLength={2000}
        placeholder="Entrez votre message ici..."
      ></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactPartner;
