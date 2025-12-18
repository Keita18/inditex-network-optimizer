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
    }
  }, [isActive]);

  if (!isActive) return null;

  const variantStyles = {
    default: "p-8 md:p-12 lg:p-16",
    hero: "p-0",
    centered: "p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center text-center",
  };

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden",
        variantStyles[variant],
        shouldAnimate && "animate-fade-in",
        className
      )}
    >
      {children}
    </div>
  );
};
