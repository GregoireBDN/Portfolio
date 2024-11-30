interface CaracteristiquesProjetProps {
  projet: {
    fonctionnalites: string[];
    principes?: string[];
    typesRequetes?: string[];
  };
}

const CaracteristiquesProjet = ({ projet }: CaracteristiquesProjetProps) => {
  return (
    <>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          Fonctionnalités principales
        </h4>
        <ul className="space-y-2">
          {projet.fonctionnalites.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-primary-500 mr-2">→</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CaracteristiquesProjet;
