
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Header.scss";
import { greeting } from "../../portfolio";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const navItems = [
    { label: "Expertise", href: "#skills" },
    { label: "Formation", href: "#education" },
    { label: "Expérience", href: "#experience" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" }
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
          publicKey: "UmATMCbgItO78-laT"
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
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            type="button"
          >
            <span></span>
            <span></span>
          </button>

          <nav
            className={
              menuOpen
                ? "editorial-links open"
                : "editorial-links"
            }
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              className="nav-contact"
              onClick={openContact}
            >
              Let's talk <span>↗</span>
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
              aria-label="Fermer"
              disabled={sending}
            >
              ×
            </button>

            <div className="contact-modal-heading">
              <span className="contact-modal-eyebrow">
                RESTONS EN CONTACT
              </span>

              <h2 id="contact-modal-title">
                Let's talk<span>.</span>
              </h2>

              <p>
                Une question, une opportunité ou simplement envie
                d'échanger ? Envoyez-moi un message.
              </p>
            </div>

            <form
              ref={formRef}
              className="contact-modal-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-group">
                <label htmlFor="contact-name">Votre nom</label>
                <input
                  id="contact-name"
                  type="text"
                  name="from_name"
                  placeholder="Votre nom complet"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email">Votre adresse e-mail</label>
                <input
                  id="contact-email"
                  type="email"
                  name="reply_to"
                  placeholder="exemple@email.com"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-subject">Sujet</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Objet de votre message"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message">Votre message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Écrivez votre message ici..."
                  required
                />
              </div>

              {status === "success" && (
                <p className="contact-form-status success">
                  Votre message a bien été envoyé. Merci !
                </p>
              )}

              {status === "error" && (
                <p className="contact-form-status error">
                  L'envoi a échoué. Veuillez réessayer.
                </p>
              )}

              <button
                type="submit"
                className="contact-submit-button"
                disabled={sending}
              >
                {sending ? "Envoi en cours..." : "Envoyer le message"}
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
