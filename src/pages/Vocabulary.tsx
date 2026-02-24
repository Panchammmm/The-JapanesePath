import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { vocabularyByLevel } from "@/data/Index/vocabulary_index";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import VocabFlashcard from "@/components/VocabFlashcard";

const Vocabulary = () => {
  const { levelId } = useParams();
  const level = levels.find((l) => l.id === levelId);
  
  // Safely access words for the level
    const words =
      levelId && levelId in vocabularyByLevel
        ? vocabularyByLevel[levelId as keyof typeof vocabularyByLevel]
        : undefined;

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

      <VocabFlashcard words={words} />

      {/* Display vocabulary in a responsive grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-4">
        {words.map((w, i) => (
          <Card key={i} className="hover:shadow-sm transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-2xl font-bold font-japanese mb-1">{w.japanese}</p>
                  <p className="text-sm text-primary font-japanese">{w.reading}</p>
                  <p className="text-muted-foreground mt-2">{w.meaning}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Vocabulary;
