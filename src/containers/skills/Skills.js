
import React, { useContext } from "react";
import "./Skills.scss";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) return null;

  return (
    <section
      className={
        isDark
          ? "skills-main-div dark-mode"
          : "skills-main-div"
      }
      id="skills"
    >
      <div className="skills-container">

        {/* Section header */}
        <Fade bottom duration={800}>
          <div className="skills-header">
            <h2 className="skills-heading">
              {skillsSection.title}
            </h2>

            <div className="skills-underline" />

            {skillsSection.subTitle && (
              <p className="skills-subtitle">
                {skillsSection.subTitle}
              </p>
            )}
          </div>
        </Fade>

        {/* Key strengths */}
        {skillsSection.skills?.length > 0 && (
          <div className="skills-descriptions">
            {skillsSection.skills.map((skill, index) => (
              <Fade
                bottom
                duration={700}
                delay={index * 80}
                key={index}
              >
                <div className="skill-phrase-card">
                  <span className="skill-phrase-dot" />
                  <span className="skill-phrase-text">
                    {skill}
                  </span>
                </div>
              </Fade>
            ))}
          </div>
        )}

        {/* Technical skills */}
        {skillsSection.softwareSkills?.length > 0 && (
          <div className="skills-grid">
            {skillsSection.softwareSkills.map((category, index) => {
              const categorySkills = category.skills || [];

              return (
                <Fade
                  bottom
                  duration={800}
                  delay={index * 100}
                  key={category.category || index}
                >
                  <article className="skill-category-card">

                    <div className="skill-category-header">
                      <div className="skill-category-icon-box">
                        <i
                          className={
                            categorySkills[0]?.fontAwesomeClassname ||
                            "fas fa-code"
                          }
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="skill-category-name">
                        {category.category}
                      </h3>
                    </div>

                    <div className="skill-category-items">
                      {categorySkills.map((skill, skillIndex) => (
                        <span
                          className="skill-item-tag"
                          key={skill.skillName || skillIndex}
                        >
                          {skill.fontAwesomeClassname && (
                            <i
                              className={skill.fontAwesomeClassname}
                              aria-hidden="true"
                            />
                          )}

                          <span>{skill.skillName}</span>
                        </span>
                      ))}
                    </div>

                  </article>
                </Fade>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
