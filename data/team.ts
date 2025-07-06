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
    id: "rohan-shrestha",
    name: "Rohan Shrestha",
    position: "Chief Technical Officer",
    bio: "With over 8 years of experience in digital design, Rohan leads our creative team to deliver exceptional visual experiences that drive results.",
    avatar: "RS",
    skills: [
      "Web Design",
      "Branding",
      "UI/UX Design",
      "Graphic Design",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "rohit-nepali",
    name: "Rohit Nepali",
    position: "Backend Developer",
    bio: "Rohit brings 10+ years of full-stack development expertise, specializing in modern web technologies and scalable solutions.",
    avatar: "RN",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "API Development",
      "PostgreSQL",
    ],
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "mandika-magar",
    name: "Mandika Magar",
    position: "Marketing Specialist",
    bio: "Mandika is passionate about creating user-centered designs that solve real problems and deliver exceptional user experiences.",
    avatar: "MM",
    skills: [
      "Digital Marketing",
      "Content Creation",
      "SEO",
      "Social Media Management",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "sujen-tamang",
    name: "Sujen Tamang",
    position: "UI/UX Designer",
    bio: "Sujen is a creative UI/UX designer with a passion for crafting intuitive and engaging user experiences.",
    avatar: "ST",
    skills: [
      "UI Design",
      "UX Research",
      "Prototyping",
      "User Testing",
      "Figma",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "prajwal-limbu",
    name: "Prajwal Limbu",
    position: "Digital Marketing Strategist",
    bio: "Prajwal develops data-driven marketing strategies that help brands grow their online presence and achieve measurable results.",
    avatar: "PL",
    skills: [
      "Digital Marketing",
      "Content Creation",
      "SEO",
      "Social Media Management",
    ],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];
