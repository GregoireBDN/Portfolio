import CaracteristiquesProjet from "./CaracteristiquesProjet";
import TechnologiesProjet from "./TechnologiesProjet";
import LinksProjet from "./LinksProjet";
import { ProjetType } from "../../data/projets";

const ProjetCard = ({ projet }: { projet: ProjetType }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="border-t-4 border-blue-500">
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-blue-600">{projet.titre}</h3>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                projet.status === "en_cours"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {projet.status === "en_cours" ? "En cours" : "Terminé"}
            </span>
          </div>

          <p className="text-gray-600 mb-2">{projet.contexte}</p>
          {projet.collaboration && (
            <p className="text-sm text-gray-500 mb-4">{projet.collaboration}</p>
          )}
          {projet.encadrement && (
            <p className="text-sm text-gray-500 mb-4">{projet.encadrement}</p>
          )}

          <div className="prose prose-blue mb-6">
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
