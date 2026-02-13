import type { ReadingPassage } from "@/types/reading";

export const reading: ReadingPassage[] = [
  {
    title: "わたしの一日",
    passage:
      "わたしは毎朝七時に起きます。朝ごはんを食べて、学校に行きます。学校で日本語を勉強します。午後三時に家に帰ります。",
    furiganaPassage:
      "わたしは毎朝（まいあさ）七時（しちじ）に起（お）きます。朝（あさ）ごはんを食（た）べて、学校（がっこう）に行（い）きます。学校（がっこう）で日本語（にほんご）を勉強（べんきょう）します。午後（ごご）三時（さんじ）に家（いえ）に帰（かえ）ります。",
    vocabHighlights: ["毎朝", "学校", "勉強"],
    questions: [
      {
        question: "What time does the person wake up?",
        options: ["6:00", "7:00", "8:00", "9:00"],
        answer: 1,
      },
      {
        question: "What does the person study at school?",
        options: ["English", "Math", "Japanese", "Science"],
        answer: 2,
      },
    ],
  },
];
