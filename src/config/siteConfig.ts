import type { Partner } from "../components/partners/types/partners.types";
import type { ContactConfig } from "../components/contact/types/contact.types";
import type { DonateConfig } from "../components/donate/types/donate.types";

export type LanguageCode = "en" | "fr" | "ar" | "tr" | "es" | "pt" | "de";

export interface LeadershipMember {
  name: string;
  photo: string | null;
  role: Record<LanguageCode, string>;
}

// ─────────────────────────────────────────
// Leadership
// ─────────────────────────────────────────

const leadership: LeadershipMember[] = [
  {
    name: "Actual president name",
    photo: null,
    role: {
      en: "President",
      fr: "Président",
      ar: "الرئيس",
      tr: "Başkan",
      es: "Presidente",
      pt: "Presidente",
      de: "Vorsitzender",
    },
  },
  {
    name: "Actual secretary name",
    photo: null,
    role: {
      en: "Secretary General",
      fr: "Secrétaire général",
      ar: "الأمين العام",
      tr: "Genel Sekreter",
      es: "Secretario general",
      pt: "Secretário-geral",
      de: "Generalsekretär",
    },
  },
];

// ─────────────────────────────────────────
// Date of name change
// ─────────────────────────────────────────

const renamedDate: Record<LanguageCode, string> = {
  en: "16 May 2025",
  fr: "16 mai 2025",
  ar: "16 مايو 2025",
  tr: "16 Mayıs 2025",
  es: "16 de mayo de 2025",
  pt: "16 de maio de 2025",
  de: "16. Mai 2025",
};

// ─────────────────────────────────────────
// Partners
// ─────────────────────────────────────────

const partners: Partner[] = [
  {
    id: "partner-1",
    name: "[Partner name]",
    logo: null,
  },
  {
    id: "partner-2",
    name: "[Partner name]",
    logo: null,
  },
  {
    id: "partner-3",
    name: "[Partner name]",
    logo: null,
  },
  {
    id: "partner-4",
    name: "[Partner name]",
    logo: null,
  },
  {
    id: "partner-5",
    name: "[Partner name]",
    logo: null,
  },
  {
    id: "partner-6",
    name: "[Partner name]",
    logo: null,
  },
  {
    id: "partner-7",
    name: "[Partner name]",
    logo: null,
  },
  {
    id: "partner-8",
    name: "[Partner name]",
    logo: null,
  },
];

// ─────────────────────────────────────────
// Contact information
// ─────────────────────────────────────────

const contact: ContactConfig = {
  phone: "+237 692 86 83 81",
  whatsapp: "+237 6XX XX XX XX",
  email: "contact@sahelclimateaction.org",

  hours: {
    en: "Monday to Friday, 8:00 to 17:00",
    fr: "Lundi au vendredi, 8h00 à 17h00",
    ar: "من الاثنين إلى الجمعة، من 8:00 إلى 17:00",
    tr: "Pazartesi–Cuma, 08:00–17:00",
    es: "De lunes a viernes, de 8:00 a 17:00",
    pt: "Segunda a sexta-feira, das 8h00 às 17h00",
    de: "Montag bis Freitag, 8:00 bis 17:00 Uhr",
  },

  offices: [
    {
      city: "Maroua",
      region: {
        en: "Far North (headquarters)",
        fr: "Extrême-Nord (siège)",
        ar: "أقصى الشمال (المقر الرئيسي)",
        tr: "Uzak Kuzey (merkez)",
        es: "Extremo Norte (sede central)",
        pt: "Extremo Norte (sede)",
        de: "Hoher Norden (Hauptsitz)",
      },
      address: "Dougoi, Dix Villas, 10m Hotel Oasis ",
    },
    {
      city: "Garoua",
      region: {
        en: "North",
        fr: "Nord",
        ar: "الشمال",
        tr: "Kuzey",
        es: "Norte",
        pt: "Norte",
        de: "Norden",
      },
      address: "[Street address, Garoua]",
    },
    {
      city: "Ngaoundéré",
      region: {
        en: "Adamaoua",
        fr: "Adamaoua",
        ar: "أداماوا",
        tr: "Adamaoua",
        es: "Adamaua",
        pt: "Adamaua",
        de: "Adamaua",
      },
      address: "[Street address, Ngaoundéré]",
    },
  ],

  social: [
    {
      label: "Facebook",
      href: "#",
    },
    {
      label: "LinkedIn",
      href: "#",
    },
    {
      label: "X",
      href: "#",
    },
    {
      label: "YouTube",
      href: "#",
    },
  ],
};

// ─────────────────────────────────────────
// Donation accounts
// ─────────────────────────────────────────

const donate: DonateConfig = {
  mobileMoney: [
    {
      provider: "Orange Money",
      number: "692868381",
      holder: "Sahel Climate Action",
    },

    {
      provider: "MTN Mobile Money",
      number: "",
      holder: "",
    },
  ],

  bank: {
    bankName: "UNION BANK OF AFRICA (UBA) CAMEROON",
    accountName: "Sahel Climate Action",
    accountNumber: "23031000080",
    iban: "CM2110033 05223 23031000080 23",
    swift: "UNAFCMCX",
  },

  international: {
    link: "",
  },
};

// ─────────────────────────────────────────
// Main website configuration
// ─────────────────────────────────────────

export const siteConfig = {
  name: "Sahel Climate Action",
  short: "SCA",

  logo: {
    mark: "/logo-mark.png",
    full: "/logo-full.png",
  },

  renamedDate,

  leadership,
  partners,
  contact,
  donate,

  contactFormEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "",
};
