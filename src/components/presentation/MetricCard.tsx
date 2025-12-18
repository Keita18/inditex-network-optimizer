import React from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string | number;
  label: string;
  sublabel?: string;
  trend?: "up" | "down" | "neutral";
  delay?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  sublabel,
  trend,
  delay = 0,
  className,
  size = "md",
}) => {
  const sizeStyles = {
    sm: "p-3",
    md: "p-4 md:p-6",
    lg: "p-6 md:p-8",
  };

  const valueStyles = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl lg:text-4xl",
    lg: "text-3xl md:text-4xl lg:text-5xl",
  };

  return (
    <div
      className={cn(
        "relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden",
        "hover:border-primary/50 transition-all duration-300",
        "animate-slide-up",
        sizeStyles[size],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className={cn(
          "font-display font-bold text-gradient-gold mb-2",
          valueStyles[size]
        )}>
          {value}
          {trend && (
            <span className={cn(
              "ml-2 text-sm font-sans",
              trend === "up" && "text-emerald",
              trend === "down" && "text-rose",
              trend === "neutral" && "text-muted-foreground"
            )}>
              {trend === "up" && "↑"}
              {trend === "down" && "↓"}
              {trend === "neutral" && "→"}
            </span>
          )}
        </div>
        <div className="text-foreground/80 font-medium text-sm md:text-base">{label}</div>
        {sublabel && (
          <div className="text-muted-foreground text-xs md:text-sm mt-1">{sublabel}</div>
        )}
      </div>
    </div>
  );
};
