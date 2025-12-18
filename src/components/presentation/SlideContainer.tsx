import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SlideContainerProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
  variant?: "default" | "hero" | "centered";
}

export const SlideContainer: React.FC<SlideContainerProps> = ({
  children,
  isActive,
  className,
  variant = "default",
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isActive]);

  const variantStyles = {
    default: "p-6 md:p-8 lg:p-10",
    hero: "p-0",
    centered: "p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center",
  };

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden transition-opacity duration-500 scrollbar-thin",
        variantStyles[variant],
        isActive 
          ? "opacity-100 z-10 pointer-events-auto" 
          : "opacity-0 z-0 pointer-events-none",
        shouldAnimate && isActive && "animate-fade-in",
        className
      )}
      style={{
        visibility: isActive ? 'visible' : 'hidden',
      }}
    >
      <div className="w-full pb-4">
        {children}
      </div>
    </div>
  );
};
