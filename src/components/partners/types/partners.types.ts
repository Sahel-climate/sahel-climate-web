export interface Partner {
  id: string;
  name: string;
  logo: string | null;
}

export interface PartnersContent {
  title: string;
  intro: string;
  typesT: string;
  types: string[];
  logosT: string;
  becomeT: string;
  become: string[];
  cta: string;
}
