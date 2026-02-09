import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import { vocabulary } from "@/data/vocabulary";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Vocabulary = () => {
  const { levelId } = useParams();
  const level = levels.find((l) => l.id === levelId);
  const words = vocabulary[levelId || ""];
  if (!level || !words) return <Navigate to="/levels" replace />;

  return (
    <div className="container mx-auto px-4 py-10">
      <PageBreadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Levels", to: "/levels" },
        { label: level.name, to: `/levels/${levelId}` },
        { label: "Vocabulary" },
      ]} />
      <h1 className="text-3xl font-bold mb-2">{level.name} Vocabulary</h1>
      <p className="text-muted-foreground mb-8">Essential words for {level.name} level.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {words.map((w, i) => (
          <Card key={i} className="hover:shadow-sm transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-2xl font-bold font-japanese mb-1">{w.japanese}</p>
                  <p className="text-sm text-primary font-japanese">{w.reading}</p>
                  <p className="text-muted-foreground mt-2">{w.meaning}</p>
                </div>
                <button className="mt-1 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary" aria-label="Play audio">
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Vocabulary;
