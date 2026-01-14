import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="hero-gradient rounded-2xl p-8 mb-8 relative overflow-hidden">
      {/* Decorative particles/dots overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-2 h-2 bg-primary/30 rounded-full" />
        <div className="absolute top-20 left-40 w-1 h-1 bg-primary/40 rounded-full" />
        <div className="absolute top-8 right-32 w-1.5 h-1.5 bg-primary/20 rounded-full" />
        <div className="absolute top-24 right-48 w-2 h-2 bg-primary/30 rounded-full" />
        <div className="absolute bottom-12 left-32 w-1 h-1 bg-primary/40 rounded-full" />
        <div className="absolute bottom-8 right-24 w-2 h-2 bg-primary/20 rounded-full" />
        <div className="absolute top-16 left-60 w-1.5 h-1.5 bg-pink-300/30 rounded-full" />
        <div className="absolute bottom-16 right-40 w-1 h-1 bg-pink-300/40 rounded-full" />
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-primary mb-3">
          Welcome to AutoScrape AI
        </h2>
        <p className="text-muted-foreground text-lg mb-6 max-w-xl">
          Automate Your Data Extraction — Smart scraping, analytics, and scheduling in one place.
        </p>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Scrape Job
        </Button>
      </div>
    </div>
  );
}
