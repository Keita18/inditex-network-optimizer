import React from "react";
import { SlideContainer } from "../SlideContainer";
import { SectionTitle } from "../SectionTitle";
import { Building2, Calendar, MapPin, Truck, Package } from "lucide-react";

interface DatasetOverviewSlideProps {
  isActive: boolean;
}

const countryData = [
  { country: "Spain", flag: "🇪🇸", sites: 12, color: "bg-primary" },
  { country: "UK", flag: "🇬🇧", sites: 10, color: "bg-accent" },
  { country: "Netherlands", flag: "🇳🇱", sites: 4, color: "bg-chart-3" },
  { country: "Portugal", flag: "🇵🇹", sites: 3, color: "bg-chart-4" },
  { country: "Ireland", flag: "🇮🇪", sites: 4, color: "bg-chart-5" },
];

const dataPoints = [
  { icon: Calendar, label: "Historical Data", value: "24 months", description: "2019-2020" },
  { icon: Building2, label: "Warehouse Sites", value: "33 potential", description: "Across Europe" },
  { icon: Package, label: "Warehouse Sizes", value: "3 types", description: "S / M / L" },
  { icon: Truck, label: "Transport Costs", value: "Country-based", description: "Destination dependent" },
];

export const DatasetOverviewSlide: React.FC<DatasetOverviewSlideProps> = ({ isActive }) => {
  return (
    <SlideContainer isActive={isActive}>
      <SectionTitle 
        number="1.1" 
        title="Dataset Overview" 
        subtitle="Understanding Our Data Foundation"
      />

      <div className="flex flex-col gap-4">
        {/* Data Points Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dataPoints.map((point, index) => (
            <div 
              key={point.label}
              className="bg-muted/30 rounded-lg p-4 border border-border/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <point.icon className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {point.label}
                </span>
              </div>
              <div className="text-xl font-bold text-foreground">{point.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{point.description}</div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Temporal Data */}
          <div className="bg-muted/20 rounded-lg p-5 border border-border/30">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Temporal Data
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span className="text-foreground/80">
                  <strong>24 months</strong> historical demand (2019–2020)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span className="text-foreground/80">
                  <strong>5 Spanish cities</strong> for forecasting validation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span className="text-foreground/80">
                  Aggregated to <strong>annual 2021</strong> input for optimization
                </span>
              </li>
            </ul>
          </div>

          {/* Network Data */}
          <div className="bg-muted/20 rounded-lg p-5 border border-border/30">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              Network Data
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▸</span>
                <span className="text-foreground/80">
                  <strong>33 potential warehouse sites</strong> across 5 countries
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▸</span>
                <span className="text-foreground/80">
                  <strong>3 warehouse sizes:</strong> Small, Medium, Large
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">▸</span>
                <span className="text-foreground/80">
                  Fixed costs vary by <strong>location & size</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {countryData.map((country, index) => (
            <div 
              key={country.country}
              className="bg-card border-2 border-primary/20 rounded-lg px-6 py-4 text-center min-w-[120px] hover:border-primary/50 transition-colors animate-scale-in"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <div className="text-2xl mb-1">{country.flag}</div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                {country.country}
              </div>
              <div className="text-2xl font-bold text-foreground">{country.sites}</div>
              <div className="text-xs text-muted-foreground">sites</div>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
};
