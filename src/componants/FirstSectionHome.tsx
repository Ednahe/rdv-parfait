import React from "react";
import '../styles/firstsectionhome.css';

const FirstSectionHome: React.FC = () => {

    return (
        <section className="main first-section">
        <div className="card-home">
          <div className="content-card-home">
            <h1>RENDEZ-VOUS PARFAIT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rem
              voluptatem nisi possimus, fugiat sequi quis et nostrum est eaque
              inventore ad? Molestiae quos voluptatibus accusamus fuga sunt
              rerum minima! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quasi inventore provident impedit maiores harum illum
              aliquam! Eum repellendus voluptas quaerat? Possimus facilis
              cupiditate doloremque provident quod perspiciatis commodi
              explicabo sapiente.
            </p>
            <div className="contain-btn-home">
              <button className="secondary">voyager</button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default FirstSectionHome;