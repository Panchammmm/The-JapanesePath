import { GrammarPoint } from "@/types/grammar";

export const grammar: GrammarPoint[] = [
  {
    id: "1",
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
      id: "2",
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
      id: "3",
      name: "〜なければならない",
      structure: "Verb ない-form stem + なければならない",
      explanation: "Expresses obligation: 'must do / have to do'.",
      examples: [
        { japanese: "勉強しなければならない。", english: "I must study." },
        { japanese: "薬を飲まなければならない。", english: "I have to take medicine." },
      ],
      tip: "Shorter casual forms: なきゃ or なくちゃ.",
    },
];
