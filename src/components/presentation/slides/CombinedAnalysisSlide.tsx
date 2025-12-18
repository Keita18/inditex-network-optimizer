import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { TrendingUp, Shield, Building2 } from "lucide-react";

interface CombinedAnalysisSlideProps {
  isActive: boolean;
}

const combinedData = [
  { ukDemand: "Base (100%)", original: "€323.63 M", hydrogen: "€175.47 M", savings: "-€148.16 M (-45.8%)", centres: 31, highlight: true },
  { ukDemand: "-5%", original: "€303.01 M", hydrogen: "€171.07 M", savings: "-€131.94 M (-43.5%)", centres: 31, highlight: false },
  { ukDemand: "-15%", original: "€295.93 M", hydrogen: "€167.70 M", savings: "-€128.23 M (-43.3%)", centres: 30, highlight: false },
  { ukDemand: "-35%", original: "€284.06 M", hydrogen: "€165.01 M", savings: "-€119.05 M (-41.9%)", centres: 30, highlight: false },
  { ukDemand: "-50%", original: "€278.83 M", hydrogen: "€163.90 M", savings: "-€114.93 M (-41.2%)", centres: 29, highlight: false },
];

export const CombinedAnalysisSlide: React.FC<CombinedAnalysisSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="5.1" 
        title="Combined Analysis" 
        subtitle="Brexit + Hydrogen Fleet Scenarios"
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          Robustness Across Brexit Scenarios
        </h3>

        {/* Combined Analysis Table */}
        <div className="bg-muted/20 rounded-lg border border-border/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-3 text-left">UK Demand</th>
                  <th className="px-4 py-3 text-right">Original Fleet</th>
                  <th className="px-4 py-3 text-right">Hydrogen Fleet</th>
                  <th className="px-4 py-3 text-right">Hydrogen Savings</th>
                  <th className="px-4 py-3 text-center">Centres (H₂)</th>
                </tr>
              </thead>
              <tbody>
                {combinedData.map((row, index) => (
                  <tr 
                    key={row.ukDemand}
                    className={`border-b border-border/30 animate-fade-in ${
                      row.highlight 
                        ? 'bg-accent/10' 
                        : index % 2 === 0 ? 'bg-background/50' : ''
                    }`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.highlight && <strong>{row.ukDemand}</strong>}
                      {!row.highlight && row.ukDemand}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground">
                      {row.highlight && <strong className="text-foreground">{row.original}</strong>}
                      {!row.highlight && row.original}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={row.highlight ? "font-bold text-accent" : "text-accent"}>
                        {row.hydrogen}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={`${row.highlight ? "font-bold" : ""} text-accent`}>
                        {row.savings}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-muted-foreground" />
                        {row.centres}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Savings Range Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-accent/10 rounded-lg p-4 text-center border border-accent/20">
            <div className="text-sm text-muted-foreground mb-1">Savings Range</div>
            <div className="text-2xl font-bold text-accent">41% – 46%</div>
            <div className="text-xs text-muted-foreground mt-1">Consistent across scenarios</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center border border-primary/20">
            <div className="text-sm text-muted-foreground mb-1">Network Flexibility</div>
            <div className="text-2xl font-bold text-primary">31 → 29</div>
            <div className="text-xs text-muted-foreground mt-1">Centres adapt to demand</div>
          </div>
          <div className="bg-chart-3/10 rounded-lg p-4 text-center border border-chart-3/20">
            <div className="text-sm text-muted-foreground mb-1">Max Savings</div>
            <div className="text-2xl font-bold text-chart-3">€148.16 M</div>
            <div className="text-xs text-muted-foreground mt-1">At baseline demand</div>
          </div>
        </div>

        {/* Key Finding */}
        <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-4 flex items-start gap-2">
          <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-accent">Key Finding: </span>
            <span className="text-foreground/80 text-sm">
              Hydrogen fleet maintains robust <strong>41–46% cost savings</strong> across all Brexit scenarios 
              while adapting network from 31–29 centres. Superior flexibility compared to static original fleet approach.
            </span>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
