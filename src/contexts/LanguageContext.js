
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    projects: "Projets",
    certifications: "Certifications",
    contact: "Contact",
    greeting: "Bonjour, je suis",
    title: "Concevoir des solutions technologiques adaptées aux besoins réels.",
    description:
      "Jeune diplômée en ingénierie informatique, spécialité MIAGE, de l'EMSI Casablanca. Je m'intéresse au développement logiciel, aux systèmes d'entreprise, à l'intelligence artificielle et à l'automatisation.",
    explore: "Découvrir mes projets",
    download: "Télécharger mon CV",
  },

  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
    greeting: "Hello, I'm",
    title: "Building technology around real needs.",
    description:
      "Computer Engineering graduate in MIAGE from EMSI Casablanca, interested in software development, enterprise systems, artificial intelligence and automation.",
    explore: "Explore my projects",
    download: "Download my CV",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "fr" ? "en" : "fr"));
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
