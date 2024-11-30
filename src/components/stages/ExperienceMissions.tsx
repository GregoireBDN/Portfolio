import { Section } from "../../data/experiences";
interface ExperienceMissionsProps {
  missions: Section[];
}
const ExperienceMissions = ({ missions }: ExperienceMissionsProps) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Missions et réalisations
      </h4>
      <div className="bg-gray-50 rounded-lg p-6">
        <ul className="space-y-6">
          {missions.map((mission, idx) => (
            <li key={idx} className="space-y-3">
              {mission.titre && (
                <h5 className="text-md font-medium text-gray-700">
                  {mission.titre}
                </h5>
              )}
              <ul className="space-y-2">
                {mission.contenu.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceMissions;
