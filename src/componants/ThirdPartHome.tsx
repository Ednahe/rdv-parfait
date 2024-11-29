import React from "react";
import "../styles/thirdparthome.css";
import about1 from "../images/about1.jpg";

const ThirdPartHome: React.FC = () => {
    
  return (
    <section className="third-section">
      <div className="contain-third-section">
        <h1 className="center">parcours utilisateur</h1>
        <div className="test">
          <div className="try">
            <article className="article-home">
              <div className="contain-article-home anim1">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere, quis, asperiores expedita nobis earum, repellat culpa
                  temporibus voluptates labore explicabo fuga beatae magnam
                  nemo! Ratione quidem praesentium consequuntur cupiditate
                  repudiandae? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laborum dolorem veniam fugiat. Vitae vel
                  ipsam itaque labore earum voluptates possimus debitis quos
                  sapiente corporis, sunt veritatis id consectetur! Quidem,
                  recusandae!
                </p>
                <img src={about1} alt="" className="img-test" />
              </div>
            </article>
          </div>
        </div>
        <div className="test">
          <div className="try2">
            <article className="article-home">
              <div className="contain-article-home anim2">
                <img src={about1} alt="" className="img-test" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere, quis, asperiores expedita nobis earum, repellat culpa
                  temporibus voluptates labore explicabo fuga beatae magnam
                  nemo! Ratione quidem praesentium consequuntur cupiditate
                  repudiandae? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laborum dolorem veniam fugiat. Vitae vel
                  ipsam itaque labore earum voluptates possimus debitis quos
                  sapiente corporis, sunt veritatis id consectetur! Quidem,
                  recusandae!
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="test">
          <div className="try">
            <article className="article-home">
              <div className="contain-article-home anim1">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere, quis, asperiores expedita nobis earum, repellat culpa
                  temporibus voluptates labore explicabo fuga beatae magnam
                  nemo! Ratione quidem praesentium consequuntur cupiditate
                  repudiandae? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laborum dolorem veniam fugiat. Vitae vel
                  ipsam itaque labore earum voluptates possimus debitis quos
                  sapiente corporis, sunt veritatis id consectetur! Quidem,
                  recusandae!
                </p>
                <img src={about1} alt="" className="img-test" />
              </div>
            </article>
          </div>
        </div>
        <div className="test">
          <div className="try2">
            <article className="article-home">
              <div className="contain-article-home anim2">
                <img src={about1} alt="" className="img-test" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere, quis, asperiores expedita nobis earum, repellat culpa
                  temporibus voluptates labore explicabo fuga beatae magnam
                  nemo! Ratione quidem praesentium consequuntur cupiditate
                  repudiandae? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laborum dolorem veniam fugiat. Vitae vel
                  ipsam itaque labore earum voluptates possimus debitis quos
                  sapiente corporis, sunt veritatis id consectetur! Quidem,
                  recusandae!
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPartHome;
