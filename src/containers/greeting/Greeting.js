import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, resumeSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import myCV from "../../assets/images/CV2026.pdf";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className={isDark ? "dark-mode greet-main" : "greet-main"} id="greeting">
        <div className="greeting-container">
          
          <div className="greeting-text-div">
            <div className="greeting-badge">✦ Software Engineer</div>
            
            <h1 className="greeting-title">
              {greeting.username}
            </h1>
            
            <div className="specialization-text">
               Spécialité <span className="text-gold">MIAGE</span>
            </div>

            <p className="greeting-subTitle">
              {greeting.subTitle}
            </p>

            <div className="greeting-actions">
              <SocialMedia />
              <div className="button-group">
                <a href="#contact" className="btn-luxury-primary">
                  Me Contacter
                </a>
                
                {/* BOUTON CV AMÉLIORÉ */}
               {resumeSection.display && (
 <a
  href={myCV}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-luxury-outline"
>
  Voir mon CV
</a>
)}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <div className="photo-frame">
              <img
                alt={greeting.username}
                src={require("../../assets/images/moi.jpeg")}
                className="profile-photo"
              />
              <div className="frame-border"></div>
              <div className="frame-accent"></div>
            </div>
          </div>

        </div>
      </div>
    </Fade>
  );
}