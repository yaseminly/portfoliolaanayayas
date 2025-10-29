import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={`footer-div ${isDark ? "dark-mode" : ""}`}>
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
                {emoji("Yasmine Laanaya ✨")}
              </p>
              <p className="footer-tagline">
                Full Stack Developer & Creative Problem Solver
              </p>
            </div>
            
            <div className="footer-links">
              <nav className="footer-nav">
                <a href="#about" className="footer-nav-link">
                  About
                </a>
                <a href="#skills" className="footer-nav-link">
                  Skills
                </a>
                <a href="#projects" className="footer-nav-link">
                  Projects
                </a>
                <a href="#contact" className="footer-nav-link">
                  Contact
                </a>
              </nav>
              
              <div className="footer-social">
                <a href="https://github.com" className="social-link" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:hello@example.com" className="social-link" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Yasmine Laanaya. All rights reserved.
            </p>
            
            
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
}