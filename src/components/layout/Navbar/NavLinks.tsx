import { NavLink } from "react-router-dom";
import { NavLinkType } from "./navLinksData";

interface NavigationLinkProps extends NavLinkType {
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}

export const NavigationLink = ({
  href,
  label,
  variant = "desktop",
  onClick,
}: NavigationLinkProps) => {
  const styles = {
    desktop: ({ isActive }: { isActive: boolean }) => `
      ${
        isActive
          ? "text-blue-600 border-blue-500"
          : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"
      } inline-flex items-center px-3 text-lg pt-1 border-b-2 transition-colors duration-200
    `,
    mobile: ({ isActive }: { isActive: boolean }) => `
      ${
        isActive
          ? "bg-blue-50 border-blue-500 text-blue-700"
          : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
      } block pl-3 pr-4 py-2 border-l-4
    `,
  };

  return (
    <NavLink to={href} onClick={onClick} className={styles[variant]}>
      {label}
    </NavLink>
  );
};
