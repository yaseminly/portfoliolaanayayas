
import React, { useContext } from "react";
import "./Languages.scss";
import { Fade } from "react-reveal";
import { languages } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Languages() {
  const { isDark } = useContext(StyleContext);

  if (!languages.display) return null;

  return (
    <section
      className={
        isDark
          ? "languages-section dark-mode"
          : "languages-section"
      }
      id="languages"
    >
      <Fade bottom duration={800}>
        <div className="languages-container">

          <h2 className="languages-title">
            {languages.title || "Langues"}
          </h2>

          <div className="languages-list">
            {languages.list.map((lang, index) => (
              <div className="language-item" key={index}>
                <span className="language-name">
                  {lang.name}
                </span>

                <span className="language-level">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>

        </div>
      </Fade>
    </section>
  );
}
