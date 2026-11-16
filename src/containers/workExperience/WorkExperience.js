
import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  if (!workExperiences.display) return null;

  return (
    <section
      id="experience"
      className={`exp-section ${isDark ? "dark-mode" : ""}`}
    >
      <div className="exp-container">
        <Fade bottom duration={700} distance="18px">
          <header className="exp-header">
            <h2 className="exp-title">
              Parcours professionnel
            </h2>

            <div className="exp-ornament" aria-hidden="true" />
          </header>
        </Fade>

        <div className="exp-grid-layout">
          {workExperiences.experience.map((card, index) => (
            <Fade
              bottom
              duration={650}
              distance="15px"
              delay={index * 100}
              key={`${card.company}-${index}`}
            >
              <ExperienceCard
                cardInfo={card}
                isDark={isDark}
              />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
