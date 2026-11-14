import type { InvolvedAction } from "../types/involved.types";

interface InvolvedOption {
  id: string;
  action: InvolvedAction;
}

export const involvedOptions: InvolvedOption[] = [
  {
    id: "volunteer",
    action: "volunteer",
  },
  {
    id: "partnership",
    action: "partnership",
  },
  {
    id: "in-kind",
    action: "in-kind",
  },
  {
    id: "reports",
    action: "reports",
  },
];
