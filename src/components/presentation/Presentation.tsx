import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";

// Import slides
import { TitleSlide } from "./slides/TitleSlide";
import { AgendaSlide } from "./slides/AgendaSlide";
import { IntroductionSlide } from "./slides/IntroductionSlide";
import { ForecastingSlide } from "./slides/ForecastingSlide";
import { NetworkOptimizationSlide } from "./slides/NetworkOptimizationSlide";
import { FlexibleCapacitySlide } from "./slides/FlexibleCapacitySlide";
import { FleetInvestmentSlide } from "./slides/FleetInvestmentSlide";
import { BrexitSensitivitySlide } from "./slides/BrexitSensitivitySlide";
import { RecommendationsSlide } from "./slides/RecommendationsSlide";
import { ThankYouSlide } from "./slides/ThankYouSlide";

const slides = [
  { id: "title", component: TitleSlide, label: "Title" },
  { id: "agenda", component: AgendaSlide, label: "Agenda" },
  { id: "introduction", component: IntroductionSlide, label: "Introduction" },
  { id: "forecasting", component: ForecastingSlide, label: "Forecasting" },
  { id: "network", component: NetworkOptimizationSlide, label: "Network" },
  { id: "flexible", component: FlexibleCapacitySlide, label: "Flexibility" },
  { id: "fleet", component: FleetInvestmentSlide, label: "Fleet Investment" },
  { id: "brexit", component: BrexitSensitivitySlide, label: "Brexit" },
  { id: "recommendations", component: RecommendationsSlide, label: "Recommendations" },
  { id: "thankyou", component: ThankYouSlide, label: "Thank You" },
];

export const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prevSlide();
          break;
        case "Home":
          e.preventDefault();
          goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "Escape":
          if (isFullscreen) {
            setIsFullscreen(false);
          }
          break;
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [nextSlide, prevSlide, goToSlide, toggleFullscreen, isFullscreen]);

  return (
    <div className="w-full h-screen bg-background flex flex-col">
      {/* Main presentation area */}
      <div className="flex-1 relative overflow-hidden">
        {/* Slide container with aspect ratio */}
        <div className="absolute inset-4 md:inset-8 flex items-center justify-center">
          <div 
            className="w-full max-w-[1600px] aspect-video bg-card rounded-lg shadow-2xl overflow-hidden relative"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {slides.map((slide, index) => {
              const SlideComponent = slide.component;
              return (
                <SlideComponent
                  key={slide.id}
                  isActive={currentSlide === index}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="h-16 border-t border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-between px-4 md:px-8">
        {/* Left: Slide indicators */}
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentSlide === index 
                  ? "w-8 bg-primary" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              title={slide.label}
            />
          ))}
        </div>

        {/* Center: Slide number */}
        <div className="text-sm font-sans text-muted-foreground">
          <span className="text-foreground font-medium">{currentSlide + 1}</span>
          <span className="mx-1">/</span>
          <span>{slides.length}</span>
          <span className="ml-3 text-xs hidden md:inline">
            — {slides[currentSlide].label}
          </span>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={cn(
              "p-2 rounded-lg transition-all duration-200",
              currentSlide === 0 
                ? "opacity-30 cursor-not-allowed" 
                : "hover:bg-muted text-foreground"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={cn(
              "p-2 rounded-lg transition-all duration-200",
              currentSlide === slides.length - 1 
                ? "opacity-30 cursor-not-allowed" 
                : "hover:bg-muted text-foreground"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-border mx-2" />

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg hover:bg-muted text-foreground transition-all duration-200"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Keyboard hints - hidden on mobile */}
      <div className="hidden md:block fixed bottom-20 right-8 text-xs text-muted-foreground/50 font-sans">
        <kbd className="px-1.5 py-0.5 bg-muted/30 rounded text-[10px]">←</kbd>
        <span className="mx-1">/</span>
        <kbd className="px-1.5 py-0.5 bg-muted/30 rounded text-[10px]">→</kbd>
        <span className="ml-2">Navigate</span>
        <span className="mx-3">|</span>
        <kbd className="px-1.5 py-0.5 bg-muted/30 rounded text-[10px]">F</kbd>
        <span className="ml-2">Fullscreen</span>
      </div>
    </div>
  );
};
