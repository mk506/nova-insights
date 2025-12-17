import { Users, ChevronDown } from "lucide-react";

interface OrgNode {
  name: string;
  role: string;
  email?: string;
  children?: OrgNode[];
}

const orgData: OrgNode = {
  name: "Sarah Chen",
  role: "CEO",
  email: "sarah@technova.io",
  children: [
    {
      name: "Marcus Johnson",
      role: "CTO",
      email: "marcus@technova.io",
      children: [
        { name: "Emily Rodriguez", role: "VP Engineering", email: "emily@technova.io" },
        { name: "David Kim", role: "VP Product", email: "david@technova.io" },
      ],
    },
    {
      name: "Lisa Wang",
      role: "CFO",
      email: "lisa@technova.io",
    },
  ],
};

const OrgNodeComponent = ({ node, level = 0 }: { node: OrgNode; level?: number }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`glass-card-hover p-3 min-w-[140px] text-center ${level === 0 ? 'border-primary/30' : ''}`}>
        <p className="text-sm font-medium text-foreground">{node.name}</p>
        <p className="text-xs text-primary">{node.role}</p>
        {node.email && (
          <p className="text-xs text-muted-foreground mt-1 truncate">{node.email}</p>
        )}
      </div>
      {node.children && node.children.length > 0 && (
        <>
          <div className="w-px h-4 bg-white/20" />
          <ChevronDown className="w-4 h-4 text-white/30 -my-1" />
          <div className="flex gap-4 mt-2">
            {node.children.map((child, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-px h-4 bg-white/20" />
                <OrgNodeComponent node={child} level={level + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const OrgChartPanel = () => {
  return (
    <div className="glass-card p-6 animate-fade-in-up animation-delay-300 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Org Chart</h2>
          <span className="ml-auto text-xs text-muted-foreground">5 contacts found</span>
        </div>

        {/* Org Tree */}
        <div className="flex justify-center overflow-x-auto pb-4">
          <OrgNodeComponent node={orgData} />
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Email confidence: 94%</span>
          <button className="text-xs text-primary hover:text-primary/80 transition-colors">
            Export Contacts →
          </button>
        </div>
      </div>
    </div>
  );
};
