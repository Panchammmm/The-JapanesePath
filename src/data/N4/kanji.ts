import type { KanjiItem } from "@/types/kanji";

export const kanji: KanjiItem[] = [
  {
    character: "会",
    meaning: "Meet / Society",
    onyomi: "カイ",
    kunyomi: "あ（う）",
    examples: [
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "会う", reading: "あう", meaning: "to meet" },
    ],
  },
  {
    character: "思",
    meaning: "Think",
    onyomi: "シ",
    kunyomi: "おも（う）",
    examples: [
      { word: "思う", reading: "おもう", meaning: "to think" },
      { word: "思い出", reading: "おもいで", meaning: "memory" },
    ],
  },
  {
    character: "教",
    meaning: "Teach",
    onyomi: "キョウ",
    kunyomi: "おし（える）",
    examples: [
      { word: "教室", reading: "きょうしつ", meaning: "classroom" },
      { word: "教える", reading: "おしえる", meaning: "to teach" },
    ],
  },
];
