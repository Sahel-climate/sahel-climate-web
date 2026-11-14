import { useState } from "react";
import type { FormEvent } from "react";

import { siteConfig } from "../../config/siteConfig";

import {
  contactTopics,
  contactFieldClass,
  initialContactForm,
} from "./data/contact";

import type {
  ContactContent,
  ContactFormData,
  ContactStatus,
  ContactTopic,
} from "./types/contact.types";

interface ContactFormProps {
  content: ContactContent;
  topic: ContactTopic;
  onTopicChange: (topic: ContactTopic) => void;
}

const ContactForm = ({ content, topic, onTopicChange }: ContactFormProps) => {
  const c = content;

  const [status, setStatus] = useState<ContactStatus>("idle");

  const [form, setForm] = useState<ContactFormData>(initialContactForm);

  const updateField = <K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K],
  ) => {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    try {
      const endpoint = siteConfig.contactFormEndpoint;

      if (!endpoint) {
        throw new Error("Contact form endpoint is not configured.");
      }

      const topicIndex = contactTopics.indexOf(topic);

      const response = await fetch(endpoint, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          ...form,
          topic: c.topics[topicIndex],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus("sent");
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({ ...initialContactForm });
    setStatus("idle");
  };

  return (
    <div className="rounded-[1.75rem] bg-paper p-6 sm:p-9">
      {status === "sent" ? (
        <div role="status" className="py-10">
          <h3 className="font-display text-2xl font-bold text-forest-900">
            {c.sentT}
          </h3>

          <p className="mt-2 text-ink/85">{c.sent}</p>

          <button
            type="button"
            onClick={handleReset}
            className="mt-6 font-display font-bold text-leaf-600 underline decoration-2 underline-offset-4 hover:text-forest-900"
          >
            {c.again}
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          aria-busy={status === "sending"}
        >
          {/* Name */}
          <label className="block font-display text-sm font-bold text-forest-900">
            {c.name}

            <input
              name="name"
              className={contactFieldClass}
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
            />
          </label>

          {/* Email and phone */}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block font-display text-sm font-bold text-forest-900">
              {c.email}

              <input
                name="email"
                className={contactFieldClass}
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
            </label>

            <label className="block font-display text-sm font-bold text-forest-900">
              {c.phone}

              <input
                name="phone"
                className={contactFieldClass}
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
              />
            </label>
          </div>

          {/* Contact topic */}
          <label className="block font-display text-sm font-bold text-forest-900">
            {c.topic}

            <select
              name="topic"
              className={contactFieldClass}
              value={topic}
              onChange={(event) =>
                onTopicChange(event.target.value as ContactTopic)
              }
            >
              {contactTopics.map((option, index) => (
                <option key={option} value={option}>
                  {c.topics[index]}
                </option>
              ))}
            </select>
          </label>

          {/* Message */}
          <label className="block font-display text-sm font-bold text-forest-900">
            {c.message}

            <textarea
              name="message"
              className={contactFieldClass}
              rows={5}
              required
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
            />
          </label>

          {/* Consent */}
          <label className="flex items-start gap-3 text-[0.95rem] leading-snug text-ink/85">
            <input
              name="consent"
              type="checkbox"
              required
              checked={form.consent}
              onChange={(event) => updateField("consent", event.target.checked)}
              className="mt-1 h-5 w-5 shrink-0 accent-forest-900"
            />

            {c.consent}
          </label>

          {/* Error message */}
          {status === "error" && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 px-4 py-3 text-[0.95rem] text-red-800"
            >
              {c.error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-forest-900 px-8 py-3.5 font-display text-lg font-bold text-paper transition-colors hover:bg-forest-800 disabled:opacity-60"
          >
            {status === "sending" ? c.sending : c.send}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
