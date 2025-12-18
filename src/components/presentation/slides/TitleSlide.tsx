import React from "react";
import { SlideContainer } from "../SlideContainer";
import { teamMembers } from "@/data/presentationData";

interface TitleSlideProps {
  isActive: boolean;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive} variant="hero">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated grid pattern */}
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
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        {/* Logo/Badge */}
        <div 
          className="mb-8 animate-slide-up"
          style={{ animationDelay: "0ms" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-sans font-medium tracking-wide text-sm uppercase">
              Production & Operations Modelling
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          <span className="text-foreground">Inditex</span>
          <br />
          <span className="text-gradient-gold">Supply Chain</span>
          <br />
          <span className="text-foreground">Optimization</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-muted-foreground font-sans font-light max-w-2xl mb-12 animate-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          Strategic Network Restructuring for 
          <span className="text-cyan"> European Distribution</span>
        </p>

        {/* Key Stats Bar */}
        <div 
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          {[
            { value: "33", label: "Distribution Centres" },
            { value: "5", label: "Countries" },
            { value: "€148M", label: "Potential Savings" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-sans">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team & Course Info Block */}
        <div 
          className="mt-8 animate-slide-up flex flex-col items-center gap-6"
          style={{ animationDelay: "400ms" }}
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

          {/* Bloc Cours intégré au flux */}
          <div className="flex items-center gap-4 pt-4 border-t border-primary/20">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-xs text-muted-foreground font-sans tracking-widest uppercase">
              LLSMG2003 • 2025-2026
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
