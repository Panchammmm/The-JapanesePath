export interface GrammarPoint {
  name: string;
  structure: string;
  explanation: string;
  examples: { japanese: string; english: string }[];
  tip: string;
}

export const grammar: Record<string, GrammarPoint[]> = {
  n5: [
    {
      name: "〜です (desu)",
      structure: "Noun + です",
      explanation: "Used to make polite statements. Equivalent to 'is/am/are'.",
      examples: [
        { japanese: "学生です。", english: "I am a student." },
        { japanese: "日本人です。", english: "I am Japanese." },
      ],
      tip: "Always use です in formal situations.",
    },
    {
      name: "〜ます (masu)",
      structure: "Verb stem + ます",
      explanation: "The polite form of verbs. Used in most everyday conversations.",
      examples: [
        { japanese: "食べます。", english: "I eat / I will eat." },
        { japanese: "行きます。", english: "I go / I will go." },
      ],
      tip: "Change ます to ません for negative, ました for past.",
    },
    {
      name: "〜を (wo)",
      structure: "Noun + を + Verb",
      explanation: "Marks the direct object of a verb.",
      examples: [
        { japanese: "水を飲みます。", english: "I drink water." },
        { japanese: "本を読みます。", english: "I read a book." },
      ],
      tip: "を is pronounced 'o' not 'wo' in modern Japanese.",
    },
  ],
  n4: [
    {
      name: "〜てform (te-form)",
      structure: "Verb て-form + ください",
      explanation: "Used for making requests and connecting actions.",
      examples: [
        { japanese: "待ってください。", english: "Please wait." },
        { japanese: "食べて、寝ました。", english: "I ate and then slept." },
      ],
      tip: "Master the て-form — it's used in many grammar patterns.",
    },
    {
      name: "〜たい (tai)",
      structure: "Verb stem + たい",
      explanation: "Expresses desire: 'want to do something'.",
      examples: [
        { japanese: "日本に行きたいです。", english: "I want to go to Japan." },
        { japanese: "寿司を食べたい。", english: "I want to eat sushi." },
      ],
      tip: "Only used for first person; for third person use たがる.",
    },
    {
      name: "〜なければならない",
      structure: "Verb ない-form stem + なければならない",
      explanation: "Expresses obligation: 'must do / have to do'.",
      examples: [
        { japanese: "勉強しなければならない。", english: "I must study." },
        { japanese: "薬を飲まなければならない。", english: "I have to take medicine." },
      ],
      tip: "Shorter casual forms: なきゃ or なくちゃ.",
    },
  ],
  n3: [
    {
      name: "〜ようにする",
      structure: "Verb dictionary form + ようにする",
      explanation: "Means 'to try to / make an effort to'.",
      examples: [
        { japanese: "毎日運動するようにしています。", english: "I try to exercise every day." },
      ],
      tip: "Implies ongoing effort rather than a single attempt.",
    },
    {
      name: "〜ことにする",
      structure: "Verb dictionary form + ことにする",
      explanation: "Means 'to decide to do something'.",
      examples: [
        { japanese: "来月日本に行くことにしました。", english: "I decided to go to Japan next month." },
      ],
      tip: "ことになる means 'it has been decided' (not by you).",
    },
    {
      name: "〜わけではない",
      structure: "Clause + わけではない",
      explanation: "Means 'it doesn't mean that / it's not the case that'.",
      examples: [
        { japanese: "嫌いなわけではない。", english: "It's not that I dislike it." },
      ],
      tip: "Used to partially deny or soften a statement.",
    },
  ],
  n2: [
    {
      name: "〜に関して",
      structure: "Noun + に関して",
      explanation: "Formal expression meaning 'regarding / concerning'.",
      examples: [
        { japanese: "この問題に関して意見があります。", english: "I have an opinion regarding this issue." },
      ],
      tip: "More formal than について. Used in writing and speeches.",
    },
    {
      name: "〜一方だ",
      structure: "Verb dictionary form + 一方だ",
      explanation: "Indicates a continuing trend: 'keeps doing / more and more'.",
      examples: [
        { japanese: "物価は上がる一方だ。", english: "Prices keep going up." },
      ],
      tip: "Usually implies a negative or concerning trend.",
    },
    {
      name: "〜どころか",
      structure: "Noun/Verb + どころか",
      explanation: "Means 'far from / let alone'.",
      examples: [
        { japanese: "漢字どころかひらがなも読めない。", english: "Far from kanji, I can't even read hiragana." },
      ],
      tip: "Used to emphasize that reality is opposite to expectation.",
    },
  ],
};
