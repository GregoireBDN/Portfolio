import { FormationType } from "../../data/formations";

interface OnlineFormationCardProps {
  formation: FormationType;
}

const OnlineFormationCard = ({ formation }: OnlineFormationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow transition-all duration-300 p-4 border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg text-gray-800">
            {formation.titre}
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            {formation.etablissement} • {formation.periode}
          </p>
        </div>
        <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full text-xs font-medium">
          {formation.plateforme}
        </span>
      </div>

      {formation.certificat && (
        <div className="mt-3">
          <a
            href={formation.certificat}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Voir le certificat
          </a>
        </div>
      )}
    </div>
  );
};

export default OnlineFormationCard;
