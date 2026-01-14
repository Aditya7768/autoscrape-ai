import { Copy, Eye, EyeOff, RefreshCw, MessageCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ApiAccess = () => {
  const [showKey, setShowKey] = useState(false);
  const apiKey = "sk-autoscrape-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

  return (
    <MainLayout title="API Access">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-1">API Access</h2>
        <p className="text-muted-foreground">Manage your API keys and access credentials</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 mb-6 animate-fade-in">
        <h3 className="text-lg font-semibold text-foreground mb-4">Your API Key</h3>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-muted rounded-lg px-4 py-3 font-mono text-sm">
            {showKey ? apiKey : "••••••••••••••••••••••••••••••••"}
          </div>
          <Button variant="ghost" size="icon" onClick={() => setShowKey(!showKey)}>
            {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="icon">
            <Copy className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Regenerate
          </Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Start</h3>
        <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground">{`curl -X GET "https://api.autoscrape.ai/v1/jobs" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</pre>
        </div>
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

export default ApiAccess;
