
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
    <section
      className={
        isDark
          ? "edu-section dark-mode"
          : "edu-section"
      }
      id="education"
    >
      <div className="edu-container">

        <Fade bottom duration={800}>
          <div className="edu-header">
            <h2 className="edu-title">
              Formation Académique
            </h2>

            <div className="edu-divider" />

            <p className="edu-subtitle">
              Mon parcours académique et mes formations
            </p>
          </div>
        </Fade>

        <div className="edu-stack">
          {educationInfo.schools.map((school, index) => (
            <Fade
              bottom
              duration={800}
              delay={index * 120}
              key={index}
            >
              <EducationCard
                school={school}
                isDark={isDark}
              />
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
