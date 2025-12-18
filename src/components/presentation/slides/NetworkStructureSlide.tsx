import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { MetricCard } from "../MetricCard";
import { EuropeMap } from "../EuropeMap";
import { networkByCountry, keyMetrics } from "@/data/presentationData";

interface NetworkStructureSlideProps {
  isActive: boolean;
}

export const NetworkStructureSlide: React.FC<NetworkStructureSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="3.2"
        title="Network Optimization" 
        subtitle="Base configuration — minimizing fixed + transportation costs"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: Map */}
        <div 
          className="lg:col-span-3 p-4 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          <h3 className="text-lg font-display font-semibold text-foreground mb-4">
            European Distribution Network
          </h3>
          <div className="h-64 md:h-80">
            <EuropeMap showLabels={true} />
          </div>
        </div>

        {/* Right: Stats */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              value="32"
              label="Centres Open"
              sublabel="Out of 33"
              delay={200}
              size="sm"
            />
            <MetricCard
              value="1"
              label="Centre Closed"
              sublabel="Leicester"
              delay={250}
              size="sm"
            />
          </div>

          {/* Country breakdown */}
          <div 
            className="p-4 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <h4 className="text-sm font-sans font-medium text-muted-foreground mb-3">By Country</h4>
            <div className="space-y-2">
              {networkByCountry.map((country, i) => (
                <div key={country.country} className="flex items-center justify-between text-sm">
                  <span className="font-sans text-foreground flex items-center gap-2">
                    <span>{country.flag}</span>
                    {country.country}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">
                      {country.small}S / {country.medium}M / {country.large}L
                    </span>
                    <span className="font-bold text-primary w-6 text-right">{country.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Size distribution */}
          <div 
            className="p-4 bg-card/30 border border-border/50 rounded-lg animate-slide-up"
            style={{ animationDelay: "350ms" }}
          >
            <h4 className="text-sm font-sans font-medium text-muted-foreground mb-3">Size Distribution</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-cyan/10 rounded">
                <div className="text-xl font-bold text-cyan">23</div>
                <div className="text-xs text-muted-foreground">Large</div>
              </div>
              <div className="text-center p-2 bg-primary/10 rounded">
                <div className="text-xl font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground">Medium</div>
              </div>
              <div className="text-center p-2 bg-emerald/10 rounded">
                <div className="text-xl font-bold text-emerald">6</div>
                <div className="text-xs text-muted-foreground">Small</div>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div 
            className="p-4 bg-primary/5 border border-primary/20 rounded-lg animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <p className="text-sm text-muted-foreground font-sans">
              <span className="text-foreground font-medium">Key insight:</span> Leicester closed — 
              its demand efficiently served by nearby <span className="text-cyan">Coventry</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom: Cost summary */}
      <div 
        className="mt-6 p-4 bg-gradient-to-r from-card/50 to-card/30 border border-border/50 rounded-lg 
                   flex items-center justify-between animate-slide-up"
        style={{ animationDelay: "450ms" }}
      >
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground font-sans">Base Total Cost:</span>
          <span className="text-2xl font-display font-bold text-foreground">€483,149,217</span>
        </div>
        <div className="text-right">
          <span className="text-sm text-muted-foreground font-sans">Transportation optimized for each destination</span>
        </div>
      </div>
    </SlideContainer>
  );
};
