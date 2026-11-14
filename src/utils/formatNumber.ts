import type { LanguageCode } from "../config/siteConfig";

const locales: Record<LanguageCode, string> = {
  en: "en-GB",
  fr: "fr-FR",
  ar: "ar",
  tr: "tr-TR",
  es: "es-ES",
  pt: "pt-PT",
  de: "de-DE",
};

export const formatNumber = (
  value: number,
  language: string = "en",
): string => {
  const languageCode = language.split("-")[0] as LanguageCode;

  const locale = locales[languageCode] || locales.en;

  return new Intl.NumberFormat(locale).format(value);
};
