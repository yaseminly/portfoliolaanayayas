import React, {useContext} from "react";
import "./Podcast.scss";
// L'import de podcastSection et StyleContext n'est pas utilisé dans cette fonction, mais conservé par bonne pratique
import {podcastSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast({ podcast = {
  title: "Podcast 🎙️",
  subtitle: "An empowering conversation on how AI transforms software development and inspires innovation in tech.",
  link: "https://www.youtube.com/watch?v=Uc3mUIF1bP0",
  embed: "https://www.youtube.com/embed/Uc3mUIF1bP0"
} }) {
  // L'utilisation de StyleContext est conservée, même si non visible dans la logique actuelle
  const { isDark } = useContext(StyleContext); 

  return (
    // La section est le point d'ancrage, les styles de largeur sont gérés par .podcast-main-div
    <section id="podcast">
      <Fade bottom duration={1000} distance="40px">
        
        {/* Application des classes CSS pour le titre centré */}
        <h2 className="podcast-header-title">{podcast.title}</h2>
        
        {/* Application des classes CSS pour le sous-titre centré */}
        <p className="podcast-header-subtitle">{podcast.subtitle}</p>

        {/* Le div principal gère le 100vw et le centrage du player */}
        <div className="podcast-main-div">
          <iframe
            className="podcast" // Utilise la classe full-width et height
            src={podcast.embed}
            title="Podcast - AI in Software Development"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Fade>
    </section>
  );
}