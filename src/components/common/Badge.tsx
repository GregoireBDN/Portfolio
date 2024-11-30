type BadgeVariant = "primary" | "success" | "warning" | "gray";

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
}

const Badge = ({ text, variant = "primary" }: BadgeProps) => {
  const styles: Record<BadgeVariant, string> = {
    primary: "bg-primary-50 text-primary-500",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    gray: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${styles[variant]}`}
    >
      {text}
    </span>
  );
};

export default Badge;
