import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Languages, PenTool, ClipboardCheck, ArrowRight } from "lucide-react";
import { levels } from "@/data/levels";

const features = [
  { icon: BookOpen, title: "Structured Roadmap", desc: "Follow a clear path from N5 to N3" },
  { icon: Languages, title: "Grammar Explained", desc: "Simple breakdowns with examples" },
  { icon: PenTool, title: "Kanji with Meaning", desc: "Learn readings and stroke order" },
  { icon: ClipboardCheck, title: "Practice Questions", desc: "Test yourself with quizzes" },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-japan-warm">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c41e3a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container mx-auto px-4 py-20 md:py-32 text-center relative">
        <div className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          🇯🇵 Start Your Journey
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Learn Japanese from{" "}
          <span className="text-primary">N5 to N3</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Grammar, vocabulary, kanji & practice — all in one place. A structured path for JLPT success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-base">
            <Link to="/levels/n5">Start with N5</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link to="/levels">Explore Levels</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Everything You Need to Study
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <Card key={f.title} className="text-center border-0 shadow-none bg-muted/50 hover:bg-accent transition-colors">
            <CardHeader className="pb-2">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Level Cards */}
    <section className="container mx-auto px-4 py-16 border-t">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">JLPT Levels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Card key={level.id} className="group hover:shadow-md transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-primary">{level.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${level.color}`}>{level.difficulty}</span>
              </div>
              <CardTitle className="text-lg">{level.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{level.description}</p>
              <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                <Link to={`/levels/${level.id}`} className="flex items-center gap-1">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default Index;
