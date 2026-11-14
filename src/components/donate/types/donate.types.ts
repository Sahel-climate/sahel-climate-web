export type PaymentMethod = "mobile" | "bank" | "card";

export interface MobileMoneyAccount {
  provider: string;
  number: string;
  holder: string;
}

export interface BankAccount {
  bankName: string;
  accountName: string;
  accountNumber: string;
  iban: string;
  swift: string;
}

export interface DonateConfig {
  mobileMoney: MobileMoneyAccount[];

  bank: BankAccount;

  international: {
    link: string;
  };
}

export interface DonateContent {
  title: string;
  intro: string;
  close: string;

  howT: string;
  mobile: string;
  bank: string;
  card: string;

  number: string;
  holder: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  iban: string;
  swift: string;

  copy: string;
  copied: string;

  cardCta: string;
  cardSoon: string;
  unavailable: string;

  reference: string;
  receipt: string;
  trust: string;
}
