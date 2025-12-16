import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  // Extraire la première lettre du titre pour l'icône
  const iconLetter = cardInfo.title ? cardInfo.title.charAt(0).toUpperCase() : "C";

  return (
    <div className={isDark ? "certificate-card dark-mode" : "certificate-card"}>
      {/* Icône avec la première lettre */}
      <div className="certificate-icon">{iconLetter}</div>

      {/* Détails du certificat */}
      <div className="certificate-detail-div">
        <h5 className="certificate-title">{cardInfo.title}</h5>
        <p className="certificate-description">{cardInfo.description}</p>
      </div>

      {/* Footer avec lien */}
      {cardInfo.footer && cardInfo.footer.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((link, i) => (
            <span
              key={i}
              onClick={() => openUrlInNewTab(link.url)}
            >
              {link.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}