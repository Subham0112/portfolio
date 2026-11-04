export type ProjectCategory = "full-stack" | "real-time" | "e-commerce";
export type ProjectTone = "teal" | "indigo" | "amber" | "rose" | "sky";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tone: ProjectTone;
  image: string | null;
  status: "Completed" | "In development";
  featured: boolean;
  stack: string[];
  features: string[];
  about: string[];
  liveUrl: string | null;
  sourceUrl: string;
  placeholderNote?: string;
}

export const projectCategories: Array<{
  value: ProjectCategory | "all";
  label: string;
}> = [
  { value: "all", label: "All" },
  { value: "full-stack", label: "Full-Stack" },
  { value: "real-time", label: "Real-Time" },
  { value: "e-commerce", label: "E-Commerce" },
];

export const projects: Project[] = [
  {
    slug: "connecthub",
    name: "ConnectHub",
    tagline: "A social platform with realtime chat and a feed that just works.",
    description:
      "Full-stack social media app with JWT-authenticated accounts, a post feed with likes and comments, and realtime conversations powered by Socket.IO.",
    category: "real-time",
    tone: "teal",
    image: "/images/connecthub.png",
    status: "Completed",
    featured: true,
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.IO",
      "JWT",
    ],
    features: [
      "Developed a full stack social media platform with proper authentication and protected routes",
      "Post feed with like, comment and Add Friend /Unfriend interactions",
      "Realtime 1:1 chat with typing indicators and read receipts",
      "Profile pages, image uploads and search across users and posts."
    ],
    about: [
      "ConnectHub is a social network built end to end, from schema design to a responsive React UI. The app is organised around three layers: an Express API with JWT-secured routes, a PostgreSQL database, and a React client split into modular feature folders.",
    ],
    liveUrl: "https://connecthub-frontend-seven.vercel.app/",
    sourceUrl: "https://github.com/Subham0112/connecthub-frontend",
    placeholderNote:
      "Add your deployed URL to liveUrl in data/projects.ts to enable the demo link.",
  },
  {
    slug: "driveme",
    name: "DriveMe",
    tagline: "A ride-booking flow with live trip tracking for riders and drivers.",
    description:
      "Ride-booking application with driver/passenger role flows, fare estimates, and live location tracking through the full ride lifecycle.",
    category: "full-stack",
    tone: "indigo",
    image: "/images/driveme.png",
    status: "In development",
    featured: true,
    stack: [
      "React",
      "react-leaflet",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "openstreetmap",
    ],
    features: [
      "Rider and driver onboarding with KYC-style document uploads",
      "Fare estimation from route distance and duration",
      "Ride lifecycle state machine: requested, accepted, in-progress, completed",
      "Live location sharing between rider and passanger during trips",
      "Ride history and trip receipts for both sides",
    ],
    about: [
      "DriveMe is a ride-booking platform in active development. It models the full trip lifecycle; a passanger requests a ride, nearby drivers receive it in realtime, and both sides track the trip live until completion.",
     
    ],
    liveUrl: "https://drive-me-zjj2-tau.vercel.app/",
    sourceUrl: "https://github.com/Subham0112/DriveMe",
    placeholderNote:
      "Add your deployed URL to liveUrl in data/projects.ts to enable the demo link.",
  },
  {
    slug: "techhub",
    name: "TechHub",
    tagline: "An e-commerce store with carts, orders and a full admin panel.",
    description:
      "E-commerce platform for tech products with product catalog, shopping cart, order flow and a separate admin dashboard for inventory and orders.",
    category: "e-commerce",
    tone: "amber",
    image: "/images/techub.png",
    status: "Completed",
    featured: true,
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    features: [
      "Product catalog with category browsing, search and filtering",
      "Cart and wishlist persisted per user",
      "Admin dashboard for products, orders and stock management",
      "Order status pipeline with email-style notifications",
    ],
    about: [
      "TechHub is a complete e-commerce storefront. Shoppers get a fast, filterable catalog and a friction-free checkout; admins get a separate panel with full control over inventory and orders.",
    ],
    liveUrl: "https://tech-hub-chi-virid.vercel.app",
    sourceUrl: "https://github.com/Subham0112/TechHub",
    placeholderNote:
      "Add your deployed URL to liveUrl in data/projects.ts to enable the demo link.",
  },
];

export function getProject(slug: string): Project | null {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 3);
}