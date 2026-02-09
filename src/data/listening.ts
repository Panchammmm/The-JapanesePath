export interface ListeningQuestion {
  title: string;
  description: string;
  question: string;
  options: string[];
  answer: number;
}

export const listening: Record<string, ListeningQuestion[]> = {
  n5: [
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
  ],
  n4: [
    {
      title: "Making Plans",
      description: "Two friends discussing weekend plans over the phone.",
      question: "What do they decide to do?",
      options: ["Watch a movie", "Go hiking", "Visit a museum", "Stay home"],
      answer: 0,
    },
    {
      title: "At the Restaurant",
      description: "A group ordering food at a Japanese restaurant.",
      question: "What did the woman order?",
      options: ["Ramen", "Sushi", "Tempura", "Udon"],
      answer: 2,
    },
  ],
  n3: [
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
  ],
  n2: [
    {
      title: "University Lecture",
      description: "A professor discussing the impact of technology on modern society.",
      question: "What is the main topic of the lecture?",
      options: ["AI ethics", "Social media effects", "Technology and society", "Robotics"],
      answer: 2,
    },
    {
      title: "Business Meeting",
      description: "A team discussing quarterly results and future strategy.",
      question: "What was the result of this quarter?",
      options: ["Sales increased", "Sales decreased", "No change", "Not mentioned"],
      answer: 0,
    },
  ],
};
