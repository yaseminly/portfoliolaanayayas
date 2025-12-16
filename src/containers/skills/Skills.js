import React, { useContext } from "react";
import "./Skills.scss";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className="skills-main-div" id="skills">
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <h1 className={isDark ? "skills-heading dark-mode" : "skills-heading"}>
            Compétences
          </h1>

          {/* COMPÉTENCES TECHNIQUES PAR CATÉGORIES */}
          {skillsSection.softwareSkills && skillsSection.softwareSkills.length > 0 && (
            <div className="skills-categories-section">
             

              <div className="skills-categories-grid">
                {skillsSection.softwareSkills.map((category, i) => (
                  <div 
                    className={isDark ? "skill-category-card dark-mode" : "skill-category-card"}
                    key={i}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    {/* HEADER DE LA CATÉGORIE */}
                    <div className="skill-category-header">
                      <div className="skill-category-icon">
                        <i className={category.skills[0]?.fontAwesomeClassname || "fas fa-code"}></i>
                      </div>
                      <h3 className={isDark ? "skill-category-name dark-mode" : "skill-category-name"}>
                        {category.category}
                      </h3>
                    </div>

                    {/* LISTE DES COMPÉTENCES */}
                    <div className="skill-category-items">
                      {category.skills.map((skill, j) => (
                        <div 
                          className={isDark ? "skill-item dark-mode" : "skill-item"} 
                          key={j}
                        >
                          <i className={skill.fontAwesomeClassname}></i>
                          <span>{skill.skillName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
}