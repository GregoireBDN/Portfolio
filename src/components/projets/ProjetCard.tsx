import CaracteristiquesProjet from "./CaracteristiquesProjet";
import TechnologiesProjet from "./TechnologiesProjet";
import LinksProjet from "./LinksProjet";
import { ProjetType } from "../../data/projets";
import Badge from "../common/Badge";

const ProjetCard = ({ projet }: { projet: ProjetType }) => {
  return (
    <div
      className="bg-white rounded-card shadow-card hover:shadow-card-hover 
      transition-all duration-300 overflow-hidden"
    >
      <div className="border-t-4 border-primary-500">
        <div className="p-card">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-primary-500">
              {projet.titre}
            </h3>
            <Badge
              text={projet.status === "en_cours" ? "En cours" : "Terminé"}
              variant={projet.status === "en_cours" ? "warning" : "success"}
            />
          </div>

          <p className="text-gray-600 mb-2">{projet.contexte}</p>
          {projet.collaboration && (
            <p className="text-sm text-gray-500 mb-4">{projet.collaboration}</p>
          )}
          {projet.encadrement && (
            <p className="text-sm text-gray-500 mb-4">{projet.encadrement}</p>
          )}

          <div className="prose prose-primary mb-6">
            <p className="text-gray-700">{projet.description}</p>
          </div>

          <CaracteristiquesProjet projet={projet} />
          <TechnologiesProjet technologies={projet.technologies} />
          <LinksProjet github={projet.github} demo={projet.demo} />
        </div>
      </div>
    </div>
  );
};

export default ProjetCard;
