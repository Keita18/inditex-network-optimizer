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
    <div className={cn("mb-4 md:mb-6", className)}>
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span className="inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-base md:text-lg font-sans">
            {number}
          </span>
        )}
        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-1.5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
