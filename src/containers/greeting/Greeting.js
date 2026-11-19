
import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, resumeSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";

import myCV from "../../assets/images/Yasmine_Laanaya.pdf";
import myPhoto from "../../assets/images/moi.jpeg";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const { language } = useLanguage();

  const isFrench = language === "fr";

  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={900} distance="25px">
      <section
        className={isDark ? "hero-section dark-mode" : "hero-section"}
        id="greeting"
      >
        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="hero-dot"></span>
              SOFTWARE ENGINEER · MIAGE
            </div>

            <h1 className="hero-title">
              {isFrench ? "Bonjour, je suis" : "Hello, I'm"} <br />
              <span>Yasmine Laanaya.</span>
            </h1>

            <p className="hero-description">
              {isFrench
                ? "Jeune diplômée en ingénierie informatique (MIAGE), j’ai acquis une expérience diversifiée chez Inetum, JESA et Orange Maroc, autour du développement et de l’intégration de solutions logicielles, de l’intelligence artificielle et de la Business Intelligence. J’allie compétences techniques et compréhension des besoins métier pour concevoir des solutions adaptées."
                : "A recent Computer Engineering graduate in MIAGE, I have gained diverse experience at Inetum, JESA and Orange Maroc, working on software development and integration, artificial intelligence and Business Intelligence. I combine technical skills with an understanding of business needs to design practical solutions."}
            </p>

            <p className="hero-description hero-description-secondary">
              {isFrench
                ? "J'aime concevoir des solutions utiles en combinant technologies, intégration et compréhension des besoins métier."
                : "I enjoy building useful solutions by combining technology, integration and an understanding of business needs."}
            </p>

            <div className="hero-tags">
              <span>{isFrench ? "Développement" : "Development"}</span>
              <span>ERP / CRM</span>
              <span>Data & IA</span>
              <span>DevOps</span>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="hero-button-primary">
                {isFrench ? "Me contacter" : "Contact me"} <span>↗</span>
              </a>

              {resumeSection.display && (
                <a
                  href={myCV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button-secondary"
                >
                  {isFrench ? "Consulter mon CV" : "View my CV"}
                </a>
              )}
            </div>

            <div className="hero-socials">
              <SocialMedia />
            </div>

          </div>

          {/* RIGHT PHOTO */}
          <div className="hero-visual">

            <div className="hero-image-wrapper">

              <div className="hero-image-background"></div>

              <img
                src={myPhoto}
                alt="Yasmine Laanaya"
                className="hero-image"
                loading="eager"
              />

              <div className="hero-image-caption">
                <span>Yasmine Laanaya</span>
                <span>Casablanca, Morocco</span>
              </div>

            </div>

            <div className="hero-floating-note">
              <span className="note-star">✳</span>
              <span>
                {isFrench ? (
                  <>La curiosité nourrit<br />l'innovation.</>
                ) : (
                  <>Curiosity drives<br />innovation.</>
                )}
              </span>
            </div>

          </div>

        </div>

        <div className="hero-bottom-label">
          <span>
            {isFrench ? "DÉFILER POUR EXPLORER" : "SCROLL TO EXPLORE"}
          </span>
          <span className="hero-line"></span>
        </div>

      </section>
    </Fade>
  );
}
