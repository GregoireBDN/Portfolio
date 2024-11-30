interface TechnologiesProjetProps {
  technologies: string[];
}

const TechnologiesProjet = ({ technologies }: TechnologiesProjetProps) => {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-3">
        Technologies utilisées
      </h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesProjet;
