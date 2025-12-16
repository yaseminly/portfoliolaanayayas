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
Je suis une étudiante ingénieure MIAGE à l'EMSI Casablanca, passionnée par la convergence entre le développement logiciel, la Data et l'intelligence artificielle. 
Mon approche repose sur la création d'applications intelligentes qui allient technologie, performance et impact humain. 
Autonome, créative et curieuse, j'aime explorer de nouvelles technologies et relever des défis innovants.

💫 Mon objectif : Contribuer à des projets innovants où je peux mettre à profit mes compétences en IA et développement pour créer un impact positif.`,
  image: require("./assets/images/moi.jpeg"),
};

/* ==================== SKILLS SECTION ==================== */
const skillsSection = {
  title: "Skills",
  subTitle: "J'allie développement Full Stack et intelligence artificielle pour concevoir des solutions innovantes.",
  skills: [
    emoji("💡 Développement Full Stack : ReactJS, Spring Boot, Django, ASP.NET MVC"),
    emoji("🧠 IA & Machine Learning : Chatbots, NLP, LLMs, classification et prédiction"),
    emoji("📊 Data Analytics : Power BI, Python, Microsoft Azure"),
    emoji("☁️ Déploiement Cloud & DevOps : Docker, CI/CD, Firebase, Git"),
    emoji("🎯 Bases de données : SQL, PostgreSQL, modélisation et optimisation"),
  ],
  softwareSkills: [
    {
      category: "Backend",
      skills: [
        { skillName: "Java / Spring Boot", fontAwesomeClassname: "fab fa-java" },
        { skillName: "Python / Django  / Flask / FastAPI", fontAwesomeClassname: "fab fa-python" },
        { skillName: "C# / .NET", fontAwesomeClassname: "fas fa-code" },
        { skillName: "SQL / PostgreSQL / MySQL / SQLite / MongoDB", fontAwesomeClassname: "fas fa-database" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { skillName: "ReactJS / Angular", fontAwesomeClassname: "fab fa-react" },
        { skillName: "Streamlit", fontAwesomeClassname: "fas fa-chart-line" },
        { skillName: "HTML / CSS / Sass", fontAwesomeClassname: "fab fa-html5" },
        { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
        { skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap" },
      ],
    },
   
    {
      category: "Data & AI",
      skills: [
        { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-robot" },
        { skillName: "Deep Learning", fontAwesomeClassname: "fas fa-brain" },
        { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
        { skillName: "LangChain", fontAwesomeClassname: "fas fa-link" },
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
        { skillName: "Azure", fontAwesomeClassname: "fas fa-cloud" },
        { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
        { skillName: "Git / GitHub", fontAwesomeClassname: "fab fa-git-alt" },
      ],
    },
     {
      category: "Mobile Development",
      skills: [
        { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
        { skillName: "React Native", fontAwesomeClassname: "fab fa-react" },
      ],
    }
  ],
  display: true
};

/* ==================== EDUCATION ==================== */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
      logo: require("./assets/images/EMSI-.png"),
      subHeader: "Ingénierie MIAGE — Informatique, IA et Systèmes d'Information",
      duration: "2021 - 2026",
      desc: "Spécialisation en systèmes d'information, intelligence artificielle et génie logiciel. Formation couvrant le développement full-stack, la data science et le management de projet."
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
      role: "Stagiaire IA & Knowledge Assistant",
      company: "JESA",
      companylogo: require("./assets/images/jesa1.jpg"),
      date: "Juillet – Août 2025",
      desc: "Développement d'un assistant intelligent basé sur un LLM pour l'exploitation de la base documentaire SharePoint, intégrant NLP et LangChain. Mise en œuvre de techniques RAG pour la recherche sémantique.",
      skills: ["Python", "LangChain", "LLM", "NLP", "RAG", "Chainlit"]
    },
    {
      role: "Stagiaire BI & Reporting",
      company: "Orange Maroc",
      companylogo: require("./assets/images/orange.png"),
      date: "Juillet 2024",
      desc: "Conception de tableaux de bord Power BI pour le suivi des performances techniques B2B, analyse des KPI et automatisation des rapports décisionnels. Optimisation des processus de reporting.",
      skills: ["Power BI", "Data Analysis", "KPI", "Dashboard", "SQL"]
    },
    {
      role: "Stagiaire Développement Logiciel",
      company: "Essanet",
      companylogo: require("./assets/images/essan.png"),
      date: "Juillet 2023",
      desc: "Contribution à une solution logicielle interne : apprentissage approfondi de l'architecture logicielle, du débogage et de l'analyse fonctionnelle. Participation au cycle de développement complet.",
      skills: ["Java", "Spring Boot", "Debugging", "Software Architecture"]
    },
  ]
};

/* ==================== PROJECTS ==================== */
const bigProjects = {
  title: "Projets phares",
  subtitle: "Découvrez mes réalisations techniques les plus significatives",
  projects: [
    {
      image: require("./assets/images/medicare.png"),
      projectName: "Medicare — Assistant médical intelligent",
      projectDesc: "Application Full Stack (ReactJS & Spring Boot) intégrant un chatbot médical intelligent pour accompagner les patients dans la gestion de leurs consultations et rendez-vous. Projet académique réalisé en binôme, mettant en œuvre des technologies modernes d'IA et de développement web.",
      technologies: ["ReactJS", "Spring Boot", "Chatbot", "AI", "PostgreSQL"],
      footerLink: [{ name: "Voir sur GitHub", url: "https://github.com/haitammodli/ADA.git" }],
    },
    {
      image: require("./assets/images/jesaa.png"),
      projectName: "Assistant JESA",
      projectDesc: "Développement d'un assistant intelligent basé sur un LLM pour exploiter la base documentaire interne de JESA sur SharePoint, facilitant la recherche d'informations via le langage naturel grâce à Python, LangChain, Chainlit et aux techniques de NLP et RAG.",
      technologies: ["Python", "LangChain", "LLM", "NLP", "RAG", "Chainlit"],
      footerLink: [{ name: "Voir sur GitHub", url: "https://github.com/yaseminly/Assistant-jesa.git" }],
    },
    { 
      image: require("./assets/images/weather.png"),
      projectName: "Prédiction Climatique", 
      projectDesc: "Développement d'une application de prédiction météorologique via streamlit utilisant des algorithmes de machine learning pour analyser les données climatiques historiques et fournir des prévisions précises. Interface interactive avec visualisation de données et cartographie en temps réel.", 
      technologies: ["Python", "Machine Learning", "TensorFlow", "Streamlit", "Pandas", "Matplotlib", "scikit-learn"],
      footerLink: [{ name: "Voir sur GitHub", url: "https://github.com/yaseminly/WeatherPredictionPFA.git" }],
    },
    { 
      image: require("./assets/images/ebanking.png"),
      projectName: "E-Banking", 
      projectDesc: "Conception et développement d'une plateforme bancaire permettant la gestion de comptes, les virements, la consultation de l'historique des transactions et les opérations bancaires courantes. Basée sur l'architecture des micro-services.", 
      technologies: ["Java", "Spring Boot", "MySQL", "Angular", "REST API"],
      footerLink: [{ name: "Voir sur GitHub", url:"https://github.com/yaseminly/eBanking.git" }],
    },
    { 
      image: require("./assets/images/flutter.png"),
      projectName: "Application Mobile Flutter", 
      projectDesc: "Développement d'une application mobile multifonctionnelle intégrant un chatbot intelligent basé sur RAG (Retrieval-Augmented Generation) pour l'assistance EMSI, et un système de classification de fruits utilisant un modèle CNN converti en TFLite pour l'inférence en temps réel sur mobile.", 
      technologies: ["Flutter", "Dart", "TensorFlow Lite", "RAG", "CNN"],
      footerLink: [] 
    },
    { 
      image: require("./assets/images/travel.png"), 
      projectName: "Travello", 
      projectDesc: "Développement d'un site web en Python dédié à la réservation de vols de voyage à l'aide du framework Django. L'application permet aux utilisateurs de rechercher des vols, consulter les détails prix, destination, horaires, effectuer des réservations en ligne et gérer leurs réservations.", 
      technologies: ["Python", "Django", "SQL", "HTML/CSS"],
      footerLink: [] 
    },
    { 
      image: require("./assets/images/javafx.jpeg"), 
      projectName: "Gestion des tâches personnelles", 
      projectDesc: "Application de bureau développée en JavaFX permettant la création, la modification et le suivi des tâches quotidiennes avec interface utilisateur intuitive et fonctionnalités de priorisation.", 
      technologies: ["Java", "JavaFX", "Desktop App"],
      footerLink: [] 
    }, 
    { 
      image: require("./assets/images/backup.png"), 
      projectName: "DataSafe - Gestion des sauvegardes automatiques",
      projectDesc: "Script shell automatisé de sauvegarde permettant de sélectionner les fichiers ou dossiers à sauvegarder, de planifier les sauvegardes automatiquement, de compresser les données pour économiser l'espace, et de générer des journaux ainsi que des notifications sur l'état des sauvegardes.", 
      technologies: ["Shell Script", "Automation", "Linux"],
      footerLink: [] 
    }, 
    { 
      image: require("./assets/images/ecosm.png"),
      projectName: "eCosmetics", 
      projectDesc: "Développement d'une application e-commerce en ASP.NET MVC dédiée à la vente de produits cosmétiques, intégrant la gestion des utilisateurs, du catalogue et du panier d'achat, avec une interface moderne, responsive et orientée expérience utilisateur.", 
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "E-commerce"],
      footerLink: [] 
    } 
  ], 
  display: true
};

/* ==================== OPEN SOURCE - UNE SEULE DÉCLARATION ==================== */
const openSource = {
  showGithubProfile: "true",
  display: false  // ← DÉSACTIVÉ pour éviter la duplication
};

/* ==================== CERTIFICATIONS ==================== */
const achievementSection = {
  title: emoji("Certifications & Formations "),
  subtitle: "Certifications techniques obtenues via Oracle, Coursera et Microsoft.",
  clusters: [
    {
      clusterTitle: "Oracle & Cloud",
      achievements: [
        { 
          title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional", 
          image: require("./assets/images/oracle1.png"),
          description: "Certification Oracle sur l'infrastructure Cloud et DevOps.",
          footerLink: [
            { 
              name: "Certification ", 
              url:"https://catalog-education.oracle.com/pls/certview/sharebadge?id=2037B4B9759E2914DA37C68E0618F1F3D6E5F42A539BAD3590AEA781E289EF6E"
            }
          ]
        },
        { 
          title: "Modern Data Warehouse Analytics in Microsoft Azure", 
          image: require("./assets/images/courser.png"), 
          description: "Conception et mise en œuvre d'entrepôts de données modernes sur Azure.",
          footerLink: [
            { name: "Certification", url: "https://coursera.org/share/91da72dc1ce2d97010c451b59bf711e4" }
          ]
        }
      ]
    },
    {
      clusterTitle: "Programmation & Développement",
      achievements: [
        { 
          title: "React Basics", 
          image: require("./assets/images/courser.png"), 
          description: "Fondamentaux du développement d'applications avec ReactJS.",
          footerLink: [
            { name: "Certification", url: "https://coursera.org/share/42bd851eb0a16a08dea50ca20c38408c" }
          ]
        },
        { 
          title: "Introduction to Java and Object-Oriented Programming", 
          image: require("./assets/images/courser.png"), 
          description: "Fondamentaux de la programmation Java et des concepts orientés objet.",
          footerLink: [
            { name: "Certification", url: "https://coursera.org/share/f8ade82f01c0e3b101ed85d9823424c6" }
          ]
        },
        { 
          title: "Programming for Everybody (Getting Started with Python)", 
          image: require("./assets/images/courser.png"), 
          description: "Introduction complète à la programmation Python pour débutants.",
          footerLink: [
            { name: "Certification", url: "https://www.coursera.org/account/accomplishments/records/QZSED7Z2L3BC" }
          ]
        }
      ]
    },
    {
      clusterTitle: "Réseaux & Gestion de projet",
      achievements: [
        { 
          title: "Virtual Networks in Azure", 
          image: require("./assets/images/courser.png"), 
          description: "Conception et implémentation de réseaux virtuels dans Microsoft Azure.",
          footerLink: [
            { name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/LNKCRKXACCCV" }
          ]
        },
        { 
          title: "Software Engineering: Software Design and Project Management", 
          image: require("./assets/images/courser.png"), 
          description: "Principes d'ingénierie logicielle, conception et gestion de projet.",
          footerLink: [
            { name: "Certification", url: "https://www.coursera.org/account/accomplishments/records/RXLREMRTE6HY" }
          ]
        }
      ]
    }
  ],
  display: true
};

/* ==================== LANGUAGES ==================== */
const languages = {
  display: true,
  title: "Langues",
  subtitle: "Compétences linguistiques et niveaux de maîtrise",
  list: [
    { name: "Français", level: "Courant - Professionnel" },
    { name: "Anglais", level: "Courant - Professionnel"},
    { name: "Arabe", level: "Natif" },
    { name: "Turc", level: "Conversationnel" }
  ]
};

/* ==================== CONTACT ==================== */
const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle: "Je suis ouverte à toute opportunité de stage PFE ou collaboration dans les domaines IA, Data ou développement Full Stack.",
  email_address: "yasminnln2003@gmail.com",
  location: "Casablanca, Maroc",
  availability: "Disponible pour un stage PFE à partir de Février 2025"
};

/* ==================== FOOTER / JOB STATUS ==================== */
const resumeSection = {
  title: "Mon CV",
  subtitle: "Téléchargez mon CV pour un aperçu détaillé de mon parcours et compétences",
  display: true,
  downloadLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

const twitterDetails = {
  userName: "YasmineLaanaya",
  display: false
};

const isHireable = true;

/* ==================== EXPORT ==================== */
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