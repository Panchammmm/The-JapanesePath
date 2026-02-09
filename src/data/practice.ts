export interface PracticeQuestion {
  question: string;
  options: string[];
  answer: number;
  type: "vocabulary" | "grammar";
}

export const practice: Record<string, PracticeQuestion[]> = {
  n5: [
    { question: "What does 食べる (たべる) mean?", options: ["to drink", "to eat", "to sleep", "to run"], answer: 1, type: "vocabulary" },
    { question: "Fill in: 水 ___ 飲みます。", options: ["が", "を", "に", "で"], answer: 1, type: "grammar" },
    { question: "What does 先生 (せんせい) mean?", options: ["student", "friend", "teacher", "parent"], answer: 2, type: "vocabulary" },
    { question: "Which is the polite past tense of 行く?", options: ["行きます", "行きました", "行きません", "行く"], answer: 1, type: "grammar" },
    { question: "What does 学校 (がっこう) mean?", options: ["hospital", "library", "school", "station"], answer: 2, type: "vocabulary" },
  ],
  n4: [
    { question: "What does 届ける (とどける) mean?", options: ["to deliver", "to throw", "to cut", "to break"], answer: 0, type: "vocabulary" },
    { question: "日本に行き___です。", options: ["たい", "ない", "ます", "です"], answer: 0, type: "grammar" },
    { question: "What does 趣味 (しゅみ) mean?", options: ["work", "hobby", "food", "travel"], answer: 1, type: "vocabulary" },
    { question: "待って___。(Please wait.)", options: ["ます", "ください", "です", "たい"], answer: 1, type: "grammar" },
  ],
  n3: [
    { question: "What does 影響 (えいきょう) mean?", options: ["environment", "economy", "influence", "effort"], answer: 2, type: "vocabulary" },
    { question: "毎日運動する___しています。", options: ["ことに", "ように", "わけに", "ために"], answer: 1, type: "grammar" },
    { question: "What does 努力 (どりょく) mean?", options: ["influence", "effort", "decision", "situation"], answer: 1, type: "vocabulary" },
  ],
  n2: [
    { question: "What does 貢献 (こうけん) mean?", options: ["contribution", "maintenance", "tendency", "countermeasure"], answer: 0, type: "vocabulary" },
    { question: "物価は上がる___だ。", options: ["一方", "以上", "以下", "途中"], answer: 0, type: "grammar" },
    { question: "What does 傾向 (けいこう) mean?", options: ["contribution", "tendency", "grasp", "maintenance"], answer: 1, type: "vocabulary" },
  ],
};
