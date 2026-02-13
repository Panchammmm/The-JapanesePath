import type { ListeningQuestion } from "@/types/listening";

export const listening: ListeningQuestion[] = [
  {
    title: "News Report",
    description: "A short news segment about a local event in a Japanese city.",
    question: "What is the news report about?",
    options: ["A festival", "A typhoon", "An election", "A sports event"],
    answer: 0,
  },
  {
    title: "Job Interview",
    description: "A candidate answering questions during a job interview.",
    question: "What is the candidate's strongest skill?",
    options: ["Communication", "Programming", "Leadership", "Design"],
    answer: 0,
  },
];
