interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const ContactCTA = ({
  title = "À la recherche de nouvelles opportunités",
  description = "En recherche active d'un stage de 2 mois à partir d'mai 2025",
  buttonText = "Me contacter",
}: ContactCTAProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
      <p className="text-gray-700 text-lg font-medium mb-4">{title}</p>
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      <a
        href="/contact"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default ContactCTA;
