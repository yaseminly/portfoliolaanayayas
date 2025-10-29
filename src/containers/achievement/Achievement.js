import React, { useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const { isDark } = useContext(StyleContext);

  if (!achievementSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          {/* === TITRE ET SOUS-TITRE === */}
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          {/* === AFFICHAGE DES CLUSTERS === */}
          <div className="achievement-clusters">
            {achievementSection.clusters &&
              achievementSection.clusters.map((cluster, i) => (
                <div key={i} className="achievement-cluster">
                  <h2
                    className={
                      isDark
                        ? "dark-mode cluster-title"
                        : "cluster-title"
                    }
                  >
                    {cluster.clusterTitle}
                  </h2>

                  <div className="achievement-cards-div">
                    {cluster.achievements.map((card, j) => (
                      <AchievementCard
                        key={j}
                        isDark={isDark}
                        cardInfo={{
                          title: card.title,
                          description: card.description,
                          image: card.image,
                          imageAlt: card.imageAlt,
                          footer: card.footerLink,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
