interface NavigationLink {
  label: string;
  href: string;
}

export const navigationLinks: NavigationLink[] = [
  { label: "nav.about", href: "#about" },
  { label: "nav.programmes", href: "#programmes" },
  { label: "nav.impact", href: "#impact" },
  { label: "nav.partners", href: "#partners" },
  { label: "nav.involved", href: "#involved" },
  { label: "nav.contact", href: "#contact" },
];

interface Language {
  code: string;
  label: string;
  shortLabel: string;
}

export const languages: Language[] = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "fr", label: "Français", shortLabel: "FR" },
  { code: "ar", label: "العربية", shortLabel: "AR" },
  { code: "tr", label: "Türkçe", shortLabel: "TR" },
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "pt", label: "Português", shortLabel: "PT" },
  { code: "de", label: "Deutsch", shortLabel: "DE" },
];
