import React from "react";
import '../styles/thirdparthome.css';
import about1 from '../images/about1.jpg';

const ThirdPartHome: React.FC = () => {

    return (
        <section className="third-section">
            <div className="contain-third-section">
                <h1>parcours utilisateur</h1>
                <div className="test">
                    <span>bonjour</span>
                    <div className="try">
                        <img src={about1} alt="" className="img-test" />
                    </div>
                </div>
                <div className="test">
                    <div className="try2">
                        <img src={about1} alt="" className="img-test" />
                    </div>
                </div>
                <div className="test">
                    <div className="try">
                        <img src={about1} alt="" className="img-test" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThirdPartHome;