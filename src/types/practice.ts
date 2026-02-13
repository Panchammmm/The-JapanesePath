export type PracticeType = "vocabulary" | "grammar";

export interface PracticeQuestion {
  question: string;
  options: string[];
  answer: number;
  type: PracticeType;
}
