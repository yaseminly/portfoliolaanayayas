import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className={isDark ? "dark-mode contact-section" : "contact-section"} id="contact">
        <div className="contact-container">
          
          <div className="contact-card">
            {/* EN-TÊTE */}
            <div className="contact-header">
              <h1 className="contact-title">{contactInfo.title}</h1>
              <div className="title-underline"></div>
              <p className="contact-subtitle">{contactInfo.subtitle}</p>
            </div>

            {/* DÉTAILS DE CONTACT */}
            <div className="contact-content">
              
              <div className="contact-info-list">
                {/* 📍 Localisation */}
                {contactInfo.location && (
                  <div className="contact-item">
                    <div className="icon-box">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p>{contactInfo.location}</p>
                  </div>
                )}

                {/* 📧 Email avec effet Glass */}
                {contactInfo.email_address && (
                  <a
                    className="contact-item email-link"
                    href={`mailto:${contactInfo.email_address}`}
                  >
                    <div className="icon-box">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <span>{contactInfo.email_address}</span>
                  </a>
                )}
              </div>

              {/* RÉSEAUX SOCIAUX */}
              <div className="contact-social">
                <p className="social-text">Retrouvez-moi sur les réseaux</p>
                <SocialMedia />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fade>
  );
}