import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Levels = () => (
  <div className="container mx-auto px-4 py-10">
    <PageBreadcrumb items={[{ label: "Home", to: "/" }, { label: "JLPT Levels" }]} />
    <h1 className="text-3xl font-bold mb-2">JLPT Levels</h1>
    <p className="text-muted-foreground mb-8">Choose your level and start learning Japanese step by step.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {levels.map((level) => (
        <Card key={level.id} className="group hover:shadow-md transition-all hover:-translate-y-1">
          <CardHeader>
            <div className="flex items-center justify-between mb-1">
              <span className="text-3xl font-bold text-primary">{level.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${level.color}`}>{level.difficulty}</span>
            </div>
            <CardTitle className="text-xl">{level.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{level.description}</p>
            <Button asChild>
              <Link to={`/levels/${level.id}`} className="flex items-center gap-2">
                Start Learning <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Levels;
