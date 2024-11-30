import { FormationType } from "../../data/formations";

interface AcademicFormationCardProps {
  formation: FormationType;
}

const AcademicFormationCard = ({ formation }: AcademicFormationCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-l-4 border-blue-500">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div className="flex-grow">
          <h3 className="font-bold text-2xl text-blue-600 mb-3">
            {formation.titre}
          </h3>

          <div className="space-y-2">
            <div className="flex items-center text-gray-700">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-lg">{formation.etablissement}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-lg">{formation.periode}</span>
            </div>
          </div>

          <div className="mt-4">
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
              ${
                formation.statut.toLowerCase().includes("cours")
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {formation.statut}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicFormationCard;
