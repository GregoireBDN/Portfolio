export type FormationType = {
  titre: string;
  etablissement: string;
  periode: string;
  statut: string;
  type: "academique" | "enligne";
  certificat?: string;
  plateforme?: string;
};

export const formations: FormationType[] = [
  {
    titre: "Master 1 Ingénierie Logicielle",
    etablissement: "ISTIC - Université de Rennes 1",
    periode: "2023-2024",
    statut: "En cours",
    type: "academique",
  },
  {
    titre: "Licence Informatique",
    etablissement: "ISTIC - Université de Rennes 1",
    periode: "2020-2023",
    statut: "Diplôme obtenu",
    type: "academique",
  },
  {
    titre: "Parcours complet mastering front-end",
    etablissement: "fromscratch",
    periode: "2024",
    statut: "Terminé",
    type: "enligne",
    plateforme: "fromscratch",
  },
  {
    titre: "Next.js 15 & React - The Complete Guide",
    etablissement: "Udemy",
    periode: "2024",
    statut: "Terminé",
    type: "enligne",
    certificat:
      "https://www.udemy.com/certificate/UC-679cae49-a826-44cc-89ca-80cc98c7d6a2/",
    plateforme: "Udemy",
  },
];
