export interface Section {
  titre?: string;
  contenu: string[];
}

export interface Experience {
  titre: string;
  entreprise: string;
  periode: string;
  contexte: Section[];
  missions: Section[];
  technologies: string[];
  realisations: Section[];
}

export const experiences: Experience[] = [
  {
    titre: "Stagiaire Développeur",
    entreprise: "SIB (Syndicat Inter-hospitalier de Bretagne)",
    periode: "Mai - Juillet 2023",
    contexte: [
      {
        titre: "L'entreprise",
        contenu: [
          "Le SIB est une entreprise spécialisée dans l'IT hospitalier, comptant une cinquantaine de développeurs organisés en équipes de 5 personnes.",
        ],
      },
      {
        titre: "Le projet",
        contenu: [
          "Développement sur Sillage, un logiciel de gestion hospitalière, avec plus de 30 ans d'historique, utilisé par de nombreux hôpitaux en France.",
        ],
      },
    ],
    missions: [
      {
        titre: "Développement",
        contenu: [
          "Développement sur Sillage, un logiciel de gestion de patients et de médicaments",
          "Portage de méthodes Pro*C vers Java avec Spring Framework",
          "Ajout de nouvelles fonctionnalités",
          "Amélioration de la couverture de tests",
          "Interaction avec des bases de données en production",
        ],
      },
      {
        titre: "Méthodologie",
        contenu: [
          "Travail en équipe agile de 5 développeurs",
          "Participation aux daily meetings et aux revues de code",
          "Rédaction de documentation technique",
          "Tests unitaires et intégration continue",
        ],
      },
    ],
    technologies: [
      "Java",
      "Spring Framework",
      "Pro*C",
      "Oracle SQL",
      "Git",
      "JUnit",
      "Maven",
    ],
    realisations: [
      {
        titre: "Migration",
        contenu: [
          "Migration réussie de plusieurs modules critiques",
          "Amélioration de la couverture de tests",
          "Documentation des processus de migration",
        ],
      },
    ],
  },
];
