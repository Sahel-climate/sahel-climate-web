import type { ContactFormData, ContactTopic } from "../types/contact.types";

export const contactTopics: ContactTopic[] = [
  "general",
  "partnership",
  "volunteer",
  "in-kind",
  "media",
];

export const initialContactForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
};

export const contactFieldClass =
  "mt-1.5 w-full rounded-xl border border-forest-900/25 bg-white px-4 py-3 font-body text-base text-ink placeholder:text-ink/40 focus:border-forest-900 focus:outline-none focus:ring-2 focus:ring-leaf-500/40";
