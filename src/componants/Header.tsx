import React, { useState } from "react";
import logo from "../images/logo.png";
import burgerMenu from "../images/burger.svg";

const Header: React.FC = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);

  // Fonction pour afficher le menu false = fermer true = ouvrir
  const seeMenu = (): void => {
    setOpenBurgerMenu(!openBurgerMenu);
  };

  return (
    <header>
      <nav className="nav">
        <div className="contain-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="container-nav">
          <div className="contain-button-nav">
            <button className="button-nav outline contrast">Run App</button>
            <button className="button-nav outline contrast">Inscription</button>
            <button className="button-nav outline contrast">
              <a href="/devenir-partenaire">Devenir partenaire</a>
            </button>
          </div>
          <div className="contain-burger-menu" onClick={seeMenu}>
            <img src={burgerMenu} alt="burger-menu" className="burger-menu" />
          </div>
          <div className={`contain-menu ${openBurgerMenu ? "active" : ""}`}>
            <ul className="ul-menu">
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/a-propos">A propos</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
