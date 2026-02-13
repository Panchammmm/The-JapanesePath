import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { kanjiByLevel } from "@/data/Index/kanji_index";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Kanji = () => {
  const { levelId } = useParams();
  const level = levels.find((l) => l.id === levelId);

  // Safely access kanji items for the level
    const items =
      levelId && levelId in kanjiByLevel
        ? kanjiByLevel[levelId as keyof typeof kanjiByLevel]
        : undefined;
  
  if (!level || !items) return <Navigate to="/levels" replace />;

  return (
    <div className="container mx-auto px-4 py-10">
      <PageBreadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Levels", to: "/levels" },
        { label: level.name, to: `/levels/${levelId}` },
        { label: "Kanji" },
      ]} />
      <h1 className="text-3xl font-bold mb-2">{level.name} Kanji</h1>
      <p className="text-muted-foreground mb-8">Essential kanji characters for {level.name}.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((k, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="bg-muted/50 flex items-center justify-center py-8">
              <span className="text-7xl font-japanese text-primary">{k.character}</span>
            </div>
            <CardContent className="p-5 space-y-3">
              <p className="text-lg font-semibold">{k.meaning}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Onyomi:</span>
                  <span className="ml-1 font-japanese">{k.onyomi}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Kunyomi:</span>
                  <span className="ml-1 font-japanese">{k.kunyomi}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Examples</p>
                {k.examples.map((ex, j) => (
                  <div key={j} className="flex items-center justify-between text-sm bg-muted/50 rounded px-2 py-1">
                    <span className="font-japanese">{ex.word}（{ex.reading}）</span>
                    <span className="text-muted-foreground">{ex.meaning}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3">
                <p className="text-xs text-muted-foreground text-center">Stroke order practice area</p>
                <div className="mt-2 h-16 rounded border-2 border-dashed border-muted flex items-center justify-center text-muted-foreground text-sm">
                  ✎ Practice here
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Kanji;
