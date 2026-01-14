import { Filter, MessageCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { DataResultItem } from "@/components/data-results/DataResultItem";
import { Button } from "@/components/ui/button";

const dataResults = [
  {
    name: "E-commerce Price Scraper",
    timeAgo: "2 hours ago",
    records: "1,247",
    format: "JSON" as const,
    size: "2.4 MB",
  },
  {
    name: "News Headlines Aggregator",
    timeAgo: "5 hours ago",
    records: "342",
    format: "CSV" as const,
    size: "890 KB",
  },
  {
    name: "Product Review Monitor",
    timeAgo: "1 day ago",
    records: "5,891",
    format: "JSON" as const,
    size: "12.3 MB",
  },
  {
    name: "Real Estate Listings",
    timeAgo: "2 days ago",
    records: "456",
    format: "XML" as const,
    size: "1.8 MB",
  },
];

const DataResults = () => {
  return (
    <MainLayout title="Data Results">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">Data Results</h2>
          <p className="text-muted-foreground">Access and download your scraped data</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      <div className="space-y-4">
        {dataResults.map((result, index) => (
          <DataResultItem key={index} {...result} />
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

export default DataResults;
