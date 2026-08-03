/* ==== YASMINE LAANAYA | Portfolio ==== */

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
  title: "Yasmine — Software Engineer | AI, ERP & DevOps Expert",
  subTitle: emoji(
    "Ingénieure Logiciel spécialisée MIAGE. Expertise pointue en intégration ERP/CRM, conception d'architectures IA (RAG) et orchestration DevOps pour des solutions industrielles performantes."
  ),
  displayGreeting: true
};

/* ==================== SOCIAL MEDIA ==================== */
const socialMediaLinks = {
  github: "https://github.com/yaseminly",
  linkedin: "https://www.linkedin.com/in/yasmine-laanaya-81819431b/",
  gmail: "mailto:yasminelaanayapro@gmail.com",
  display: true
};

/* ==================== ABOUT ME ==================== */
const aboutSection = {
  display: true,
  title: "À propos de moi",
  description: `
Ingénieure en Informatique spécialisée MIAGE, je maîtrise la conception d'architectures logicielles complexes alliant performance technique et vision métier.

Forte d'une solide expertise en développement Full Stack avec **Java (Spring Boot)**, **React** et **Angular**, je me spécialise dans l'intégration de solutions **ERP/CRM** (Odoo, Sage) et le déploiement d'**IA Générative** (RAG, LangChain). Mon approche intègre nativement la culture **DevOps** (CI/CD, Docker, Monitoring) pour garantir des cycles de livraison fluides et une qualité industrielle.

💫 Mon crédo : Transformer des besoins métiers complexes en solutions technologiques intelligentes et scalables.`,
  image: require("./assets/images/moi.jpeg"),
};

