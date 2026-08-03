import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!workExperiences.display) return null;

  return (
    <div id="experience" className={isDark ? "dark-mode exp-section" : "exp-section"}>
      <Fade bottom duration={1000} distance="30px">
        <div className="exp-container">
          <div className="exp-header">
            <h1 className="exp-title">Parcours Professionnel</h1>
            <div className="exp-ornament">✦</div>
          </div>
          
          <div className="exp-grid-layout">
            {workExperiences.experience.map((card, i) => (
              <ExperienceCard key={i} isDark={isDark} cardInfo={card} />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}