import PageHeader from "../components/common/PageHeader";
import ProjetCard from "../components/projets/ProjetCard";
import ContactCTA from "../components/common/ContactCTA";
import { projets } from "../data/projets";

const Projets = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Mes Projets"
        description="Découvrez les différents projets sur lesquels j'ai travaillé, tant dans un cadre académique que personnel. Chaque projet représente une opportunité d'apprentissage et de perfectionnement de mes compétences."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {projets.map((projet, index) => (
          <ProjetCard key={index} projet={projet} />
        ))}
      </div>

      <ContactCTA />
    </div>
  );
};

export default Projets;
