interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description: string;
}

const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">{title}</h1>
      {subtitle && <h2 className="text-2xl text-gray-700 mb-4">{subtitle}</h2>}
      <p className="text-gray-600 text-lg max-w-2xl">{description}</p>
    </div>
  );
};

export default PageHeader;
