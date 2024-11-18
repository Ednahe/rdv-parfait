import React, { useState } from "react";
import { db } from "../config/dbConfig";
import sendEmail from "../config/emailConfig";
import { collection, addDoc } from "firebase/firestore";
import key from "../config/recaptcha";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [sendSucces, setSendSucces] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [capVal, setCapVal] = useState<string | null>(null);
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

    // expression régulière pour s'assurer que l'utilisateur rentre les bons caractères dans les bons champs
    if (name === "nom" || name === "prenom") {
      if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(value)) return; // N'accepte que les lettres et certains caractères
    } else if (name === "telephone") {
      if (!/^\d{0,16}$/.test(value)) return; // N'accepte que des chiffres, jusqu'à 16 caractères
    }
    // mise à jour de l'état local du formulaire
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Envoi du formulaire avec validation
  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérification de l'email avec une expression régulière plus stricte
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // si email non valide on envoi un message d'erreur
    if (!emailRegex.test(userData.email)) {
      setError(true);
      // on masque le message d'erreur après 4 sec
      setTimeout(() => setError(false), 4000);
      return;
    }
    try {
      // envoi les données saisie par l'utilisateur à la base de donnée
      await addDoc(collection(db, "contacts-partenaire"), userData);
      // envoi les données saisie par l'utilisateur par mail
      await sendEmail(userData);
      setSendSucces(true);

      // réinitialiser le formulaire après un envoi réussi
      setUserData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        societe: "",
        message: "",
      });

      // masquer le message de succès après 4 secondes
      setTimeout(() => setSendSucces(false), 4000);
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
      <ReCAPTCHA
        sitekey={key}
        onChange={(val: string | null) => setCapVal(val)}
      />
      <button type="submit" className="btn-form" disabled={!capVal}>
        Envoyer
      </button>
      {sendSucces && <p className="center">Message envoyé avec succès.</p>}
      {error && (
        <p className="center">Veuillez entrer une adresse email valide.</p>
      )}
    </form>
  );
};

export default ContactPartner;
