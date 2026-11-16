
import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  if (!contactInfo.display) return null;

  return (
    <Fade bottom duration={800} distance="20px">
      <section
        className={`contact-section ${isDark ? "dark-mode" : ""}`}
        id="contact"
      >
        <div className="contact-container">
          <div className="contact-header">
            <span className="contact-eyebrow">CONTACT</span>
            <h1 className="contact-title">{contactInfo.title}</h1>
            <p className="contact-subtitle">{contactInfo.subtitle}</p>
          </div>

          <div className="contact-info-list">
            {contactInfo.email_address && (
              <a
                className="contact-item"
                href={`mailto:${contactInfo.email_address}`}
              >
                <i className="fas fa-envelope"></i>
                <span>{contactInfo.email_address}</span>
              </a>
            )}

            {(contactInfo.phone_number || contactInfo.number) && (
              <a
                className="contact-item"
                href={`tel:${contactInfo.phone_number || contactInfo.number}`}
              >
                <i className="fas fa-phone-alt"></i>
                <span>
                  {contactInfo.phone_number || contactInfo.number}
                </span>
              </a>
            )}

            {contactInfo.location && (
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{contactInfo.location}</span>
              </div>
            )}
          </div>

          <div className="contact-social">
            <p>Retrouvez-moi également sur</p>
            <SocialMedia />
          </div>

          <div className="contact-footer">
            © {new Date().getFullYear()} — Tous droits réservés.
          </div>
        </div>
      </section>
    </Fade>
  );
}
