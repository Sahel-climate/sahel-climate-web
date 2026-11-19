import { useTranslation } from "react-i18next";

import Container from "../common/Container";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";

import { footerLinks } from "./data/footer";
import { siteConfig } from "../../config/siteConfig";

import type { FooterContent } from "./types/footer.types";

interface FooterProps {
  onDonate: () => void;
}

const Footer = ({ onDonate }: FooterProps) => {
  const { t } = useTranslation();

  const footer = t("footer", {
    returnObjects: true,
  }) as FooterContent;

  const year = new Date().getFullYear();

  const exploreLinks = footerLinks.map((link) => ({
    href: link.href,
    label: t(link.label),
  }));

  return (
    <footer className="bg-forest-950 text-paper">
      <Container size="narrow" className="py-14">
        {/* Main footer columns */}
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <FooterBrand tagline={footer.tag} onDonate={onDonate} />

          <FooterLinks title={footer.explore} links={exploreLinks} />

          <FooterLinks
            title={t("contact.followT")}
            links={siteConfig.contact.social}
            external
          />
        </div>

        {/* Legal information and copyright */}
        <div className="mt-12 border-t border-paper/15 pt-6 text-sm leading-relaxed text-paper/65">
          {/* <p className="max-w-[80ch]">{footer.legal}</p> */}

          <p className="mt-2">
            © {year} {siteConfig.name}. {footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
