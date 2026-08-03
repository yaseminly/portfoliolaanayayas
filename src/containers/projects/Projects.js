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

  return (
    <div className={isDark ? "dark-mode projects-section" : "projects-section"} id="projects">
      <Fade bottom duration={1000} distance="40px">
        <div className="projects-container">
          {/* HEADER SECTION */}
          <div className="projects-header">
            <h1 className="projects-title">
              {bigProjects.title}
            </h1>
            <div className="title-underline"></div>
            <p className="projects-subtitle">
              {bigProjects.subtitle}
            </p>
          </div>

          {/* GRILLE DE PROJETS */}
          <div className="projects-grid">
            {bigProjects.projects.map((project, i) => (
              <Fade bottom duration={1000} distance="30px" delay={i * 100} key={i}>
                <div className="project-card">
                  {/* IMAGE AVEC OVERLAY DORÉ */}
                  <div className="project-image-container">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="project-image"
                      />
                    )}
                    <div className="image-overlay"></div>
                    {project.technologies && project.technologies[0] && (
                      <div className="main-tech-badge">
                        {project.technologies[0]}
                      </div>
                    )}
                  </div>

                  {/* CONTENU DE LA CARTE */}
                  <div className="project-content">
                    <h3 className="project-name">
                      {project.projectName}
                    </h3>

                    <p className="project-description">
                      {project.projectDesc}
                    </p>

                    {/* STACK TECHNIQUE ÉLÉGANTE */}
                    {project.technologies && project.technologies.length > 1 && (
                      <div className="project-tech-stack">
                        {project.technologies.slice(1, 4).map((tech, idx) => (
                          <span key={idx} className="tech-tag">
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

                    {/* BOUTON D'ACTION ROSE GOLD */}
                    <div className="project-footer">
                      {project.footerLink && project.footerLink.length > 0 && project.footerLink[0].url ? (
                        <a
                          href={project.footerLink[0].url}
                          className="project-link-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{project.footerLink[0].name || "Explorer"}</span>
                          <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      ) : (
                        <span className="project-internal">Architecture SI</span>
                      )}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}