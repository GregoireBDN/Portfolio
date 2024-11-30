import { GithubIcon, LinkedinIcon } from "./SocialIcons";

interface SocialLinkProps {
  href: string;
  icon: "github" | "linkedin";
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  const icons = {
    github: <GithubIcon />,
    linkedin: <LinkedinIcon />,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 
        transition-colors duration-200"
      aria-label={label}
    >
      <svg
        className="w-6 h-6 text-gray-700"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {icons[icon]}
      </svg>
    </a>
  );
};

export default SocialLink;
