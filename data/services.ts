export interface ServicePackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Changed from icon to iconName
  stats: {
    number: string;
    label: string;
    secondary?: string;
    secondaryLabel?: string;
  };
  packages: ServicePackage[];
  process: ProcessStep[];
  benefits: string[];
  technologies: string[];
}

export const servicesData: Service[] = [
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription:
      "Boost your brand's presence with targeted social media campaigns that drive engagement and growth.",
    fullDescription:
      "Transform your social media presence with our comprehensive marketing strategies. We create engaging content, manage your social platforms, and run targeted advertising campaigns that convert followers into customers. Our data-driven approach ensures maximum ROI and sustainable growth for your brand.",
    iconName: "Megaphone",
    stats: {
      number: "200+",
      label: "Campaigns",
      secondary: "1M+",
      secondaryLabel: "Impressions",
    },
    packages: [
      {
        name: "Starter",
        price: "$499",
        duration: "per month",
        features: [
          "2 Social Media Platforms",
          "8 Posts per month",
          "Basic Analytics",
          "Community Management",
          "Monthly Report",
        ],
      },
      {
        name: "Professional",
        price: "$999",
        duration: "per month",
        popular: true,
        features: [
          "4 Social Media Platforms",
          "20 Posts per month",
          "Advanced Analytics",
          "Community Management",
          "Paid Ad Management ($500 ad spend)",
          "Bi-weekly Strategy Calls",
          "Detailed Monthly Reports",
        ],
      },
      {
        name: "Enterprise",
        price: "$1999",
        duration: "per month",
        features: [
          "All Social Media Platforms",
          "40+ Posts per month",
          "Premium Analytics Dashboard",
          "24/7 Community Management",
          "Paid Ad Management ($2000 ad spend)",
          "Weekly Strategy Calls",
          "Influencer Outreach",
          "Custom Content Creation",
          "Comprehensive Monthly Reports",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Strategy Development",
        description:
          "We analyze your brand, audience, and competitors to create a tailored social media strategy.",
        duration: "1-2 weeks",
      },
      {
        step: 2,
        title: "Content Creation",
        description:
          "Our creative team develops engaging content that resonates with your target audience.",
        duration: "Ongoing",
      },
      {
        step: 3,
        title: "Campaign Launch",
        description:
          "We launch your campaigns across selected platforms with optimized posting schedules.",
        duration: "Week 3",
      },
      {
        step: 4,
        title: "Monitor & Optimize",
        description:
          "Continuous monitoring and optimization to maximize engagement and ROI.",
        duration: "Ongoing",
      },
    ],
    benefits: [
      "Increased brand awareness and visibility",
      "Higher engagement rates with your audience",
      "More qualified leads and conversions",
      "Improved customer loyalty and retention",
      "Better understanding of your audience insights",
    ],
    technologies: [
      "Facebook Ads Manager",
      "Instagram Business",
      "LinkedIn Campaign Manager",
      "Twitter Ads",
      "TikTok Ads",
      "Hootsuite",
      "Buffer",
      "Sprout Social",
    ],
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design",
    shortDescription:
      "Create stunning visuals for digital and print media, from logos to marketing collateral.",
    fullDescription:
      "Elevate your brand with professional graphic design services. From logo design to complete brand identities, marketing materials, and digital assets, we create visually compelling designs that communicate your message effectively and leave a lasting impression on your audience.",
    iconName: "PenTool",
    stats: { number: "300+", label: "Designs" },
    packages: [
      {
        name: "Basic",
        price: "$299",
        duration: "per project",
        features: [
          "Logo Design (3 concepts)",
          "2 Revisions",
          "High-res files (PNG, JPG)",
          "Basic Brand Guidelines",
          "7-day delivery",
        ],
      },
      {
        name: "Professional",
        price: "$699",
        duration: "per project",
        popular: true,
        features: [
          "Logo Design (5 concepts)",
          "Business Card Design",
          "Letterhead Design",
          "5 Revisions",
          "All file formats (AI, EPS, PDF, PNG, JPG)",
          "Comprehensive Brand Guidelines",
          "10-day delivery",
        ],
      },
      {
        name: "Complete Brand",
        price: "$1499",
        duration: "per project",
        features: [
          "Complete Brand Identity",
          "Logo Design (Unlimited concepts)",
          "Business Stationery Suite",
          "Marketing Materials (Brochure, Flyer)",
          "Social Media Templates",
          "Unlimited Revisions",
          "All file formats + Source files",
          "Brand Style Guide",
          "14-day delivery",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Brief",
        description:
          "We understand your brand, goals, and design preferences through detailed consultation.",
        duration: "1-2 days",
      },
      {
        step: 2,
        title: "Concept Development",
        description:
          "Our designers create initial concepts based on your requirements and brand vision.",
        duration: "3-5 days",
      },
      {
        step: 3,
        title: "Design Refinement",
        description:
          "We refine selected concepts based on your feedback and preferences.",
        duration: "2-3 days",
      },
      {
        step: 4,
        title: "Final Delivery",
        description:
          "Final designs delivered in all required formats with brand guidelines.",
        duration: "1-2 days",
      },
    ],
    benefits: [
      "Professional brand image and credibility",
      "Consistent visual identity across all platforms",
      "Increased brand recognition and recall",
      "Higher conversion rates with compelling visuals",
      "Stand out from competitors with unique designs",
    ],
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma",
      "Sketch",
      "Canva Pro",
      "Adobe After Effects",
    ],
  },
  {
    id: "branding",
    slug: "branding",
    title: "Branding",
    shortDescription:
      "Develop a cohesive brand identity that resonates with your audience and stands out.",
    fullDescription:
      "Build a powerful brand that connects with your audience and drives business growth. Our comprehensive branding services include brand strategy, visual identity, messaging, and brand guidelines that ensure consistency across all touchpoints and create lasting emotional connections with your customers.",
    iconName: "Sparkles",
    stats: { number: "80+", label: "Brand Identities" },
    packages: [
      {
        name: "Brand Essentials",
        price: "$1299",
        duration: "4-6 weeks",
        features: [
          "Brand Strategy Workshop",
          "Logo Design & Variations",
          "Color Palette",
          "Typography Selection",
          "Basic Brand Guidelines",
          "Business Card Design",
        ],
      },
      {
        name: "Complete Brand",
        price: "$2499",
        duration: "6-8 weeks",
        popular: true,
        features: [
          "Comprehensive Brand Strategy",
          "Logo Design & Brand Mark",
          "Complete Visual Identity",
          "Brand Voice & Messaging",
          "Marketing Collateral Design",
          "Website Style Guide",
          "Comprehensive Brand Guidelines",
          "Brand Launch Strategy",
        ],
      },
      {
        name: "Brand Transformation",
        price: "$4999",
        duration: "8-12 weeks",
        features: [
          "Complete Brand Audit",
          "Market Research & Analysis",
          "Brand Strategy & Positioning",
          "Complete Visual Identity System",
          "Brand Voice & Content Strategy",
          "Marketing Materials Suite",
          "Digital Brand Assets",
          "Brand Implementation Plan",
          "Staff Training Materials",
          "6-month Brand Support",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Brand Discovery",
        description:
          "Deep dive into your business, values, goals, and target audience through workshops and research.",
        duration: "1-2 weeks",
      },
      {
        step: 2,
        title: "Strategy Development",
        description:
          "Develop brand positioning, personality, and messaging that differentiates you from competitors.",
        duration: "1-2 weeks",
      },
      {
        step: 3,
        title: "Visual Identity Creation",
        description:
          "Design logo, color palette, typography, and visual elements that reflect your brand strategy.",
        duration: "2-3 weeks",
      },
      {
        step: 4,
        title: "Brand Guidelines & Launch",
        description:
          "Create comprehensive guidelines and support the launch of your new brand identity.",
        duration: "1-2 weeks",
      },
    ],
    benefits: [
      "Clear brand differentiation in the market",
      "Stronger emotional connection with customers",
      "Increased brand loyalty and trust",
      "Higher perceived value and premium pricing",
      "Consistent brand experience across all touchpoints",
    ],
    technologies: [
      "Adobe Creative Suite",
      "Figma",
      "Miro",
      "Brand24",
      "Mention",
      "Google Analytics",
      "Hotjar",
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Build fast, responsive, and SEO-optimized websites tailored to your business needs.",
    fullDescription:
      "Create powerful web experiences that drive results. Our web development services combine cutting-edge technology with user-centered design to build websites that not only look great but perform exceptionally. From simple landing pages to complex web applications, we deliver solutions that grow with your business.",
    iconName: "Globe",
    stats: { number: "120+", label: "Websites" },
    packages: [
      {
        name: "Landing Page",
        price: "$1499",
        duration: "2-3 weeks",
        features: [
          "Single Page Website",
          "Responsive Design",
          "Basic SEO Setup",
          "Contact Form",
          "Google Analytics",
          "1 Month Support",
        ],
      },
      {
        name: "Business Website",
        price: "$3499",
        duration: "4-6 weeks",
        popular: true,
        features: [
          "Up to 10 Pages",
          "Custom Responsive Design",
          "CMS Integration",
          "Advanced SEO Setup",
          "Contact Forms & Maps",
          "Social Media Integration",
          "Google Analytics & Search Console",
          "3 Months Support",
        ],
      },
      {
        name: "E-commerce Platform",
        price: "$6999",
        duration: "8-12 weeks",
        features: [
          "Custom E-commerce Solution",
          "Product Catalog Management",
          "Payment Gateway Integration",
          "Inventory Management",
          "Order Management System",
          "Customer Account Portal",
          "Advanced Analytics",
          "Mobile App Ready API",
          "6 Months Support",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Planning & Architecture",
        description:
          "Define project scope, create wireframes, and plan the technical architecture.",
        duration: "1-2 weeks",
      },
      {
        step: 2,
        title: "Design & Development",
        description:
          "Create visual designs and develop the website with modern technologies.",
        duration: "4-8 weeks",
      },
      {
        step: 3,
        title: "Testing & Optimization",
        description:
          "Comprehensive testing across devices and browsers, performance optimization.",
        duration: "1-2 weeks",
      },
      {
        step: 4,
        title: "Launch & Support",
        description:
          "Deploy to production, provide training, and offer ongoing support.",
        duration: "1 week",
      },
    ],
    benefits: [
      "Professional online presence that builds trust",
      "Mobile-responsive design for all devices",
      "Fast loading speeds and optimal performance",
      "Search engine optimized for better visibility",
      "Scalable solution that grows with your business",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Vercel",
      "AWS",
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Design intuitive and user-friendly interfaces for web and mobile applications.",
    fullDescription:
      "Create exceptional user experiences that delight your customers and drive conversions. Our UI/UX design services focus on understanding user behavior, creating intuitive interfaces, and optimizing user journeys to achieve your business goals while providing seamless and enjoyable experiences.",
    iconName: "Layout",
    stats: { number: "150+", label: "Projects" },
    packages: [
      {
        name: "UX Audit",
        price: "$999",
        duration: "1-2 weeks",
        features: [
          "Current Design Analysis",
          "User Journey Mapping",
          "Usability Issues Report",
          "Improvement Recommendations",
          "Competitor Analysis",
          "Action Plan",
        ],
      },
      {
        name: "Complete UI/UX",
        price: "$2999",
        duration: "4-6 weeks",
        popular: true,
        features: [
          "User Research & Personas",
          "Information Architecture",
          "Wireframing & Prototyping",
          "Visual Design System",
          "Interactive Prototypes",
          "Usability Testing",
          "Design Handoff",
          "2 Rounds of Revisions",
        ],
      },
      {
        name: "Enterprise Solution",
        price: "$5999",
        duration: "8-12 weeks",
        features: [
          "Comprehensive User Research",
          "Advanced Prototyping",
          "Design System Creation",
          "Multi-platform Design",
          "Accessibility Compliance",
          "User Testing & Validation",
          "Developer Collaboration",
          "Ongoing Design Support",
          "Training & Documentation",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Research & Discovery",
        description:
          "Understand users, business goals, and technical constraints through research and analysis.",
        duration: "1-2 weeks",
      },
      {
        step: 2,
        title: "Information Architecture",
        description:
          "Create user flows, sitemaps, and wireframes to structure the user experience.",
        duration: "1-2 weeks",
      },
      {
        step: 3,
        title: "Visual Design",
        description:
          "Design high-fidelity mockups and create interactive prototypes for testing.",
        duration: "2-4 weeks",
      },
      {
        step: 4,
        title: "Testing & Handoff",
        description:
          "Conduct usability testing, refine designs, and provide development-ready assets.",
        duration: "1-2 weeks",
      },
    ],
    benefits: [
      "Improved user satisfaction and engagement",
      "Higher conversion rates and reduced bounce rates",
      "Reduced development costs through better planning",
      "Competitive advantage with superior user experience",
      "Data-driven design decisions for better results",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Principle",
      "Framer",
      "Maze",
      "Hotjar",
      "Google Analytics",
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Build native and cross-platform mobile applications that engage users and drive business growth.",
    fullDescription:
      "Transform your ideas into powerful mobile applications that users love. Our mobile app development services cover everything from concept to deployment, creating native and cross-platform apps that deliver exceptional performance, user experience, and business value.",
    iconName: "Smartphone",
    stats: { number: "75+", label: "Apps Built" },
    packages: [
      {
        name: "MVP App",
        price: "$4999",
        duration: "8-12 weeks",
        features: [
          "Single Platform (iOS or Android)",
          "Core Features Development",
          "Basic UI/UX Design",
          "API Integration",
          "App Store Submission",
          "3 Months Support",
        ],
      },
      {
        name: "Full-Featured App",
        price: "$9999",
        duration: "12-16 weeks",
        popular: true,
        features: [
          "Cross-Platform Development",
          "Advanced Features & Functionality",
          "Custom UI/UX Design",
          "Backend Development",
          "Third-party Integrations",
          "Push Notifications",
          "Analytics Integration",
          "App Store Optimization",
          "6 Months Support",
        ],
      },
      {
        name: "Enterprise App",
        price: "$19999",
        duration: "16-24 weeks",
        features: [
          "Native iOS & Android Apps",
          "Complex Feature Set",
          "Advanced Security Features",
          "Custom Backend Solution",
          "Admin Dashboard",
          "Real-time Features",
          "Advanced Analytics",
          "Multi-language Support",
          "Enterprise Security",
          "12 Months Support",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Strategy & Planning",
        description:
          "Define app requirements, target audience, and technical specifications.",
        duration: "1-2 weeks",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "Create user interface designs and interactive prototypes for validation.",
        duration: "2-4 weeks",
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "Build the app with regular testing and quality assurance throughout.",
        duration: "8-16 weeks",
      },
      {
        step: 4,
        title: "Launch & Support",
        description:
          "Deploy to app stores, provide launch support, and ongoing maintenance.",
        duration: "2-3 weeks",
      },
    ],
    benefits: [
      "Direct access to customers on their mobile devices",
      "Enhanced customer engagement and loyalty",
      "New revenue streams and business opportunities",
      "Improved brand visibility and recognition",
      "Valuable user data and insights",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AWS",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
];
