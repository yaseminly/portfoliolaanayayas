
import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({ cardInfo, isDark }) {
  return (
    <article className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-banner">
        <img
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
        />
      </div>

      <div className="experience-text-details">
        <div className="experience-header-info">
          <h3 className="experience-text-role">{cardInfo.role}</h3>
          <div className="experience-company-date">
            <span className="experience-text-company">
              {cardInfo.company}
            </span>
            <span className="experience-text-date">{cardInfo.date}</span>
          </div>
        </div>

        <p className="experience-text-desc">{cardInfo.desc}</p>

        {cardInfo.descBullets?.length > 0 && (
          <ul className="experience-bullets">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
