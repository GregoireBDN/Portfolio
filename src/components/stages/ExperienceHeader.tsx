interface ExperienceHeaderProps {
  titre: string;
  entreprise: string;
  periode: string;
}

import Badge from "../common/Badge";

const ExperienceHeader = ({
  titre,
  entreprise,
  periode,
}: ExperienceHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
      <div>
        <h3 className="text-2xl font-bold text-primary-500 mb-2">{titre}</h3>
        <p className="text-gray-700 font-medium text-lg">{entreprise}</p>
      </div>
      <Badge text={periode} variant="primary" />
    </div>
  );
};

export default ExperienceHeader;
