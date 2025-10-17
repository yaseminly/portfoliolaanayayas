import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="skills-container">
      {skillsSection.softwareSkills.map((group, index) => (
        <div className="skills-card" key={index}>
          <h3 className="skills-category">{group.category}</h3>
          <ul className="dev-icons">
            {group.skills.map((skill, i) => (
              <li key={i} className="software-skill-inline">
                <i className={skill.fontAwesomeClassname}></i>
                <p>{skill.skillName}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
