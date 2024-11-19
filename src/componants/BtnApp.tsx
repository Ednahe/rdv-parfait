import React from "react";
import appstore from '../images/appstore.png';
import playstore from '../images/playstore.png';
import '../styles/btnapp.css';

const BtnApp: React.FC = () => {
  return (
    <div className="container-btn-app">
        <a href="#" target="_blank" className="contain-btn-app">
            <img src={appstore} alt="disponible sur l'app store" />
        </a>
        <a href="#" target="_blank" className="contain-btn-app">
            <img src={playstore} alt="disponible sur le play store" />
        </a>
    </div>
  );
};

export default BtnApp;