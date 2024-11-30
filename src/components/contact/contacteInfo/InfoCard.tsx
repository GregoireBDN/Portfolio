interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-card shadow-card p-card">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-sans">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default InfoCard;
