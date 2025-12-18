import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  number?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  number,
  className,
}) => {
  return (
    <div className={cn("mb-8 md:mb-12", className)}>
      <div className="flex items-center gap-4 mb-4">
        {number && (
          <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-lg md:text-xl font-sans">
            {number}
          </span>
        )}
        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
