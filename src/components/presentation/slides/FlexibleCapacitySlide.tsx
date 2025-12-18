import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { MetricCard } from "../MetricCard";
import { overcapacityData } from "@/data/presentationData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface FlexibleCapacitySlideProps {
  isActive: boolean;
}

export const FlexibleCapacitySlide: React.FC<FlexibleCapacitySlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="3.3"
        title="Flexible Capacity" 
        subtitle="Strategic overtime utilization — 20% overcapacity option"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Concept & Results */}
        <div className="space-y-4">
          {/* Mechanism explanation */}
          <div 
            className="p-5 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-3">
              Overtime Mechanism
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-card/50 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">€20</div>
                <div className="text-xs text-muted-foreground">per extra unit</div>
              </div>
              <div className="p-3 bg-card/50 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan">€2,000</div>
                <div className="text-xs text-muted-foreground">headhunter per city</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans">
              Each centre can produce up to <span className="text-cyan font-medium">+20%</span> beyond 
              normal capacity by hiring additional workers.
            </p>
          </div>

          {/* Key Results */}
          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              value="€323.6M"
              label="New Total Cost"
              delay={200}
              size="sm"
            />
            <MetricCard
              value="-33.0%"
              label="Cost Reduction"
              trend="down"
              delay={250}
              size="sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              value="13"
              label="Centres with Overtime"
              delay={300}
              size="sm"
            />
            <MetricCard
              value="2.44M"
              label="Extra Units"
              delay={350}
              size="sm"
            />
          </div>

          {/* Savings breakdown */}
          <div 
            className="p-4 bg-emerald/10 border border-emerald/30 rounded-lg animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-foreground font-medium">Total Savings</span>
              <span className="text-2xl font-display font-bold text-emerald">€159.5M</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-sans">
              Flexibility costs: €48.8M (variable) + €26K (fixed) = €48.82M
            </p>
          </div>
        </div>

        {/* Right: Top Overtime Users */}
        <div className="space-y-4">
          <div 
            className="p-5 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "450ms" }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Top Overtime Users
            </h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={overcapacityData.slice(0, 6)} 
                  layout="vertical"
                  margin={{ left: 10, right: 20 }}
                >
                  <XAxis 
                    type="number" 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                    tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
                  />
                  <YAxis 
                    type="category" 
                    dataKey="center" 
                    width={80}
                    tick={{ fill: 'hsl(var(--foreground))', fontSize: 11 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`${value.toLocaleString()} units`, 'Overtime']}
                  />
                  <Bar dataKey="units" radius={[0, 4, 4, 0]}>
                    {overcapacityData.slice(0, 6).map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`}
                        fill={index === 0 ? "hsl(var(--primary))" : "hsl(var(--cyan))"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Insight */}
          <div 
            className="p-4 bg-primary/5 border border-primary/20 rounded-lg animate-slide-up"
            style={{ animationDelay: "500ms" }}
          >
            <h4 className="font-sans font-semibold text-foreground mb-2">Key Insight</h4>
            <p className="text-sm text-muted-foreground font-sans">
              <span className="text-primary font-medium">London</span> leads with 781K units in overtime — 
              strategic capacity buffer for UK's high-demand market. The flexibility option 
              <span className="text-emerald font-medium"> saves €159.5M</span> by avoiding fixed costs of new centres.
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
