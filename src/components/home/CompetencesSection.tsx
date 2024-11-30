import { competences } from "../../data/competences";
import CompetenceCard from "./CompetenceCard";

const CompetencesSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Compétences Techniques
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CompetenceCard {...competences.langages} />
        <CompetenceCard {...competences.databases} />
        <CompetenceCard {...competences.outils} />
      </div>
    </section>
  );
};

export default CompetencesSection;
