import ecommerce600 from "@/assets/images/ecommerce-600.webp";
import ecommerce900 from "@/assets/images/ecommerce-900.webp";
import ecommerce1200 from "@/assets/images/ecommerce-1200.webp";

export const PROJECTS = [
  {
    id: "ecommerce-platform",

    featured: true,

    title: "NOVA E-Commerce Platform",

    description:
      "A production-inspired full-stack MERN e-commerce platform built with a focus on performance, scalability, and maintainable architecture. It features secure authentication, an admin dashboard, advanced product discovery, responsive design, and an optimized shopping experience across devices.",

    image600: ecommerce600,
    image900: ecommerce900,
    image1200: ecommerce1200,

    github: "https://github.com/adarshdhauni/ecommerce-platform",

    live: "https://ecommerce-platform-f4qc.vercel.app/",

    technologies: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
    ],

    highlights: [
      "Secure JWT Authentication",
      "Admin Dashboard",
      "Advanced Search & Filtering",
      "Responsive Experience",
      "Performance Optimization",
      "Optimized Image Delivery",
    ],
  },
];
