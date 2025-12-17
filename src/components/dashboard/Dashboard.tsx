import { Header } from "./Header";
import { CompanyHeroCard } from "./CompanyHeroCard";
import { SalesSniperCard } from "./SalesSniperCard";
import { TechStackPanel } from "./TechStackPanel";
import { OrgChartPanel } from "./OrgChartPanel";
import { CompetitorCluster } from "./CompetitorCluster";
import { ActionCommandCenter } from "./ActionCommandCenter";
import { StatusBar } from "./StatusBar";

export const Dashboard = () => {
  return (
    <div className="min-h-screen pb-32">
      <Header />
      
      <main className="max-w-[1800px] mx-auto px-6 py-8">
        {/* Top Row - Hero Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <CompanyHeroCard />
          </div>
          <div>
            <SalesSniperCard />
          </div>
        </div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TechStackPanel />
          <OrgChartPanel />
          <CompetitorCluster />
        </div>
      </main>

      <ActionCommandCenter />
      <StatusBar />
    </div>
  );
};
