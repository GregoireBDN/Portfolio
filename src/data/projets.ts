export type ProjetStatus = "en_cours" | "terminé";

export type ProjetType = {
  titre: string;
  collaboration?: string;
  encadrement?: string;
  contexte: string;
  description: string;
  fonctionnalites: string[];
  technologies: string[];
  github: string;
  demo?: string;
  status: ProjetStatus;
};

export const projets: ProjetType[] = [
  {
    titre: "BingoLive 🎲",
    contexte: "Projet Full Stack Personnel - 2024",
    description:
      "Application web moderne permettant aux associations de gérer des parties de bingo en ligne, avec gestion des utilisateurs, des événements et des lots en temps réel.",
    fonctionnalites: [
      "Gestion de parties en temps réel",
      "Gestion des associations et des événements",
      "Création et attribution de cartons de jeu",
      "Suivi des lots et des gagnants",
      "Authentification sécurisée via Auth0",
      "Interface responsive",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MySQL",
      "Prisma",
      "Auth0",
      "Node.js",
    ],
    github: "https://github.com/jasonv268/BingoLive",
    status: "en_cours",
  },
  {
    titre: "Car Taylor🚗",
    contexte: "Projet académique - UE Architecture Logicielle, Master 1",
    description:
      "Application Java implémentant un configurateur de voiture intelligent avec interface graphique JavaFX. Le projet met en œuvre les principes d'architecture logicielle et de conception orientée objet.",
    fonctionnalites: [
      "Configuration intuitive de véhicules",
      "Validation en temps réel des compatibilités",
      "Interface utilisateur moderne avec navigation par onglets",
      "Panneau de résumé des configurations",
      "Persistance des données via fichiers JSON",
    ],
    technologies: ["Java", "JavaFX", "JUnit", "Maven"],
    github: "https://github.com/GregoireBDN/Car-Taylor",
    collaboration: "Projet réalisé en binôme avec Léo Bernard-Bodier",
    encadrement: "Encadré par M. Noel Plouzeau",
    status: "terminé",
  },
  {
    titre: "Database Analyzer 📊",
    contexte: "Projet académique - UE Bases de Données Avancées, Master 1",
    description:
      "Outil d'analyse et de comparaison des performances entre PostgreSQL et MonetDB, permettant d'évaluer différentes stratégies d'indexation et types de requêtes.",
    fonctionnalites: [
      "Comparaison des performances entre PostgreSQL et MonetDB",
      "Analyse des stratégies d'indexation",
      "Évaluation sur différents types de requêtes",
      "Génération de graphiques comparatifs",
      "Configuration automatique des environnements",
    ],
    technologies: ["Python", "PostgreSQL", "MonetDB", "Docker"],
    github: "https://github.com/GregoireBDN/Database-Analyzer",
    collaboration: "Projet réalisé en binôme avec Léo Bernard-Bodier",
    status: "en_cours",
  },
  {
    titre: "Portfolio Personnel 🎨",
    contexte: "Projet Personnel - 2024",
    description:
      "Site web personnel présentant mon parcours, mes compétences et mes réalisations. Développé avec React et Tailwind CSS pour un design moderne et responsive.",
    fonctionnalites: [
      "Présentation professionnelle",
      "Portfolio de projets",
      "Parcours académique",
      "Expériences professionnelles",
      "Design responsive",
      "Mode sombre/clair",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/GregoireBDN/portfolio",
    status: "terminé",
  },
];
