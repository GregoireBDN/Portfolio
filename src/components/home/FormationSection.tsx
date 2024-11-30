import { formations } from "../../data/formations";
import AcademicFormationCard from "./AcademicFormationCard";
import OnlineFormationCard from "./OnlineFormationCard";

const FormationSection = () => {
  const formationsAcademiques = formations.filter(
    (f) => f.type === "academique"
  );
  const formationsEnLigne = formations.filter((f) => f.type === "enligne");

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Formation</h2>

      {/* Formations académiques */}
      <div className="space-y-6 mb-12">
        {formationsAcademiques.map((formation, index) => (
          <AcademicFormationCard key={index} formation={formation} />
        ))}
      </div>

      {/* Formations en ligne */}
      <div>
        <h3 className="text-xl font-medium text-gray-700 mb-4">
          Formations complémentaires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formationsEnLigne.map((formation, index) => (
            <OnlineFormationCard key={index} formation={formation} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
