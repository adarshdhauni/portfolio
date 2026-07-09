import { Code2, Database, Wrench, Braces } from "lucide-react";

export const SKILLS = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Modern User Interfaces",
    description:
      "Crafting fast, accessible, and responsive user interfaces with the modern React ecosystem.",
    icon: Code2,
    span: 12,
    skills: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "React Router",
      "Tailwind CSS",
      "Vite",
    ],
  },

  {
    id: "backend",
    title: "Backend",
    subtitle: "Backend Development",
    description:
      "Building secure REST APIs, authentication systems, and scalable backend services.",
    icon: Database,
    span: 6,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT",
      "Multer",
      "Resend",
    ],
  },

  {
    id: "tools",
    title: "Tools",
    subtitle: "Development Workflow",
    description:
      "Tools used for version control, testing, deployment, and an efficient development workflow.",
    icon: Wrench,
    span: 6,
    skills: ["Git", "GitHub", "Postman", "MongoDB Atlas", "Railway", "Vercel"],
  },

  {
    id: "languages",
    title: "Languages",
    subtitle: "Core Web Technologies",
    description: "Core web technologies that power every application I build.",
    icon: Braces,
    span: 12,
    skills: ["JavaScript", "HTML5", "CSS3"],
  },
];
