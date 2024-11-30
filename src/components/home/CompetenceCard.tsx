interface CompetenceCardProps {
  titre: string;
  items: {
    nom: string;
    sousItems?: string[];
  }[];
}

const CompetenceCard = ({ titre, items }: CompetenceCardProps) => {
  return (
    <div className="bg-white p-card rounded-card shadow-card">
      <h3 className="text-xl font-semibold text-primary-500 mb-4">{titre}</h3>
      <ul className="space-y-4 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              {item.nom}
            </div>
            {item.sousItems && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-500">
                {item.sousItems.map((sousItem, idx) => (
                  <li key={idx}>• {sousItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetenceCard;
