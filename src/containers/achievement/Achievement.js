
import React, { useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const { isDark } = useContext(StyleContext);

  if (!achievementSection.display) return null;

  const allAchievements = achievementSection.clusters.flatMap(cluster =>
    cluster.achievements.map(card => ({
      ...card,
      category: cluster.clusterTitle
    }))
  );

  return (
    <div
      className={isDark ? "dark-mode achievement-section" : "achievement-section"}
      id="achievements"
    >
      <div className="achievement-main-div">
        <Fade bottom duration={800}>
          <div className="achievement-header">
            <h1 className="achievement-heading">
              {achievementSection.title}
            </h1>
            <p className="achievement-subtitle">
              {achievementSection.subtitle}
            </p>
          </div>
        </Fade>

        <div className="achievement-cards-div">
          {allAchievements.map((card, i) => (
            <Fade bottom duration={700} delay={i * 80} key={i}>
              <AchievementCard
                isDark={isDark}
                cardInfo={{
                  ...card,
                  footer: card.footerLink
                }}
              />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
