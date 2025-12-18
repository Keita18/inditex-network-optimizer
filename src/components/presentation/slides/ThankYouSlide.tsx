import React from "react";
import { SlideContainer } from "../SlideContainer";
import { teamMembers } from "@/data/presentationData";

interface ThankYouSlideProps {
  isActive: boolean;
}

export const ThankYouSlide: React.FC<ThankYouSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive} variant="hero">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        {/* Main title */}
        <h1 
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="text-gradient-gold">Thank You</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-muted-foreground font-sans font-light max-w-2xl mb-8 animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          Questions & Discussion
        </p>

        {/* Key takeaways */}
        <div 
          className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          {[
            { icon: "🎯", label: "32 Optimized Centres" },
            { icon: "💰", label: "€148M Annual Savings" },
            { icon: "🚛", label: "Hydrogen Fleet" },
            { icon: "📊", label: "Brexit-Resilient" },
          ].map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-4 py-2 bg-card/30 border border-border/50 rounded-full"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-sans text-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Team */}
        <div 
          className="animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="text-sm text-primary font-sans font-medium mb-3">Group 06</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/80 font-sans">
            {teamMembers.map((member, i) => (
              <span key={i}>{member}</span>
            ))}
          </div>
        </div>

        {/* Course info */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <div className="text-center">
            <div className="text-xs text-muted-foreground font-sans">LLSMG2003 • Production & Operations Modelling</div>
            <div className="text-xs text-muted-foreground font-sans mt-1">Prof. Nishant Mishra • Academic Year 2025-2026</div>
          </div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>
    </SlideContainer>
  );
};