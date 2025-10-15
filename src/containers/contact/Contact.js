import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  
  // Utilisation de classes de base plus claires pour le dark mode
  const subtitleClass = isDark ? "contact-subtitle dark-mode-text" : "contact-subtitle subTitle";
  const textDivClass = isDark ? "contact-text-div dark-mode-text" : "contact-text-div";
  
  return (
    <Fade bottom duration={1000} distance="40px"> {/* Augmentation de la distance pour une meilleure animation */}
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          
          {/* Section d'information de contact */}
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            
            <p className={subtitleClass}>
              {contactInfo.subtitle}
            </p>
            
            <div className={textDivClass}>
              
              {/* Numéro de téléphone (conditionnel) */}
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={`tel:${contactInfo.number}`}
                  >
                    {contactInfo.number}
                  </a>
                  <div className="spacer"></div> {/* Remplacement des <br> par un div pour un espacement CSS contrôlé */}
                </>
              )}
              
              {/* Adresse e-mail */}
              <a
                className="contact-detail contact-detail-email" // Simplification: contact-detail est suffisant
                href={`mailto:${contactInfo.email_address}`}
              >
                {contactInfo.email_address}
              </a>
              <div className="spacer"></div> {/* Remplacement des <br> par un div pour un espacement CSS contrôlé */}
              
              {/* Liens de réseaux sociaux */}
              <SocialMedia />
            </div>
          </div>
          
          {/* Section Illustration */}
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}