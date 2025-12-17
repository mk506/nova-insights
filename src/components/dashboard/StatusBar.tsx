import { Database, GitMerge, Activity, Clock } from "lucide-react";

export const StatusBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-[1800px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Side - Database Status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Database Status: <span className="text-foreground">150 Companies Indexed</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-success animate-pulse" />
            <span className="text-sm text-success">System Online</span>
          </div>
        </div>

        {/* Right Side - Alerts */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20">
            <GitMerge className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">
              Smart Deduplication Active: 3 Duplicates Merged
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Last sync: 2 min ago</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
