
import React, { useContext } from "react";
import "./Project.scss";
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";
import { useLanguage } from "../../contexts/LanguageContext";

const translations = {
  fr: {
    title: "Projets phares",
    subtitle:
      "Des solutions concrètes répondant à des enjeux métiers réels.",
    explore: "Explorer",
    internal: "Systèmes d'entreprise"
  },
  en: {
    title: "Featured Projects",
    subtitle:
      "Practical solutions addressing real business challenges.",
    explore: "Explore",
    internal: "Enterprise Systems"
  }
};

const projectTranslations = {
  "ERP Customization (Odoo 17)": {
    name: "Odoo 17 ERP Customization",
    description:
      "Development of a custom ERP module for managing academic project defenses, deployed in Docker containers."
  },
  "Medicare — Assistant Médical IA": {
    name: "MediCare — AI Medical Assistant",
    description:
      "An intelligent e-health solution built with React and Spring Boot, featuring AI-assisted diagnosis and dynamic consultation management."
  },
  "Semantic Search Assistant": {
    name: "Semantic Search Assistant",
    description:
      "A conversational assistant using large language models to query technical documents through LangChain."
  },
  "ML Climate Predictor": {
    name: "ML Climate Predictor",
    description:
      "A climate forecasting application powered by machine learning and Streamlit."
  },
  "DataSafe Automation": {
    name: "DataSafe Automation",
    description:
      "An automated shell script designed to manage critical Linux backups."
  }
};

export default function Projects() {
  const styleContext = useContext(StyleContext) || {};
  const isDark = styleContext.isDark || false;
  const { language } = useLanguage();

  if (!bigProjects.display) {
    return null;
  }

  const content = translations[language] || translations.fr;
  const isEnglish = language === "en";

  return (
    <div
      className={
        isDark
          ? "dark-mode projects-section"
          : "projects-section"
      }
      id="projects"
    >
      <Fade bottom duration={800} distance="25px">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">
              {isEnglish ? content.title : bigProjects.title}
            </h2>

            <div className="title-underline" />

            <p className="projects-subtitle">
              {isEnglish ? content.subtitle : bigProjects.subtitle}
            </p>
          </div>

          <div className="projects-grid">
            {bigProjects.projects.map((project, index) => {
              const translatedProject =
                projectTranslations[project.projectName];

              const projectName =
                isEnglish && translatedProject
                  ? translatedProject.name
                  : project.projectName;

              const projectDescription =
                isEnglish && translatedProject
                  ? translatedProject.description
                  : project.projectDesc;

              return (
                <Fade
                  bottom
                  duration={700}
                  distance="20px"
                  delay={index * 100}
                  key={project.projectName || index}
                >
                  <article className="project-card">
                    <div className="project-image-container">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={projectName}
                          className="project-image"
                        />
                      )}

                      <div className="image-overlay" />

                      {project.technologies?.[0] && (
                        <div className="main-tech-badge">
                          {project.technologies[0]}
                        </div>
                      )}
                    </div>

                    <div className="project-content">
                      <h3 className="project-name">
                        {projectName}
                      </h3>

                      <p className="project-description">
                        {projectDescription}
                      </p>

                      {project.technologies?.length > 1 && (
                        <div className="project-tech-stack">
                          {project.technologies
                            .slice(1, 4)
                            .map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="tech-tag"
                              >
                                {tech}
                              </span>
                            ))}

                          {project.technologies.length > 4 && (
                            <span className="tech-tag-more">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="project-footer">
                        {project.footerLink?.[0]?.url ? (
                          <a
                            href={project.footerLink[0].url}
                            className="project-link-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>
                              {project.footerLink[0].name ||
                                content.explore}
                            </span>

                            <svg
                              className="link-icon"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </a>
                        ) : (
                          <span className="project-internal">
                            {content.internal}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Fade>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}
