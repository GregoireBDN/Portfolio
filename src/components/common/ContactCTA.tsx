import { Link } from "react-router-dom";

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const ContactCTA = ({
  title = "À la recherche de nouvelles opportunités",
  description = "En recherche active d'un stage de 2 mois à partir de mai 2025",
  buttonText = "Me contacter",
}: ContactCTAProps) => {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-card p-card text-center">
      <p className="text-lg font-medium text-gray-700 mb-4">{title}</p>
      {description && (
        <p className="text-base text-gray-600 mb-6">{description}</p>
      )}
      <Link
        to="/contact"
        className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg
          hover:bg-primary-600 transition-colors duration-200 font-medium"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default ContactCTA;
