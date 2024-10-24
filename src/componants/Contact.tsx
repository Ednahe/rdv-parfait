import React, { useState } from "react";
import ContactPartner from "./ContactPartner";
import ContactUser from "./ContactUser";
import serveur from '../images/serveur.png';

const Contact: React.FC = () => {
  const [form, setForm] = useState<boolean>(true);

  // fait apparaitre le composant contactuser ou contactpartner et fait disparaitre l'autre
  const switchFormContact = ():void => {
    setForm(!form);
  }

  return <section className="first-section contact-container">
    <button className="outline contrast" onClick={switchFormContact}>
      {form ? "Vous êtes utilisateur ?" : "Vous êtes partenaire ?"}
    </button>
    <div className="contain-contact-componant">
      <div className="contain-adaptiv-img">
        <img src={serveur} alt="un serveur" className="serveur"/>
      </div>
      <div className="form-container">
        {form ? <ContactPartner /> : <ContactUser />}
      </div>
    </div>
  </section>
};

export default Contact;