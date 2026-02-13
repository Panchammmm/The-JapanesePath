import type { KanjiItem } from "@/types/kanji";

export const kanji: KanjiItem[] = [
  {
    character: "届",
    meaning: "Deliver / Reach",
    onyomi: "ー",
    kunyomi: "とど（ける）",
    examples: [
      { word: "届ける", reading: "とどける", meaning: "to deliver" },
      { word: "届く", reading: "とどく", meaning: "to reach" },
    ],
  },
  {
    character: "決",
    meaning: "Decide",
    onyomi: "ケツ",
    kunyomi: "き（める）",
    examples: [
      { word: "決める", reading: "きめる", meaning: "to decide" },
      { word: "決定", reading: "けってい", meaning: "decision" },
    ],
  },
  {
    character: "調",
    meaning: "Investigate / Tune",
    onyomi: "チョウ",
    kunyomi: "しら（べる）",
    examples: [
      { word: "調べる", reading: "しらべる", meaning: "to investigate" },
      { word: "調子", reading: "ちょうし", meaning: "condition" },
    ],
  },
];
