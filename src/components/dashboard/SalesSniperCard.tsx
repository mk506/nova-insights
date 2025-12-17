import { Check, X } from "lucide-react";

export const SalesSniperCard = () => {
  const score = 95;
  const circumference = 2 * Math.PI * 60;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const matchCriteria = [
    { label: "Uses AWS", matched: true },
    { label: "SaaS Industry", matched: true },
    { label: "Series B+", matched: true },
    { label: "50-200 Employees", matched: true },
    { label: "North America", matched: false },
  ];

  return (
    <div className="glass-card p-6 animate-fade-in-up animation-delay-100">
      <h2 className="text-lg font-semibold text-foreground mb-6">Sales Sniper Scorecard</h2>
      
      {/* Circular Progress */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <svg className="w-36 h-36 transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="72"
              cy="72"
              r="60"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-white/10"
            />
            {/* Progress circle */}
            <circle
              cx="72"
              cy="72"
              r="60"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
                transition: 'stroke-dashoffset 1s ease-out',
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--success))" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-foreground">{score}%</span>
            <span className="text-xs text-muted-foreground">ICP Match</span>
          </div>
        </div>
      </div>

      {/* Match Criteria */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Why it matches:</h3>
        {matchCriteria.map((criterion, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
              criterion.matched
                ? "bg-success/10 border border-success/20"
                : "bg-white/5 border border-white/10"
            }`}
          >
            {criterion.matched ? (
              <Check className="w-4 h-4 text-success" />
            ) : (
              <X className="w-4 h-4 text-muted-foreground" />
            )}
            <span className={criterion.matched ? "text-foreground" : "text-muted-foreground"}>
              {criterion.label}
            </span>
            {criterion.matched && (
              <span className="ml-auto text-xs text-success">Matched</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
