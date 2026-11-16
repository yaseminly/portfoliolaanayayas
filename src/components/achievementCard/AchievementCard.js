
import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  return (
    <article
      className={
        isDark
          ? "certificate-card dark-mode"
          : "certificate-card"
      }
    >
      <div className="certificate-top">

        {cardInfo.image && (
          <div className="certificate-image-wrapper">
            <img
              className="certificate-image"
              src={cardInfo.image}
              alt={cardInfo.imageAlt || cardInfo.title}
              loading="lazy"
            />
          </div>
        )}

        <div className="certificate-detail-div">
          <h3 className="certificate-title">
            {cardInfo.title}
          </h3>

          {cardInfo.description && (
            <p className="certificate-description">
              {cardInfo.description}
            </p>
          )}
        </div>
      </div>

      {cardInfo.footer?.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              {link.name}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
