import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { readingByLevel  } from "@/data/Index/reading_index";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Reading = () => {
  const { levelId } = useParams();
  const [furigana, setFurigana] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});

  const level = levels.find((l) => l.id === levelId);
  
  // Safely access passages for the level
    const passages =
      levelId && levelId in readingByLevel
        ? readingByLevel[levelId as keyof typeof readingByLevel]
        : undefined;

  if (!level || !passages) return <Navigate to="/levels" replace />;

  const handleAnswer = (key: string, idx: number) => {
    setAnswers((prev) => ({ ...prev, [key]: idx }));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <PageBreadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Levels", to: "/levels" },
        { label: level.name, to: `/levels/${levelId}` },
        { label: "Reading" },
      ]} />
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{level.name} Reading</h1>
          <p className="text-muted-foreground">Practice reading comprehension.</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setFurigana(!furigana)}>
          {furigana ? "Hide" : "Show"} Furigana
        </Button>
      </div>
      <div className="space-y-8">
        {passages.map((p, pi) => (
          <Card key={pi}>
            <CardHeader>
              <CardTitle className="font-japanese">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4 text-lg leading-relaxed font-japanese">
                {furigana ? p.furiganaPassage : p.passage}
              </div>
              {p.vocabHighlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {p.vocabHighlights.map((v) => (
                    <span key={v} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-japanese">{v}</span>
                  ))}
                </div>
              )}
              <div className="space-y-3 pt-2">
                <p className="font-semibold text-sm">Comprehension Questions</p>
                {p.questions.map((q, qi) => {
                  const key = `${pi}-${qi}`;
                  const selected = answers[key];
                  return (
                    <div key={qi} className="space-y-2">
                      <p className="text-sm">{q.question}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {q.options.map((opt, oi) => {
                          const isSelected = selected === oi;
                          const isCorrect = selected !== null && selected !== undefined && oi === q.answer;
                          const isWrong = isSelected && oi !== q.answer;
                          return (
                            <button
                              key={oi}
                              onClick={() => handleAnswer(key, oi)}
                              disabled={selected !== null && selected !== undefined}
                              className={`text-sm rounded-md border px-3 py-2 text-left transition-colors ${
                                isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-700" :
                                isWrong ? "border-red-400 bg-red-50 text-red-700" :
                                "hover:bg-muted"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reading;
