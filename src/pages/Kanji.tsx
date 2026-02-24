import { useParams, Navigate } from "react-router-dom";
import { useState, useMemo, useRef, useEffect } from "react";
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
import SmartPagination from "@/components/SmartPagination";

const DEFAULT_LIMIT = 9;
const SWIPE_THRESHOLD = 60;

/* Kanji Card */

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

/* Main Page */

const Kanji = () => {
  const { levelId } = useParams();
  const level = levels.find((l) => l.id === levelId);

  const items: KanjiItem[] | undefined =
    levelId && levelId in kanjiByLevel
      ? kanjiByLevel[levelId as keyof typeof kanjiByLevel]
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

  /* Reset page if result shrink */

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [totalPages, page]);

  /* Memoized current items */

  const current = useMemo(() => {
    const start = (page - 1) * limit;
    return filtered.slice(start, start + limit);
  }, [filtered, page, limit]);

  /* Mobile Swipe */

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > SWIPE_THRESHOLD && page < totalPages) setPage(page + 1);
    if (diff < -SWIPE_THRESHOLD && page > 1) setPage(page - 1);

    touchStartX.current = null;
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

      <div className="max-w-sm mb-2">
        <Input
          placeholder="Search kanji..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Result count */}

      <p className="text-sm text-muted-foreground mb-8">
        {total} results
      </p>

      {/* No Results */}

      {noResults && (
        <div className="text-center py-10 border rounded-xl bg-muted/40">
          <p className="text-lg font-medium">
            No kanji found for "
            <span className="text-primary">{search}</span>"
          </p>

          <p className="text-sm text-muted-foreground mt-1">
            Try searching by meaning, onyomi, kunyomi or the character itself.
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

          <SmartPagination
            page={page}
            total={total}
            limit={limit}
            onPageChange={setPage}
            onLimitChange={setLimit}
            showLimit={true}
          />
        </>
      )}
    </div>
  );
};

export default Kanji;