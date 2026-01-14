import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Zap, 
  Calendar, 
  Database, 
  Code, 
  Settings,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Scrape Jobs", url: "/scrape-jobs", icon: Zap },
  { title: "Schedules", url: "/schedules", icon: Calendar },
  { title: "Data Results", url: "/data-results", icon: Database },
  { title: "API Access", url: "/api-access", icon: Code },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <aside className="w-60 bg-sidebar border-r border-sidebar-border flex flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="p-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold text-primary">AutoScrape AI</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <li key={item.title}>
                <Link
                  to={item.url}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2 text-sm text-sidebar-foreground">
          <HelpCircle className="w-4 h-4" />
          <span>Need help?</span>
        </div>
        <a 
          href="mailto:support@autoscrape.ai" 
          className="text-sm text-primary hover:underline mt-1 block"
        >
          support@autoscrape.ai
        </a>
      </div>
    </aside>
  );
}
