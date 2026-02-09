import { useParams, Link, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Languages, PenTool, FileText, Headphones, ClipboardCheck } from "lucide-react";
import { levels } from "@/data/levels";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const sections = [
  { key: "vocabulary", label: "Vocabulary", icon: BookOpen, desc: "Learn essential words" },
  { key: "grammar", label: "Grammar", icon: Languages, desc: "Master sentence patterns" },
  { key: "kanji", label: "Kanji", icon: PenTool, desc: "Read and write characters" },
  { key: "reading", label: "Reading", icon: FileText, desc: "Practice comprehension" },
  { key: "listening", label: "Listening", icon: Headphones, desc: "Train your ear" },
  { key: "practice", label: "Practice", icon: ClipboardCheck, desc: "Test your knowledge" },
];

const LevelDetail = () => {
  const { levelId } = useParams();
  const level = levels.find((l) => l.id === levelId);
  if (!level) return <Navigate to="/levels" replace />;

  return (
    <div className="container mx-auto px-4 py-10">
      <PageBreadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Levels", to: "/levels" },
        { label: level.name },
      ]} />
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl font-bold text-primary">{level.name}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${level.color}`}>{level.difficulty}</span>
        </div>
        <h1 className="text-2xl font-bold mb-1">{level.title}</h1>
        <p className="text-muted-foreground">{level.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((s) => (
          <Link key={s.key} to={`/levels/${levelId}/${s.key}`}>
            <Card className="h-full hover:shadow-md hover:-translate-y-1 transition-all group cursor-pointer">
              <CardHeader className="pb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{s.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LevelDetail;
