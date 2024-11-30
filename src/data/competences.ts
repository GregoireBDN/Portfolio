interface CompetenceItem {
  nom: string;
  sousItems?: string[];
}

interface CompetenceSection {
  titre: string;
  items: CompetenceItem[];
}

interface CompetencesData {
  langages: CompetenceSection;
  databases: CompetenceSection;
  outils: CompetenceSection;
}

export const competences: CompetencesData = {
  langages: {
    titre: "Langages & Frameworks",
    items: [
      {
        nom: "Java (Avancé)",
        sousItems: ["Spring Framework", "JUnit"],
      },
      {
        nom: "JavaScript/TypeScript",
        sousItems: ["React.js", "Next.js"],
      },
    ],
  },
  databases: {
    titre: "Bases de Données & ORM",
    items: [
      { nom: "PostgreSQL" },
      { nom: "MySQL" },
      { nom: "MonetDB" },
      { nom: "Prisma ORM" },
    ],
  },
  outils: {
    titre: "Outils & Méthodologies",
    items: [
      { nom: "Git & Docker" },
      { nom: "Méthodologies Agiles" },
      { nom: "Tests & Documentation" },
      { nom: "Code Review" },
    ],
  },
};
