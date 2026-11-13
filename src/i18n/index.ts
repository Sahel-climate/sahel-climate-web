import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";
import tr from "./locales/tr.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";
import de from "./locales/de.json";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  ar: { translation: ar },
  tr: { translation: tr },
  es: { translation: es },
  pt: { translation: pt },
  de: { translation: de },
};

const supportedLanguages = Object.keys(resources);

const savedLanguage = localStorage.getItem("sca-language") || "en";

const initialLanguage = supportedLanguages.includes(savedLanguage)
  ? savedLanguage
  : "en";

const updateDocumentLanguage = (language: string) => {
  document.documentElement.lang = language;

  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
};

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: supportedLanguages,

  interpolation: {
    escapeValue: false,
  },
});

updateDocumentLanguage(initialLanguage);

i18n.on("languageChanged", (language) => {
  localStorage.setItem("sca-language", language);
  updateDocumentLanguage(language);
});

export default i18n;
