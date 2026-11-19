
import React from "react";
import "./Skills.scss";
import { skillsSection } from "../../portfolio";
import { useLanguage } from "../../contexts/LanguageContext";

const translations = {
  fr: {
    title: "Mes expertises",
    subtitle: "Des compétences techniques au service des besoins métier.",
    descriptions: [
      "Développement d'applications web et logiciel",
      "Intégration et paramétrage de solutions ERP / CRM",
      "Conception d'assistants IA et architectures RAG",
      "Analyse de données et création de tableaux de bord BI",
      "Conteneurisation, Cloud et pratiques DevOps"
    ],
    categories: {
      "Développement": "Développement",
      "ERP / CRM & Bases de données": "ERP / CRM & Bases de données",
      "Data & Intelligence Artificielle": "Data & Intelligence Artificielle",
      "DevOps & Cloud": "DevOps & Cloud"
    }
  },
  en: {
    title: "My Expertise",
    subtitle: "Technical skills designed to address business needs.",
    descriptions: [
      "Web and software application development",
      "ERP / CRM solution integration and configuration",
      "AI assistant development and RAG architectures",
      "Data analysis and BI dashboard development",
      "Containerization, Cloud and DevOps practices"
    ],
    categories: {
      "Développement": "Software Development",
      "ERP / CRM & Bases de données": "ERP / CRM & Databases",
      "Data & Intelligence Artificielle": "Data & Artificial Intelligence",
      "DevOps & Cloud": "DevOps & Cloud"
    }
  }
};

const categoryIcons = {
  "Développement": "fas fa-code",
  "ERP / CRM & Bases de données": "fas fa-cubes",
  "Data & Intelligence Artificielle": "fas fa-brain",
  "DevOps & Cloud": "fas fa-cloud"
};

export default function Skills() {
  const { language } = useLanguage();
  const content = translations[language] || translations.fr;

  const categories = skillsSection.softwareSkills || [];

  return (
    <section className="skills-main-div" id="skills">
      <div className="skills-container">

        <div className="skills-header">
          <h1 className="skills-heading">
            {content.title}
          </h1>

          <div className="skills-underline"></div>

          <p className="skills-subtitle">
            {content.subtitle}
          </p>
        </div>

        <div className="skills-descriptions">
          {content.descriptions.map((description, index) => (
            <div className="skill-phrase-card" key={index}>
              <span className="skill-phrase-dot"></span>
              <span className="skill-phrase-text">
                {description}
              </span>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <article className="skill-category-card" key={index}>

              <div className="skill-category-header">
                <div className="skill-category-icon-box">
                  <i
                    className={
                      categoryIcons[category.category] || "fas fa-code"
                    }
                    aria-hidden="true"
                  ></i>
                </div>

                <h3 className="skill-category-name">
                  {content.categories[category.category] ||
                    category.category}
                </h3>
              </div>

              <div className="skill-category-items">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-item-tag" key={skillIndex}>
                    <i
                      className={skill.fontAwesomeClassname}
                      aria-hidden="true"
                    ></i>

                    {skill.skillName}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
