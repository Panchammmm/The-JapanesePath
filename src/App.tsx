import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Levels from "./pages/Levels";
import LevelDetail from "./pages/LevelDetail";
import Vocabulary from "./pages/Vocabulary";
import Grammar from "./pages/Grammar";
import Kanji from "./pages/Kanji";
import Reading from "./pages/Reading";
import Listening from "./pages/Listening";
import Practice from "./pages/Practice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/levels/:levelId" element={<LevelDetail />} />
            <Route path="/levels/:levelId/vocabulary" element={<Vocabulary />} />
            <Route path="/levels/:levelId/grammar" element={<Grammar />} />
            <Route path="/levels/:levelId/kanji" element={<Kanji />} />
            <Route path="/levels/:levelId/reading" element={<Reading />} />
            <Route path="/levels/:levelId/listening" element={<Listening />} />
            <Route path="/levels/:levelId/practice" element={<Practice />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
