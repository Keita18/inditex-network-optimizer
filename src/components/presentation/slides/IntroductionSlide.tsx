import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { MetricCard } from "../MetricCard";

interface IntroductionSlideProps {
  isActive: boolean;
}

export const IntroductionSlide: React.FC<IntroductionSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="1"
        title="Introduction" 
        subtitle="Inditex S.A. — World leader in textile manufacturing"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Context */}
        <div className="space-y-6">
          <div 
            className="p-6 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full" />
              The Challenge
            </h3>
            <ul className="space-y-3 text-muted-foreground font-sans">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span>7,000+ retail outlets across 96 countries requiring efficient supply</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span>33 distribution centres across 5 European countries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span>Management seeks to <span className="text-cyan font-medium">restructure</span> with fewer, optimized centres</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span>COVID-19 impact: <span className="text-rose font-medium">20% expected demand reduction</span> in 2021</span>
              </li>
            </ul>
          </div>

          <div 
            className="p-6 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-cyan rounded-full" />
              Our Objective
            </h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Develop an <span className="text-foreground font-medium">optimization model</span> to minimize total costs 
              (fixed + transportation) while satisfying all market demands, with strategic recommendations 
              for fleet investments and Brexit adaptation.
            </p>
          </div>
        </div>

        {/* Right: Key Figures */}
        <div className="space-y-4">
          <h3 
            className="text-lg font-sans font-medium text-muted-foreground mb-4 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            Current Network Overview
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <MetricCard
              value="33"
              label="Distribution Centres"
              sublabel="Across Europe"
              delay={350}
            />
            <MetricCard
              value="5"
              label="Countries"
              sublabel="ES, PT, IE, UK, NL"
              delay={400}
            />
            <MetricCard
              value="7,000+"
              label="Retail Outlets"
              sublabel="96 countries served"
              delay={450}
            />
            <MetricCard
              value="€483M"
              label="Base Network Cost"
              sublabel="Annual operation"
              delay={500}
            />
          </div>

          {/* Founder note */}
          <div 
            className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg animate-slide-up"
            style={{ animationDelay: "550ms" }}
          >
            <p className="text-sm text-muted-foreground font-sans italic">
              "Founded by Amancio Ortega in 1963, Inditex has grown from a small textile shop 
              to controlling the entire supply chain — a key competitive advantage."
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
