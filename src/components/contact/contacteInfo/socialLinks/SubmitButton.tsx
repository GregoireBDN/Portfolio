interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full bg-primary-500 text-white py-3 px-6 rounded-lg 
        hover:bg-primary-600 transition-colors duration-200 font-sans
        ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
    >
      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
    </button>
  );
};

export default SubmitButton;
