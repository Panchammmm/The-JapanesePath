import { useParams, Navigate } from "react-router-dom";
import { useState, useMemo, useRef } from "react";
import { vocabularyByLevel } from "@/data/Index/vocabulary_index";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Input } from "@/components/ui/input";

const ITEMS_PER_PAGE = 20;

const Vocabulary = () => {
  const { levelId } = useParams();
  const level = levels.find((l) => l.id === levelId);

  const words =
    levelId && levelId in vocabularyByLevel
      ? vocabularyByLevel[levelId as keyof typeof vocabularyByLevel]
      : undefined;

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const touchStartX = useRef<number | null>(null);

  /* Search filter */
  const filteredWords = useMemo(() => {
    if (!words) return [];
    return words.filter((w) =>
      `${w.kanji} ${w.hiragana} ${w.romaji} ${w.meaning} ${w.bengali}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [words, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredWords.length / ITEMS_PER_PAGE)
  );

  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentWords = filteredWords.slice(start, start + ITEMS_PER_PAGE);

  const goToPage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Swipe Support */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50 && page < totalPages) goToPage(page + 1);
    if (diff < -50 && page > 1) goToPage(page - 1);

    touchStartX.current = null;
  };

  const noResults = filteredWords.length === 0 && search.trim() !== "";

  if (!level || !words) return <Navigate to="/levels" replace />;

  return (
    <div className="container mx-auto px-4 py-10">
      <PageBreadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Levels", to: "/levels" },
          { label: level.name, to: `/levels/${levelId}` },
          { label: "Vocabulary" },
        ]}
      />

      <h1 className="text-3xl font-bold mb-2">{level.name} Vocabulary</h1>

      <p className="text-muted-foreground mb-6">
        Essential{" "}
        <span className="font-bold text-destructive text-lg">
          "{words.length}"
        </span>{" "}
        words for {level.name} level.
      </p>

      {/* Search */}
      <div className="max-w-sm mb-6">
        <Input
          placeholder="Search vocabulary..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* No Results */}
      {noResults && (
        <div className="text-center py-10 border rounded-xl bg-muted/40">
          <p className="text-lg font-medium">
            No results for "<span className="text-primary">{search}</span>"
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            This word is not listed in the JLPT N5 vocabulary.
          </p>
        </div>
      )}

      {/* Table */}
      {!noResults && (
        <div
          className="overflow-x-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-primary text-white [&_th]:text-left [&_th]:font-semibold">
              <tr>
                <th className="p-3">Kanji</th>
                <th className="p-3">Hiragana</th>
                <th className="p-3">Romaji</th>
                <th className="p-3">English</th>
                <th className="p-3">Bengali</th>
              </tr>
            </thead>

            <tbody>
              {currentWords.map((word, i) => (
                <tr
                  key={i}
                  className="border-t hover:bg-muted/60 transition [&_td]:text-lg"
                >
                  <td className="p-3 font-medium">{word.kanji}</td>
                  <td className="p-3">{word.hiragana}</td>
                  <td className="p-3">{word.romaji}</td>
                  <td className="p-3">{word.meaning}</td>
                  <td className="p-3">{word.bengali}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {!noResults && (
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 border rounded-lg hover:bg-muted disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(Math.max(page - 2, 0), Math.max(page + 3, 5))
            .map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`px-4 py-2 rounded-lg border transition ${
                  page === p
                    ? "bg-primary text-white border-primary"
                    : "hover:bg-muted"
                }`}
              >
                {p}
              </button>
            ))}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 border rounded-lg hover:bg-muted disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Vocabulary;
