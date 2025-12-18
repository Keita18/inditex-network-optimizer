import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";

interface AgendaSlideProps {
  isActive: boolean;
}

const agendaItems = [
  { number: "01", title: "Introduction", subtitle: "Inditex's European network challenge" },
  { number: "02", title: "Demand Forecasting", subtitle: "2021 predictions with sanitary crisis adjustment" },
  { number: "03", title: "Network Optimization", subtitle: "Base configuration & flexible capacity" },
  { number: "04", title: "Fleet Investment Analysis", subtitle: "Technology comparison & ROI" },
  { number: "05", title: "Brexit Sensitivity", subtitle: "UK demand scenario analysis" },
  { number: "06", title: "Recommendations", subtitle: "Strategic action plan for Inditex" },
];

export const AgendaSlide: React.FC<AgendaSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        title="Agenda" 
        subtitle="Our strategic analysis framework"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
        {agendaItems.map((item, index) => (
          <div
            key={item.number}
            className="group relative p-6 bg-card/30 border border-border/50 rounded-lg 
                       hover:border-primary/50 hover:bg-card/50 transition-all duration-300
                       animate-slide-up cursor-default"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Number badge */}
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary/20 border border-primary/40 
                           flex items-center justify-center text-primary font-bold font-sans text-sm
                           group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {item.number}
            </div>
            
            <div className="ml-4">
              <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-sans">
                {item.subtitle}
              </p>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </SlideContainer>
  );
};
