import { useTranslation } from "react-i18next";

import { siteConfig } from "../../config/siteConfig";
import type { LanguageCode } from "../../config/siteConfig";

interface HistoryItem {
  date: string;
  text: string;
}

const AboutHistory = () => {
  const { t, i18n } = useTranslation();

  const language = (i18n.resolvedLanguage || "en").split(
    "-",
  )[0] as LanguageCode;

  const renamedDate =
    siteConfig.renamedDate[language] || siteConfig.renamedDate.en;

  const history = t("about.history", {
    returnObjects: true,
    renamedDate,
  }) as HistoryItem[];

  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-forest-900">
        {t("about.historyT")}
      </h3>

      <ol className="mt-8 border-s-2 border-forest-900/15">
        {history.map((item, index) => (
          <li key={index} className="relative pb-9 ps-8 last:pb-0">
            <span
              className={`absolute -inset-s-2.25
                top-1.5 h-4 w-4 rounded-full
                border-[3px] border-paper ${
                  index === 1 ? "bg-millet-500" : "bg-leaf-500"
                }`}
              aria-hidden="true"
            />

            <p className="font-display text-lg font-bold text-forest-900">
              {item.date}
            </p>

            <p className="mt-1 max-w-[52ch] leading-relaxed text-ink/85">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AboutHistory;
