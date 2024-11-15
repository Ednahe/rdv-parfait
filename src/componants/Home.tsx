import React from "react";
import SwiperHome from "./SwiperHome";
import ThirdPartHome from "./ThirdPartHome";
import BtnApp from "./BtnApp";
import FirstSectionHome from "./FirstSectionHome";

const Home: React.FC = () => {
  return (
    <>
      <FirstSectionHome />
      <section className="section-home">
        <div className="contain-swiper">
          <span className="span-text">Venez découvrir :</span>
          <SwiperHome />
        </div>
        <BtnApp />
      </section>
      <ThirdPartHome />
    </>
  );
};

export default Home;