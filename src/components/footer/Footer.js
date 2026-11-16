
import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import { socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

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
              <a href="#top" className="footer-name">
                Yasmine Laanaya<span>.</span>
              </a>
              <p className="footer-tagline">
                Développement · Data & IA · ERP / CRM
              </p>
            </div>

            <nav className="footer-nav" aria-label="Navigation du pied de page">
              <a href="#greeting">À propos</a>
              <a href="#skills">Compétences</a>
              <a href="#education">Formation</a>
              <a href="#experience">Expériences</a>
              <a href="#projects">Projets</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="footer-social">
              {socialMediaLinks.github && (
                <a
                  href={socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}

              {socialMediaLinks.linkedin && (
                <a
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}

              {socialMediaLinks.gmail && (
                <a
                  href={`mailto:${socialMediaLinks.gmail}`}
                  aria-label="E-mail"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              )}
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {currentYear} Yasmine Laanaya. Tous droits réservés.
            </p>

            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Retour en haut"
              title="Retour en haut"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
