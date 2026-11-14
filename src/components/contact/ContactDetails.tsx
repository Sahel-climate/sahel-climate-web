import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import SectionHeading from "../common/SectionHeading";

import { siteConfig } from "../../config/siteConfig";

import type { LanguageCode } from "../../config/siteConfig";
import type { ContactContent } from "./types/contact.types";

interface ContactDetailsProps {
  content: ContactContent;
  language: LanguageCode;
}

const ContactDetails = ({ content, language }: ContactDetailsProps) => {
  const c = content;
  const cfg = siteConfig.contact;

  return (
    <div>
      <SectionHeading id="contact-heading" className="text-forest-900">
        {c.title}
      </SectionHeading>

      <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-ink/85">
        {c.intro}
      </p>

      {/* Contact information */}
      <dl className="mt-9 space-y-4">
        <div className="flex gap-3">
          <dt className="mt-1 text-leaf-600">
            <Phone size={20} aria-label={c.phoneL} />
          </dt>

          <dd>
            <a
              href={`tel:${cfg.phone.replace(/\s/g, "")}`}
              className="font-display font-semibold text-forest-900 hover:underline"
              dir="ltr"
            >
              {cfg.phone}
            </a>
          </dd>
        </div>

        <div className="flex gap-3">
          <dt className="mt-1 text-leaf-600">
            <MessageCircle size={20} aria-label={c.whatsappL} />
          </dt>

          <dd>
            <a
              href={`https://wa.me/${cfg.whatsapp.replace(/[^\d]/g, "")}`}
              className="font-display font-semibold text-forest-900 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
            >
              {cfg.whatsapp} (WhatsApp)
            </a>
          </dd>
        </div>

        <div className="flex gap-3">
          <dt className="mt-1 text-leaf-600">
            <Mail size={20} aria-label={c.emailL} />
          </dt>

          <dd>
            <a
              href={`mailto:${cfg.email}`}
              className="font-display font-semibold text-forest-900 hover:underline"
              dir="ltr"
            >
              {cfg.email}
            </a>
          </dd>
        </div>

        <div className="flex gap-3">
          <dt className="mt-1 text-leaf-600">
            <Clock size={20} aria-label={c.hoursL} />
          </dt>

          <dd className="text-ink/85">{cfg.hours[language] || cfg.hours.en}</dd>
        </div>
      </dl>

      {/* Offices */}
      <h3 className="mt-10 font-display text-xl font-bold text-forest-900">
        {c.officesT}
      </h3>

      <ul className="mt-4 divide-y divide-forest-900/15 border-y border-forest-900/15">
        {cfg.offices.map((office) => (
          <li key={office.city} className="flex gap-3 py-3.5">
            <MapPin
              size={20}
              className="mt-1 shrink-0 text-leaf-600"
              aria-hidden="true"
            />

            <div>
              <p className="font-display font-bold text-forest-900">
                {office.city}{" "}
                <span className="font-semibold text-ink/60">
                  ({office.region[language] || office.region.en})
                </span>
              </p>

              <p className="text-[0.98rem] text-ink/80">{office.address}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Social media */}
      <h3 className="mt-10 font-display text-xl font-bold text-forest-900">
        {c.followT}
      </h3>

      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {cfg.social.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-leaf-600 underline decoration-2 underline-offset-4 hover:text-forest-900"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactDetails;
