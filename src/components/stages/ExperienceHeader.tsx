interface ExperienceHeaderProps {
  titre: string;
  entreprise: string;
  periode: string;
}

const ExperienceHeader = ({
  titre,
  entreprise,
  periode,
}: ExperienceHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
      <div>
        <h3 className="text-2xl font-bold text-blue-600 mb-2">{titre}</h3>
        <p className="text-gray-700 font-medium text-lg">{entreprise}</p>
      </div>
      <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
        <span className="text-blue-600 font-medium">{periode}</span>
      </div>
    </div>
  );
};

export default ExperienceHeader;
