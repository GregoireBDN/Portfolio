interface ContactMethodProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactMethod = ({ icon, label, value, href }: ContactMethodProps) => {
  return (
    <div className="flex items-start">
      <div className="w-6 h-6 text-primary-500 mt-1 mr-3">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-800 font-sans">{label}</h3>
        {href ? (
          <a
            href={href}
            className="text-primary-500 hover:text-primary-600 hover:underline transition-colors duration-200"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-600 font-sans">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactMethod;
