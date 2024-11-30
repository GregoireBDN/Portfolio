import SocialLink from "./SocialLink";

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://github.com/GregoireBDN",
      icon: "github" as const,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/gr%C3%A9goire-bodin-a4a143270/",
      icon: "linkedin" as const,
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex space-x-4 font-sans">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;
