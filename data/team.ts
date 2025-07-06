export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  skills: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    position: "Creative Director",
    bio: "With over 8 years of experience in digital design, Sarah leads our creative team to deliver exceptional visual experiences that drive results.",
    avatar: "SJ",
    skills: [
      "Brand Strategy",
      "Visual Design",
      "Creative Direction",
      "Team Leadership",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    position: "Lead Developer",
    bio: "Michael brings 10+ years of full-stack development expertise, specializing in modern web technologies and scalable solutions.",
    avatar: "MC",
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "System Architecture",
    ],
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "emily-davis",
    name: "Emily Davis",
    position: "UX/UI Designer",
    bio: "Emily is passionate about creating user-centered designs that solve real problems and deliver exceptional user experiences.",
    avatar: "ED",
    skills: [
      "User Research",
      "Prototyping",
      "Interaction Design",
      "Usability Testing",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "david-rodriguez",
    name: "David Rodriguez",
    position: "Digital Marketing Strategist",
    bio: "David develops data-driven marketing strategies that help brands grow their online presence and achieve measurable results.",
    avatar: "DR",
    skills: [
      "SEO",
      "Social Media",
      "Content Strategy",
      "Analytics",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "david-rodriguezss",
    name: "David Rodriguez",
    position: "Digital Marketing Strategist",
    bio: "David develops data-driven marketing strategies that help brands grow their online presence and achieve measurable results.",
    avatar: "DR",
    skills: [
      "SEO",
      "Social Media",
      "Content Strategy",
      "Analytics",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];
