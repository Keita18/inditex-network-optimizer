import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { fleetComparisonData, investmentData } from "@/data/presentationData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LineChart, Line, CartesianGrid, Legend } from "recharts";

interface FleetInvestmentSlideProps {
  isActive: boolean;
}

const fleetColors: Record<string, string> = {
  Original: "hsl(var(--muted-foreground))",
  Combustion: "hsl(var(--chart-1))",
  Automatic: "hsl(var(--chart-2))",
  Electric: "hsl(var(--chart-3))",
  Hydrogen: "hsl(var(--primary))",
};

export const FleetInvestmentSlide: React.FC<FleetInvestmentSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="4"
        title="Fleet Investment Analysis" 
        subtitle="Evaluating transportation technology investments"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left: Cost Comparison Chart */}
        <div className="space-y-4">
          <div 
            className="p-5 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Total Network Cost by Fleet Type
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fleetComparisonData}>
                  <XAxis 
                    dataKey="fleet" 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  />
                  <YAxis 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                    tickFormatter={(v) => `€${v}M`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`€${value}M`, 'Total Cost']}
                  />
                  <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                    {fleetComparisonData.map((entry) => (
                      <Cell key={entry.fleet} fill={fleetColors[entry.fleet]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Comparison table */}
          <div 
            className="animate-slide-up overflow-hidden rounded-lg border border-border/50"
            style={{ animationDelay: "200ms" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card/50">
                  <th className="text-left p-2.5 font-sans font-medium text-foreground">Fleet</th>
                  <th className="text-right p-2.5 font-sans font-medium text-foreground">Cost (M€)</th>
                  <th className="text-right p-2.5 font-sans font-medium text-foreground">Reduction</th>
                  <th className="text-center p-2.5 font-sans font-medium text-foreground">Centres</th>
                </tr>
              </thead>
              <tbody>
                {fleetComparisonData.map((fleet) => (
                  <tr key={fleet.fleet} className="border-t border-border/30">
                    <td className="p-2.5 font-sans text-foreground font-medium flex items-center gap-2">
                      <span 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: fleetColors[fleet.fleet] }}
                      />
                      {fleet.fleet}
                    </td>
                    <td className="p-2.5 font-sans text-right text-muted-foreground">{fleet.cost}</td>
                    <td className={`p-2.5 font-sans text-right ${
                      fleet.reduction < 0 ? 'text-emerald font-medium' : 'text-muted-foreground'
                    }`}>
                      {fleet.reduction !== 0 ? `${fleet.reduction}%` : '—'}
                    </td>
                    <td className="p-2.5 text-center text-muted-foreground">{fleet.centers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Investment Details */}
        <div className="space-y-4">
          {/* Investment requirements */}
          <div 
            className="p-5 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Investment Requirements
            </h3>
            <div className="space-y-3">
              {investmentData.map((inv, i) => (
                <div 
                  key={inv.fleet}
                  className="flex items-center justify-between p-3 bg-card/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: fleetColors[inv.fleet] }}
                    />
                    <span className="font-sans text-foreground">{inv.fleet}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-foreground">€{inv.investment}M</div>
                    <div className="text-xs text-muted-foreground">{inv.lifespan} years</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Winner highlight */}
          <div 
            className="p-5 bg-primary/10 border border-primary/30 rounded-lg animate-slide-up glow-gold"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">🏆</span>
              <div>
                <h4 className="font-display font-bold text-foreground text-xl">Hydrogen Fleet</h4>
                <p className="text-sm text-muted-foreground">Recommended Investment</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-3 bg-card/50 rounded">
                <div className="text-2xl font-bold text-gradient-gold">-45.8%</div>
                <div className="text-xs text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center p-3 bg-card/50 rounded">
                <div className="text-2xl font-bold text-emerald">€148M</div>
                <div className="text-xs text-muted-foreground">Annual Savings</div>
              </div>
            </div>
          </div>

          {/* Network impact note */}
          <div 
            className="p-4 bg-cyan/5 border border-cyan/20 rounded-lg animate-slide-up"
            style={{ animationDelay: "450ms" }}
          >
            <p className="text-sm text-muted-foreground font-sans">
              <span className="text-cyan font-medium">Network Impact:</span> Hydrogen enables 
              closing Leeds centre + reduced overtime needs (13 → 1 centre).
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
