import { Network, ToggleLeft, ToggleRight } from "lucide-react";
import { useState } from "react";

const competitors = [
  { name: "DataFlow AI", relation: "Direct", strength: 0.9 },
  { name: "CloudSync Pro", relation: "Partial", strength: 0.7 },
  { name: "IntelliMetrics", relation: "Direct", strength: 0.85 },
  { name: "NexGen Analytics", relation: "Partial", strength: 0.6 },
  { name: "SmartData Hub", relation: "Emerging", strength: 0.4 },
];

export const CompetitorCluster = () => {
  const [viewMode, setViewMode] = useState<"competitors" | "deepQuery">("competitors");

  return (
    <div className="glass-card p-6 animate-fade-in-up animation-delay-400 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Competitor Cluster</h2>
          </div>
          
          {/* Toggle Switch */}
          <button
            onClick={() => setViewMode(viewMode === "competitors" ? "deepQuery" : "competitors")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            {viewMode === "competitors" ? (
              <ToggleLeft className="w-5 h-5 text-primary" />
            ) : (
              <ToggleRight className="w-5 h-5 text-accent" />
            )}
            <span className="text-xs text-muted-foreground">
              {viewMode === "competitors" ? "Competitors" : "Deep Query"}
            </span>
          </button>
        </div>

        {/* Network Visualization */}
        <div className="relative h-48 flex items-center justify-center">
          {/* Central Node */}
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border-2 border-primary flex items-center justify-center z-10">
            <span className="text-xs font-semibold text-foreground text-center">TechNova</span>
          </div>
          
          {/* Competitor Nodes */}
          {competitors.map((comp, index) => {
            const angle = (index / competitors.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 85;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div key={index}>
                {/* Connection Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke={comp.relation === "Direct" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                    strokeWidth={comp.strength * 2}
                    strokeOpacity={0.4}
                    strokeDasharray={comp.relation === "Emerging" ? "4 4" : "none"}
                  />
                </svg>
                
                {/* Node */}
                <div
                  className={`absolute w-14 h-14 rounded-full border flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                    comp.relation === "Direct" 
                      ? "bg-destructive/20 border-destructive/40" 
                      : comp.relation === "Partial"
                      ? "bg-warning/20 border-warning/40"
                      : "bg-white/10 border-white/20"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 28px)`,
                    top: `calc(50% + ${y}px - 28px)`,
                  }}
                >
                  <span className="text-[10px] text-center text-foreground leading-tight px-1">
                    {comp.name.split(" ")[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-destructive/40" />
            <span className="text-xs text-muted-foreground">Direct</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-warning/40" />
            <span className="text-xs text-muted-foreground">Partial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="text-xs text-muted-foreground">Emerging</span>
          </div>
        </div>
      </div>
    </div>
  );
};
