import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { grammarByLevel } from "@/data/Index/grammer_index";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Grammar = () => {
  const { levelId } = useParams();
  const level = levels.find((l) => l.id === levelId);

  // Safely access grammar points for the level
  const points =
    levelId && levelId in grammarByLevel
      ? grammarByLevel[levelId as keyof typeof grammarByLevel]
      : undefined;

  if (!level || !points) return <Navigate to="/levels" replace />;

  return (
    <div className="container mx-auto px-4 py-10">
      <PageBreadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Levels", to: "/levels" },
        { label: level.name, to: `/levels/${levelId}` },
        { label: "Grammar" },
      ]} />
      <h1 className="text-3xl font-bold mb-2">{level.name} Grammar</h1>
      <p className="text-muted-foreground mb-8">Key grammar patterns for {level.name}.</p>
      <div className="space-y-6">
        {points.map((g, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-xl font-japanese">{g.name}</CardTitle>
              <p className="text-sm text-primary font-mono">{g.structure}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{g.explanation}</p>
              <div className="space-y-2">
                {g.examples.map((ex, j) => (
                  <div key={j} className="rounded-md bg-muted/50 p-3">
                    <p className="font-japanese font-medium">{ex.japanese}</p>
                    <p className="text-sm text-muted-foreground">{ex.english}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-2 text-sm text-accent-foreground bg-accent rounded-md p-3">
                <Lightbulb className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{g.tip}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Grammar;
