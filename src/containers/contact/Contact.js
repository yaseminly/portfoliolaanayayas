
import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Contact() {
  const styleContext = useContext(StyleContext) || {};
  const isDark = styleContext.isDark || false;
  const { language } = useLanguage();

  if (!contactInfo.display) return null;

  const content = {
    fr: {
      eyebrow: "CONTACT",
      title: contactInfo.title || "Contactez-moi",
      subtitle:
        contactInfo.subtitle ||
        "À l'écoute d'opportunités en développement logiciel, IA et systèmes d'information.",
      social: "Retrouvez-moi également sur",
      rights: "Tous droits réservés.",
    },
    en: {
      eyebrow: "GET IN TOUCH",
      title: "Let's connect",
      subtitle:
        "Open to opportunities in software development, AI and information systems.",
      social: "You can also find me on",
      rights: "All rights reserved.",
    },
  };

  const text = content[language] || content.fr;
  const phone = contactInfo.phone_number || contactInfo.number;

  return (
    <Fade bottom duration={800} distance="20px">
      <section
        className={`contact-section ${isDark ? "dark-mode" : ""}`}
        id="contact"
      >
        <div className="contact-container">
          <div className="contact-header">
            <span className="contact-eyebrow">{text.eyebrow}</span>
            <h1 className="contact-title">{text.title}</h1>
            <p className="contact-subtitle">{text.subtitle}</p>
          </div>

          <div className="contact-info-list">
            {contactInfo.email_address && (
              <a
                className="contact-item"
                href={`mailto:${contactInfo.email_address}`}
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>{contactInfo.email_address}</span>
              </a>
            )}

            {phone && (
              <a className="contact-item" href={`tel:${phone}`}>
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
                <span>{phone}</span>
              </a>
            )}

            {contactInfo.location && (
              <div className="contact-item">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>{contactInfo.location}</span>
              </div>
            )}
          </div>

          <div className="contact-social">
            <p>{text.social}</p>
            <SocialMedia />
          </div>

          <div className="contact-footer">
            © {new Date().getFullYear()} — {text.rights}
          </div>
        </div>
      </section>
    </Fade>
  );
}
