import React from "react";
import "./Languages.scss";
import { Fade } from "react-reveal";
import { languages } from "../../portfolio";

export default function Languages() {
  if (!languages.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="languages">
        <div className="languages-main-div">
          <h1 className="languages-heading">{languages.title}</h1>
          <div className="languages-grid">
            {languages.list.map((lang, index) => (
              <div key={index} className="language-card">
                <span className="flag">{lang.flag}</span>
                <span className="language-name">{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
