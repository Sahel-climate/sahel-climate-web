import { useTranslation } from "react-i18next";

import Avatar from "./Avatar";
import { siteConfig } from "../../config/siteConfig";
import type { LanguageCode } from "../../config/siteConfig";

const AboutLeadership = () => {
  const { t, i18n } = useTranslation();

  const language = (i18n.resolvedLanguage || "en").split(
    "-",
  )[0] as LanguageCode;

  return (
    <div id="leadership" className="mt-20 scroll-mt-24">
      <h3 className="font-display text-2xl font-bold text-forest-900">
        {t("about.leadersT")}
      </h3>

      <p className="mt-3 max-w-[62ch] text-ink/85">{t("about.leadersIntro")}</p>

      <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
        {siteConfig.leadership.map((person, index) => {
          const role = person.role[language] || person.role.en;

          return (
            <li
              key={index}
              className="flex flex-col items-start
                gap-3 sm:flex-row sm:items-center
                sm:gap-5"
            >
              <Avatar name={person.name} photo={person.photo} />

              <div>
                <p className="font-display text-lg font-bold leading-tight text-forest-900">
                  {person.name}
                </p>

                <p className="mt-1 text-[0.95rem] leading-snug text-ink/75">
                  {role}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutLeadership;
