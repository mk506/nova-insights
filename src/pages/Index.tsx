import { useState } from "react";
import { UploadArea } from "@/components/upload/UploadArea";
import { ProcessingTerminal } from "@/components/processing/ProcessingTerminal";
import { Dashboard } from "@/components/dashboard/Dashboard";

type AppState = "upload" | "processing" | "dashboard";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("upload");

  const handleUpload = () => {
    setAppState("processing");
  };

  const handleProcessingComplete = () => {
    setAppState("dashboard");
  };

  return (
    <div className="min-h-screen">
      {appState === "upload" && <UploadArea onUpload={handleUpload} />}
      {appState === "processing" && (
        <ProcessingTerminal onComplete={handleProcessingComplete} />
      )}
      {appState === "dashboard" && <Dashboard />}
    </div>
  );
};

export default Index;
