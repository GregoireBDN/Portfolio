const ExperienceSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Dernière Expérience
      </h2>
      <div className="bg-white rounded-card shadow-card p-card border-l-4 border-primary-500">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-primary-500 mb-2">
              Stagiaire Développeur
            </h3>
            <p className="text-gray-700">
              SIB (Syndicat Inter-hospitalier de Bretagne)
            </p>
          </div>
          <div className="flex items-center bg-primary-50 px-4 py-2 rounded-full">
            <span className="text-primary-500 font-medium">
              Avril - Juin 2023
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          Développement sur Sillage, un logiciel de gestion hospitalière, au
          sein d'une équipe agile de 5 développeurs.
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
