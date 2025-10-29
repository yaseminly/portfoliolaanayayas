import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  // Fonction pour ouvrir un lien dans un nouvel onglet
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.warn(`URL for ${name} not found`);
      return;
    }
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      {/* === IMAGE === */}
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        />
      </div>

      {/* === DÉTAILS === */}
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>

      {/* === LIENS (FOOTER) === */}
      <div className="certificate-card-footer">
        {cardInfo.footer &&
          cardInfo.footer.map((v, i) => {
            // Si c’est un lien de téléchargement :
            if (v.downloadLink) {
              return (
                <a
                  key={i}
                  href={v.url}
                  download // ✅ télécharge le fichier directement
                  className={
                    isDark
                      ? "dark-mode certificate-tag"
                      : "certificate-tag"
                  }
                >
                  ⬇️ {v.name}
                </a>
              );
            }

            // Sinon, lien classique (ouvre dans un nouvel onglet)
            return (
              <span
                key={i}
                className={
                  isDark
                    ? "dark-mode certificate-tag"
                    : "certificate-tag"
                }
                onClick={() => openUrlInNewTab(v.url, v.name)}
              >
                📄 {v.name}
              </span>
            );
          })}
      </div>
    </div>
  );
}
