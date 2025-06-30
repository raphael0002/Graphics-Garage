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
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Development",
    category: "Web Development",
    description:
      "Custom e-commerce solution with advanced features, payment integration, and mobile-responsive design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["E-commerce", "React", "Node.js", "Payment Integration"],
    client: "ShopTech",
    year: "2024",
    results: [
      "250% increase in online sales",
      "99.8% platform uptime",
      "45% faster checkout process",
    ],
  },
  {
    id: "mobile-fitness-app",
    title: "Fitness Tracking Mobile App",
    category: "Mobile Development",
    description:
      "Cross-platform mobile app for fitness tracking with social features and personalized workout plans.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Mobile App", "React Native", "Fitness", "Social Features"],
    client: "FitLife",
    year: "2023",
    results: [
      "100K+ downloads in first month",
      "4.8 star app store rating",
      "85% user retention rate",
    ],
  },
  {
    id: "restaurant-website",
    title: "Restaurant Chain Website",
    category: "Web Development",
    description:
      "Multi-location restaurant website with online ordering, reservation system, and loyalty program integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Website", "Online Ordering", "Reservation System"],
    client: "Gourmet Bistro",
    year: "2023",
    results: [
      "200% increase in online orders",
      "60% reduction in phone orders",
      "40% increase in loyalty signups",
    ],
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "UI/UX Design",
    description:
      "Comprehensive dashboard design for a SaaS platform with complex data visualization and user management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Dashboard", "Data Visualization", "SaaS", "UI/UX"],
    client: "DataInsights Pro",
    year: "2023",
    results: [
      "40% improvement in user engagement",
      "25% reduction in support tickets",
      "90% user satisfaction score",
    ],
  },
  {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description:
      "Comprehensive social media marketing campaign across multiple platforms with influencer partnerships.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Social Media", "Influencer Marketing", "Content Creation"],
    client: "Fashion Forward",
    year: "2023",
    results: [
      "500% increase in social engagement",
      "300% growth in followers",
      "150% boost in sales",
    ],
  },
];
