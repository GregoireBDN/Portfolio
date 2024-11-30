import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-card h-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center justify-between w-full">
            <Logo />
            <DesktopNav />
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
