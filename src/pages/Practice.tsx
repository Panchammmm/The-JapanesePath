import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { practice } from "@/data/practice";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

const Practice = () => {
  const { levelId } = useParams();
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const level = levels.find((l) => l.id === levelId);
  const questions = practice[levelId || ""];
  if (!level || !questions) return <Navigate to="/levels" replace />;

  const score = submitted
    ? questions.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0)
    : 0;

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <PageBreadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Levels", to: "/levels" },
        { label: level.name, to: `/levels/${levelId}` },
        { label: "Practice" },
      ]} />
      <h1 className="text-3xl font-bold mb-2">{level.name} Practice</h1>
      <p className="text-muted-foreground mb-8">Test your knowledge of vocabulary and grammar.</p>

      {submitted && (
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">{score}/{questions.length}</p>
            <p className="text-muted-foreground mb-4">
              {score === questions.length ? "Perfect score! 🎉" :
               score >= questions.length / 2 ? "Good job! Keep practicing." :
               "Keep studying, you'll get there! 💪"}
            </p>
            <Button onClick={reset} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" /> Try Again
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {questions.map((q, i) => {
          const selected = answers[i] ?? null;
          return (
            <Card key={i}>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize">{q.type}</span>
                  <span className="text-sm font-medium">Q{i + 1}</span>
                </div>
                <p className="font-medium mb-3 font-japanese">{q.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oi) => {
                    const isSelected = selected === oi;
                    const isCorrect = submitted && oi === q.answer;
                    const isWrong = submitted && isSelected && oi !== q.answer;
                    return (
                      <button
                        key={oi}
                        onClick={() => !submitted && setAnswers((p) => ({ ...p, [i]: oi }))}
                        disabled={submitted}
                        className={`text-sm rounded-md border px-3 py-2 text-left transition-colors flex items-center gap-2 ${
                          isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-700" :
                          isWrong ? "border-red-400 bg-red-50 text-red-700" :
                          isSelected && !submitted ? "border-primary bg-primary/5" :
                          "hover:bg-muted"
                        }`}
                      >
                        {isCorrect && <CheckCircle className="h-4 w-4 shrink-0" />}
                        {isWrong && <XCircle className="h-4 w-4 shrink-0" />}
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {!submitted && (
        <div className="mt-8 text-center">
          <Button size="lg" onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length < questions.length}>
            Submit Answers
          </Button>
          <p className="text-xs text-muted-foreground mt-2">{Object.keys(answers).length}/{questions.length} answered</p>
        </div>
      )}
    </div>
  );
};

export default Practice;
