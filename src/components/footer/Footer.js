
import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import { socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Footer() {
  const styleContext = useContext(StyleContext) || {};
  const isDark = styleContext.isDark || false;
  const { language } = useLanguage();

  const content = {
    fr: {
      tagline: "Développement · Data & IA · ERP / CRM",
      skills: "Compétences",
      education: "Formation",
      experience: "Expériences",
      projects: "Projets",
      certifications: "Certifications",
      languages: "Langues",
      contact: "Contact",
      navigation: "Navigation du pied de page",
      rights: "Tous droits réservés.",
      backToTop: "Retour en haut",
    },
    en: {
      tagline: "Software Development · Data & AI · ERP / CRM",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      languages: "Languages",
      contact: "Contact",
      navigation: "Footer navigation",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  };

  const text = content[language] || content.fr;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={700} distance="15px">
      <footer className={`footer-div ${isDark ? "dark-mode" : ""}`}>
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#greeting" className="footer-name">
                Yasmine Laanaya<span>.</span>
              </a>

              <p className="footer-tagline">{text.tagline}</p>
            </div>

            <nav className="footer-nav" aria-label={text.navigation}>
  <a href="#greeting">{language === "fr" ? "À propos" : "About"}</a>
  <a href="#skills">{text.skills}</a>
  <a href="#education">{text.education}</a>
  <a href="#experience">{text.experience}</a>
  <a href="#projects">{text.projects}</a>
  <a href="#achievements">{text.certifications}</a>
  <a href="#languages">{text.languages}</a>
  <a href="#contact">{text.contact}</a>
</nav>

            <div className="footer-social">
              {socialMediaLinks.github && (
                <a
                  href={socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              )}

              {socialMediaLinks.linkedin && (
                <a
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
              )}

              {socialMediaLinks.gmail && (
                <a
                  href={`mailto:${socialMediaLinks.gmail}`}
                  aria-label="E-mail"
                >
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </a>
              )}
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {currentYear} Yasmine Laanaya. {text.rights}
            </p>

            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label={text.backToTop}
              title={text.backToTop}
            >
              <i className="fas fa-arrow-up" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
