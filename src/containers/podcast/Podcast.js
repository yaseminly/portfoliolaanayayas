import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast({ podcast = {
  title: "Podcast 🎙️",
  subtitle: "An empowering conversation on how AI transforms software development and inspires innovation in tech.",
   link: "https://www.youtube.com/watch?v=Uc3mUIF1bP0",
  embed: "https://www.youtube.com/embed/Uc3mUIF1bP0"
} }) {
  return (
    <section id="podcast" className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{podcast.title}</h2>
      <p className="text-sm mb-4">{podcast.subtitle}</p>

   <div className="podcast-main-div">
  <iframe
    className="podcast"
    src={podcast.embed}
    title="Podcast - AI in Software Development"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
      </div>
    </section>
  );
}