import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ChangeEvent } from "react";

import { languages } from "./data/navigation";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || "en";

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    void i18n.changeLanguage(event.target.value);
  };

  const selectClassName = `
    font-display cursor-pointer appearance-none
    rounded-full border border-[#123D24]/25
    bg-transparent py-1.5 ps-3 pe-7
    text-sm font-bold text-[#123D24]
    outline-none transition-colors
    hover:border-[#123D24]
    focus-visible:ring-2
    focus-visible:ring-[#4D7C0F]
  `;

  return (
    <div className="relative shrink-0">
      {/* Compact mobile selector */}
      <select
        value={currentLanguage}
        onChange={handleLanguageChange}
        aria-label={t("nav.language")}
        className={`${selectClassName} sm:hidden`}
      >
        {languages.map((language) => (
          <option
            key={language.code}
            value={language.code}
            lang={language.code}
          >
            {language.shortLabel}
          </option>
        ))}
      </select>

      {/* Full desktop selector */}
      <select
        value={currentLanguage}
        onChange={handleLanguageChange}
        aria-label={t("nav.language")}
        className={`${selectClassName} hidden sm:block`}
      >
        {languages.map((language) => (
          <option
            key={language.code}
            value={language.code}
            lang={language.code}
          >
            {language.label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={14}
        aria-hidden="true"
        className="pointer-events-none absolute
          end-2 top-1/2 -translate-y-1/2
          text-[#123D24]"
      />
    </div>
  );
};

export default LanguageSwitcher;
