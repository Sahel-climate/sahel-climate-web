import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

import Container from "../common/Container";
import DonateButton from "../common/DonateButton";
import LanguageSwitcher from "./LanguageSwitcher";

import { navigationLinks } from "./data/navigation";
import { siteConfig } from "../../config/siteConfig";

import logo from "../../assets/logo.jpg";

interface NavbarProps {
  onDonate: () => void;
}

const Navbar = ({ onDonate }: NavbarProps) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleDonate = () => {
    setOpen(false);
    onDonate();
  };

  return (
    <header
      className="sticky top-0 z-40
        border-b border-[#123D24]/10
        bg-[#FAF9F4]/95 backdrop-blur"
    >
      <Container
        className="flex h-16 items-center
    gap-4 sm:h-18
    xl:justify-center xl:gap-20"
      >
        {/* Logo */}
        <a
          href="#top"
          aria-label={siteConfig.name}
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <img
            src={logo}
            alt={siteConfig.name}
            className="h-10 w-auto max-w-25
              object-contain mix-blend-multiply
              sm:h-12 sm:max-w-37.5"
          />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden shrink-0 items-center
    gap-5 xl:flex 2xl:gap-16 "
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display whitespace-nowrap
                text-[0.95rem] font-semibold
                text-[#123D24]/80
                transition-colors
                hover:text-[#4D7C0F]"
            >
              {t(link.label)}
            </a>
          ))}
        </nav>

        {/* Navbar actions */}
        <div
          className="ms-auto flex shrink-0
    items-center gap-2 sm:gap-3 xl:ms-0"
        >
          <LanguageSwitcher />

          <DonateButton
            onClick={handleDonate}
            size="sm"
            className="sm:px-6 sm:py-2.5"
          />

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-full p-2
              text-[#123D24] xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-[#123D24]/10
            bg-[#FAF9F4] xl:hidden
            max-h-[calc(100dvh-72px)]
            overflow-y-auto"
        >
          <Container className="flex flex-col py-3">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display border-b
                  border-[#123D24]/10 py-3.5
                  text-lg font-semibold
                  text-[#123D24] last:border-0
                  transition-colors
                  hover:text-[#4D7C0F]"
              >
                {t(link.label)}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
