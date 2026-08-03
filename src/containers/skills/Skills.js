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
    <div className={isDark ? "dark-mode skills-main-div" : "skills-main-div"} id="skills">
      <Fade bottom duration={1000} distance="40px">
        <div className="skills-container">
          
          {/* HEADER DE SECTION */}
          <div className="skills-header">
            <h1 className="skills-heading">Expertises Techniques</h1>
            <div className="skills-underline"></div>
          </div>

          {/* GRILLE DE CATÉGORIES */}
          {skillsSection.softwareSkills && skillsSection.softwareSkills.length > 0 && (
            <div className="skills-grid">
              {skillsSection.softwareSkills.map((category, i) => (
                <Fade bottom duration={1000} delay={i * 150} key={i}>
                  <div className="skill-category-card">
                    
                    {/* HEADER DE LA CARTE (ICÔNE + NOM) */}
                    <div className="skill-category-header">
                      <div className="skill-category-icon-box">
                        <i className={category.skills[0]?.fontAwesomeClassname || "fas fa-code"}></i>
                      </div>
                      <h3 className="skill-category-name">
                        {category.category}
                      </h3>
                    </div>

                    {/* LISTE DES ITEMS (TAGS) */}
                    <div className="skill-category-items">
                      {category.skills.map((skill, j) => (
                        <div className="skill-item-tag" key={j}>
                          <i className={skill.fontAwesomeClassname}></i>
                          <span>{skill.skillName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
}