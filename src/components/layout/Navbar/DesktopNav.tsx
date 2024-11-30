import { NavigationLink } from "./NavLinks";
import { navLinks } from "./navLinksData";

const DesktopNav = () => {
  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      {navLinks.map((link) => (
        <NavigationLink key={link.href} {...link} variant="desktop" />
      ))}
    </div>
  );
};

export default DesktopNav;
