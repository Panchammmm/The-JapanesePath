export interface ReadingPassage {
  title: string;
  passage: string;
  furiganaPassage: string;
  vocabHighlights: string[];
  questions: { question: string; options: string[]; answer: number }[];
}

export const reading: Record<string, ReadingPassage[]> = {
  n5: [
    {
      title: "わたしの一日",
      passage: "わたしは毎朝七時に起きます。朝ごはんを食べて、学校に行きます。学校で日本語を勉強します。午後三時に家に帰ります。",
      furiganaPassage: "わたしは毎朝（まいあさ）七時（しちじ）に起（お）きます。朝（あさ）ごはんを食（た）べて、学校（がっこう）に行（い）きます。学校（がっこう）で日本語（にほんご）を勉強（べんきょう）します。午後（ごご）三時（さんじ）に家（いえ）に帰（かえ）ります。",
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
  ],
  n4: [
    {
      title: "日本の季節",
      passage: "日本には四つの季節があります。春は桜がきれいです。夏は暑いですが、お祭りが楽しいです。秋は紅葉を見に行きます。冬は寒いですが、温泉に入ります。",
      furiganaPassage: "日本（にほん）には四（よっ）つの季節（きせつ）があります。春（はる）は桜（さくら）がきれいです。夏（なつ）は暑（あつ）いですが、お祭（まつ）りが楽（たの）しいです。秋（あき）は紅葉（こうよう）を見（み）に行（い）きます。冬（ふゆ）は寒（さむ）いですが、温泉（おんせん）に入（はい）ります。",
      vocabHighlights: ["季節", "桜", "紅葉", "温泉"],
      questions: [
        {
          question: "What is beautiful in spring?",
          options: ["Autumn leaves", "Cherry blossoms", "Snow", "Fireworks"],
          answer: 1,
        },
      ],
    },
  ],
  n3: [
    {
      title: "環境問題",
      passage: "最近、環境問題が深刻になっています。特にプラスチックごみの問題は世界中で注目されています。私たちは毎日の生活で環境に優しい選択をすることが大切です。",
      furiganaPassage: "最近（さいきん）、環境（かんきょう）問題（もんだい）が深刻（しんこく）になっています。特（とく）にプラスチックごみの問題（もんだい）は世界中（せかいじゅう）で注目（ちゅうもく）されています。私（わたし）たちは毎日（まいにち）の生活（せいかつ）で環境（かんきょう）に優（やさ）しい選択（せんたく）をすることが大切（たいせつ）です。",
      vocabHighlights: ["環境", "深刻", "注目"],
      questions: [
        {
          question: "What kind of problem is getting serious?",
          options: ["Economic", "Environmental", "Political", "Educational"],
          answer: 1,
        },
      ],
    },
  ],
};
