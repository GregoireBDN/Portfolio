interface FormStatusProps {
  type: "success" | "error" | null;
  message: string;
}

const FormStatus = ({ type, message }: FormStatusProps) => {
  if (!type || !message) return null;

  return (
    <div
      className={`p-4 rounded-lg ${
        type === "success"
          ? "bg-green-50 text-green-800"
          : "bg-red-50 text-red-800"
      }`}
    >
      {message}
    </div>
  );
};

export default FormStatus;
