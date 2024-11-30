interface ContactMethodProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactMethod = ({ icon, label, value, href }: ContactMethodProps) => {
  return (
    <div className="flex items-start">
      <div className="w-6 h-6 text-blue-600 mt-1 mr-3">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-800">{label}</h3>
        {href ? (
          <a href={href} className="text-blue-600 hover:underline">
            {value}
          </a>
        ) : (
          <p className="text-gray-600">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactMethod;
