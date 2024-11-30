const ExperienceSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Dernière Expérience
      </h2>
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Stagiaire Développeur
            </h3>
            <p className="text-gray-700">
              SIB (Syndicat Inter-hospitalier de Bretagne)
            </p>
          </div>
          <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
            <span className="text-blue-600 font-medium">Avril - Juin 2023</span>
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
