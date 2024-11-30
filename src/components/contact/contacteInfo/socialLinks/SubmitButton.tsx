interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 ${
        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
      }`}
    >
      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
    </button>
  );
};

export default SubmitButton;
