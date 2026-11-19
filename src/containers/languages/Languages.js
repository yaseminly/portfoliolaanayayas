import React, { useContext } from "react";
import "./Languages.scss";
import { languages } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";

const levelTranslations = {
  "Professionnel": "Professional",
  "Natif": "Native",
  "Conversationnel": "Conversational"
};

const languageTranslations = {
  "Français": "French",
  "Anglais": "English",
  "Arabe": "Arabic",
  "Turc": "Turkish"
};

export default function Languages() {
  const styleContext = useContext(StyleContext) || {};
  const isDark = styleContext.isDark || false;
  const { language } = useLanguage();

  if (!languages.display) {
    return null;
  }

  const title = language === "fr" ? "Langues" : "Languages";

  const subtitle =
    language === "fr"
      ? "Communiquer et collaborer dans des environnements multiculturels."
      : "Communicating and collaborating in multicultural environments.";

  return (
    <section
      className={`languages-section ${isDark ? "dark-mode" : ""}`}
      id="languages"
    >
      <div className="languages-container">
        <Fade bottom duration={700}>
          <header className="languages-header">
            <span className="languages-eyebrow">
              {language === "fr" ? "COMMUNICATION" : "COMMUNICATION"}
            </span>

            <h2>{title}</h2>
            <p>{subtitle}</p>
          </header>
        </Fade>

        <div className="languages-grid">
          {languages.list.map((item, index) => {
            const name =
              language === "en"
                ? languageTranslations[item.name] || item.name
                : item.name;

            const level =
              language === "en"
                ? levelTranslations[item.level] || item.level
                : item.level;

            return (
              <Fade
                bottom
                duration={600}
                delay={index * 100}
                key={item.name}
              >
                <article className="language-card">
                  <div className="language-card-top">
                    <h3>{name}</h3>
                    <span className="language-index">
                      0{index + 1}
                    </span>
                  </div>

                  <p>{level}</p>
                  <div className="language-card-line" />
                </article>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}