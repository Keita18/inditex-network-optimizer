import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { Target, Variable, Lock, Zap } from "lucide-react";

interface OptimizationModelSlideProps {
  isActive: boolean;
}

const decisionVariables = [
  { symbol: "xₚₛ", description: "Open warehouse size s at site p", type: "binary" },
  { symbol: "vₚc", description: "Volume shipped from p to city c", type: "continuous" },
  { symbol: "Eₚ", description: "Overtime production at site p", type: "continuous" },
  { symbol: "Yₚ", description: "Overtime activation at site p", type: "binary" },
];

const constraints = [
  "One size per warehouse site",
  "All demand must be satisfied",
  "Capacity limits respected",
  "Overtime activation logic",
];

const costComponents = [
  { label: "Fixed warehouse costs", color: "bg-primary" },
  { label: "Transportation costs", color: "bg-accent" },
  { label: "Overtime costs (if used)", color: "bg-chart-3" },
  { label: "Fleet costs", color: "bg-chart-4" },
];

export const OptimizationModelSlide: React.FC<OptimizationModelSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="05" 
        title="Optimization Model" 
        subtitle="Mathematical Formulation"
      />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          {/* Objective Function */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-5 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Objective Function</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Minimize total annual cost:
            </p>
            <div className="bg-background/50 rounded-lg p-4 font-mono text-sm">
              <div className="font-bold text-primary mb-2">Total Cost =</div>
              <div className="space-y-2 pl-4">
                {costComponents.map((item, index) => (
                  <div 
                    key={item.label}
                    className="flex items-center gap-2 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-foreground/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Constraints */}
          <div className="bg-muted/20 rounded-lg p-5 border border-border/30">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Key Constraints</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {constraints.map((constraint, index) => (
                <span 
                  key={index}
                  className="bg-accent/10 text-accent text-xs px-3 py-1.5 rounded-full border border-accent/20 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {constraint}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Decision Variables */}
        <div className="bg-muted/20 rounded-lg p-5 border border-border/30">
          <div className="flex items-center gap-2 mb-4">
            <Variable className="w-5 h-5 text-chart-3" />
            <h3 className="font-semibold text-foreground">Decision Variables</h3>
          </div>
          <div className="space-y-3">
            {decisionVariables.map((variable, index) => (
              <div 
                key={variable.symbol}
                className="bg-background/50 rounded-lg p-4 border border-border/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-lg font-bold text-primary">
                    {variable.symbol}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    variable.type === 'binary' 
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' 
                      : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                  }`}>
                    {variable.type}
                  </span>
                </div>
                <p className="text-sm text-foreground/70">{variable.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 mt-4 flex items-start gap-2">
        <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-primary">Mixed-Integer Linear Program (MILP): </span>
          <span className="text-foreground/80 text-sm">
            Solved using branch-and-bound algorithm, providing optimal or near-optimal solutions 
            for network configuration decisions.
          </span>
        </div>
      </div>
    </SlideContainer>
  );
};
