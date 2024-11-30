export const validateEmailConfig = () => {
  const required = [
    "VITE_EMAILJS_SERVICE_ID",
    "VITE_EMAILJS_TEMPLATE_ID",
    "VITE_EMAILJS_PUBLIC_KEY",
  ];

  const missing = required.filter((key) => !import.meta.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
};
