import React from "react";
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.jpg';

const About: React.FC = () => {
  return (
    <section className="first-section">
      <div className="contain-about">
        <h1>A propos</h1>
        <article className="contain-content-about">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus molestias natus deleniti consectetur saepe nihil quam
            excepturi odit magni provident! Dolorum, tempore sequi officia
            quisquam illum nisi voluptatem cum nam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus explicabo sunt cum deserunt
            neque error est nihil nisi unde nemo obcaecati sequi vitae tempore
            temporibus veniam ab, totam saepe. Adipisci? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ipsa praesentium eligendi beatae
            repellendus corrupti assumenda nostrum? Porro, voluptatum aut quos
            soluta delectus, quis adipisci iusto magni dolores at,
            necessitatibus vel?
          </p>
          <span>
            <img src={about1} />
          </span>
        </article>
        <article className="contain-content-about">
          <span>
            <img src={about2} />
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            tempora, dignissimos perspiciatis eos alias officia. Repellendus,
            beatae quasi reiciendis molestias numquam placeat tenetur magni
            libero, magnam odit quod distinctio dolores. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Quis incidunt nisi quaerat
            numquam, molestiae eum commodi, ad consequuntur cum provident
            voluptatem veritatis ab! A, repellendus. Ab architecto numquam quis
            voluptatem? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dicta nulla reiciendis maiores molestias corporis repellendus
            quibusdam voluptatibus ipsa consectetur dolorem, doloremque unde
            quod adipisci, expedita sit aperiam explicabo laudantium eius.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
