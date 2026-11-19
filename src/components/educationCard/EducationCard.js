
import React, { useContext } from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

const schoolTranslations = {
  "École Marocaine des Sciences de l'Ingénieur (EMSI)": {
    name: "Moroccan School of Engineering Sciences (EMSI)",
    subHeader:
      "MIAGE Engineering — Computer Science, AI and Information Systems",
    desc:
      "Focus on Information Systems, Artificial Intelligence and Software Engineering."
  },

  "Lycée Les Crêtes": {
    name: "Les Crêtes High School",
    subHeader:
      "High School Diploma in Physical and Chemical Sciences"
  }
};

export default function EducationCard({ school, language = "fr" }) {
  const styleContext = useContext(StyleContext) || {};
  const isDark = styleContext.isDark || false;

  const isEnglish = language === "en";
  const translation = schoolTranslations[school.schoolName];

  const schoolName =
    isEnglish && translation?.name
      ? translation.name
      : school.schoolName;

  const subHeader =
    isEnglish && translation?.subHeader
      ? translation.subHeader
      : school.subHeader;

  const description =
    isEnglish && translation?.desc
      ? translation.desc
      : school.desc;

  return (
    <article
      className={`education-card ${isDark ? "dark-mode" : ""}`}
    >
      {school.logo && (
        <div className="education-card-left">
          <img
            className="education-roundedimg"
            src={school.logo}
            alt={schoolName}
          />
        </div>
      )}

      <div className="education-card-right">
        <div className="education-card-heading">
          <h3 className="education-text-school">
            {schoolName}
          </h3>

          <span className="education-text-duration">
            {school.duration}
          </span>
        </div>

        {subHeader && (
          <h4 className="education-text-subHeader">
            {subHeader}
          </h4>
        )}

        {description && (
          <p className="education-text-desc">
            {description}
          </p>
        )}

        {school.descBullets?.length > 0 && (
          <ul className="education-text-bullets">
            {school.descBullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
