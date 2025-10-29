import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  // Classes dynamiques selon le mode
  const subtitleClass = isDark ? "contact-subtitle dark-mode-text" : "contact-subtitle subTitle";
  const textDivClass = isDark ? "contact-text-div dark-mode-text" : "contact-text-div";

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          
          {/* ===== SECTION TEXTE ===== */}
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            
            <p className={subtitleClass}>{contactInfo.subtitle}</p>

            <div className={textDivClass}>
              
              {/* 📍 Localisation */}
              {contactInfo.location && (
                <>
                  <p className="contact-detail">
                    <i className="fas fa-map-marker-alt"></i> {contactInfo.location}
                  </p>
                  <div className="spacer"></div>
                </>
              )}

              {/* 🕐 Disponibilité */}
              {contactInfo.availability && (
                <>
                  <p className="contact-detail">
                    <i className="fas fa-calendar-check"></i> {contactInfo.availability}
                  </p>
                  <div className="spacer"></div>
                </>
              )}

              {/* 📧 Adresse e-mail */}
              {contactInfo.email_address && (
                <>
                  <a
                    className="contact-detail contact-detail-email"
                    href={`mailto:${contactInfo.email_address}`}
                  >
                    <i className="fas fa-envelope"></i> {contactInfo.email_address}
                  </a>
                  <div className="spacer"></div>
                </>
              )}

              {/* 🔗 Réseaux sociaux */}
              <SocialMedia />
            </div>
          </div>

          {/* ===== SECTION ILLUSTRATION ===== */}
         
        </div>
      </div>
    </Fade>
  );
}
