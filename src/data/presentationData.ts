// Distribution Centers Data
export const distributionCenters = [
  { city: "Barcelona", country: "Spain", size: "Medium", lat: 41.3851, lng: 2.1734, production: 6851743 },
  { city: "Valencia", country: "Spain", size: "Large", lat: 39.4699, lng: -0.3763, production: 354242 },
  { city: "Seville", country: "Spain", size: "Large", lat: 37.3891, lng: -5.9845, production: 962038 },
  { city: "Zaragoza", country: "Spain", size: "Large", lat: 41.6488, lng: -0.8891, production: 3304120 },
  { city: "Malaga", country: "Spain", size: "Small", lat: 36.7213, lng: -4.4214, production: 1776858 },
  { city: "Murcia", country: "Spain", size: "Large", lat: 37.9922, lng: -1.1307, production: 508383 },
  { city: "Las Palmas", country: "Spain", size: "Small", lat: 28.1235, lng: -15.4363, production: 938230 },
  { city: "Palma", country: "Spain", size: "Large", lat: 39.5696, lng: 2.6502, production: 592791 },
  { city: "Bilbao", country: "Spain", size: "Small", lat: 43.2630, lng: -2.9350, production: 794998 },
  { city: "Cordoba", country: "Spain", size: "Large", lat: 37.8882, lng: -4.7794, production: 721428 },
  { city: "Alicante", country: "Spain", size: "Large", lat: 38.3452, lng: -0.4810, production: 1251219 },
  { city: "Valladolid", country: "Spain", size: "Small", lat: 41.6523, lng: -4.7245, production: 423688 },
  { city: "Lisbon", country: "Portugal", size: "Large", lat: 38.7223, lng: -9.1393, production: 924431 },
  { city: "Dublin", country: "Ireland", size: "Small", lat: 53.3498, lng: -6.2603, production: 2717962 },
  { city: "London", country: "UK", size: "Large", lat: 51.5074, lng: -0.1278, production: 19228981 },
  { city: "Birmingham", country: "UK", size: "Small", lat: 52.4862, lng: -1.8904, production: 3391920 },
  { city: "Leeds", country: "UK", size: "Large", lat: 53.8008, lng: -1.5491, production: 1098157 },
  { city: "Glasgow", country: "UK", size: "Large", lat: 55.8642, lng: -4.2518, production: 717722 },
  { city: "Sheffield", country: "UK", size: "Large", lat: 53.3811, lng: -1.4701, production: 975685 },
  { city: "Bradford", country: "UK", size: "Medium", lat: 53.7960, lng: -1.7594, production: 1555829 },
  { city: "Manchester", country: "UK", size: "Medium", lat: 53.4808, lng: -2.2426, production: 957325 },
  { city: "Liverpool", country: "UK", size: "Small", lat: 53.4084, lng: -2.9916, production: 1311992 },
  { city: "Edinburgh", country: "UK", size: "Small", lat: 55.9533, lng: -3.1883, production: 1347996 },
  { city: "Bristol", country: "UK", size: "Large", lat: 51.4545, lng: -2.5879, production: 668079 },
  { city: "Croydon", country: "UK", size: "Large", lat: 51.3762, lng: -0.0982, production: 145207 },
  { city: "Coventry", country: "UK", size: "Large", lat: 52.4068, lng: -1.5197, production: 2026249 },
  { city: "Doncaster", country: "UK", size: "Large", lat: 53.5228, lng: -1.1286, production: 490350 },
  { city: "Caerdydd", country: "UK", size: "Large", lat: 51.4816, lng: -3.1791, production: 921675 },
  { city: "Amsterdam", country: "Netherlands", size: "Large", lat: 52.3676, lng: 4.9041, production: 793017 },
  { city: "Rotterdam", country: "Netherlands", size: "Large", lat: 51.9244, lng: 4.4777, production: 594206 },
  { city: "The Hague", country: "Netherlands", size: "Large", lat: 52.0705, lng: 4.3007, production: 559322 },
  { city: "Utrecht", country: "Netherlands", size: "Large", lat: 52.0907, lng: 5.1214, production: 1818917 },
];

// Fleet Investment Analysis Data
export const fleetComparisonData = [
  { fleet: "Original", cost: 323.6, centers: 32, reduction: 0, closures: "Leicester" },
  { fleet: "Combustion", cost: 303.2, centers: 32, reduction: -6.3, closures: "Leicester" },
  { fleet: "Automatic", cost: 256.1, centers: 32, reduction: -20.9, closures: "Leicester" },
  { fleet: "Electric", cost: 214.4, centers: 32, reduction: -33.8, closures: "Leicester" },
  { fleet: "Hydrogen", cost: 175.5, centers: 31, reduction: -45.8, closures: "Leicester + Leeds" },
];

