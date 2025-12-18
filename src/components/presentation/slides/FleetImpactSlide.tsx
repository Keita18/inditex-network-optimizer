import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { Truck, Zap, ArrowRight, CheckCircle, Clock } from "lucide-react";

interface FleetImpactSlideProps {
  isActive: boolean;
}

const originalFleet = [
  "32 centres maintained",
  "13 hubs using overtime (London, Utrecht, Alicante, Lisbon...)",
  "Overtime needed to maximize existing capacity",
  "Overtime cost: €48.82 M",
];

const hydrogenFleet = [
  "31 centres (Leeds closure)",
  "Only Amsterdam uses overtime (158,603 units)",
  "Network centralisation around key hubs",
  "Bradford & Manchester upgrade to Large",
];

export const FleetImpactSlide: React.FC<FleetImpactSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="4.1" 
        title="Fleet Technologies" 
        subtitle="Network Structure Impact"
      />

      <div className="flex flex-col gap-4">
        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Original Fleet */}
          <div className="bg-muted/20 rounded-lg p-5 border border-border/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-muted">
                <Truck className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Original + Overtime (Q3.a)</h3>
                <span className="text-xs text-muted-foreground">Current Fleet Configuration</span>
              </div>
            </div>
            <ul className="space-y-3">
              {originalFleet.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hydrogen Fleet */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-5 border border-accent/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-accent/20">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Hydrogen Fleet (Q4.4)</h3>
                <span className="text-xs text-accent">Recommended Configuration</span>
              </div>
            </div>
            <ul className="space-y-3">
              {hydrogenFleet.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-muted-foreground">€323.63 M</div>
            <div className="text-xs text-muted-foreground">Original</div>
          </div>
          <ArrowRight className="w-8 h-8 text-accent" />
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">€175.47 M</div>
            <div className="text-xs text-accent">Hydrogen</div>
          </div>
          <div className="ml-4 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-bold">
            -45.8%
          </div>
        </div>

        {/* Strategic Implication */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-5 border border-accent/20">
          <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Strategic Implication
          </h3>
          <p className="text-foreground/80 text-sm leading-relaxed">
            Lower transport costs from hydrogen fleet <strong>eliminate the need for widespread overtime</strong>. 
            Network naturally becomes more efficient with fewer, larger hubs – no artificial capacity stretching needed. 
            This represents a fundamental shift from labour-intensive operations to technology-driven efficiency.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};
