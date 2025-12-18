import React from "react";
import { cn } from "@/lib/utils";
import { distributionCenters } from "@/data/presentationData";

interface EuropeMapProps {
  className?: string;
  highlightCountry?: string;
  showLabels?: boolean;
}

export const EuropeMap: React.FC<EuropeMapProps> = ({
  className,
  highlightCountry,
  showLabels = true,
}) => {
  // Convert lat/lng to SVG coordinates (simplified projection)
  const toSVG = (lat: number, lng: number) => {
    const x = ((lng + 15) / 30) * 400 + 50;
    const y = ((60 - lat) / 35) * 350 + 25;
    return { x, y };
  };

  const getSizeRadius = (size: string) => {
    switch (size) {
      case "Large": return 6;
      case "Medium": return 4.5;
      case "Small": return 3;
      default: return 4;
    }
  };

  const getCountryColor = (country: string) => {
    const colors: Record<string, string> = {
      "Spain": "hsl(var(--chart-2))",
      "Portugal": "hsl(var(--chart-3))",
      "Ireland": "hsl(var(--chart-4))",
      "UK": "hsl(var(--chart-1))",
      "Netherlands": "hsl(var(--chart-5))",
    };
    return colors[country] || "hsl(var(--primary))";
  };

  // Major cities to label
  const majorCities = ["London", "Barcelona", "Amsterdam", "Dublin", "Lisbon"];

  return (
    <div className={cn("relative", className)}>
      <svg viewBox="0 0 500 400" className="w-full h-full">
        {/* Background map shape - simplified Europe outline */}
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--navy-medium))" />
            <stop offset="100%" stopColor="hsl(var(--navy-dark))" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Simplified country shapes */}
        {/* Spain */}
        <path
          d="M80,280 L180,280 L200,260 L180,220 L140,200 L80,220 Z"
          fill="url(#mapGradient)"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* UK */}
        <path
          d="M200,80 L240,60 L260,100 L240,160 L200,180 L180,140 L180,100 Z"
          fill="url(#mapGradient)"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Netherlands */}
        <path
          d="M300,120 L340,110 L350,140 L320,160 L290,150 Z"
          fill="url(#mapGradient)"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Ireland */}
        <path
          d="M140,100 L170,90 L180,120 L160,140 L130,130 Z"
          fill="url(#mapGradient)"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Portugal */}
        <path
          d="M60,240 L80,220 L80,280 L60,280 Z"
          fill="url(#mapGradient)"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Connection lines for major flows */}
        <g opacity="0.2">
          {distributionCenters.slice(0, 5).map((center, i) => {
            const pos = toSVG(center.lat, center.lng);
            const londonPos = toSVG(51.5074, -0.1278);
            return (
              <line
                key={`line-${i}`}
                x1={pos.x}
                y1={pos.y}
                x2={londonPos.x}
                y2={londonPos.y}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="4,4"
                className="animate-draw"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            );
          })}
        </g>

        {/* Distribution centers */}
        {distributionCenters.map((center, index) => {
          const pos = toSVG(center.lat, center.lng);
          const radius = getSizeRadius(center.size);
          const color = getCountryColor(center.country);
          const isHighlighted = !highlightCountry || center.country === highlightCountry;
          const isMajor = majorCities.includes(center.city);

          return (
            <g
              key={center.city}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 50}ms`, transformOrigin: `${pos.x}px ${pos.y}px` }}
            >
              {/* Glow ring for major cities */}
              {isMajor && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={radius + 4}
                  fill="none"
                  stroke={color}
                  strokeWidth="1"
                  opacity="0.3"
                  className="animate-pulse-glow"
                />
              )}
              {/* Main circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={radius}
                fill={color}
                opacity={isHighlighted ? 1 : 0.3}
                filter={isMajor ? "url(#glow)" : undefined}
              />
              {/* Label for major cities */}
              {showLabels && isMajor && (
                <text
                  x={pos.x}
                  y={pos.y - radius - 6}
                  textAnchor="middle"
                  className="fill-foreground text-[8px] font-sans font-medium"
                >
                  {center.city}
                </text>
              )}
            </g>
          );
        })}

        {/* Legend */}
        <g transform="translate(380, 300)">
          <text className="fill-foreground text-[10px] font-sans font-bold" y="0">Size</text>
          <circle cx="10" cy="20" r="6" fill="hsl(var(--muted-foreground))" opacity="0.5" />
          <text className="fill-muted-foreground text-[8px] font-sans" x="22" y="23">Large</text>
          <circle cx="10" cy="40" r="4.5" fill="hsl(var(--muted-foreground))" opacity="0.5" />
          <text className="fill-muted-foreground text-[8px] font-sans" x="22" y="43">Medium</text>
          <circle cx="10" cy="60" r="3" fill="hsl(var(--muted-foreground))" opacity="0.5" />
          <text className="fill-muted-foreground text-[8px] font-sans" x="22" y="63">Small</text>
        </g>

        {/* Country legend */}
        <g transform="translate(20, 20)">
          <text className="fill-foreground text-[10px] font-sans font-bold" y="0">Countries</text>
          {[
            { name: "Spain", color: "hsl(var(--chart-2))" },
            { name: "UK", color: "hsl(var(--chart-1))" },
            { name: "Netherlands", color: "hsl(var(--chart-5))" },
            { name: "Portugal", color: "hsl(var(--chart-3))" },
            { name: "Ireland", color: "hsl(var(--chart-4))" },
          ].map((country, i) => (
            <g key={country.name} transform={`translate(0, ${15 + i * 15})`}>
              <circle cx="6" cy="0" r="4" fill={country.color} />
              <text className="fill-muted-foreground text-[8px] font-sans" x="16" y="3">{country.name}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};
