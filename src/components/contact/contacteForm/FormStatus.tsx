interface FormStatusProps {
  type: "success" | "error" | null;
  message: string;
}

const FormStatus = ({ type, message }: FormStatusProps) => {
  if (!type || !message) return null;

  const styles = {
    success: "bg-green-50 text-green-800",
    error: "bg-red-50 text-red-800",
  };

  return (
    <div className={`p-card rounded-lg font-sans ${styles[type]}`}>
      {message}
    </div>
  );
};

export default FormStatus;
