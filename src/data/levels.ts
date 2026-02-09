export interface Level {
  id: string;
  name: string;
  title: string;
  description: string;
  difficulty: string;
  color: string;
}

export const levels: Level[] = [
  {
    id: "n5",
    name: "N5",
    title: "Beginner",
    description: "Start your Japanese journey with basic greetings, hiragana, katakana, and simple sentence patterns.",
    difficulty: "Beginner",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "n4",
    name: "N4",
    title: "Elementary",
    description: "Build on basics with more grammar patterns, vocabulary, and the ability to read simple passages.",
    difficulty: "Elementary",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "n3",
    name: "N3",
    title: "Intermediate",
    description: "Bridge to advanced levels with complex grammar, expanded kanji, and natural conversation skills.",
    difficulty: "Intermediate",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "n2",
    name: "N2",
    title: "Upper-Intermediate",
    description: "Near-fluent comprehension of newspapers, lectures, and complex written materials.",
    difficulty: "Upper-Intermediate",
    color: "bg-purple-100 text-purple-700",
  },
];
