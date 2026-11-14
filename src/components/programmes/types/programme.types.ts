export type ProgrammeId = "food" | "children" | "health" | "wash" | "climate";

export interface ProgrammeItem {
  id: ProgrammeId;
  title: string;
  line: string;
  body: string;
  facts: string[];
}

export interface UpcomingProgramme {
  title: string;
  text: string;
}

export interface ProgrammesContent {
  title: string;
  intro: string;
  items: ProgrammeItem[];
  comingT: string;
  coming: UpcomingProgramme[];
}
