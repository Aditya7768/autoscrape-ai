import { Plus, Clock, Calendar, MessageCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const schedules = [
  { name: "Hourly Price Check", frequency: "Every hour", nextRun: "In 45 minutes", active: true },
  { name: "Daily Report Generation", frequency: "Daily at 9:00 AM", nextRun: "Tomorrow", active: true },
  { name: "Weekly Summary", frequency: "Every Monday", nextRun: "In 3 days", active: true },
  { name: "Monthly Archive", frequency: "First of month", nextRun: "In 2 weeks", active: false },
];

const Schedules = () => {
  return (
    <MainLayout title="Schedules">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">Schedules</h2>
          <p className="text-muted-foreground">Configure automated scraping schedules</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Schedule
        </Button>
      </div>

      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div key={index} className="bg-card border border-border rounded-xl p-5 flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="stat-icon-bg rounded-full p-3">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-medium text-foreground mb-1">{schedule.name}</h4>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{schedule.frequency}</span>
                  </div>
                  <span>Next: {schedule.nextRun}</span>
                </div>
              </div>
            </div>
            
            <Badge variant={schedule.active ? "default" : "secondary"}>
              {schedule.active ? "Active" : "Inactive"}
            </Badge>
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

export default Schedules;
