import ExperienceContexte from "./ExperienceContexte";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceMissions from "./ExperienceMissions";
import ExperienceTechnologies from "./ExperienceTechnologies";
import { Experience } from "../../data/experiences";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden">
      <div className="border-l-4 border-primary-500">
        <div className="p-card">
          <ExperienceHeader
            titre={experience.titre}
            entreprise={experience.entreprise}
            periode={experience.periode}
          />
          <div className="space-y-8">
            <ExperienceContexte contexte={experience.contexte} />
            <ExperienceMissions missions={experience.missions} />
            <ExperienceTechnologies technologies={experience.technologies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
