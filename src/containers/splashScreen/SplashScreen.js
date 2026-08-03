import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-content">
        <div className="splash-animation-container">
          <DisplayLottie animationData={splashScreen.animation} />
        </div>
        <div className="splash-title-container">
          <h1 className="splash-title logo-name">
            {greeting.username}
          </h1>
          <div className="splash-loader"></div>
        </div>
      </div>
    </div>
  );
}