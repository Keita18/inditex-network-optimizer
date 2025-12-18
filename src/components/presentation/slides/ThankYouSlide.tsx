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

      {/* Content - justify-center s'occupe de tout centrer verticalement */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 gap-y-10" style={{ paddingTop: "8rem" }}>
        
        {/* Main title & Subtitle */}
        <div className="animate-slide-up" style={{ animationDelay: "0ms" }}>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient-gold">Thank You</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans font-light max-w-2xl">
            Questions & Discussion
          </p>
        </div>

        {/* Key takeaways */}
        <div 
          className="flex flex-wrap justify-center gap-6 animate-slide-up"
          style={{ animationDelay: "100ms" }}
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

        {/* Team & Course Info Block (Sans mt-12 pour rester centré) */}
        <div 
          className="animate-slide-up flex flex-col items-center gap-8"
          style={{ animationDelay: "200ms" }}
        >
          {/* Bloc Équipe */}
          <div className="flex flex-col items-center">
            <div className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-primary mb-3">
              Group 06
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 px-6 text-sm text-foreground/80 font-sans text-center">
              {teamMembers.map((member, i) => (
                <React.Fragment key={i}>
                  <span className="whitespace-nowrap">{member}</span>
                  {i < teamMembers.length - 1 && (
                    /* Points NÉON plus lumineux */
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(var(--primary),1)] animate-pulse" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Infos détaillées du cours */}
          <div className="flex flex-col items-center gap-2 pt-14 border-t border-border/50 min-w-[300px]">
            <div className="text-xs text-muted-foreground font-sans uppercase tracking-widest">
              LLSMG2003 • Production & Operations Modelling
            </div>
            <div className="text-[11px] text-primary/70 font-sans italic">
              Professor: Nishant Mishra • Academic Year 2025-2026
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};