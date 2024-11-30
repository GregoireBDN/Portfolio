import InfoCard from "./InfoCard";
import ContactMethod from "./personalInfos/ContactMethod";
import SocialLinks from "./socialLinks/SocialLinks";
import { EmailIcon, LocationIcon } from "./personalInfos/ContactIcons";

const ContactInfo = () => {
  return (
    <div className="space-y-8 font-sans">
      <InfoCard title="Informations de contact">
        <div className="space-y-4">
          <ContactMethod
            icon={<EmailIcon />}
            label="Email"
            value="grbodin@outlook.fr"
            href="mailto:grbodin@outlook.fr"
          />
          <ContactMethod
            icon={<LocationIcon />}
            label="Localisation"
            value="Rennes, France"
          />
        </div>
      </InfoCard>

      <InfoCard title="Réseaux sociaux">
        <SocialLinks />
      </InfoCard>
    </div>
  );
};

export default ContactInfo;
