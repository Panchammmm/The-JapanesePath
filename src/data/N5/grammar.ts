import { GrammarPoint } from "@/types/grammar";

export const grammar: GrammarPoint[] = [
  {
    id: "desu",
    name: "〜です",
    structure: "Noun + です",
    explanation: "Used to make polite statements.",
    examples: [
      { japanese: "学生です。", english: "I am a student." },
    ],
    tip: "Used in formal speech.",
  },
    {
      id: "masu",
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
      id: "wo",
      name: "〜を (wo)",
      structure: "Noun + を + Verb",
      explanation: "Marks the direct object of a verb.",
      examples: [
        { japanese: "水を飲みます。", english: "I drink water." },
        { japanese: "本を読みます。", english: "I read a book." },
      ],
      tip: "を is pronounced 'o' not 'wo' in modern Japanese.",
    }
];
