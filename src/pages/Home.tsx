import PageHeader from "../components/common/PageHeader";
import ContactCTA from "../components/common/ContactCTA";
import FormationSection from "../components/home/FormationSection";
import ExperienceSection from "../components/home/ExperienceSection";
import CompetencesSection from "../components/home/CompetencesSection";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Grégoire Bodin"
        subtitle="Étudiant en Ingénierie Logicielle"
        description="Actuellement en Master 1 à l'ISTIC (Université de Rennes 1), je me spécialise dans le développement Full Stack. Passionné par le développement web et les nouvelles technologies, je suis à la recherche d'opportunités pour continuer à développer mes compétences."
      />
      <FormationSection />
      <ExperienceSection />
      <CompetencesSection />
      <ContactCTA />
    </div>
  );
};

export default Home;
