import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Texte de présentation */}
          <div className="greeting-text-div">
            <div>
              <h1
                className={
                  isDark ? "greeting-text dark-mode" : "greeting-text"
                }
              >
                {greeting.title} <span className="wave-emoji"></span>
              </h1>

              <p
                className={
                  isDark
                    ? "greeting-text-p dark-mode"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              <div id="resume" className="empty-div"></div>
              <SocialMedia />

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./yasmine_laanayaCV.pdf")}
                    download="yasmine_laanaya.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Photo de profil élégante */}
          <div className="greeting-image-div">
            <img
              alt="Yasmine Laanaya"
              src={require("../../assets/images/moi.jpeg")}
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
