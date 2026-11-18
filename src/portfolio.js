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
     "Ingénieure Logiciel spécialisée MIAGE. Expertise en intégration ERP/CRM, architectures IA (RAG) et programmation SQL/PL-SQL. Je conçois des solutions full-stack (Java/Spring Boot, Angular) performantes en intégrant nativement la culture DevOps (Docker, CI/CD)."
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
  subtitle: "Un profil polyvalent, entre technologie et métier.",
  description:
    "Mon parcours m’a permis d’explorer plusieurs domaines complémentaires : développement d’applications, intégration de solutions CRM/BSS, intelligence artificielle et analyse de données. Mes expériences chez Inetum, JESA et Orange Maroc m’ont appris à travailler sur des problématiques concrètes, à découvrir de nouvelles technologies et à transformer des besoins métier en solutions digitales. Curieuse et motivée par l’apprentissage continu, je souhaite continuer à évoluer sur des projets à forte valeur ajoutée.",
  image: require("./assets/images/moi.jpeg")
};


/* ==================== SKILLS SECTION ==================== */


const skillsSection = {
  title: "Mes expertises",
  subTitle: "Des compétences techniques au service des besoins métier.",
  display: true,

  skills: [
    "Développement d'applications web et logiciel",
    "Intégration et paramétrage de solutions ERP / CRM",
    "Conception d'assistants IA et architectures RAG",
    "Analyse de données et création de tableaux de bord BI",
    "Conteneurisation, Cloud et pratiques DevOps"
  ],

  softwareSkills: [
    {
      category: "Développement",
      skills: [
        {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
        {skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf"},
        {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
        {skillName: "C# / .NET", fontAwesomeClassname: "fas fa-code"},
        {skillName: "React", fontAwesomeClassname: "fab fa-react"},
        {skillName: "Angular", fontAwesomeClassname: "fab fa-angular"},
        {skillName: "JavaScript / TypeScript", fontAwesomeClassname: "fab fa-js"}
      ]
    },
    {
      category: "ERP / CRM & Bases de données",
      skills: [
        {skillName: "Odoo", fontAwesomeClassname: "fas fa-cubes"},
        {skillName: "Sage X3", fontAwesomeClassname: "fas fa-cogs"},
        {skillName: "CRM / BSS", fontAwesomeClassname: "fas fa-project-diagram"},
        {skillName: "SQL Server", fontAwesomeClassname: "fas fa-database"},
        {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
        {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"}
      ]
    },
    {
      category: "Data & Intelligence Artificielle",
      skills: [
        {skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar"},
        {skillName: "RAG", fontAwesomeClassname: "fas fa-brain"},
        {skillName: "LangChain", fontAwesomeClassname: "fas fa-link"},
        {skillName: "ChromaDB", fontAwesomeClassname: "fas fa-database"},
        {skillName: "Ollama", fontAwesomeClassname: "fas fa-robot"},
        {skillName: "Machine Learning", fontAwesomeClassname: "fas fa-chart-line"}
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
        {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
        {skillName: "CI/CD", fontAwesomeClassname: "fas fa-sync-alt"},
        {skillName: "Azure", fontAwesomeClassname: "fas fa-cloud"},
        {skillName: "Oracle Cloud", fontAwesomeClassname: "fas fa-server"}
      ]
    }
  ]
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
      role: "Développement & Intégration – PFE",
      company: "Inetum",
      companylogo: require("./assets/images/inetum.png"),
      date: "Février – Août 2026",
      desc:
        "Participation au développement d'une solution de suivi des ventes et à l'intégration d'une solution CRM/BSS dans un environnement télécom.",
      descBullets: [
        "Développement d'une application de gestion des ventes libres et des ventes à recharges avec Angular, Spring Boot et MySQL.",
        "Contribution à l'intégration CRM/BSS : configuration, paramétrage et réalisation de tests fonctionnels.",
        "Participation aux phases de déploiement en collaboration avec l'équipe technique et DevOps."
      ]
    },
    {
      role: "Développement IA & Knowledge Assistant",
      company: "JESA",
      companylogo: require("./assets/images/jesa1.png"),
      date: "Juillet – Septembre 2025",
      desc:
        "Contribution à la conception d'un assistant intelligent permettant d'interroger des documents internes en langage naturel.",
      descBullets: [
        "Mise en place d'une architecture RAG pour la recherche contextuelle dans les documents.",
        "Développement du backend avec Python et FastAPI et de l'interface avec React et TypeScript.",
        "Utilisation de ChromaDB pour la recherche vectorielle et de SQL Server pour le stockage des données.",
        "Intégration d'un modèle de langage local avec Ollama."
      ]
    },
    {
      role: "BI & Reporting",
      company: "Orange Maroc",
      companylogo: require("./assets/images/orange.png"),
      date: "Juillet 2024",
      desc:
        "Participation aux activités de Business Intelligence et au suivi des indicateurs de performance de l'activité B2B.",
      descBullets: [
        "Création et amélioration de tableaux de bord avec Power BI.",
        "Analyse et suivi des KPI pour faciliter le pilotage de l'activité.",
        "Exploitation des données pour produire des rapports de suivi."
      ]
    },
    {
      role: "Stagiaire Informatique",
      company: "GSMAG / Essanet Maroc",
      companylogo: require("./assets/images/essan.png"),
      date: "Juillet 2023",
      desc:
        "Découverte d'un environnement informatique professionnel et prise en main d'un logiciel interne.",
      descBullets: [
        "Découverte des fonctionnalités du logiciel et de son utilisation dans les activités quotidiennes.",
        "Familiarisation avec les processus et les flux métier de l'entreprise."
      ]
    }
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
  clusterTitle: "SAP & ERP",
  achievements: [
    {
  title: "Exploring SAP Cloud ERP",
  image: require("./assets/images/sap.png"),
  description: "Découverte de SAP Cloud ERP, de ses fonctionnalités et de son rôle dans la gestion intégrée des processus métier.",
  footerLink: [
    {
      name: "SAP Learning",
      url: "https://badger.learning.sap.com/verify/xygyh-tuvyb-nohok-hosok-favap"
    }
  ]
},
    {
      title: "Exploring SAP S/4HANA Cloud, Public Edition – Retail",
      image: require("./assets/images/sap.png"),
      description: "Gestion des opérations Retail : articles, stocks, approvisionnement, réapprovisionnement et distribution des marchandises.",
      footerLink: [
        {
          name: "SAP Learning",
          url: "https://badger.learning.sap.com/verify/xyvap-kevas-sysyb-bisig-miviv"
        }
      ]
    },
    {
      title: "Executing Basic ERP Processes with SAP S/4HANA",
      image: require("./assets/images/sap.png"),
      description: "Maîtrise des processus ERP : Procure-to-Pay, Plan-to-Produce et Order-to-Cash.",
      footerLink: [
        {
          name: "SAP Learning",
          url: "https://badger.learning.sap.com/verify/xyhek-pefaf-hecef-baryd-rydeb"
        }
      ]
    }
  ]
},

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
  phone_number: "+212 6 94 37 37 12",
  number: "+212 6 94 37 37 12", // Ajouté pour garantir l'affichage selon le template
  location: "Casablanca, Maroc",
  display: true
};

/* ==================== CV SECTION ==================== */
const resumeSection = {
  title: "Parcours Complet",
  subtitle: "Consulter mon CV détaillé en PDF.",
  display: true,
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