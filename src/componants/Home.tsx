import React from "react";
import SwiperHome from "./SwiperHome";

const Home: React.FC = () => {

  return <>
  <section className="main first-section">
    <div className="card-home">
      <div className="content-card-home">
        <h1>RENDEZ-VOUS PARFAIT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rem voluptatem nisi possimus, fugiat sequi quis et nostrum est eaque inventore ad? Molestiae quos voluptatibus accusamus fuga sunt rerum minima!</p>
        <span className="span-home">
          <span className="span-text">Venez découvrir :</span>
          <SwiperHome />
        </span>
      </div>
    </div>
  </section>
  </>
};

export default Home;