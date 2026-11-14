import type { LanguageCode } from "../../../config/siteConfig";

export type ContactTopic =
  | "general"
  | "partnership"
  | "volunteer"
  | "in-kind"
  | "media";

export type ContactStatus = "idle" | "sending" | "sent" | "error";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

export interface ContactOffice {
  city: string;
  region: Record<LanguageCode, string>;
  address: string;
}

export interface ContactConfig {
  phone: string;
  whatsapp: string;
  email: string;
  hours: Record<LanguageCode, string>;
  offices: ContactOffice[];
  social: {
    label: string;
    href: string;
  }[];
}

export interface ContactContent {
  title: string;
  intro: string;
  name: string;
  email: string;
  phone: string;
  topic: string;
  topics: string[];
  message: string;
  consent: string;
  send: string;
  sending: string;
  sentT: string;
  sent: string;
  error: string;
  again: string;
  officesT: string;
  phoneL: string;
  whatsappL: string;
  emailL: string;
  hoursL: string;
  followT: string;
}
