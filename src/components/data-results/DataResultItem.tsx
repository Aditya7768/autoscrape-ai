import { Eye, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DataResultItemProps {
  name: string;
  timeAgo: string;
  records: string;
  format: "JSON" | "CSV" | "XML";
  size: string;
}

export function DataResultItem({ name, timeAgo, records, format, size }: DataResultItemProps) {
  const formatVariant = format.toLowerCase() as "json" | "csv" | "xml";
  
  return (
    <div className="bg-card border border-border rounded-xl p-5 flex items-center justify-between animate-fade-in">
      <div className="flex-1">
        <h4 className="text-base font-medium text-foreground mb-1">{name}</h4>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{timeAgo}</span>
          <span>{records} records</span>
          <Badge variant={formatVariant}>{format}</Badge>
          <span>{size}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Eye className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Download className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
          <Trash2 className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
