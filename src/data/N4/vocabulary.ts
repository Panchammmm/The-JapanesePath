export interface VocabWord {
  japanese: string;
  reading: string;
  meaning: string;
}

export const vocabulary: Record<string, VocabWord[]> = {
  n5: [
    { japanese: "食べる", reading: "たべる", meaning: "to eat" },
    { japanese: "飲む", reading: "のむ", meaning: "to drink" },
    { japanese: "学校", reading: "がっこう", meaning: "school" },
    { japanese: "先生", reading: "せんせい", meaning: "teacher" },
    { japanese: "友達", reading: "ともだち", meaning: "friend" },
  ],
  n4: [
    { japanese: "届ける", reading: "とどける", meaning: "to deliver" },
    { japanese: "経験", reading: "けいけん", meaning: "experience" },
    { japanese: "趣味", reading: "しゅみ", meaning: "hobby" },
    { japanese: "将来", reading: "しょうらい", meaning: "future" },
    { japanese: "準備", reading: "じゅんび", meaning: "preparation" },
  ],
  n3: [
    { japanese: "影響", reading: "えいきょう", meaning: "influence" },
    { japanese: "経済", reading: "けいざい", meaning: "economy" },
    { japanese: "努力", reading: "どりょく", meaning: "effort" },
    { japanese: "環境", reading: "かんきょう", meaning: "environment" },
    { japanese: "政治", reading: "せいじ", meaning: "politics" },
  ],
};
