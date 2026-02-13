export interface KanjiExample {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanjiItem {
  character: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  examples: KanjiExample[];
}
