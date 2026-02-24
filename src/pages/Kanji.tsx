import { useParams, Navigate } from "react-router-dom";
import { useState, useMemo, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { kanjiByLevel } from "@/data/Index/kanji_index";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import KanjiDrawingPad from "@/components/KanjiDrawingPad";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { KanjiItem } from "@/types/kanji";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import KanjiStrokeDiagram from "@/components/KanjiStrokeDiagram";

const DEFAULT_LIMIT = 12;

/*  Kanji Card  */

const KanjiCard = ({ kanji }: { kanji: KanjiItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden">
      <div className="bg-muted/50 flex items-center justify-center py-8">
        <span className="text-7xl font-japanese text-primary">
          {kanji.character}
        </span>
      </div>

      <CardContent className="p-5 space-y-4">
        <p className="text-lg font-semibold">{kanji.meaning}</p>

        <TooltipProvider>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-muted-foreground cursor-help">
                    Onyomi:
                  </span>
                </TooltipTrigger>
                <TooltipContent className="text-xs">
                  Chinese-derived reading
                </TooltipContent>
              </Tooltip>
              <span className="ml-1 font-japanese">{kanji.onyomi}</span>
            </div>

            <div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-muted-foreground cursor-help">
                    Kunyomi:
                  </span>
                </TooltipTrigger>
                <TooltipContent className="text-xs">
                  Native Japanese reading
                </TooltipContent>
              </Tooltip>
              <span className="ml-1 font-japanese">{kanji.kunyomi}</span>
            </div>
          </div>
        </TooltipProvider>

        {/* Examples */}
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase">
            Examples
          </p>
          {kanji.examples.map((ex, i) => (
            <div
              key={i}
              className="flex justify-between text-sm bg-muted/50 rounded px-2 py-1"
            >
              <span className="font-japanese">
                {ex.word}（{ex.reading}）
              </span>
              <span className="text-muted-foreground">{ex.meaning}</span>
            </div>
          ))}
        </div>

        {/* Stroke Practice */}
        <div className="border-t pt-3">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-center gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            Stroke Order Practice
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {open && (
            <div className="mt-3 space-y-2">
              <KanjiStrokeDiagram character={kanji.character} />
              <KanjiDrawingPad />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

/*  Main Page  */

const Kanji = () => {
  const { levelId } = useParams();
  const level = levels.find((l) => l.id === levelId);

  const items =
    levelId && levelId in kanjiByLevel
      ? (kanjiByLevel[levelId as keyof typeof kanjiByLevel] as KanjiItem[])
      : undefined;

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const touchStartX = useRef<number | null>(null);

  /* Filter */
  const filtered = useMemo(() => {
    if (!items) return [];
    return items.filter((k) =>
      `${k.character} ${k.meaning} ${k.onyomi} ${k.kunyomi}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [items, search]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const start = (page - 1) * limit;
  const end = Math.min(start + limit, total);

  const current = filtered.slice(start, start + limit);

  /* Page change */
  const goToPage = (p: number) => {
    setPage(p);
  };

  /* Swipe */
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

  /* Smart pagination */
  const getPages = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (page > 3) pages.push("...");

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (page < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  const noResults = filtered.length === 0 && search !== "";

  if (!level || !items) return <Navigate to="/levels" replace />;

  return (
    <div className="container mx-auto px-4 py-10">
      <PageBreadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Levels", to: "/levels" },
          { label: level.name, to: `/levels/${levelId}` },
          { label: "Kanji" },
        ]}
      />

      <h1 className="text-3xl font-bold mb-2">{level.name} Kanji</h1>

      <p className="text-muted-foreground mb-6">
        Essential{" "}
        <span className="font-bold text-destructive text-lg">
          "{items.length}"
        </span>{" "}
        kanji characters
      </p>

      {/* Search */}
      <div className="max-w-sm mb-8">
        <Input
          placeholder="Search kanji..."
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
            Try with hiragana or another meaning or reading.
          </p>
        </div>
      )}

      {!noResults && (
        <>
          {/* Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {current.map((kanji) => (
              <KanjiCard key={kanji.character} kanji={kanji} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-10">

            <div className="text-sm text-muted-foreground">
              {start + 1}-{end} of {total}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 border rounded-md text-sm hover:bg-muted disabled:opacity-40"
              >
                ‹ Back
              </button>

              {getPages().map((p, i) =>
                p === "..." ? (
                  <span key={i} className="px-2 text-muted-foreground">
                    ...
                  </span>
                ) : (
                  <button
                    key={i}
                    onClick={() => goToPage(p)}
                    className={`w-8 h-8 text-sm rounded-full border ${
                      page === p
                        ? "bg-primary text-white border-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-1 border rounded-md text-sm hover:bg-muted disabled:opacity-40"
              >
                Next ›
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm">
              Result per page
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPage(1);
                }}
                className="border rounded-md px-2 py-1 bg-japan-red-light hover:bg-inherit cursor-pointer"
              >
                <option value={9}>9</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Kanji;