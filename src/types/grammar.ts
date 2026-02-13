export interface GrammarExample {
  japanese: string;
  english: string;
}

export interface GrammarPoint {
  id: string;
  name: string;
  structure: string;
  explanation: string;
  examples: GrammarExample[];
  tip: string;
}
