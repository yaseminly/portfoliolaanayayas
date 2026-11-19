
import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./About.scss";

import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";

export default function About() {
  // Évite l'erreur si le contexte du thème est momentanément undefined
  const styleContext = useContext(StyleContext) || {};
  const isDark = styleContext.isDark || false;

  const { language } = useLanguage();
  const isFrench = language === "fr";

  return (
    <section
      className={`about-section ${isDark ? "dark-mode" : ""}`}
      id="about"
    >
      <div className="about-container">
        <Fade bottom duration={800}>
          <p className="about-eyebrow">
            {isFrench ? "À PROPOS" : "ABOUT ME"}
          </p>

          <h2 className="about-title">
            {isFrench
              ? "Un profil à la croisée du développement et des systèmes d'entreprise."
              : "A profile at the intersection of development and enterprise systems."}
          </h2>

          <div className="about-content">
            <p>
              {isFrench
                ? "Jeune diplômée en ingénierie informatique, spécialité MIAGE, de l'EMSI Casablanca, je m'intéresse à la conception et à l'intégration de solutions informatiques répondant à des besoins concrets."
                : "I am a Computer Engineering graduate in MIAGE from EMSI Casablanca, interested in designing and integrating IT solutions that address real-world needs."}
            </p>

            <p>
              {isFrench
                ? "Mon parcours m'a permis de travailler sur des projets de développement logiciel, d'intégration CRM/BSS, de Business Intelligence et d'intelligence artificielle. J'ai notamment participé à des travaux autour des applications web, des systèmes d'information et des assistants intelligents."
                : "My experience includes software development, CRM/BSS integration, Business Intelligence and artificial intelligence projects. I have contributed to work involving web applications, information systems and intelligent assistants."}
            </p>

            <p>
              {isFrench
                ? "Je souhaite aujourd'hui continuer à développer mes compétences et contribuer à des projets combinant technologie, compréhension des processus métier et amélioration continue."
                : "I am now looking to further develop my skills and contribute to projects that combine technology, business process understanding and continuous improvement."}
            </p>
          </div>

          <div className="about-focus">
            <span>{isFrench ? "Mes domaines d'intérêt" : "Areas of interest"}</span>

            <div className="about-tags">
              <span>Développement logiciel</span>
              <span>ERP & CRM</span>
              <span>Data & IA</span>
              <span>Automatisation</span>
              <span>Systèmes d'information</span>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
