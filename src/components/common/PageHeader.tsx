import profileImage from "../../assets/profile.jpg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description: string;
  showProfileImage?: boolean;
}

const PageHeader = ({
  title,
  subtitle,
  description,
  showProfileImage,
}: PageHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-card p-card mb-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {showProfileImage && (
          <div className="w-48 h-48 shrink-0">
            <img
              src={profileImage}
              alt="Grégoire Bodin"
              className="w-full h-full object-cover rounded-full shadow-lg"
              onError={(e) => {
                console.error("Erreur de chargement de l'image");
                console.log("Chemin de l'image tenté :", e.currentTarget.src);
                e.currentTarget.style.display = "none";
              }}
              onLoad={() => {
                console.log("Image chargée avec succès");
              }}
            />
          </div>
        )}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3 font-sans">
            {title}
          </h1>

          {subtitle && (
            <h2 className="text-2xl text-gray-700 mb-4 font-sans">
              {subtitle}
            </h2>
          )}

          <p className="text-lg text-gray-600 max-w-2xl font-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
