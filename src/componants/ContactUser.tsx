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

const ContactUser: React.FC = () => {
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
    // changement de l'etat local avec les nouvelles données
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // envoi du formulaire à la base de donnée
  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // envoi les données saisie par l'utilisateur à la base de donnée
      await addDoc(collection(db, "contacts-utilisateur"), userData);
      // envoi du mail
      await sendEmail(userData);
    } catch (error) {
      console.error("erreur :", error);
    }
  };

  return (
    <form className="contact-form" onSubmit={send}>
      <h2 className="contact-title">Contact utilisateur</h2>
      <div className="contain-input">
        <input type="text" name="nom" onChange={data} placeholder="Nom" />
        <input type="text" name="prenom" onChange={data} placeholder="Prénom" />
      </div>
      <div className="contain-input">
        <input type="email" name="email" onChange={data} placeholder="Email" />
        <input
          type="tel"
          name="telephone"
          onChange={data}
          pattern="\d{8,16}"
          placeholder="Téléphone"
        />
      </div>
      <textarea
        name="message"
        onChange={data}
        maxLength={2000}
        placeholder="Entrez votre message ici..."
      ></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactUser;
