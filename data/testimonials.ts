export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  category: string;
  rating: number;
  location: string;
  date: string;
  projectType: string;
  fullTestimonial: string;
  results: string[];
}

export const testimonialsData: Testimonial[] = [
  {
    id: "sarah-johnson-testimonial",
    quote:
      "Graphics Garage transformed our digital presence with their innovative design approach. Our website traffic increased by 300% within the first month.",
    name: "Sarah Johnson",
    title: "Digital Strategy Lead",
    company: "TechFlow Inc",
    avatar: "SJ",
    category: "Digital Strategy",
    rating: 5,
    location: "San Francisco, CA",
    date: "March 2024",
    projectType: "Website Redesign & Digital Strategy",
    fullTestimonial:
      "Working with Graphics Garage was an absolute game-changer for our company. Their team didn't just deliver a beautiful website - they completely transformed how we think about our digital presence. The strategic approach they took to understanding our business goals and translating them into a cohesive digital experience was remarkable. Our website traffic increased by 300% within the first month, and our conversion rates have doubled. The attention to detail and the innovative design solutions they provided exceeded all our expectations.",
    results: [
      "300% increase in website traffic",
      "2x conversion rate improvement",
      "50% reduction in bounce rate",
      "40% increase in lead generation",
    ],
  },
  {
    id: "michael-chen-testimonial",
    quote:
      "Creating intuitive and engaging user experiences that delight your customers and boost conversion rates through thoughtful design.",
    name: "Michael Chen",
    title: "Lead Designer",
    company: "Creative Studios",
    avatar: "MC",
    category: "UI/UX Design",
    rating: 5,
    location: "New York, NY",
    date: "February 2024",
    projectType: "Mobile App Design",
    fullTestimonial:
      "The UI/UX design work delivered by Graphics Garage was phenomenal. They took our complex mobile app concept and turned it into an intuitive, beautiful experience that our users absolutely love. The design process was collaborative and thorough - they really took the time to understand our users' needs and pain points. The final product not only looks stunning but also functions seamlessly across all devices.",
    results: [
      "95% user satisfaction rate",
      "40% increase in app engagement",
      "60% reduction in support tickets",
      "4.8 star app store rating",
    ],
  },
  {
    id: "emily-davis-testimonial",
    quote:
      "Building scalable, high-performance applications using cutting-edge technologies and best practices for optimal results.",
    name: "Emily Davis",
    title: "Senior Developer",
    company: "DevCorp",
    avatar: "ED",
    category: "Development",
    rating: 5,
    location: "Austin, TX",
    date: "January 2024",
    projectType: "Full-Stack Web Application",
    fullTestimonial:
      "Graphics Garage's development team is top-notch. They built us a complex web application that handles thousands of users daily without any performance issues. Their code quality is exceptional, and they follow all the best practices for scalability and security. The project was delivered on time and within budget, which is rare in this industry. Their ongoing support has been fantastic as well.",
    results: [
      "99.9% uptime achieved",
      "50% faster load times",
      "Zero security vulnerabilities",
      "Handles 10k+ concurrent users",
    ],
  },
  {
    id: "david-rodriguez-testimonial",
    quote:
      "Optimizing your website for search engines to improve visibility and drive more organic traffic to your business.",
    name: "David Rodriguez",
    title: "SEO Specialist",
    company: "MarketPro",
    avatar: "DR",
    category: "SEO",
    rating: 5,
    location: "Miami, FL",
    date: "December 2023",
    projectType: "SEO Optimization & Content Strategy",
    fullTestimonial:
      "The SEO work done by Graphics Garage completely transformed our online visibility. Within 6 months, we went from page 3 to ranking #1 for our main keywords. Their approach is data-driven and transparent - they provided detailed reports and explanations for every strategy they implemented. The organic traffic growth has been incredible, and the quality of leads has improved significantly.",
    results: [
      "400% increase in organic traffic",
      "First page rankings for 50+ keywords",
      "200% increase in qualified leads",
      "85% improvement in local search visibility",
    ],
  },
  {
    id: "jessica-thompson-testimonial",
    quote:
      "Developing effective marketing strategies and campaigns that reach your target audience and drive engagement.",
    name: "Jessica Thompson",
    title: "Marketing Manager",
    company: "BrandForward",
    avatar: "JT",
    category: "Marketing",
    rating: 5,
    location: "Los Angeles, CA",
    date: "November 2023",
    projectType: "Digital Marketing Campaign",
    fullTestimonial:
      "Graphics Garage created and executed a comprehensive digital marketing campaign that exceeded all our expectations. Their creative approach to our brand messaging and their strategic use of multiple channels resulted in our most successful campaign to date. The ROI was incredible, and we've continued working with them on all our major campaigns since then.",
    results: [
      "500% ROI on ad spend",
      "300% increase in brand awareness",
      "250% growth in social media following",
      "150% increase in email subscribers",
    ],
  },
  {
    id: "robert-kim-testimonial",
    quote:
      "Outstanding web development services that delivered exactly what we needed for our e-commerce platform.",
    name: "Robert Kim",
    title: "CTO",
    company: "ShopTech",
    avatar: "RK",
    category: "E-commerce",
    rating: 5,
    location: "Seattle, WA",
    date: "October 2023",
    projectType: "E-commerce Platform Development",
    fullTestimonial:
      "The e-commerce platform built by Graphics Garage has revolutionized our online business. The custom features they developed specifically for our needs have given us a significant competitive advantage. The platform handles high traffic volumes seamlessly and the admin interface is incredibly user-friendly.",
    results: [
      "250% increase in online sales",
      "99.8% platform uptime",
      "45% faster checkout process",
      "30% reduction in cart abandonment",
    ],
  },
];
