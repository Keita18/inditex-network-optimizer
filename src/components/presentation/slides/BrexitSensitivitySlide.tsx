import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { brexitSensitivityData } from "@/data/presentationData";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Area, AreaChart } from "recharts";

interface BrexitSensitivitySlideProps {
  isActive: boolean;
}

export const BrexitSensitivitySlide: React.FC<BrexitSensitivitySlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="5"
        title="Brexit Sensitivity Analysis" 
        subtitle="UK demand reduction scenarios: 5%, 15%, 35%, 50%"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Cost comparison chart */}
        <div className="space-y-4">
          <div 
            className="p-5 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Cost Impact: Original vs Hydrogen Fleet
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={brexitSensitivityData}>
                  <defs>
                    <linearGradient id="colorOriginal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorHydrogen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="scenario" 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                  />
                  <YAxis 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                    tickFormatter={(v) => `€${v}M`}
                    domain={[150, 350]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number, name: string) => [
                      `€${value}M`, 
                      name === 'costOriginal' ? 'Original Fleet' : 'Hydrogen Fleet'
                    ]}
                  />
                  <Legend 
                    formatter={(value) => value === 'costOriginal' ? 'Original' : 'Hydrogen'}
                    wrapperStyle={{ fontSize: '12px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="costOriginal" 
                    stroke="hsl(var(--chart-1))" 
                    strokeWidth={2}
                    fill="url(#colorOriginal)"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="costHydrogen" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fill="url(#colorHydrogen)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-sans text-center">
              Hydrogen maintains 41-46% savings across all Brexit scenarios
            </p>
          </div>

          {/* Key observation */}
          <div 
            className="p-4 bg-rose/10 border border-rose/30 rounded-lg animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <h4 className="font-sans font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="text-rose">⚠</span>
              Critical Observation
            </h4>
            <p className="text-sm text-muted-foreground font-sans">
              Cost reduction is <span className="text-rose font-medium">not proportional</span> to demand decrease. 
              Efficiency ratio drops from 1.28 (at -5%) to 0.28 (at -50%) — 
              fixed costs dominate as demand falls.
            </p>
          </div>
        </div>

        {/* Right: Data table & findings */}
        <div className="space-y-4">
          {/* Data table */}
          <div 
            className="animate-slide-up overflow-hidden rounded-lg border border-border/50"
            style={{ animationDelay: "300ms" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="text-left p-2.5 font-sans font-medium text-foreground">Scenario</th>
                  <th className="text-right p-2.5 font-sans font-medium text-foreground">UK %</th>
                  <th className="text-right p-2.5 font-sans font-medium text-foreground">Original</th>
                  <th className="text-right p-2.5 font-sans font-medium text-foreground">Hydrogen</th>
                  <th className="text-right p-2.5 font-sans font-medium text-foreground">Centres</th>
                </tr>
              </thead>
              <tbody>
                {brexitSensitivityData.map((row) => (
                  <tr key={row.scenario} className="border-t border-border/30">
                    <td className="p-2.5 font-sans text-foreground">{row.scenario}</td>
                    <td className="p-2.5 font-sans text-right text-muted-foreground">{row.ukDemand}%</td>
                    <td className="p-2.5 font-sans text-right text-muted-foreground">€{row.costOriginal}M</td>
                    <td className="p-2.5 font-sans text-right text-primary font-medium">€{row.costHydrogen}M</td>
                    <td className="p-2.5 text-right text-muted-foreground">{row.centersH2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key findings */}
          <div 
            className="p-5 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Key Findings
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-sans">
              <li className="flex items-start gap-3">
                <span className="text-emerald mt-0.5">✓</span>
                <span>Hydrogen fleet <span className="text-emerald font-medium">adapts more flexibly</span>: 31→29 centres vs static 32</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✓</span>
                <span>Consistent <span className="text-primary font-medium">41-46% savings</span> maintained across all scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan mt-0.5">✓</span>
                <span>At -50% UK demand: Hydrogen saves <span className="text-cyan font-medium">€115M</span> vs Original</span>
              </li>
            </ul>
          </div>

          {/* Recommendation */}
          <div 
            className="p-4 bg-primary/5 border border-primary/20 rounded-lg animate-slide-up"
            style={{ animationDelay: "450ms" }}
          >
            <p className="text-sm text-muted-foreground font-sans">
              <span className="text-foreground font-medium">Recommendation:</span> Implement quarterly 
              UK demand monitoring. If drops exceed 35%, reassess London, Leeds, Manchester sizing.
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
