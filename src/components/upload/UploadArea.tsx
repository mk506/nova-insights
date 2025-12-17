import { Upload, FolderOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadAreaProps {
  onUpload: () => void;
}

export const UploadArea = ({ onUpload }: UploadAreaProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        {/* Hero Text */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Autonomous</span>
            <br />
            <span className="text-foreground">Company Intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Drop your company data folder and let AI extract actionable intelligence in seconds.
          </p>
        </div>

        {/* Upload Zone */}
        <div
          onClick={onUpload}
          className="group relative cursor-pointer animate-fade-in-up animation-delay-200"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Upload Box */}
          <div className="relative glass-card border-2 border-dashed border-white/20 rounded-3xl p-16 text-center group-hover:border-primary/50 group-hover:bg-white/8 transition-all duration-300">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FolderOpen className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Drop your folder here
            </h2>
            <p className="text-muted-foreground mb-6">
              or click to browse files
            </p>

            <Button variant="glow" size="lg" className="gap-2">
              <Upload className="w-5 h-5" />
              Select Folder
            </Button>

            {/* File Types */}
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">.csv</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">.json</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">.xlsx</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">.txt</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>AI-Powered Extraction</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span>150+ Companies Processed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
