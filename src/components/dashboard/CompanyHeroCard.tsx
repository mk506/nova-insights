import { Shield, Zap, Sparkles, AlertTriangle, Check, Globe, Building2 } from "lucide-react";

interface BadgeProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: "success" | "info" | "accent" | "warning";
  pulse?: boolean;
}

const Badge = ({ label, value, icon, color, pulse }: BadgeProps) => {
  const colorClasses = {
    success: "bg-success/20 border-success/30 text-success",
    info: "bg-info/20 border-info/30 text-info",
    accent: "bg-accent/20 border-accent/30 text-accent",
    warning: "bg-warning/20 border-warning/30 text-warning",
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${colorClasses[color]} backdrop-blur-sm`}>
      <span className="relative">
        {icon}
        {pulse && (
          <span className={`absolute inset-0 rounded-full animate-pulse-ring ${color === 'success' ? 'bg-success' : ''}`} />
        )}
      </span>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
    </div>
  );
};

export const CompanyHeroCard = () => {
  const confidenceScore = 89;
  const isHighConfidence = confidenceScore >= 90;

  return (
    <div className="glass-card p-6 animate-fade-in-up">
      {/* Company Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border border-white/20 flex items-center justify-center">
          <Building2 className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground">TechNova Solutions</h1>
          <div className="flex items-center gap-2 mt-1">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">technova.io</span>
            <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">SaaS</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-muted-foreground">Last Updated</span>
          <p className="text-sm text-foreground">2 hours ago</p>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Badge
          label="Growth Signal"
          value="High"
          icon={<Zap className="w-4 h-4" />}
          color="success"
          pulse
        />
        <Badge
          label="Compliance"
          value="GDPR Safe"
          icon={<Shield className="w-4 h-4" />}
          color="info"
        />
        <Badge
          label="Brand Voice"
          value="Disruptive"
          icon={<Sparkles className="w-4 h-4" />}
          color="accent"
        />
        <Badge
          label="Data Confidence"
          value={`${confidenceScore}%`}
          icon={isHighConfidence ? <Check className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
          color={isHighConfidence ? "success" : "warning"}
        />
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">$12.5M</p>
          <p className="text-xs text-muted-foreground">Est. Revenue</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">85</p>
          <p className="text-xs text-muted-foreground">Employees</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">2019</p>
          <p className="text-xs text-muted-foreground">Founded</p>
        </div>
      </div>
    </div>
  );
};
