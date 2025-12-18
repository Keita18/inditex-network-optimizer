import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { Grid3X3, Info } from "lucide-react";

interface NetworkStructureSlideProps {
  isActive: boolean;
}

interface WarehouseCountry {
  country: string;
  flag: string;
  small: number;
  medium: number;
  large: number;
}

const warehouseData: WarehouseCountry[] = [
  { country: "Spain", flag: "🇪🇸", small: 4, medium: 1, large: 7 },
  { country: "UK", flag: "🇬🇧", small: 5, medium: 3, large: 6 },
  { country: "Netherlands", flag: "🇳🇱", small: 0, medium: 0, large: 4 },
  { country: "Portugal", flag: "🇵🇹", small: 0, medium: 0, large: 1 },
  { country: "Ireland", flag: "🇮🇪", small: 1, medium: 0, large: 0 },
];

const SizeBadge: React.FC<{ type: 'S' | 'M' | 'L'; delay: number }> = ({ type, delay }) => {
  const styles = {
    S: "bg-accent text-accent-foreground",
    M: "bg-amber-500 text-white",
    L: "bg-primary text-primary-foreground",
  };

  return (
    <span 
      className={`inline-flex items-center justify-center w-8 h-8 rounded-md font-bold text-sm ${styles[type]} animate-scale-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {type}
    </span>
  );
};

export const NetworkStructureSlide: React.FC<NetworkStructureSlideProps> = ({ isActive }) => {
  let badgeIndex = 0;

  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="3.2" 
        title="Network Structure" 
        subtitle="Warehouse Distribution by Size"
      />

      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          32 centres distributed by country and size (Small/Medium/Large):
        </p>

        {/* Warehouse Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {warehouseData.map((country) => {
            const badges: JSX.Element[] = [];
            
            for (let i = 0; i < country.small; i++) {
              badges.push(<SizeBadge key={`${country.country}-S-${i}`} type="S" delay={badgeIndex++ * 30} />);
            }
            for (let i = 0; i < country.medium; i++) {
              badges.push(<SizeBadge key={`${country.country}-M-${i}`} type="M" delay={badgeIndex++ * 30} />);
            }
            for (let i = 0; i < country.large; i++) {
              badges.push(<SizeBadge key={`${country.country}-L-${i}`} type="L" delay={badgeIndex++ * 30} />);
            }

            const total = country.small + country.medium + country.large;

            return (
              <div 
                key={country.country}
                className="bg-muted/20 rounded-lg p-4 border-2 border-primary/20 hover:border-primary/40 transition-colors"
              >
                <h4 className="text-sm font-semibold text-primary mb-3 pb-2 border-b border-border/50 flex items-center gap-2">
                  <span className="text-xl">{country.flag}</span>
                  {country.country} ({total})
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {badges}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 py-4 bg-muted/20 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent" />
            <span className="text-sm"><strong>S</strong> = Small</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-amber-500" />
            <span className="text-sm"><strong>M</strong> = Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary" />
            <span className="text-sm"><strong>L</strong> = Large</span>
          </div>
        </div>

        {/* Key Pattern */}
        <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 mt-auto flex items-start gap-2">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-primary">Key Pattern: </span>
            <span className="text-foreground/80 text-sm">
              Large warehouses dominate (18/32 = 56%), concentrated in UK and Netherlands hubs 
              for efficient distribution across Europe. Small warehouses serve local markets with specific needs.
            </span>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};
