export type Tag = {
  id: string
  name: string
  color: string
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  featured: boolean
  link?: string
  github?: string
  slug?: string
}

export type Skill = {
  name: string
  icon: string
  category: "frontend" | "backend" | "tools" | "other"
}

export type Certification = {
  title: string
  issuer: string
  date: string
  link?: string
}

export type Education = {
  institution: string
  degree: string
  field: string
  years: string
}

export const tags: Tag[] = [
  { id: "react", name: "React", color: "bg-blue-500" },
  { id: "nextjs", name: "Next.js", color: "bg-black" },
  { id: "typescript", name: "TypeScript", color: "bg-blue-700" },
  { id: "tailwind", name: "Tailwind CSS", color: "bg-cyan-500" },
  { id: "node", name: "Node.js", color: "bg-green-600" },
  { id: "mongodb", name: "MongoDB", color: "bg-green-500" },
  { id: "firebase", name: "Firebase", color: "bg-yellow-500" },
  { id: "graphql", name: "GraphQL", color: "bg-pink-600" },
  { id: "aws", name: "AWS", color: "bg-orange-500" },
  { id: "ui", name: "UI/UX", color: "bg-purple-500" },
]

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment processing, user authentication, and inventory management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["react", "nextjs", "typescript", "mongodb"],
    featured: true,
    slug: "e-commerce-platform",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["react", "firebase", "tailwind"],
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Generator",
    description: "A tool that helps developers create professional portfolios with minimal configuration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["nextjs", "typescript", "tailwind"],
    featured: true,
    slug: "portfolio-generator",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["react", "typescript", "ui"],
    featured: false,
  },
  {
    id: "5",
    title: "Recipe Finder",
    description: "An application that helps users find recipes based on ingredients they have on hand.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["react", "node", "mongodb"],
    featured: false,
  },
  {
    id: "6",
    title: "Social Media Analytics",
    description: "A dashboard for tracking and analyzing social media performance across multiple platforms.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["nextjs", "aws", "graphql"],
    featured: false,
  },
]

export const skills: Skill[] = [
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Express", icon: "express", category: "backend" },
  { name: "MongoDB", icon: "mongodb", category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", category: "backend" },
  { name: "GraphQL", icon: "graphql", category: "backend" },
  { name: "Firebase", icon: "firebase", category: "backend" },
  { name: "AWS", icon: "aws", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "Git", icon: "git", category: "tools" },
  { name: "Figma", icon: "figma", category: "tools" },
  { name: "Jest", icon: "jest", category: "tools" },
]

export const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "May 2023",
    link: "#",
  },
  {
    title: "Professional Frontend Developer",
    issuer: "Meta",
    date: "January 2023",
    link: "#",
  },
  {
    title: "Full Stack JavaScript Developer",
    issuer: "Udacity",
    date: "August 2022",
    link: "#",
  },
  {
    title: "UI/UX Design Professional",
    issuer: "Google",
    date: "March 2022",
    link: "#",
  },
]

export const education: Education[] = [
  {
    institution: "University of Technology",
    degree: "Master of Science",
    field: "Computer Science",
    years: "2020-2022",
  },
  {
    institution: "Digital Arts College",
    degree: "Bachelor of Science",
    field: "Web Development",
    years: "2016-2020",
  },
]
