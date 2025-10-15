/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yasmine Laanaya",
  title: "Yasmine Laanaya - Software Engineer",
  subTitle: emoji(
    "Étudiante ingénieure MIAGE | Développeuse Full Stack | Passionnée d’IA de Data et d’innovation"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yaseminly",
  linkedin: "https://www.linkedin.com/in/yasmine-laanaya-81819431b/",
  gmail: "yasminnln2003@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "I don't just code features, I code intelligence.",
  skills: [
    emoji(`
Ingénieure MIAGE - Spécialisée en Développement Full-Stack & Intégration IA/ML.
- Conception et développement d'applications web/mobiles full-stack.
- Intégration de modèles d'IA/ML (Machine Learning, LLM, Computer Vision).
- Architecture microservices et APIs REST/GraphQL.
- Déploiement cloud et mise en œuvre de pipelines CI/CD.
- Application des principes SOLID, design patterns et méthodes agiles.
    `)
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java 17",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "llm",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "machine learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "DotNet",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Django",
  fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Jakatra EE",
      fontAwesomeClassname: "fas fa-coffee"
    },
    {
  skillName: "Spring Boot",
  fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Microsoft Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "UML / MERISE",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EMSI",
      logo: require("./assets/images/EMSI-.png"),
      subHeader: "Software Engineer",
      duration: "2021 - 2026",
      
      
    },
    {
      schoolName: "LES CRETES",
      logo: require("./assets/images/cretes.png"),
      subHeader: "Baccalauréat en science physique et chimie biof",
      duration: "2019-2020",
      
      
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience



// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
        {
      role: "Stagiaire",
      company: "Essanet",
      companylogo: require("./assets/images/essan.png"),
      date: "Juillet 2023",
      desc: " J'ai eu l'opportunité de travailler sur une solution logicielle développée par mon superviseur, ce qui m'a permis d'approfondir ma compréhension de l'architecture logicielle, du débogage et de l'analyse fonctionnelle."
    },
    {
      role: "Stagiaire ",
      company: "Orange Maroc",
      companylogo: require("./assets/images/orange.png"),
      date: "Juillet 2024",
      desc: "Conception de tableaux de bord Power BI pour l’analyse des indicateurs de performance (KPI) et le pilotage des performances techniques B2B.",
    },
    {
      role: "Stagiaire",
      company: "Jesa",
      companylogo: require("./assets/images/jesa1.jpg"),
      date: "Juillet 2025 – Aout 2025",
      desc: "Développement d’un assistant intelligent basé sur un LLM pour l’exploitation de la base documentaire SharePoint."
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  
  projects: [
    {
      image: require("./assets/images/medicare.png"),
      projectName: "Medicare",
      projectDesc: "développement un assistant médical intelligent en reactJs et Spring Boot, doté d’un chatbot conversationnel, afin d’accompagner les patients dans la gestion des consultations, la prise de rendez-vous et le suivi médical et de l’accès à l’information.",
      footerLink: [
        
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/jesaa.png"),
      projectName: "Assistant-JESA",
      projectDesc: "Développement d’un assistant intelligent basé sur un LLM pour exploiter la base documentaire interne de JESA sur SharePoint, facilitant la recherche d’informations via le langage naturel grâce à Python, LangChain, Chainlit et aux techniques de NLP",
      footerLink: [
        
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/travel.png"),
      projectName: "Travello",
      projectDesc: " Développement d’un site web en Python dédié à la réservation de vols de voyage à l’aide du framework Django. L’application permet aux utilisateurs de rechercher des vols, consulter les détails prix, destination, horaires, effectuer des réservations en ligne et gérer leurs réservations.",
      footerLink: [
        
      ]
    },
    
    {
      image: require("./assets/images/javafx.jpeg"),
      projectName: "Géstion des taches personnelles",
      projectDesc: "Application de bureau développée en JavaFX permettant la création, la modification et le suivi des tâches quotidiennes.",
      footerLink: [
        
      ]
    },
    {
      image: require("./assets/images/backup.png"),
      projectName: "DataSafe - gestion des sauvegardes automatiques",
      projectDesc: "Ce projet consiste à créer un script shell automatisé de sauvegarde permettant de sélectionner les fichiers ou dossiers à sauvegarder, de planifier les sauvegardes automatiquement, de compresser les données pour économiser l’espace, et de générer des journaux ainsi que des notifications sur l’état des sauvegardes.",
      footerLink: [
        
      ]
    },
     {
      image: require("./assets/images/ecosm.png"),
      projectName: "eCosmetics",
      projectDesc: "Développement d’une application e-commerce en ASP.NET MVC dédiée à la vente de produits cosmétiques, intégrant la gestion des utilisateurs, du catalogue et du panier d’achat, avec une interface moderne, responsive et orientée expérience utilisateur. ",
      footerLink: [
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications, that I have done !",

  achievementsCards: [
    {
      title: "Virtual Networks in Azure",
      
      image: require("./assets/images/courser.png"),
   
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/LNKCRKXACCCV"
        },
        
      ]
    },
    {
      title: "Introduction to Java and Object-Oriented Programming",
      
      image: require("./assets/images/courser.png"),
      
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/f8ade82f01c0e3b101ed85d9823424c6"
        }
      ]
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      
      image: require("./assets/images/courser.png"),
      
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/records/QZSED7Z2L3BC"
        }
      ]
    },
    {
      title: "Introduction à la programmation orientée objet (en C++)",
      
      image: require("./assets/images/courser.png"),
      
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/records/2VUJL8UC8TJY"
        }
      ]
    },
    {
      title: "Modern Data Warehouse Analytics in Microsoft Azure",
      
      image: require("./assets/images/courser.png"),
      
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/91da72dc1ce2d97010c451b59bf711e4"
        }
      ]
    },
    
    {
      title: "Software Engineering: Software Design and Project Management",
      
      image: require("./assets/images/courser.png"),
      
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/records/RXLREMRTE6HY"
        }
      ]
    },
    
    {
      title: "React Basics",
      
      image: require("./assets/images/courser.png"),
      
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/42bd851eb0a16a08dea50ca20c38408c"
        }
      ]
    },

    {
      title: "The Unix Workbench",
      
      image: require("./assets/images/courser.png"),
      
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/records/3FQZWLRQLKC5/"},
        
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section


// Talks Sections


// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "An empowering conversation on how AI transforms software development and inspires innovation in tech.",
  link: "https://www.youtube.com/watch?v=Uc3mUIF1bP0",
  embed: "https://www.youtube.com/embed/Uc3mUIF1bP0"

};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};
// Section langues (nouvelle)
const languages = {
  display: true,
  title: "Languages",
  list: [
    {  name: "Français", level: "Courant - Professionnel " },
    {  name: "Anglais", level: "Courant -Professionnel" },
    {  name: "Arabe", level: "Natif" },
    {  name: "Turc", level: "Conversationnel" }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to any internship or collaboration opportunity.",
  email_address: "yasminnln2003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  
  languages,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
