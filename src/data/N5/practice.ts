import type { PracticeQuestion } from "@/types/practice";

export const practice: PracticeQuestion[] = [
  {
    question: "What does 食べる (たべる) mean?",
    options: ["to drink", "to eat", "to sleep", "to run"],
    answer: 1,
    type: "vocabulary",
  },
  {
    question: "Fill in: 水 ___ 飲みます。",
    options: ["が", "を", "に", "で"],
    answer: 1,
    type: "grammar",
  },
  {
    question: "What does 先生 (せんせい) mean?",
    options: ["student", "friend", "teacher", "parent"],
    answer: 2,
    type: "vocabulary",
  },
  {
    question: "Which is the polite past tense of 行く?",
    options: ["行きます", "行きました", "行きません", "行く"],
    answer: 1,
    type: "grammar",
  },
  {
    question: "What does 学校 (がっこう) mean?",
    options: ["hospital", "library", "school", "station"],
    answer: 2,
    type: "vocabulary",
  },
];
