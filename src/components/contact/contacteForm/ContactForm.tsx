import { useState, FormEvent } from "react";
import { sendEmail } from "../../../utils/emailService";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormStatus from "./FormStatus";
import SubmitButton from "../contacteInfo/socialLinks/SubmitButton";

interface FormData {
  nom: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await sendEmail(formData);
      setSubmitStatus({
        type: "success",
        message: "Votre message a été envoyé avec succès !",
      });
      setFormData({ nom: "", email: "", message: "" });
    } catch (error: unknown) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? `Une erreur est survenue : ${error.message}`
            : "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Envoyez-moi un message
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormInput
          id="nom"
          label="Nom complet"
          value={formData.nom}
          onChange={(value) => setFormData({ ...formData, nom: value })}
          required
        />
        <FormInput
          id="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
          required
        />
        <FormTextarea
          id="message"
          label="Message"
          value={formData.message}
          onChange={(value) => setFormData({ ...formData, message: value })}
          required
        />
        <FormStatus {...submitStatus} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default ContactForm;
