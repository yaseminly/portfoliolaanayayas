
import React, { useContext } from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Education() {
  const styleContext = useContext(StyleContext) || {};
  const isDark = styleContext.isDark || false;
  const { language } = useLanguage();

  if (!educationInfo.display) return null;

  const content = {
    fr: {
      title: "Formation",
      subtitle:
        "Mon parcours académique et les compétences développées au fil de mes études.",
    },
    en: {
      title: "Education",
      subtitle:
        "My academic background and the skills developed throughout my studies.",
    },
  };

  const text = content[language] || content.fr;

  return (
    <section
      className={`education-section ${isDark ? "dark-mode" : ""}`}
      id="education"
    >
      <div className="education-container">
        <Fade bottom duration={700} distance="20px">
          <header className="edu-header">
            <h2 className="edu-title">{text.title}</h2>
            <div className="edu-divider" aria-hidden="true"></div>
            <p className="edu-subtitle">{text.subtitle}</p>
          </header>
        </Fade>

        <div className="education-cards-container">
          {educationInfo.schools.map((school, index) => (
            <Fade
              bottom
              duration={650}
              distance="15px"
              delay={index * 100}
              key={`${school.schoolName}-${index}`}
            >
              <EducationCard school={school} language={language} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
