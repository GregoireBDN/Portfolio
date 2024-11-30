import PageHeader from "../components/common/PageHeader";
import ExperienceCard from "../components/stages/ExperienceCard";
import ContactCTA from "../components/common/ContactCTA";
import { experiences } from "../data/experiences";

const Stages = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <PageHeader
        title="Expériences Professionnelles"
        description="Découvrez mon parcours professionnel et mes expériences en tant que développeur. Actuellement en Master 1 à l'ISTIC, je suis à la recherche de nouvelles opportunités pour continuer à développer mes compétences."
      />

      <section className="mb-12">
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <ContactCTA
            title="À la recherche d'un stage de fin d'études"
            description="En recherche active d'un stage de 2 mois à partir d'avril 2025"
          />
        </div>
      </section>
    </div>
  );
};

export default Stages;