// Brexit Sensitivity Analysis Data
export const brexitSensitivityData = [
  { scenario: "Base (0%)", ukDemand: 100, costOriginal: 323.6, costHydrogen: 175.5, savings: -45.8, centers: 32, centersH2: 31 },
  { scenario: "-5%", ukDemand: 95, costOriginal: 303.0, costHydrogen: 171.1, savings: -43.5, centers: 32, centersH2: 31 },
  { scenario: "-15%", ukDemand: 85, costOriginal: 295.9, costHydrogen: 167.7, savings: -43.3, centers: 32, centersH2: 30 },
  { scenario: "-35%", ukDemand: 65, costOriginal: 284.1, costHydrogen: 165.0, savings: -41.9, centers: 32, centersH2: 30 },
  { scenario: "-50%", ukDemand: 50, costOriginal: 278.8, costHydrogen: 163.9, savings: -41.2, centers: 32, centersH2: 29 },
];

// Forecasting Method Comparison
export const forecastingMethods = [
  { method: "Moving Average", rse: 130754, r2: -0.36, performance: "Weak" },
  { method: "Exponential Smoothing", rse: 117189, r2: -0.13, performance: "Medium" },
  { method: "Linear Regression", rse: 110614, r2: 0.00, performance: "Optimal" },
];

// Overcapacity Usage Data
export const overcapacityData = [
  { center: "London", country: "UK", units: 781874, percentage: 20 },
  { center: "Utrecht", country: "NL", units: 363783, percentage: 20 },
  { center: "Alicante", country: "ES", units: 250244, percentage: 20 },
  { center: "Lisbon", country: "PT", units: 184886, percentage: 20 },
  { center: "Amsterdam", country: "NL", units: 158603, percentage: 20 },
  { center: "Bristol", country: "UK", units: 133616, percentage: 20 },
  { center: "Rotterdam", country: "NL", units: 118841, percentage: 20 },
  { center: "The Hague", country: "NL", units: 111864, percentage: 20 },
];

// Network Distribution by Country
export const networkByCountry = [
  { country: "Spain", small: 4, medium: 1, large: 7, total: 12, flag: "🇪🇸" },
  { country: "Portugal", small: 0, medium: 0, large: 1, total: 1, flag: "🇵🇹" },
  { country: "Ireland", small: 1, medium: 0, large: 0, total: 1, flag: "🇮🇪" },
  { country: "United Kingdom", small: 5, medium: 3, large: 6, total: 14, flag: "🇬🇧" },
  { country: "Netherlands", small: 0, medium: 0, large: 4, total: 4, flag: "🇳🇱" },
];

// Key Metrics
export const keyMetrics = {
  totalCenters: 33, // Total potential sites mentioned in introduction
  openedCenters: 32, // Based on Table 2 and Table 9
  closedCenters: 1,
  closedCenter: "Leicester", // As noted in section 3.1
  baseCost: 483149217, // From section 3.1 Results
  flexibleCost: 323630114, // From section 3.2 Results
  costReduction: 33.0,
  overcapacityUnits: 2439600, // From Table 3
  hydrogenSavings: 148163132, // Precise annual saving from Table 11
  demandReduction2021: 20,
};

// Investment Analysis
export const investmentData = [
  { fleet: "Combustion", investment: 40, lifespan: 10, annualSavings: 20.4 },
  { fleet: "Automatic", investment: 100, lifespan: 15, annualSavings: 67.5 },
  { fleet: "Electric", investment: 1250, lifespan: 20, annualSavings: 109.2 },
  { fleet: "Hydrogen", investment: 1000, lifespan: 10, annualSavings: 148.1 },
];

// Team Members
export const teamMembers = [
  "Massika Nkembo Noévie",
  "Marcelin Nervelie",
  "Liberté-Vayana Massan à Nana Bravy",
  "Tatys costodes Tystoline mad-vissy",
  "Keita Aboubacar",
];

// Recommendations
export const recommendations = [
  {
    title: "Network Configuration",
    description: "Maintain 31-32 distribution centres with majority large warehouses",
    icon: "network",
  },
  {
    title: "Flexible Capacity",
    description: "Use 20% overtime strategically - reduces costs by €159.5M",
    icon: "capacity",
  },
  {
    title: "Hydrogen Fleet",
    description: "Invest in hydrogen trucks for €148M annual savings",
    icon: "truck",
  },
  {
    title: "Brexit Monitoring",
    description: "Quarterly UK demand reviews; reassess if drops exceed 35%",
    icon: "monitor",
  },
  {
    title: "Adaptive Governance",
    description: "Modular management with scenario-based planning",
    icon: "governance",
  },
];
