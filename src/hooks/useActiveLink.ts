import { useLocation } from "react-router-dom";

/**
 * Hook pour déterminer si un lien est actif
 * @returns {isActive: (path: string) => boolean}
 */
export const useActiveLink = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return { isActive };
};
