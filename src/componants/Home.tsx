import React from "react";
import SwiperHome from "./SwiperHome";
import ThirdPartHome from "./ThirdPartHome";
import BtnApp from "./BtnApp";
import FirstSectionHome from "./FirstSectionHome";
import serveur from "../images/serveur.png";
import '../styles/home.css';

const Home: React.FC = () => {
  return (
    <>
      <FirstSectionHome />
      <section className="section-home">
        <div className="container-second-home">
          <div className="contain-swiper">
            <span className="span-text">Venez découvrir :</span>
            <SwiperHome />
          </div>
          <BtnApp />
        </div>
        <div className="contain-adaptiv-img">
          <img src={serveur} alt="un serveur" className="serveur" />
        </div>
      </section>
      <ThirdPartHome />
    </>
  );
};

export default Home;
