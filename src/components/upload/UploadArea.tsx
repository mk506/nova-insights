import { Upload, FolderOpen, FileSpreadsheet, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadAreaProps {
  onUpload: () => void;
}

interface DropzoneProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  fileTypes: string[];
  onUpload: () => void;
}

const Dropzone = ({ title, description, icon, fileTypes, onUpload }: DropzoneProps) => (
  <div
    onClick={onUpload}
    className="group relative cursor-pointer flex-1"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
    
    {/* Upload Box */}
    <div className="relative h-full glass-card border-2 border-dashed border-white/20 rounded-2xl p-8 text-center group-hover:border-primary/50 group-hover:bg-white/[0.08] transition-all duration-300 flex flex-col items-center justify-center">
      <div className="mb-4">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {description}
      </p>

      <Button variant="outline" size="sm" className="gap-2">
        <Upload className="w-4 h-4" />
        Browse
      </Button>

      {/* File Types */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        {fileTypes.map((type) => (
          <span key={type} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
            {type}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const UploadArea = ({ onUpload }: UploadAreaProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Hero Text */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Mission Setup</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Upload your target data to begin autonomous intelligence extraction.
          </p>
        </div>

        {/* Two Dropzones Side by Side */}
        <div className="flex gap-6 animate-fade-in-up animation-delay-200">
          <Dropzone
            title="Upload Target List"
            description="Company records to analyze"
            icon={<FileSpreadsheet className="w-8 h-8 text-primary" />}
            fileTypes={[".csv", ".xlsx"]}
            onUpload={onUpload}
          />
          <Dropzone
            title="Upload Offline Data"
            description="Website folder with scraped data"
            icon={<FolderOpen className="w-8 h-8 text-accent" />}
            fileTypes={["folder", ".json"]}
            onUpload={onUpload}
          />
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