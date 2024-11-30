import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/contact/contacteForm/ContactForm";
import ContactInfo from "../components/contact/contacteInfo/ContactInfo";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Contactez-moi"
        description="N'hésitez pas à me contacter pour toute opportunité professionnelle ou question."
      />

      <div className="grid md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
