import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function StatCard({ title, value, change, changeType, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-card rounded-xl p-5 border border-border animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          <p className={cn(
            "text-sm mt-2",
            changeType === "positive" && "text-stat-positive",
            changeType === "negative" && "text-stat-negative",
            changeType === "neutral" && "text-muted-foreground"
          )}>
            {change}
          </p>
        </div>
        <div className="stat-icon-bg rounded-full p-3">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
