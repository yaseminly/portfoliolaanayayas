
import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {
  useEffect(() => {
    const button = document.getElementById("topButton");

    if (!button) return;

    const scrollFunction = () => {
      const scrollPosition =
        document.body.scrollTop || document.documentElement.scrollTop;

      button.style.visibility =
        scrollPosition > 20 ? "visible" : "hidden";
    };

    window.addEventListener("scroll", scrollFunction);

    // Vérifier la position initiale
    scrollFunction();

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topEvent = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={topEvent}
      id="topButton"
      title="Retour en haut"
      aria-label="Retour en haut"
      type="button"
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
