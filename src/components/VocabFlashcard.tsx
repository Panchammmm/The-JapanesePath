import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Shuffle } from "lucide-react";
import type { VocabWord } from "@/types/vocabulary";

interface Props {
  words: VocabWord[];
}

export default function VocabFlashcard({ words }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [deck, setDeck] = useState(words);

  const startX = useRef(0);

  /* Update deck if props change */
  useEffect(() => {
    setDeck(words);
    setIndex(0);
    setFlipped(false);
  }, [words]);

  const next = () => {
    setIndex((i) => (i + 1) % deck.length);
    setFlipped(false);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + deck.length) % deck.length);
    setFlipped(false);
  };

  const shuffle = () => {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setIndex(0);
    setFlipped(false);
  };

  /* Keyboard Controls */
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [deck.length]);

  /* Swipe Support (Mobile) */
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  const word = deck[index];

  if (!word) return null;

  return (
    <div className="mb-12">
      {/* Card */}
      <div className="flashcard-container">
        <div
          className={`flashcard ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Front */}
          <div className="flashcard-face bg-card border flex flex-col items-center justify-center relative">
            <p className="text-5xl font-japanese mb-4">
              {word.japanese}
            </p>

            <p className="text-zinc-400 text-xs">
              Click or tap to flip ＼(ﾟｰﾟ＼)
            </p>
          </div>

          {/* Back */}
          <div className="flashcard-face flashcard-back bg-rose-500 text-white flex flex-col items-center justify-center">
            <p className="text-5xl font-japanese mb-4">
              {word.japanese}
            </p>

            <p className="text-3xl font-semibold mb-2">
              ({word.reading})
            </p>

            <p className="text-lg opacity-90">
              {word.meaning}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-muted hover:bg-accent transition"
        >
          <ArrowLeft />
        </button>

        <span className="text-sm text-muted-foreground">
          {index + 1} / {deck.length}
        </span>

        <button
          onClick={next}
          className="p-3 rounded-full bg-muted hover:bg-accent transition"
        >
          <ArrowRight />
        </button>

        <button
          onClick={shuffle}
          className="p-3 rounded-full bg-muted hover:bg-accent transition"
        >
          <Shuffle size={18} />
        </button>
      </div>
    </div>
  );
}