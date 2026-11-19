
import React from "react";
import "./ExperienceCard.scss";

const experienceTranslations = {
  Inetum: {
    role: "Development & Integration — Final-Year Internship",
    description:
      "Contributed to the development of a sales tracking solution and the integration of a CRM/BSS solution in a telecommunications environment.",
    bullets: [
      "Developed an application to manage direct sales and top-up sales using Angular, Spring Boot and MySQL.",
      "Contributed to CRM/BSS integration through configuration, setup and functional testing.",
      "Participated in deployment phases in collaboration with the technical and DevOps teams."
    ]
  },

  JESA: {
    role: "AI & Knowledge Assistant Development",
    description:
      "Contributed to the design of an intelligent assistant that enables users to query internal documents using natural language.",
    bullets: [
      "Implemented a Retrieval-Augmented Generation (RAG) architecture for contextual document search.",
      "Developed the backend using Python and FastAPI and the frontend using React and TypeScript.",
      "Used ChromaDB for vector search and SQL Server for data storage.",
      "Integrated a local language model using Ollama."
    ]
  },

  "Orange Maroc": {
    role: "Business Intelligence & Reporting",
    description:
      "Contributed to Business Intelligence activities and the monitoring of performance indicators for B2B operations.",
    bullets: [
      "Created and improved dashboards using Power BI.",
      "Analysed and monitored KPIs to support business performance management.",
      "Used data to produce monitoring and reporting documents."
    ]
  },

  "GSMAG / Essanet Maroc": {
    role: "IT Intern",
    description:
      "Discovered a professional IT environment and gained hands-on experience with an internal software application.",
    bullets: [
      "Explored the software's features and its use in day-to-day activities.",
      "Became familiar with the company's business processes and workflows."
    ]
  }
};

export default function ExperienceCard({
  cardInfo,
  isDark,
  language = "fr"
}) {
  const isEnglish = language === "en";

  const translation = experienceTranslations[cardInfo.company];

  const role =
    isEnglish && translation
      ? translation.role
      : cardInfo.role;

  const description =
    isEnglish && translation
      ? translation.description
      : cardInfo.desc;

  const bullets =
    isEnglish && translation
      ? translation.bullets
      : cardInfo.descBullets;

  return (
    <article
      className={
        isDark
          ? "experience-card-dark"
          : "experience-card"
      }
    >
      <div className="experience-banner">
        <img
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
        />
      </div>

      <div className="experience-text-details">
        <div className="experience-header-info">
          <h3 className="experience-text-role">
            {role}
          </h3>

          <div className="experience-company-date">
            <span className="experience-text-company">
              {cardInfo.company}
            </span>

            <span className="experience-text-date">
              {cardInfo.date}
            </span>
          </div>
        </div>

        <p className="experience-text-desc">
          {description}
        </p>

        {bullets?.length > 0 && (
          <ul className="experience-bullets">
            {bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
