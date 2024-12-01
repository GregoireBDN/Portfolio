import { sportData } from "../../data/sport";

const SportSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Engagement Sportif de Haut Niveau
      </h2>
      <div className="bg-white rounded-card shadow-card hover:shadow-lg hover:scale-[1.01] transform transition-all duration-300 p-card border-l-4 border-primary-500">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-primary-500 mb-2">
              {sportData.titre}
            </h3>
            <p className="text-gray-700">{sportData.club}</p>
          </div>
          <div className="flex items-center bg-primary-50 px-4 py-2 rounded-full">
            <span className="text-primary-500 font-medium">
              {sportData.niveau}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <ul className="space-y-2 text-gray-600">
            {sportData.accomplissements.map((accomplissement, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                {accomplissement}
              </li>
            ))}
          </ul>

          <p className="text-gray-600 mt-4 pt-4 border-t border-gray-100">
            {sportData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SportSection;
