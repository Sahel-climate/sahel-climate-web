import { useTranslation } from "react-i18next";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import PartnerLogos from "./PartnerLogos";
import PartnershipCTA from "./PartnershipCTA";

import { siteConfig } from "../../config/siteConfig";

import type { PartnersContent } from "./types/partners.types";

interface PartnersProps {
  onBecomePartner: () => void;
}

const Partners = ({ onBecomePartner }: PartnersProps) => {
  const { t } = useTranslation();

  const partners = t("partners", {
    returnObjects: true,
  }) as PartnersContent;

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="bg-white py-20 sm:py-28"
    >
      <Container size="narrow">
        {/* Introduction and partner types */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading id="partners-heading" className="text-forest-900">
              {partners.title}
            </SectionHeading>

            <p className="mt-5 max-w-[54ch] leading-relaxed text-ink/85">
              {partners.intro}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-leaf-600">
              {partners.typesT}
            </h3>

            <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {partners.types.map((type) => (
                <li
                  key={type}
                  className="border-b border-forest-900/10 py-3 text-[0.98rem] leading-snug"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner logos */}
        <PartnerLogos title={partners.logosT} partners={siteConfig.partners} />

        {/* Partnership CTA */}
        <PartnershipCTA
          title={partners.becomeT}
          items={partners.become}
          buttonLabel={partners.cta}
          onBecomePartner={onBecomePartner}
        />
      </Container>
    </section>
  );
};

export default Partners;
