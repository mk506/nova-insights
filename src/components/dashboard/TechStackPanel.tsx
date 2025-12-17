import { Code2, Briefcase, Award } from "lucide-react";

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
];

const services = [
  "Cloud Migration",
  "AI Consulting",
  "Data Analytics",
  "DevOps Automation",
  "Custom Software Development",
];

const certifications = [
  { name: "ISO 9001", color: "bg-info/20 border-info/30 text-info" },
  { name: "SOC2", color: "bg-success/20 border-success/30 text-success" },
  { name: "GDPR", color: "bg-accent/20 border-accent/30 text-accent" },
  { name: "ISO 27001", color: "bg-warning/20 border-warning/30 text-warning" },
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
      {/* Tech Stack Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Tech Stack</h2>
        </div>

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
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-4" />

      {/* Services Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-accent" />
          <h2 className="text-lg font-semibold text-foreground">Key Offerings</h2>
        </div>

        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-4" />

      {/* Certifications Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-success" />
          <h2 className="text-lg font-semibold text-foreground">Certifications</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, index) => (
            <span
              key={index}
              className={`px-3 py-1.5 rounded-lg border text-sm font-medium ${cert.color}`}
            >
              {cert.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};