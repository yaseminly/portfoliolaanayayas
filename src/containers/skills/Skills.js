import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <Fade bottom duration={1000}>
        <div className="skills-container-main">
          <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
            {skillsSection.title}
          </h1>

          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle}
          </p>

          <SoftwareSkill />

          <div className="skills-details">
            {skillsSection.skills.map((skills, i) => (
              <p
                key={i}
                className={
                  isDark
                    ? "dark-mode subTitle skills-text"
                    : "subTitle skills-text"
                }
              >
                {skills}
              </p>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
