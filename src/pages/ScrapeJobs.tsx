import { Plus, Play, Pause, MoreVertical, MessageCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const jobs = [
  { name: "E-commerce Price Monitor", status: "running", lastRun: "5 min ago", schedule: "Every 30 min" },
  { name: "News Aggregator", status: "paused", lastRun: "2 hours ago", schedule: "Every 1 hour" },
  { name: "Social Media Tracker", status: "running", lastRun: "10 min ago", schedule: "Every 15 min" },
  { name: "Product Review Scraper", status: "completed", lastRun: "1 day ago", schedule: "Daily" },
];

const ScrapeJobs = () => {
  return (
    <MainLayout title="Scrape Jobs">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">Scrape Jobs</h2>
          <p className="text-muted-foreground">Manage and monitor your scraping tasks</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Scrape Job
        </Button>
      </div>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-card border border-border rounded-xl p-5 flex items-center justify-between animate-fade-in">
            <div className="flex-1">
              <h4 className="text-base font-medium text-foreground mb-1">{job.name}</h4>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Last run: {job.lastRun}</span>
                <span>{job.schedule}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge 
                variant={job.status === "running" ? "default" : job.status === "paused" ? "secondary" : "outline"}
                className="capitalize"
              >
                {job.status}
              </Badge>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                {job.status === "running" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Chat Button */}
      <Button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </MainLayout>
  );
};

export default ScrapeJobs;
