import { useEffect, useState } from "react";
import { Terminal, CheckCircle, Loader2 } from "lucide-react";

interface ProcessingTerminalProps {
  onComplete: () => void;
}

const processingSteps = [
  { text: "Initializing data extraction pipeline...", delay: 300 },
  { text: "Scanning folder structure...", delay: 500 },
  { text: "Found 15 data files", delay: 400 },
  { text: "Extracting company metadata...", delay: 600 },
  { text: "Parsing TechNova Solutions profile...", delay: 400 },
  { text: "Extracting CEO: Sarah Chen", delay: 350 },
  { text: "Extracting CTO: Marcus Johnson", delay: 300 },
  { text: "Validating email: sarah@technova.io ✓", delay: 250 },
  { text: "Validating email: marcus@technova.io ✓", delay: 250 },
  { text: "Detecting tech stack...", delay: 500 },
  { text: "Found: React.js, TypeScript, Node.js", delay: 300 },
  { text: "Found: AWS, Docker, Kubernetes", delay: 300 },
  { text: "Analyzing competitor landscape...", delay: 600 },
  { text: "Identified 5 competitors", delay: 400 },
  { text: "Calculating ICP match score...", delay: 500 },
  { text: "Score: 95% - High match detected!", delay: 300 },
  { text: "Running compliance check...", delay: 400 },
  { text: "GDPR compliance: VERIFIED ✓", delay: 300 },
  { text: "Smart deduplication: 3 duplicates merged", delay: 400 },
  { text: "Building intelligence dashboard...", delay: 500 },
  { text: "Data extraction complete!", delay: 300 },
];

export const ProcessingTerminal = ({ onComplete }: ProcessingTerminalProps) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < processingSteps.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, processingSteps[currentIndex].text]);
        setCurrentIndex((prev) => prev + 1);
      }, processingSteps[currentIndex].delay);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      setTimeout(onComplete, 1000);
    }
  }, [currentIndex, isComplete, onComplete]);

  const progress = Math.round((currentIndex / processingSteps.length) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Terminal className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Processing Data</h2>
            <p className="text-sm text-muted-foreground">Extracting company intelligence...</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 animate-fade-in-up animation-delay-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm text-primary font-medium">{progress}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Terminal Window */}
        <div className="glass-card overflow-hidden animate-fade-in-up animation-delay-200">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-warning/60" />
            <div className="w-3 h-3 rounded-full bg-success/60" />
            <span className="ml-3 text-sm text-muted-foreground font-mono">nexus-intel-processor</span>
          </div>

          {/* Terminal Body */}
          <div className="p-4 h-80 overflow-y-auto font-mono text-sm bg-black/20">
            {logs.map((log, index) => (
              <div
                key={index}
                className="flex items-start gap-2 mb-1 animate-fade-in-up"
              >
                <span className="text-primary">❯</span>
                <span
                  className={
                    log.includes("✓") || log.includes("complete")
                      ? "text-success"
                      : log.includes("Found") || log.includes("Score")
                      ? "text-info"
                      : "text-foreground/80"
                  }
                >
                  {log}
                </span>
              </div>
            ))}
            {!isComplete && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="animate-pulse">Processing...</span>
              </div>
            )}
          </div>
        </div>

        {/* Status */}
        {isComplete && (
          <div className="mt-6 flex items-center justify-center gap-2 text-success animate-fade-in-up">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Processing complete! Loading dashboard...</span>
          </div>
        )}
      </div>
    </div>
  );
};
