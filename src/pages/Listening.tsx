import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { listening } from "@/data/listening";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Listening = () => {
  const { levelId } = useParams();
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [playing, setPlaying] = useState<number | null>(null);

  const level = levels.find((l) => l.id === levelId);
  const questions = listening[levelId || ""];
  if (!level || !questions) return <Navigate to="/levels" replace />;

  return (
    <div className="container mx-auto px-4 py-10">
      <PageBreadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Levels", to: "/levels" },
        { label: level.name, to: `/levels/${levelId}` },
        { label: "Listening" },
      ]} />
      <h1 className="text-3xl font-bold mb-2">{level.name} Listening</h1>
      <p className="text-muted-foreground mb-8">Practice JLPT-style listening questions.</p>
      <div className="space-y-6">
        {questions.map((q, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-lg">{q.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{q.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                <button
                  onClick={() => setPlaying(playing === i ? null : i)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {playing === i ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                </button>
                <div className="flex-1">
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary/30 w-0" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Audio placeholder — 0:00 / 0:45</p>
                </div>
              </div>
              <p className="font-medium">{q.question}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, oi) => (
                  <div
                    key={oi}
                    className={`text-sm rounded-md border px-3 py-2 ${
                      revealed[i] && oi === q.answer ? "border-emerald-500 bg-emerald-50 text-emerald-700" : ""
                    }`}
                  >
                    {opt}
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setRevealed((p) => ({ ...p, [i]: !p[i] }))}
              >
                {revealed[i] ? "Hide Answer" : "Show Answer"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Listening;
