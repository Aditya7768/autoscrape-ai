import { User, Bell, Shield, CreditCard, MessageCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

const settingsSections = [
  { title: "Profile Settings", description: "Manage your account details and preferences", icon: User },
  { title: "Notifications", description: "Configure email and push notification settings", icon: Bell },
  { title: "Security", description: "Password, two-factor authentication, and sessions", icon: Shield },
  { title: "Billing", description: "Manage your subscription and payment methods", icon: CreditCard },
];

const Settings = () => {
  return (
    <MainLayout title="Settings">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-1">Settings</h2>
        <p className="text-muted-foreground">Manage your account and application settings</p>
      </div>

      <div className="space-y-4">
        {settingsSections.map((section, index) => (
          <div key={index} className="bg-card border border-border rounded-xl p-5 flex items-center justify-between animate-fade-in hover:border-primary/30 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="stat-icon-bg rounded-full p-3">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-medium text-foreground mb-0.5">{section.title}</h4>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            </div>
            <Button variant="ghost" className="text-primary">
              Manage
            </Button>
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

export default Settings;
