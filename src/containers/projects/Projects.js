import React, { useContext } from "react";
import "./Project.scss";
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";

export default function Projects() {
  const { isDark } = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  function openUrlInNewTab(url) {
    if (!url) return;
    window.open(url, "_blank").focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="projects-section" id="projects">
        {/* HEADER */}
        <div className="projects-header">
          <h1 className={isDark ? "projects-title dark-mode" : "projects-title"}>
            {bigProjects.title}
          </h1>
          <p className={isDark ? "projects-subtitle dark-mode" : "projects-subtitle"}>
            {bigProjects.subtitle}
          </p>
        </div>

        {/* GRILLE DE PROJETS */}
        <div className="projects-grid">
          {bigProjects.projects.map((project, i) => (
            <Fade bottom duration={1000} distance="20px" delay={i * 100} key={i}>
              <div className={isDark ? "project-card dark-mode" : "project-card"}>
                {/* IMAGE */}
                <div className="project-image-container">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="project-image"
                    />
                  )}
                  {project.technologies && project.technologies[0] && (
                    <div className="project-tech-badge">
                      {project.technologies[0]}
                    </div>
                  )}
                </div>

                {/* CONTENU */}
                <div className="project-content">
                  <h3 className="project-name">
                    {project.projectName}
                  </h3>

                  <p className="project-description">
                    {project.projectDesc}
                  </p>

                  {/* TECHNOLOGIES */}
                  {project.technologies && project.technologies.length > 1 && (
                    <div className="project-tech-stack">
                      {project.technologies.slice(1, 5).map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="tech-tag">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  )}

                  {/* FOOTER */}
                  <div className="project-footer">
                    <div className="project-stats">
                      {project.technologies && (
                        <div className="stat-item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                          {project.technologies.length} techs
                        </div>
                      )}
                    </div>

                    {project.footerLink && project.footerLink.length > 0 && project.footerLink[0].url && (
                      <a
                        href={project.footerLink[0].url}
                        className="project-link-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.footerLink[0].name || "Voir le projet"}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
}