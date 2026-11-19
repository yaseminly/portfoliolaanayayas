
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Header.scss";
import { useLanguage } from "../../contexts/LanguageContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const { language, toggleLanguage } = useLanguage();
  const isFrench = language === "fr";

  const navItems = [
    { label: isFrench ? "À propos" : "About", href: "#greeting" },
    { label: isFrench ? "Expertise" : "Expertise", href: "#skills" },
    { label: isFrench ? "Formation" : "Education", href: "#education" },
    { label: isFrench ? "Expérience" : "Experience", href: "#experience" },
    { label: isFrench ? "Projets" : "Projects", href: "#projects" },
    { label: "Certifications", href: "#achievements" },
    { label: isFrench ? "Contact" : "Contact", href: "#contact" },
  ];

  const openContact = () => {
    setMenuOpen(false);
    setStatus("");
    setContactOpen(true);
  };

  const closeContact = () => {
    if (sending) return;
    setContactOpen(false);
    setStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current) return;

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_jjn2e9c",
        "template_8z8iqnr",
        formRef.current,
        {
          publicKey: "UmATMCbgItO78-laT",
        }
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <header className="editorial-header">
        <div className="editorial-nav">
          <a
            href="#greeting"
            className="editorial-logo"
            onClick={() => setMenuOpen(false)}
          >
            YL<span>.</span>
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={isFrench ? "Ouvrir le menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
          >
            <span></span>
            <span></span>
          </button>

          <nav
            className={menuOpen ? "editorial-links open" : "editorial-links"}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              className="language-switch"
              onClick={toggleLanguage}
              aria-label={isFrench ? "Switch to English" : "Passer en français"}
            >
              <span className={language === "fr" ? "active" : ""}>FR</span>
              <span className="language-divider">/</span>
              <span className={language === "en" ? "active" : ""}>EN</span>
            </button>

            <button
              type="button"
              className="nav-contact"
              onClick={openContact}
            >
              {isFrench ? "Me contacter" : "Let's talk"} <span>↗</span>
            </button>
          </nav>
        </div>
      </header>

      {contactOpen && (
        <div
          className="contact-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeContact();
            }
          }}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <button
              type="button"
              className="contact-modal-close"
              onClick={closeContact}
              aria-label={isFrench ? "Fermer" : "Close"}
              disabled={sending}
            >
              ×
            </button>

            <div className="contact-modal-heading">
              <span className="contact-modal-eyebrow">
                {isFrench ? "RESTONS EN CONTACT" : "LET'S CONNECT"}
              </span>

              <h2 id="contact-modal-title">
                {isFrench ? "Échangeons" : "Let's talk"}
                <span>.</span>
              </h2>

              <p>
                {isFrench
                  ? "Une question, une opportunité ou simplement envie d'échanger ? Envoyez-moi un message."
                  : "Have a question, an opportunity or simply want to connect? Send me a message."}
              </p>
            </div>

            <form
              ref={formRef}
              className="contact-modal-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-group">
                <label htmlFor="contact-name">
                  {isFrench ? "Votre nom" : "Your name"}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="from_name"
                  placeholder={isFrench ? "Votre nom complet" : "Your full name"}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email">
                  {isFrench ? "Votre adresse e-mail" : "Your email address"}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="reply_to"
                  placeholder="exemple@email.com"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-subject">
                  {isFrench ? "Sujet" : "Subject"}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder={
                    isFrench ? "Objet de votre message" : "Message subject"
                  }
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message">
                  {isFrench ? "Votre message" : "Your message"}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder={
                    isFrench
                      ? "Écrivez votre message ici..."
                      : "Write your message here..."
                  }
                  required
                />
              </div>

              {status === "success" && (
                <p className="contact-form-status success">
                  {isFrench
                    ? "Votre message a bien été envoyé. Merci !"
                    : "Your message has been sent successfully. Thank you!"}
                </p>
              )}

              {status === "error" && (
                <p className="contact-form-status error">
                  {isFrench
                    ? "L'envoi a échoué. Veuillez réessayer."
                    : "Sending failed. Please try again."}
                </p>
              )}

              <button
                type="submit"
                className="contact-submit-button"
                disabled={sending}
              >
                {sending
                  ? isFrench
                    ? "Envoi en cours..."
                    : "Sending..."
                  : isFrench
                    ? "Envoyer le message"
                    : "Send message"}
                {!sending && <span>↗</span>}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
