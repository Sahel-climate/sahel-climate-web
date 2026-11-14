import { useTranslation } from "react-i18next";

import Container from "../common/Container";

import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

import type { LanguageCode } from "../../config/siteConfig";

import type { ContactContent, ContactTopic } from "./types/contact.types";

interface ContactProps {
  topic: ContactTopic;
  onTopicChange: (topic: ContactTopic) => void;
}

const Contact = ({ topic, onTopicChange }: ContactProps) => {
  const { t, i18n } = useTranslation();

  const language = (i18n.resolvedLanguage || "en").split(
    "-",
  )[0] as LanguageCode;

  const contact = t("contact", {
    returnObjects: true,
  }) as ContactContent;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-paper-deep py-20 sm:py-28"
    >
      <Container size="narrow">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <ContactDetails content={contact} language={language} />

          <ContactForm
            content={contact}
            topic={topic}
            onTopicChange={onTopicChange}
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
