import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../config/email";

interface EmailData {
  nom: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const templateParams = {
      from_name: data.nom,
      from_email: data.email,
      message: data.message,
      to_name: "Grégoire", // Votre nom
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error("Erreur lors de l'envoi du message");
    }
  } catch (error) {
    console.error("Erreur EmailJS:", error);
    throw new Error("Erreur lors de l'envoi du message");
  }
};
