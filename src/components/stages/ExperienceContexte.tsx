import { Section } from "../../data/experiences";

interface ExperienceContexteProps {
  contexte: Section[];
}

const ExperienceContexte = ({ contexte }: ExperienceContexteProps) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Contexte</h4>
      <div className="bg-gray-50 rounded-lg p-6">
        {contexte.map((section, idx) => (
          <div key={idx} className="mb-4 last:mb-0">
            {section.titre && (
              <h5 className="text-md font-medium text-gray-700 mb-2">
                {section.titre}
              </h5>
            )}
            {section.contenu.map((paragraphe, paraIdx) => (
              <p key={paraIdx} className="text-gray-600 mb-3 last:mb-0">
                {paragraphe}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContexte;
