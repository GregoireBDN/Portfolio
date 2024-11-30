import SocialLink from "./SocialLink";

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://github.com/GregoireBDN",
      icon: "github" as const,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/gregoire-bodin",
      icon: "linkedin" as const,
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;
