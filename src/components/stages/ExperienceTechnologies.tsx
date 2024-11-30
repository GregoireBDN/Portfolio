interface ExperienceTechnologiesProps {
  technologies: string[];
}

const ExperienceTechnologies = ({
  technologies,
}: ExperienceTechnologiesProps) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Technologies utilisées
      </h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTechnologies;
