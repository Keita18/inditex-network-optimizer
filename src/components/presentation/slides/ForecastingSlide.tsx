import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { forecastingMethods } from "@/data/presentationData";

interface ForecastingSlideProps {
  isActive: boolean;
}

const chartData = forecastingMethods.map(m => ({
  ...m,
  rseFormatted: m.rse / 1000,
}));

export const ForecastingSlide: React.FC<ForecastingSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="2"
        title="Demand Forecasting" 
        subtitle="Selecting the optimal prediction method for 2021"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Methodology */}
        <div className="space-y-6">
          <div 
            className="p-6 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Methodology
            </h3>
            <ul className="space-y-3 text-muted-foreground font-sans">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span>Analyzed 24 months of historical data (2019-2020)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span>Tested in 5 Spanish cities: Barcelona, Valencia, Seville, Zaragoza, Malaga</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span>Evaluated using <span className="text-cyan font-medium">RSE</span> and <span className="text-cyan font-medium">R²</span> metrics</span>
              </li>
            </ul>
          </div>

          {/* Methods comparison table */}
          <div 
            className="animate-slide-up overflow-hidden rounded-lg border border-border/50"
            style={{ animationDelay: "200ms" }}
          >
            <table className="w-full">
              <thead>
                <tr className="bg-card/50">
                  <th className="text-left p-3 font-sans font-medium text-foreground text-sm">Method</th>
                  <th className="text-right p-3 font-sans font-medium text-foreground text-sm">RSE</th>
                  <th className="text-right p-3 font-sans font-medium text-foreground text-sm">R²</th>
                  <th className="text-center p-3 font-sans font-medium text-foreground text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {forecastingMethods.map((method, i) => (
                  <tr key={method.method} className="border-t border-border/30">
                    <td className="p-3 font-sans text-sm text-muted-foreground">{method.method}</td>
                    <td className="p-3 font-sans text-sm text-right text-muted-foreground">{method.rse.toLocaleString()}</td>
                    <td className="p-3 font-sans text-sm text-right text-muted-foreground">{method.r2.toFixed(2)}</td>
                    <td className="p-3 text-center">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-sans font-medium ${
                        method.performance === "Optimal" 
                          ? "bg-emerald/20 text-emerald" 
                          : method.performance === "Medium"
                          ? "bg-gold/20 text-gold"
                          : "bg-rose/20 text-rose"
                      }`}>
                        {method.performance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Winner highlight */}
          <div 
            className="p-4 bg-emerald/10 border border-emerald/30 rounded-lg animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <span className="font-sans font-semibold text-emerald">Linear Regression</span>
                <span className="text-muted-foreground font-sans text-sm ml-2">— Selected Method</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Chart & Crisis Adjustment */}
        <div className="space-y-6">
          {/* RSE Chart */}
          <div 
            className="p-6 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "350ms" }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Root Standard Error Comparison
            </h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                  <YAxis 
                    type="category" 
                    dataKey="method" 
                    width={130}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`${(value * 1000).toLocaleString()}`, 'RSE']}
                  />
                  <Bar dataKey="rseFormatted" radius={[0, 4, 4, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`}
                        fill={entry.performance === "Optimal" ? "hsl(var(--emerald))" : "hsl(var(--chart-1))"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-sans">Lower RSE = Better accuracy</p>
          </div>

          {/* Sanitary Crisis Adjustment */}
          <div 
            className="p-6 bg-rose/5 border border-rose/30 rounded-lg animate-slide-up"
            style={{ animationDelay: "450ms" }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-rose">⚠</span>
              Sanitary Crisis Adjustment
            </h3>
            <div className="space-y-3">
              <p className="text-muted-foreground font-sans text-sm">
                Following COVID-19, Inditex expects a demand reduction for 2021:
              </p>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-display font-bold text-rose">-20%</div>
                <div className="text-sm text-muted-foreground font-sans">
                  Applied to all<br />forecasted values
                </div>
              </div>
              <div className="p-3 bg-card/50 rounded font-mono text-sm text-muted-foreground">
                D<sub>2021</sub> = 0.80 × forecast<sub>c</sub>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
