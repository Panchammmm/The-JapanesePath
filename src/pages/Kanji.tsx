import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { kanjiByLevel } from "@/data/Index/kanji_index";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import KanjiDrawingPad from "@/components/KanjiDrawingPad";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { KanjiItem } from "@/types/kanji";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import KanjiStrokeDiagram from "@/components/KanjiStrokeDiagram";

/* Kanji Card Component */
const KanjiCard = ({ kanji }: { kanji: KanjiItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden">
      {/* Character */}
      <div className="bg-muted/50 flex items-center justify-center py-8">
        <span className="text-7xl font-japanese text-primary">
          {kanji.character}
        </span>
      </div>

      <CardContent className="p-5 space-y-4">
        {/* Meaning */}
        <p className="text-lg font-semibold">{kanji.meaning}</p>

        {/* Readings */}
        <TooltipProvider>
          <div className="grid grid-cols-2 gap-2 text-sm">

            {/* Onyomi */}
            <div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-muted-foreground cursor-help">
                    Onyomi:
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-xs">
                  Chinese-derived reading of the kanji.
                  Often used in compound words (jukugo).
                </TooltipContent>
              </Tooltip>
              <span className="ml-1 font-japanese">{kanji.onyomi}</span>
            </div>

            {/* Kunyomi */}
            <div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-muted-foreground cursor-help">
                    Kunyomi:
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-xs">
                  Native Japanese reading of the kanji.
                  Often used when the kanji appears alone.
                </TooltipContent>
              </Tooltip>
              <span className="ml-1 font-japanese">{kanji.kunyomi}</span>
            </div>

          </div>
        </TooltipProvider>

        {/* Examples */}
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            Examples
          </p>
          {kanji.examples.map((ex, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm bg-muted/50 rounded px-2 py-1"
            >
              <span className="font-japanese">
                {ex.word}（{ex.reading}）
              </span>
              <span className="text-muted-foreground">{ex.meaning}</span>
            </div>
          ))}
        </div>

        {/* Collapsible Stroke Practice */}
        <div className="border-t pt-3">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full flex items-center justify-center gap-2 pt-1 text-xs font-medium text-muted-foreground hover:text-foreground transition"
          >
            Stroke Order Practice Area
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden ${open ? "opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
          >
            <div className="pt-2 pb-2">
              <KanjiStrokeDiagram character={kanji.character} />
            </div>

            <KanjiDrawingPad />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/* Main Page Component */
const Kanji = () => {
  const { levelId } = useParams();
  const level = levels.find((l) => l.id === levelId);

  const items =
    levelId && levelId in kanjiByLevel
      ? (kanjiByLevel[levelId as keyof typeof kanjiByLevel] as KanjiItem[])
      : undefined;

  if (!level || !items) return <Navigate to="/levels" replace />;

  console.log(items.map((k) => k.character).join(" "));

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
      <p className="text-muted-foreground mb-8">
        Essential{" "}
        <span className="font-bold text-destructive text-lg">
          '{items.length}'
        </span>{" "}
        kanji characters for {level.name}.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {items.map((kanji, index) => (
          <KanjiCard key={kanji.character} kanji={kanji} />
        ))}
      </div>
    </div>
  );
};

export default Kanji;
