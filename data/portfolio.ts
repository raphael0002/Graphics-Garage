export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  results: string[];
  link?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "techflow-rebrand",
    title: "TechFlow Complete Rebrand",
    category: "Branding",
    description:
      "Complete brand transformation for a leading tech startup, including logo design, brand guidelines, and marketing materials.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Branding", "Logo Design", "Brand Guidelines"],
    client: "TechFlow Inc",
    year: "2024",
    results: [
      "300% increase in brand recognition",
      "150% boost in website traffic",
      "50% improvement in conversion rates",
    ],
  },
];
