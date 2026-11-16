
import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  const links = [
    {
      url: socialMediaLinks.github,
      label: "GitHub",
      className: "github",
      icon: "fab fa-github"
    },
    {
      url: socialMediaLinks.linkedin,
      label: "LinkedIn",
      className: "linkedin",
      icon: "fab fa-linkedin-in"
    },
    {
      url: socialMediaLinks.gmail,
      label: "E-mail",
      className: "google",
      icon: "fas fa-envelope",
      email: true
    },
    {
      url: socialMediaLinks.instagram,
      label: "Instagram",
      className: "instagram",
      icon: "fab fa-instagram"
    },
    {
      url: socialMediaLinks.twitter,
      label: "Twitter",
      className: "twitter",
      icon: "fab fa-twitter"
    },
    {
      url: socialMediaLinks.medium,
      label: "Medium",
      className: "medium",
      icon: "fab fa-medium"
    },
    {
      url: socialMediaLinks.stackoverflow,
      label: "Stack Overflow",
      className: "stack-overflow",
      icon: "fab fa-stack-overflow"
    },
    {
      url: socialMediaLinks.kaggle,
      label: "Kaggle",
      className: "kaggle",
      icon: "fab fa-kaggle"
    }
  ];

  return (
    <div className="social-media-div">
      {links
        .filter(link => link.url)
        .map(link => (
          <a
            key={link.label}
            href={link.email ? `mailto:${link.url}` : link.url}
            className={`icon-button ${link.className}`}
            aria-label={link.label}
            title={link.label}
            target={link.email ? undefined : "_blank"}
            rel={link.email ? undefined : "noopener noreferrer"}
          >
            <i className={link.icon} aria-hidden="true"></i>
          </a>
        ))}
    </div>
  );
}
