export interface ReadingQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface ReadingPassage {
  title: string;
  passage: string;
  furiganaPassage: string;
  vocabHighlights: string[];
  questions: ReadingQuestion[];
}
