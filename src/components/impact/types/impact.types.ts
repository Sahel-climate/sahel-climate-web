export interface ImpactChartItem {
  year: string;
  value: number;
}

export interface ImpactQuote {
  text: string;
  who: string;
}

export type ImpactRow = [
  label: string,
  year2023: string,
  year2024: string,
  year2025: string,
];

export type ImpactGoal = [value: string, label: string];

export interface ImpactContent {
  title: string;
  intro: string;

  tableT: string;
  cols: string[];
  na: string;
  rows: ImpactRow[];

  chartT: string;
  chartNote: string;
  chart: ImpactChartItem[];

  valueT: string;
  value: string[];

  goalsT: string;
  goals: ImpactGoal[];

  quotesT: string;
  quotes: ImpactQuote[];

  lessonsT: string;
  lessons: string[];

  challengesT: string;
  challenges: string;
}
