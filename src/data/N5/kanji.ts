import type { KanjiItem } from "@/types/kanji";

export const kanji: KanjiItem[] = [
  {
    character: "日",
    meaning: "Day / Sun",
    onyomi: "ニチ、ジツ",
    kunyomi: "ひ、か",
    examples: [
      { word: "日本", reading: "にほん", meaning: "Japan" },
      { word: "今日", reading: "きょう", meaning: "today" },
    ],
  },
  {
    character: "人",
    meaning: "Person",
    onyomi: "ジン、ニン",
    kunyomi: "ひと",
    examples: [
      { word: "日本人", reading: "にほんじん", meaning: "Japanese person" },
      { word: "大人", reading: "おとな", meaning: "adult" },
    ],
  },
  {
    character: "大",
    meaning: "Big / Large",
    onyomi: "ダイ、タイ",
    kunyomi: "おお（きい）",
    examples: [
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "大きい", reading: "おおきい", meaning: "big" },
    ],
  },
];
