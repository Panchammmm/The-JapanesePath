export interface KanjiItem {
  character: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  examples: { word: string; reading: string; meaning: string }[];
}

export const kanji: Record<string, KanjiItem[]> = {
  n5: [
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
  ],
  n4: [
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
  ],
  n3: [
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
  ],
  n2: [
    {
      character: "論",
      meaning: "Theory / Argument",
      onyomi: "ロン",
      kunyomi: "ー",
      examples: [
        { word: "議論", reading: "ぎろん", meaning: "discussion" },
        { word: "結論", reading: "けつろん", meaning: "conclusion" },
      ],
    },
    {
      character: "際",
      meaning: "Occasion / Edge",
      onyomi: "サイ",
      kunyomi: "きわ",
      examples: [
        { word: "国際", reading: "こくさい", meaning: "international" },
        { word: "実際", reading: "じっさい", meaning: "actually" },
      ],
    },
    {
      character: "権",
      meaning: "Rights / Authority",
      onyomi: "ケン",
      kunyomi: "ー",
      examples: [
        { word: "権利", reading: "けんり", meaning: "rights" },
        { word: "人権", reading: "じんけん", meaning: "human rights" },
      ],
    },
  ],
};
