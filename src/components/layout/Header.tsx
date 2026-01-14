import { Bell, RefreshCw, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      
      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        {/* Refresh Button */}
        <Button variant="ghost" size="icon">
          <RefreshCw className="w-5 h-5 text-muted-foreground" />
        </Button>

        {/* User Profile */}
        <div className="flex items-center gap-2 ml-2">
          <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-sm font-medium text-foreground">John Doe</span>
        </div>
      </div>
    </header>
  );
}
