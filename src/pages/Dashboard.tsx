import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { AnalyticsOverview } from "@/components/dashboard/AnalyticsOverview";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <MainLayout title="Dashboard">
      <HeroSection />
      <AnalyticsOverview />
      
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

export default Dashboard;
