import { GrammarPoint } from "@/types/grammar";

export const grammar: GrammarPoint[] = [
  {
    id: "1",
      name: "〜ようにする",
      structure: "Verb dictionary form + ようにする",
      explanation: "Means 'to try to / make an effort to'.",
      examples: [
        { japanese: "毎日運動するようにしています。", english: "I try to exercise every day." },
      ],
      tip: "Implies ongoing effort rather than a single attempt.",
    },
    {
      id: "2",
      name: "〜ことにする",
      structure: "Verb dictionary form + ことにする",
      explanation: "Means 'to decide to do something'.",
      examples: [
        { japanese: "来月日本に行くことにしました。", english: "I decided to go to Japan next month." },
      ],
      tip: "ことになる means 'it has been decided' (not by you).",
    },
    {
      id: "3",
      name: "〜わけではない",
      structure: "Clause + わけではない",
      explanation: "Means 'it doesn't mean that / it's not the case that'.",
      examples: [
        { japanese: "嫌いなわけではない。", english: "It's not that I dislike it." },
      ],
      tip: "Used to partially deny or soften a statement.",
    },
];
