export interface NavLinkType {
  href: string;
  label: string;
}

export const navLinks: NavLinkType[] = [
  { href: "/", label: "Accueil" },
  { href: "/stages", label: "Stages" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];