/* ==================== SKILLS SECTION ==================== */
const skillsSection = {
  title: "Expertises Stratégiques",
  subTitle: "Un profil hybride alliant excellence technique et vision processus métier.",
  skills: [
    emoji("🏢 Architectures ERP/CRM : Maîtrise des flux métiers, paramétrage Odoo 17, Sage et modélisation de catalogues complexes via CPML."),
    emoji("🧠 Intelligence Artificielle : Conception de pipelines RAG (Retrieval-Augmented Generation), intégration de LLMs et automatisation via LangChain."),
    emoji("♾️ DevOps & Qualimétrie : Automatisation CI/CD (GitLab), conteneurisation Docker, audit SonarCloud et monitoring proactif via Grafana."),
    emoji("💻 Excellence Full Stack : Développement d'applications robustes avec Java (Spring Boot), Angular 16+, React et architectures Micro-services."),
    emoji("📊 Data Intelligence : Analyse de KPIs critiques, reporting décisionnel via Power BI et optimisation de bases de données SQL/PostgreSQL."),
  ],
  softwareSkills: [
    {
      category: "Solutions Métiers (ERP/CRM)",
      skills: [
        { skillName: "Odoo 17", fontAwesomeClassname: "fas fa-briefcase" },
        { skillName: "Sage", fontAwesomeClassname: "fas fa-file-invoice-dollar" },
        { skillName: "CRM CPML (PIM, PC, TUM)", fontAwesomeClassname: "fas fa-users-cog" },
        { skillName: "Power BI / Reporting", fontAwesomeClassname: "fas fa-chart-bar" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { skillName: "Java / Spring Boot", fontAwesomeClassname: "fab fa-java" },
        { skillName: "C# / .NET Core / ASP.NET", fontAwesomeClassname: "fab fa-windows" },
        { skillName: "Python / Django", fontAwesomeClassname: "fab fa-python" },
        { skillName: "PHP / SQL / PostgreSQL", fontAwesomeClassname: "fab fa-php" },
      ],
    },
    {
      category: "Frontend & Mobile",
      skills: [
        { skillName: "React / Next.js", fontAwesomeClassname: "fab fa-react" },
        { skillName: "Angular 16+", fontAwesomeClassname: "fab fa-angular" },
        { skillName: "TypeScript / JavaScript", fontAwesomeClassname: "fab fa-js" },
        { skillName: "Dart / Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
      ],
    },
    {
      category: "IA, DevOps & Qualité",
      skills: [
        { skillName: "IA Générative / RAG", fontAwesomeClassname: "fas fa-brain" },
        { skillName: "Docker / Kubernetes", fontAwesomeClassname: "fab fa-docker" },
        { skillName: "CI/CD / GitLab", fontAwesomeClassname: "fab fa-gitlab" },
        { skillName: "Grafana / SonarCloud", fontAwesomeClassname: "fas fa-chart-line" },
      ],
    }
  ],
  display: true}

/* ==================== EDUCATION ==================== */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
      logo: require("./assets/images/EMSI-.png"),
      subHeader: "Ingénierie MIAGE — Informatique, IA et Systèmes d'Information",
      duration: "2021 - 2026",
      desc: "Spécialisation en systèmes d'information, intelligence artificielle et génie logiciel."
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
      role: "Ingénieure Logiciel & DevOps (Stagiaire PFE)",
      company: "Inetum",
      companylogo: require("./assets/images/inetum.png"),
      date: "Février – Août 2026",
      desc: "Pilotage sur le projet CRM (Télécom) : Modélisation de catalogues complexes via CPML (Modules PIM, PC, TUM, BR). Projet DTS : Architecture Full Stack Angular/Spring Boot. Automatisation d'ingestion de données (Java/Apache POI). Stratégie de Qualité : Tests E2E, Sanity Checks, Non-régression (Mockito/JUnit 5), monitoring Grafana et audit continu SonarCloud.",
      skills: ["CRM Télécom", "CPML", "DevOps", "Grafana", "Spring Boot", "Angular", "QA Testing"]
    },
    {
      role: "Ingénieure IA & Knowledge Assistant",
      company: "JESA",
      companylogo: require("./assets/images/jesa1.png"),
      date: "Juillet – Septembre 2025",
      desc: "Transformation de la base SharePoint en moteur de connaissance intelligent via une architecture RAG, LangChain et chainlit pour des recherches sémantiques contextuelles.",
      skills: ["Python", "LangChain", "LLM", "RAG", "NLP"]
    },
    {
      role: "Analyste BI & Reporting",
      company: "Orange Maroc",
      companylogo: require("./assets/images/orange.png"),
      date: "Juillet 2024",
      desc: "Optimisation du pilotage B2B par la création de dashboards Power BI complexes et l'automatisation de l'analyse des KPIs d'ingénierie.",
      skills: ["Power BI", "Data Analysis", "SQL", "KPI Optimization"]
    },
    {
      role: "Stagiaire Informatique",
      company: "GSMAG / Essanet Maroc",
      companylogo: require("./assets/images/essan.png"),
      date: "Juillet 2023",
      desc: "Prise en main et exploitation du logiciel interne — Compréhension des flux métiers et exécution de tâches opérationnelles..",
      skills: ["Sage", "Business Flows", "ERP Management", "SQL"]
    },
  ]
};

/* ==================== PROJECTS ==================== */
const bigProjects = {
  title: "Projets Phares",
  subtitle: "Des solutions concrètes répondant à des enjeux métiers réels.",
  projects: [
    {
      image: require("./assets/images/Odoo.webp"),
      projectName: "ERP Customization (Odoo 17)",
      projectDesc: "Développement d'un module ERP sur-mesure pour la gestion des soutenances. Déploiement conteneurisé sous Docker.",
      technologies: ["Odoo 17", "Python", "Docker", "Workflows"],
      footerLink: [],
    },
    {
      image: require("./assets/images/medicare.png"),
      projectName: "Medicare — Assistant Médical IA",
      projectDesc: "Solution e-santé intelligente (React & Spring Boot) avec diagnostic assisté et gestion dynamique des consultations.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "AI Engine"],
      footerLink: [{ name: "GitHub", url: "https://github.com/yaseminly/MediCare.git" }],
    },
    {
      image: require("./assets/images/jesaa.png"),
      projectName: "Semantic Search Assistant",
      projectDesc: "Assistant conversationnel exploitant les LLMs pour interroger des documents techniques via LangChain.",
      technologies: ["Python", "LangChain", "RAG", "Vector DB"],
      footerLink: [{ name: "GitHub", url: "https://github.com/yaseminly/Assistant-jesa.git" }],
    },
    { 
      image: require("./assets/images/weather.png"),
      projectName: "ML Climate Predictor", 
      projectDesc: "Moteur de prévision climatique via Machine Learning (Streamlit).", 
      technologies: ["Python", "Machine Learning", "Streamlit"],
      footerLink: [{ name: "GitHub", url: "https://github.com/yaseminly/WeatherPredictionPFA.git" }],
    },
    { 
      image: require("./assets/images/backup.png"), 
      projectName: "DataSafe Automation",
      projectDesc: "Script Shell automatisé pour la gestion des sauvegardes critiques Linux.", 
      technologies: ["Shell Script", "Automation", "Linux"],
      footerLink: [] 
    }
  ], 
  display: true
};

