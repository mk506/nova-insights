import { Sparkles, Download, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ActionCommandCenter = () => {
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="fixed bottom-20 left-0 right-0 z-40 px-6">
      <div className="max-w-[1800px] mx-auto">
        <div className="glass-card p-4 flex items-center justify-between gap-4">
          {/* Primary Actions */}
          <div className="flex items-center gap-3">
            <Button variant="glow" size="lg" className="gap-2">
              <Sparkles className="w-5 h-5" />
              Draft Pitch Email
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Export to HubSpot
            </Button>
          </div>

          {/* Chat with Data */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Chat with company data..."
                className="w-full h-12 pl-12 pr-12 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors">
                <Send className="w-4 h-4 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
