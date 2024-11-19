import React from "react";
import logo from "../images/logo.png";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="contain-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="div-footer">
          <ul>
            <li>
              <a href="#">lien</a>
            </li>
            <li>
              <a href="#">lien</a>
            </li>
            <li>
              <a href="#">lien</a>
            </li>
          </ul>
          <div>
            <div>mention légale</div>
          </div>
        </div>
        <div className="div-footer">
          <h3>notre newsletters</h3>
          <div>
            <form action="POST">
              <input type="text" />
            </form>
          </div>
          <div className="div-footer contain-logo-footer">
            <a href="#">
              <img src={linkedin} alt="logo linkedin" className="logo-footer" />
            </a>
            <a href="#">
              <img
                src={instagram}
                alt="logo instagram"
                className="logo-footer"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