/* ==================== OPEN SOURCE ==================== */
const openSource = {
  showGithubProfile: "true",
  display: false
};

/* ==================== CERTIFICATIONS ==================== */
const achievementSection = {
title: emoji("Certifications & Expertise 🏆"),
subtitle: "Validation académique et professionnelle de mes compétences.",
clusters: [
{
clusterTitle: "Oracle & Cloud DevOps",
achievements: [
{
title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
image: require("./assets/images/oracle1.png"),
description: "Maîtrise des cycles de livraison logicielle sur OCI.",
footerLink: [{ name: "Badge", url:"https://catalog-education.oracle.com/pls/certview/sharebadge?id=2037B4B9759E2914DA37C68E0618F1F3D6E5F42A539BAD3590AEA781E289EF6E" }]
},
{
title: "Microsoft Azure: Modern Data Warehouse",
image: require("./assets/images/courser.png"),
description: "Architecture de données Analytics sur Azure.",
footerLink: [{ name: "Vérifier", url: "https://coursera.org/share/91da72dc1ce2d97010c451b59bf711e4" }]
}
]
},
{
clusterTitle: "Développement Full Stack",
achievements: [
{
title: "React Basics (Meta)",
image: require("./assets/images/courser.png"),
description: "Développement d'interfaces web modernes avec ReactJS.",
footerLink: [{ name: "Certification", url: "https://coursera.org/share/42bd851eb0a16a08dea50ca20c38408c" }]
},
{
title: "Java & Object-Oriented Programming",
image: require("./assets/images/courser.png"),
description: "Ingénierie logicielle Java avancée.",
footerLink: [{ name: "Certification", url: "https://coursera.org/share/f8ade82f01c0e3b101ed85d9823424c6" }]
}
]
},
{
clusterTitle: "Infrastructure & Management",
achievements: [
{
title: "Virtual Networks in Azure",
image: require("./assets/images/courser.png"),
description: "Gestion des réseaux virtuels Cloud.",
footerLink: [{ name: "Vérifier", url: "https://www.coursera.org/account/accomplishments/verify/LNKCRKXACCCV" }]
},
{
title: "Software Design & Project Management",
image: require("./assets/images/courser.png"),
description: "Conception logicielle et gestion de projet Agile.",
footerLink: [{ name: "Vérifier", url: "https://www.coursera.org/account/accomplishments/records/RXLREMRTE6HY" }]
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
  subtitle: "Communication fluide dans des environnements internationaux.",
  list: [
    { name: "Français", level: "Professionnel" },
    { name: "Anglais", level: "Professionnel"},
    { name: "Arabe", level: "Natif" },
    { name: "Turc", level: "Conversationnel" }
  ]
};

/* ==================== CONTACT ==================== */
const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle: "À l'écoute d'opportunités ambitieuses en Ingénierie Logicielle, IA et SI.",
  email_address: "yasminelaanayapro@gmail.com",
  location: "Casablanca, Maroc",
};

/* ==================== CV SECTION ==================== */
const resumeSection = {
  title: "Parcours Complet",
  subtitle: "Consulter mon CV détaillé en PDF.",
  display: true,
  // Ajoute process.env.PUBLIC_URL pour être sûre que React trouve le chemin
  downloadLink: process.env.PUBLIC_URL + "/CV2026.pdf" 
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