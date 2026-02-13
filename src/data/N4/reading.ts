import type { ReadingPassage } from "@/types/reading";

export const reading: ReadingPassage[] = [
  {
    title: "日本の季節",
    passage:
      "日本には四つの季節があります。春は桜がきれいです。夏は暑いですが、お祭りが楽しいです。秋は紅葉を見に行きます。冬は寒いですが、温泉に入ります。",
    furiganaPassage:
      "日本（にほん）には四（よっ）つの季節（きせつ）があります。春（はる）は桜（さくら）がきれいです。夏（なつ）は暑（あつ）いですが、お祭（まつ）りが楽（たの）しいです。秋（あき）は紅葉（こうよう）を見（み）に行（い）きます。冬（ふゆ）は寒（さむ）いですが、温泉（おんせん）に入（はい）ります。",
    vocabHighlights: ["季節", "桜", "紅葉", "温泉"],
    questions: [
      {
        question: "What is beautiful in spring?",
        options: ["Autumn leaves", "Cherry blossoms", "Snow", "Fireworks"],
        answer: 1,
      },
    ],
  },
];
