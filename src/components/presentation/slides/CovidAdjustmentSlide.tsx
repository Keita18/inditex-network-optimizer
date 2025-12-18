import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { TrendingDown, Calculator, AlertTriangle, CheckCircle } from "lucide-react";

interface CovidAdjustmentSlideProps {
  isActive: boolean;
}

const rationale = [
  "Sanitary crisis reduces consumer demand across Europe",
  "Linear regression captures 2019-2020 trend accurately",
  "20% reduction reflects management expectation",
  "Conservative but realistic for 2021 planning",
];

export const CovidAdjustmentSlide: React.FC<CovidAdjustmentSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="2.1" 
        title="Covid-19 Demand Adjustment" 
        subtitle="2021 Forecast Correction"
      />

      <div className="flex flex-col gap-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-lg p-6 border border-destructive/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-destructive" />
              <span className="text-sm text-muted-foreground uppercase tracking-wide">
                Forecast Adjustment
              </span>
            </div>
            <div className="text-5xl font-bold text-destructive">-20%</div>
            <p className="text-sm text-foreground/70 mt-3">
              Applied to 2021 forecasted demand across all cities
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wide">
                Aggregation
              </span>
            </div>
            <div className="text-5xl font-bold text-primary">Annual</div>
            <p className="text-sm text-foreground/70 mt-3">
              Monthly forecasts converted to annual demand per city for model input
            </p>
          </div>
        </div>

        {/* Formula Box */}
        <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-amber-700 dark:text-amber-400">Formula Applied</span>
          </div>
          <div className="font-mono text-lg text-foreground bg-background/50 inline-block px-4 py-2 rounded-md">
            D<sub>2021</sub>(city) = 0.80 × D<sub>forecast</sub>(city)
          </div>
        </div>

        {/* Rationale */}
        <div className="bg-muted/20 rounded-lg p-5 border border-border/30">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            Rationale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {rationale.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-accent mt-0.5">✓</span>
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 mt-auto">
          <span className="font-semibold text-primary">Methodology: </span>
          <span className="text-foreground/80 text-sm">
            The adjustment ensures our optimization model accounts for the significant market disruption 
            caused by the pandemic, providing realistic capacity planning for 2021 operations.
          </span>
        </div>
      </div>
    </SlideContainer>
  );
};
