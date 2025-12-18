import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { recommendations } from "@/data/presentationData";
import { Network, TrendingUp, Truck, Activity, Settings } from "lucide-react";

interface RecommendationsSlideProps {
  isActive: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  network: <Network className="w-6 h-6" />,
  capacity: <TrendingUp className="w-6 h-6" />,
  truck: <Truck className="w-6 h-6" />,
  monitor: <Activity className="w-6 h-6" />,
  governance: <Settings className="w-6 h-6" />,
};

export const RecommendationsSlide: React.FC<RecommendationsSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="6"
        title="Strategic Recommendations" 
        subtitle="Action plan for Inditex management"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {recommendations.map((rec, index) => (
          <div
            key={rec.title}
            className="group p-5 bg-card/30 border border-border/50 rounded-lg 
                       hover:border-primary/50 hover:bg-card/50 transition-all duration-300
                       animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 
                           flex items-center justify-center text-primary mb-4
                           group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {iconMap[rec.icon]}
            </div>
            
            {/* Content */}
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">
              {rec.title}
            </h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              {rec.description}
            </p>

            {/* Number badge */}
            <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-primary/10 
                           flex items-center justify-center text-primary text-sm font-bold font-sans">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Summary banner */}
      <div 
        className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent 
                   border border-primary/30 rounded-lg animate-slide-up"
        style={{ animationDelay: "600ms" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-foreground text-xl mb-1">
              Optimal Strategy Summary
            </h4>
            <p className="text-sm text-muted-foreground font-sans max-w-xl">
              Balance cost minimization with operational flexibility. Position Inditex to respond 
              effectively to market changes while reducing environmental footprint through 
              efficient transportation.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-gradient-gold">31-32</div>
              <div className="text-xs text-muted-foreground">Centres</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-emerald">€148M</div>
              <div className="text-xs text-muted-foreground">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-cyan">H₂</div>
              <div className="text-xs text-muted-foreground">Fleet</div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
