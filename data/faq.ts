export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQ[] = [
  {
    id: "services-offered",
    question: "What services do you offer?",
    answer:
      "We offer comprehensive digital marketing services including website design & development, graphics design, social media management, mobile app development, digital marketing strategies, and brand development.",
    category: "Services",
  },
  {
    id: "project-timeline",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while comprehensive branding projects may take 8-12 weeks. We'll provide detailed timelines during our initial consultation.",
    category: "Process",
  },
  {
    id: "ongoing-support",
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide ongoing support and maintenance packages to ensure your digital assets continue to perform optimally. Our support includes updates, security monitoring, and performance optimization.",
    category: "Support",
  },
  {
    id: "design-process",
    question: "What is your design process?",
    answer:
      "Our design process involves discovery, strategy, design, development, and launch phases. We work closely with you throughout each stage to ensure the final product exceeds your expectations and achieves your business goals.",
    category: "Process",
  },
  {
    id: "project-communication",
    question: "How do you handle project communication?",
    answer:
      "We maintain transparent communication through regular updates, scheduled check-ins, and dedicated project management tools. You'll have direct access to your project team and real-time progress updates.",
    category: "Communication",
  },
  {
    id: "agency-difference",
    question: "What makes your agency different?",
    answer:
      "We combine creative excellence with strategic thinking and cutting-edge technology. Our team focuses on delivering measurable results while creating exceptional user experiences that drive business growth.",
    category: "About",
  },
];
