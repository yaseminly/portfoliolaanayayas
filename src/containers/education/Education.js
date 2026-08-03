import React, { useContext } from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";

export default function Education() {
  const { isDark } = useContext(StyleContext);

  if (!educationInfo.display) return null;

  return (
    <div className={isDark ? "dark-mode edu-section" : "edu-section"} id="education">
      <Fade bottom duration={1000} distance="30px">
        <div className="edu-container">
          <div className="edu-header">
            <h1 className="edu-title">Formation Académique</h1>
            <div className="edu-divider">
              <span className="line"></span>
              <span className="diamond">✦</span>
              <span className="line"></span>
            </div>
          </div>

          <div className="edu-stack">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} isDark={isDark} />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}