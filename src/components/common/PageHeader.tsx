interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description: string;
}

const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-card p-card mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-3 font-sans">
        {title}
      </h1>

      {subtitle && (
        <h2 className="text-2xl text-gray-700 mb-4 font-sans">{subtitle}</h2>
      )}

      <p className="text-lg text-gray-600 max-w-2xl font-sans">{description}</p>
    </div>
  );
};

export default PageHeader;
