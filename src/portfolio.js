/* ==== YASMINE LAANAYA | Portfolio ==== */
/* Personnalisez les couleurs globales dans _globalColor.scss */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* ==================== SPLASH SCREEN ==================== */
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/* ==================== GREETING SECTION ==================== */
const illustration = { animated: true };

const greeting = {
  username: "Yasmine Laanaya",
 title: "Yasmine — Software Engineer | AI & Data Innovator",
subTitle: emoji(
  "Driven by innovation and data, I design intelligent, data-powered applications that bridge AI, analytics, and software engineering to deliver meaningful solutions."
),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

/* ==================== SOCIAL MEDIA ==================== */
const socialMediaLinks = {
  github: "https://github.com/yaseminly",
  linkedin: "https://www.linkedin.com/in/yasmine-laanaya-81819431b/",
  gmail: "mailto:yasminnln2003@gmail.com",
  display: true
};

/* ==================== ABOUT ME ==================== */
const aboutSection = {
  display: true,
  title: "À propos de moi",
  description: `
Je suis une étudiante ingénieure MIAGE à l’EMSI Casablanca, passionnée par la convergence entre le développement logiciel, la Data et l’intelligence artificielle. 
Mon approche repose sur la création d’applications intelligentes qui allient technologie, performance et impact humain. 
Autonome, créative et curieuse, j’aime explorer de nouvelles technologies et relever des défis innovants.`,
  image: require("./assets/images/moi.jpeg"),
};

/* ==================== SKILLS SECTION ==================== */
const skillsSection = {
  title: "Ce que je fais",
  subTitle: "J’allie développement Full Stack et intelligence artificielle pour concevoir des solutions innovantes.",
  skills: [
    emoji("💡 Développement Full Stack : ReactJS, Spring Boot, Django, ASP.NET MVC"),
    emoji("🧠 IA & Machine Learning : Chatbots, NLP, LLMs, classification et prédiction"),
    emoji("📊 Data Analytics : Power BI, Python, Microsoft Azure"),
    emoji("☁️ Déploiement Cloud & DevOps : Docker, CI/CD, Firebase, Git"),
  ],
  softwareSkills: [
    {
      category: "Backend",
      skills: [
        { skillName: "Java / Spring Boot", fontAwesomeClassname: "fab fa-java" },
        { skillName: "Python / Django", fontAwesomeClassname: "fab fa-python" },
        { skillName: "C# / .NET", fontAwesomeClassname: "fas fa-code" },
        { skillName: "SQL / PostgreSQL", fontAwesomeClassname: "fas fa-database" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { skillName: "ReactJS / Angular", fontAwesomeClassname: "fab fa-react" },
        { skillName: "HTML / CSS / Sass", fontAwesomeClassname: "fab fa-html5" },
        { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js-square" },
      ],
    },
    {
      category: "Data & AI",
      skills: [
        { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-robot" },
        { skillName: "Deep Learning", fontAwesomeClassname: "fas fa-brain" },
        { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
        { skillName: "Azure", fontAwesomeClassname: "fas fa-cloud" },
        { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
        { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
      ],
    },
  ],
  display: true
};

/* ==================== EDUCATION ==================== */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "École Marocaine des Sciences de l’Ingénieur (EMSI)",
      logo: require("./assets/images/EMSI-.png"),
      subHeader: "Ingénierie MIAGE — Informatique, IA et Systèmes d’Information",
      duration: "2021 - 2026",
    },
    {
      schoolName: "Lycée Les Crêtes",
      logo: require("./assets/images/cretes.png"),
      subHeader: "Baccalauréat en Sciences Physiques et Chimiques",
      duration: "2019 - 2020",
    },
  ]
};

/* ==================== EXPERIENCE ==================== */
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Stagiaire",
      company: "Essanet",
      companylogo: require("./assets/images/essan.png"),
      date: "Juillet 2023",
      desc: "Contribution à une solution logicielle interne : apprentissage approfondi de l’architecture logicielle, du débogage et de l’analyse fonctionnelle."
    },
    {
      role: "Stagiaire BI & Reporting",
      company: "Orange Maroc",
      companylogo: require("./assets/images/orange.png"),
      date: "Juillet 2024",
      desc: "Conception de tableaux de bord Power BI pour le suivi des performances techniques B2B, analyse des KPI et automatisation des rapports décisionnels."
    },
    {
      role: "Stagiaire IA & Knowledge Assistant",
      company: "JESA",
      companylogo: require("./assets/images/jesa1.jpg"),
      date: "Juillet – Août 2025",
      desc: "Développement d’un assistant intelligent basé sur un LLM pour l’exploitation de la base documentaire SharePoint, intégrant NLP et LangChain."
    },
  ]
};

/* ==================== PROJECTS ==================== */
const bigProjects = {
  title: "Projets phares",
  projects: [
    {
      image: require("./assets/images/medicare.png"),
      projectName: "Medicare — Assistant médical intelligent",
     projectDesc: "Application Full Stack (ReactJS & Spring Boot) intégrant un chatbot médical intelligent pour accompagner les patients dans la gestion de leurs consultations et rendez-vous. Projet académique réalisé en binôme, mettant en œuvre des technologies modernes d’IA et de développement web.",
      footerLink: [{ name: "Voir sur GitHub", url: "https://github.com/haitammodli/ADA.git" }],
    },
    
    {
      image: require("./assets/images/jesaa.png"),
      projectName: "Assistant JESA",
      projectDesc: "Développement d’un assistant intelligent basé sur un LLM pour exploiter la base documentaire interne de JESA sur SharePoint, facilitant la recherche d’informations via le langage naturel grâce à Python, LangChain, Chainlit et aux techniques de NLP et RAG.",
      footerLink: [{ name: "Voir sur GitHub", url: "https://github.com/yaseminly/Assistant-jesa.git" }],
    },
    { image: require("./assets/images/travel.png"), projectName: "Travello", projectDesc: " Développement d’un site web en Python dédié à la réservation de vols de voyage à l’aide du framework Django. L’application permet aux utilisateurs de rechercher des vols, consulter les détails prix, destination, horaires, effectuer des réservations en ligne et gérer leurs réservations.", footerLink: [ ] },
  

{ 
  image: require("./assets/images/javafx.jpeg"), 
  projectName: "Géstion des taches personnelles", 
  projectDesc: "Application de bureau développée en JavaFX permettant la création, la modification et le suivi des tâches quotidiennes.", 
  footerLink: [ ] }, 
  { image: require("./assets/images/backup.png"), 
    projectName: "DataSafe - gestion des sauvegardes automatiques",
     projectDesc: "Ce projet consiste à créer un script shell automatisé de sauvegarde permettant de sélectionner les fichiers ou dossiers à sauvegarder, de planifier les sauvegardes automatiquement, de compresser les données pour économiser l’espace, et de générer des journaux ainsi que des notifications sur l’état des sauvegardes.", 
     footerLink: [ ] }, 
     { image: require("./assets/images/ecosm.png"),
       projectName: "eCosmetics", 
       projectDesc: "Développement d’une application e-commerce en ASP.NET MVC dédiée à la vente de produits cosmétiques, intégrant la gestion des utilisateurs, du catalogue et du panier d’achat, avec une interface moderne, responsive et orientée expérience utilisateur. ", footerLink: [ ] } 
      ], display: true // Set false to hide this section, defaults to true 
      // 
      };

/* ==================== CERTIFICATIONS ==================== */
const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Formations et certifications obtenues via Coursera et Microsoft.",
  achievementsCards: [
   { title: "Virtual Networks in Azure", image: require("./assets/images/courser.png"), footerLink: [ { name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/LNKCRKXACCCV" }, ] }, { title: "Introduction to Java and Object-Oriented Programming", image: require("./assets/images/courser.png"), footerLink: [ { name: "Certification", url: "https://coursera.org/share/f8ade82f01c0e3b101ed85d9823424c6" } ] }, { title: "Programming for Everybody (Getting Started with Python)", image: require("./assets/images/courser.png"), footerLink: [ { name: "Certification", url: "https://www.coursera.org/account/accomplishments/records/QZSED7Z2L3BC" } ] }, { title: "Introduction à la programmation orientée objet (en C++)", image: require("./assets/images/courser.png"), footerLink: [ { name: "Certification", url: "https://www.coursera.org/account/accomplishments/records/2VUJL8UC8TJY" } ] }, { title: "Modern Data Warehouse Analytics in Microsoft Azure", image: require("./assets/images/courser.png"), footerLink: [ { name: "Certification", url: "https://coursera.org/share/91da72dc1ce2d97010c451b59bf711e4" } ] }, { title: "Software Engineering: Software Design and Project Management", image: require("./assets/images/courser.png"), footerLink: [ { name: "Certification", url: "https://www.coursera.org/account/accomplishments/records/RXLREMRTE6HY" } ] }, { title: "React Basics", image: require("./assets/images/courser.png"), footerLink: [ { name: "Certification", url: "https://coursera.org/share/42bd851eb0a16a08dea50ca20c38408c" } ] }, { title: "The Unix Workbench", image: require("./assets/images/courser.png"), footerLink: [ {name: "Certification", url: "https://www.coursera.org/account/accomplishments/records/3FQZWLRQLKC5/"}, ] } ], display: true // Set false to hide this section, defaults to true 
   // 
   };


/* ==================== LANGUAGES ==================== */
const languages = {
  display: true,
  title: "Langues",
  list: [
    { name: "Français", level: "Courant - Professionnel" },
    { name: "Anglais", level: "Courant - Professionnel" },
    { name: "Arabe", level: "Natif" },
    { name: "Turc", level: "Conversationnel" }
  ]
};

/* ==================== CONTACT ==================== */
const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle: "Je suis ouverte à toute opportunité de stage ou collaboration dans les domaines IA, Data ou développement Full Stack.",
  email_address: "yasminnln2003@gmail.com"
};

/* ==================== FOOTER / JOB STATUS ==================== */
/* ---------- TEMP FIXES (to avoid build errors) ---------- */

const openSource = {
  showGithubProfile: "true", // Affiche ton profil GitHub dans la page Projects
  display: true // true pour afficher la section Open Source
};

const resumeSection = {
  title: "My Resume",
  subtitle: "Get a detailed overview of my background and skills",
  display: false, // tu peux mettre true si tu veux afficher un bouton CV
  downloadLink: "https://your-resume-link.pdf" // à remplacer par ton lien réel
};

const twitterDetails = {
  userName: "YasmineLaanaya", // ton identifiant Twitter (ou X)
  display: false // tu peux activer plus tard si tu veux
};

const isHireable = true;
/* ---------- Export corrected ---------- */
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  aboutSection,
  workExperiences,
  educationInfo,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  languages,
  splashScreen,
  openSource,
  resumeSection,
  twitterDetails,
   illustration
};
