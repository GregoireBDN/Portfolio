import { useState } from "react";
import { NavigationLink } from "./NavLinks";
import { navLinks } from "./navLinksData";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 text-gray-600 hover:text-gray-900 inline-flex items-center 
          justify-center h-16 w-16 transition-colors duration-200"
      >
        <span className="sr-only">Menu</span>
        <span className="text-3xl">{isMenuOpen ? "✕" : "☰"}</span>
      </button>

      {isMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white shadow-card">
          {navLinks.map((link) => (
            <NavigationLink
              key={link.href}
              {...link}
              variant="mobile"
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
