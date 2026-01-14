import { Zap, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { StatCard } from "./StatCard";

const stats = [
  {
    title: "Total Scrapes Today",
    value: "12,847",
    change: "+12.5% from yesterday",
    changeType: "positive" as const,
    icon: Zap,
  },
  {
    title: "Success Rate",
    value: "98.7%",
    change: "+2.3% this week",
    changeType: "positive" as const,
    icon: CheckCircle,
  },
  {
    title: "Avg Processing Time",
    value: "1.2s",
    change: "-0.3s faster",
    changeType: "positive" as const,
    icon: Clock,
  },
  {
    title: "Active Schedules",
    value: "24",
    change: "3 new this month",
    changeType: "neutral" as const,
    icon: TrendingUp,
  },
];

export function AnalyticsOverview() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground mb-5">Analytics Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
}
