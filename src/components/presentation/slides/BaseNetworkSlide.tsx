import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { MetricCard } from "../MetricCard";
import { Building2, AlertCircle } from "lucide-react";

interface BaseNetworkSlideProps {
  isActive: boolean;
}

const networkDistribution = [
  { country: "Spain", flag: "🇪🇸", small: 4, medium: 1, large: 7, total: 12, share: "37.5%" },
  { country: "UK", flag: "🇬🇧", small: 5, medium: 3, large: 6, total: 14, share: "43.8%" },
  { country: "Netherlands", flag: "🇳🇱", small: 0, medium: 0, large: 4, total: 4, share: "12.5%" },
  { country: "Portugal", flag: "🇵🇹", small: 0, medium: 0, large: 1, total: 1, share: "3.1%" },
  { country: "Ireland", flag: "🇮🇪", small: 1, medium: 0, large: 0, total: 1, share: "3.1%" },
];

export const BaseNetworkSlide: React.FC<BaseNetworkSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="3.1" 
        title="Scenario Q3: Base Network" 
        subtitle="Standard Configuration Results"
      />

      <div className="flex flex-col gap-4 min-h-0">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MetricCard
            label="Total Annual Cost"
            value="€483.15 M"
            sublabel="Fixed + Transportation costs"
            trend="down"
          />
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-5 border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground uppercase tracking-wide">
                Warehouses Opened
              </span>
            </div>
            <div className="text-4xl font-bold text-accent">32 / 33</div>
            <div className="flex items-center gap-2 mt-2 text-sm text-foreground/70">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span>Leicester closed – demand served by Coventry</span>
            </div>
          </div>
        </div>

        {/* Network Distribution Table */}
        <div className="bg-muted/20 rounded-lg p-5 border border-border/30">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            Network Distribution by Country
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left rounded-tl-lg">Country</th>
                  <th className="px-4 py-3 text-center">Small</th>
                  <th className="px-4 py-3 text-center">Medium</th>
                  <th className="px-4 py-3 text-center">Large</th>
                  <th className="px-4 py-3 text-center">Total</th>
                  <th className="px-4 py-3 text-center rounded-tr-lg">Share</th>
                </tr>
              </thead>
              <tbody>
                {networkDistribution.map((row, index) => (
                  <tr 
                    key={row.country}
                    className={`border-b border-border/30 hover:bg-muted/30 transition-colors animate-fade-in ${
                      index % 2 === 0 ? 'bg-background/50' : ''
                    }`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <td className="px-4 py-3 font-medium">
                      <span className="mr-2">{row.flag}</span>
                      {row.country}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.small > 0 && (
                        <span className="bg-accent/20 text-accent px-2 py-0.5 rounded">{row.small}</span>
                      )}
                      {row.small === 0 && <span className="text-muted-foreground">-</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.medium > 0 && (
                        <span className="bg-amber-500/20 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded">{row.medium}</span>
                      )}
                      {row.medium === 0 && <span className="text-muted-foreground">-</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.large > 0 && (
                        <span className="bg-primary/20 text-primary px-2 py-0.5 rounded">{row.large}</span>
                      )}
                      {row.large === 0 && <span className="text-muted-foreground">-</span>}
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-foreground">{row.total}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
          <span className="font-semibold text-primary">Insight: </span>
          <span className="text-foreground/80 text-sm">
            Network favours large warehouses (economies of scale) with regional distribution concentrated in Spain & UK, 
            which together represent over 80% of the network.
          </span>
        </div>
      </div>
    </SlideContainer>
  );
};
