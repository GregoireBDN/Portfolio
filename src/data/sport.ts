export interface SportType {
  titre: string;
  club: string;
  niveau: string;
  accomplissements: string[];
  description: string;
}

export const sportData: SportType = {
  titre: "Badminton",
  club: "Flume-Ille Bad (Saint-Grégoire-Pacé-Chavagne)",
  niveau: "Niveau National",
  accomplissements: [
    "Joueur National 1 en compétition par équipes",
    "Champion de Bretagne",
    "Vice-champion de France Universitaire",
    "Meilleur classement : Top 50 France",
  ],
  description:
    "Cette pratique sportive de haut niveau m'a permis de développer des compétences essentielles comme la gestion du stress, l'esprit d'équipe, la persévérance et la capacité à concilier sport et études.",
};
