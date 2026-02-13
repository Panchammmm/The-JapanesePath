import type { ListeningQuestion } from "@/types/listening";

export const listening: ListeningQuestion[] = [
  {
    title: "At the Station",
    description: "A conversation at a train station between a traveler and station staff.",
    question: "Where does the person want to go?",
    options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    answer: 2,
  },
  {
    title: "Shopping",
    description: "A customer asking about the price of an item at a store.",
    question: "How much is the item?",
    options: ["500 yen", "1000 yen", "1500 yen", "2000 yen"],
    answer: 1,
  },
  {
    title: "Daily Routine",
    description: "A person describing their morning routine to a friend.",
    question: "What does the person do first in the morning?",
    options: ["Eat breakfast", "Take a shower", "Brush teeth", "Exercise"],
    answer: 2,
  },
];
