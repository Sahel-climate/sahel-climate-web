export interface InvolvedItem {
  title: string;
  text: string;
  cta: string;
}

export interface InvolvedContent {
  title: string;
  intro: string;
  items: InvolvedItem[];
}

export type ContactTopic = "general" | "partnership" | "volunteer" | "in-kind";

export type InvolvedAction = ContactTopic | "reports";
