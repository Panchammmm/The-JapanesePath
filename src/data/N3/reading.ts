import type { ReadingPassage } from "@/types/reading";

export const reading: ReadingPassage[] = [
  {
    title: "環境問題",
    passage:
      "最近、環境問題が深刻になっています。特にプラスチックごみの問題は世界中で注目されています。私たちは毎日の生活で環境に優しい選択をすることが大切です。",
    furiganaPassage:
      "最近（さいきん）、環境（かんきょう）問題（もんだい）が深刻（しんこく）になっています。特（とく）にプラスチックごみの問題（もんだい）は世界中（せかいじゅう）で注目（ちゅうもく）されています。私（わたし）たちは毎日（まいにち）の生活（せいかつ）で環境（かんきょう）に優（やさ）しい選択（せんたく）をすることが大切（たいせつ）です。",
    vocabHighlights: ["環境", "深刻", "注目"],
    questions: [
      {
        question: "What kind of problem is getting serious?",
        options: ["Economic", "Environmental", "Political", "Educational"],
        answer: 1,
      },
    ],
  },
];
