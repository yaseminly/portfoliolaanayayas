
import React, { useContext } from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const { isDark } = useContext(StyleContext);

  return (
    <article className={`education-card ${isDark ? "dark-mode" : ""}`}>
      {school.logo && (
        <div className="education-card-left">
          <img
            className="education-roundedimg"
            src={school.logo}
            alt={school.schoolName}
          />
        </div>
      )}

      <div className="education-card-right">
        <div className="education-card-heading">
          <h3 className="education-text-school">
            {school.schoolName}
          </h3>

          <span className="education-text-duration">
            {school.duration}
          </span>
        </div>

        {school.subHeader && (
          <h4 className="education-text-subHeader">
            {school.subHeader}
          </h4>
        )}

        {school.desc && (
          <p className="education-text-desc">{school.desc}</p>
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
