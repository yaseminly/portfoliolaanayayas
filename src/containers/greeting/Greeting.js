
import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting, resumeSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import myCV from "../../assets/images/Yasmine_Laanaya.pdf";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={900} distance="25px">
      <section
        className={isDark ? "hero-section dark-mode" : "hero-section"}
        id="greeting"
      >
        <div className="hero-container">

          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-dot"></span>
              SOFTWARE ENGINEER · MIAGE
            </div>

            <h1 className="hero-title">
              Bonjour, je suis <br />
              <span>Yasmine Laanaya.</span>
            </h1>

            
<p className="hero-description">
  Jeune diplômée en ingénierie informatique (MIAGE), j’ai acquis
  une expérience diversifiée chez Inetum, JESA et Orange Maroc,
  autour du développement et de l’intégration de solutions
  logicielles, de l’intelligence artificielle et de la Business
  Intelligence. J’allie compétences techniques et compréhension
  des besoins métier pour concevoir des solutions adaptées.
</p>

            <p className="hero-description hero-description-secondary">
              J'aime concevoir des solutions utiles en combinant
              technologies, intégration et compréhension des besoins métier.
            </p>

            <div className="hero-tags">
              <span>Développement</span>
              <span>ERP / CRM</span>
              <span>Data & IA</span>
              <span>DevOps</span>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="hero-button-primary">
                Me contacter <span>↗</span>
              </a>

              {resumeSection.display && (
                <a
                  href={myCV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button-secondary"
                >
                  Consulter mon CV
                </a>
              )}
            </div>

            <div className="hero-socials">
              <SocialMedia />
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image-background"></div>
              <img
                src={require("../../assets/images/moi.jpeg")}
                alt="Portrait de Yasmine Laanaya"
                className="hero-image"
              />
              <div className="hero-image-caption">
                <span>Yasmine Laanaya</span>
                <span>Casablanca, Morocco</span>
              </div>
            </div>

            <div className="hero-floating-note">
              <span className="note-star">✳</span>
              <span>Curiosity drives<br />innovation.</span>
            </div>
          </div>

        </div>

        <div className="hero-bottom-label">
          <span>SCROLL TO EXPLORE</span>
          <span className="hero-line"></span>
        </div>
      </section>
    </Fade>
  );
}
