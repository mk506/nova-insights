import { Code2 } from "lucide-react";

const techStack = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "AWS", category: "cloud" },
  { name: "Docker", category: "devops" },
  { name: "PostgreSQL", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Kubernetes", category: "devops" },
  { name: "GraphQL", category: "backend" },
  { name: "Tailwind", category: "frontend" },
  { name: "MongoDB", category: "database" },
];

const categoryColors: Record<string, string> = {
  frontend: "bg-info/20 border-info/30 text-info hover:bg-info/30",
  backend: "bg-success/20 border-success/30 text-success hover:bg-success/30",
  cloud: "bg-warning/20 border-warning/30 text-warning hover:bg-warning/30",
  devops: "bg-accent/20 border-accent/30 text-accent hover:bg-accent/30",
  database: "bg-primary/20 border-primary/30 text-primary hover:bg-primary/30",
};

export const TechStackPanel = () => {
  return (
    <div className="glass-card p-6 animate-fade-in-up animation-delay-200">
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Tech Stack</h2>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(categoryColors).map(([category]) => (
          <span key={category} className="text-xs text-muted-foreground capitalize">
            {category}
          </span>
        ))}
      </div>

      {/* Tech Cloud */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all cursor-default ${categoryColors[tech.category]}`}
          >
            {tech.name}
          </span>
        ))}
      </div>

      {/* Detection Stats */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Detected Technologies</span>
        <span className="text-foreground font-medium">{techStack.length} found</span>
      </div>
    </div>
  );
};
