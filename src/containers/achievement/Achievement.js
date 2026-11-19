import React, { useContext } from "react";
import "./Achievement.scss";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useLanguage } from "../../contexts/LanguageContext";

const translations = {
  "SAP & ERP": "SAP & ERP",
  "Oracle & Cloud DevOps": "Oracle & Cloud DevOps",
  "Développement Full Stack": "Full Stack Development",
  "Infrastructure & Management": "Infrastructure & Management",

  "Exploring SAP Cloud ERP": {
    title: "Exploring SAP Cloud ERP",
    description:
      "Introduction to SAP Cloud ERP, its main features and its role in managing integrated business processes."
  },
  "Exploring SAP S/4HANA Cloud, Public Edition – Retail": {
    title: "Exploring SAP S/4HANA Cloud, Public Edition – Retail",
    description:
      "Overview of retail operations, including products, inventory, procurement, replenishment and merchandise distribution."
  },
  "Executing Basic ERP Processes with SAP S/4HANA": {
    title: "Executing Basic ERP Processes with SAP S/4HANA",
    description:
      "Introduction to core ERP processes: Procure-to-Pay, Plan-to-Produce and Order-to-Cash."
  },
  "Oracle Cloud Infrastructure 2025 Certified DevOps Professional": {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    description:
      "Knowledge of software delivery lifecycle practices and DevOps services on Oracle Cloud Infrastructure."
  },
  "Microsoft Azure: Modern Data Warehouse": {
    title: "Microsoft Azure: Modern Data Warehouse",
    description:
      "Overview of modern data warehouse architecture and analytics solutions on Microsoft Azure."
  },
  "React Basics (Meta)": {
    title: "React Basics (Meta)",
    description:
      "Fundamentals of building interactive web interfaces with React."
  },
  "Java & Object-Oriented Programming": {
    title: "Java & Object-Oriented Programming",
    description:
      "Java programming fundamentals and object-oriented software design principles."
  },
  "Virtual Networks in Azure": {
    title: "Virtual Networks in Azure",
    description:
      "Fundamentals of configuring and managing virtual networks in Microsoft Azure."
  },
  "Software Design & Project Management": {
    title: "Software Design & Project Management",
    description:
      "Software design principles and project management practices."
  }
};

const linkLabels = {
  fr: {
    Badge: "Voir le badge",
    Vérifier: "Vérifier",
    Certification: "Voir le certificat"
  },
  en: {
    Badge: "View badge",
    Vérifier: "Verify",
    Certification: "View certificate"
  }
};

function AchievementCard({ achievement, language, isDark }) {
  const translated = translations[achievement.title];
  const title = language === "en" && translated
    ? translated.title
    : achievement.title;

  const description = language === "en" && translated
    ? translated.description
    : achievement.description;

  return (
    <article className={`achievement-card ${isDark ? "dark-mode" : ""}`}>
      <div className="achievement-card-image">
        <img
          src={achievement.image}
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="achievement-card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {achievement.footerLink?.length > 0 && (
          <div className="achievement-links">
            {achievement.footerLink.map((link, index) => (
              <a
                key={`${link.url}-${index}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkLabels[language]?.[link.name] || link.name}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Achievement() {
  const styleContext = useContext(StyleContext) || {};
  const isDark = styleContext.isDark || false;
  const { language } = useLanguage();

  if (!achievementSection.display) {
    return null;
  }

  const sectionTitle =
    language === "fr" ? "Certifications & formations" : "Certifications & Courses";

  const sectionSubtitle =
    language === "fr"
      ? "Des formations et certifications qui accompagnent mon parcours technique."
      : "Professional learning and certifications supporting my technical journey.";

  return (
    <section
      className={`achievement-section ${isDark ? "dark-mode" : ""}`}
      id="achievements"
    >
      <div className="achievement-container">
        <Fade bottom duration={700}>
          <header className="achievement-header">
            <span className="achievement-eyebrow">
              {language === "fr" ? "APPRENTISSAGE CONTINU" : "CONTINUOUS LEARNING"}
            </span>

            <h2>{sectionTitle}</h2>
            <p>{sectionSubtitle}</p>
          </header>
        </Fade>

        <div className="achievement-groups">
          {achievementSection.clusters.map((cluster, index) => {
            const clusterTitle =
              language === "en"
                ? translations[cluster.clusterTitle] || cluster.clusterTitle
                : cluster.clusterTitle;

            return (
              <Fade bottom duration={650} delay={index * 100} key={cluster.clusterTitle}>
                <div className="achievement-group">
                  <div className="achievement-group-heading">
                    <h3>{clusterTitle}</h3>
                    <span>{String(cluster.achievements.length).padStart(2, "0")}</span>
                  </div>

                  <div className="achievement-grid">
                    {cluster.achievements.map((achievement, itemIndex) => (
                      <AchievementCard
                        key={`${achievement.title}-${itemIndex}`}
                        achievement={achievement}
                        language={language}
                        isDark={isDark}
                      />
                    ))}
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}