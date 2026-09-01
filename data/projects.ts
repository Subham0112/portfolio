export type ProjectCategory = "full-stack" | "real-time" | "e-commerce";
export type ProjectTone = "teal" | "indigo" | "amber" | "rose" | "sky";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tone: ProjectTone;
  year: string;
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
    year: "2025",
    status: "Completed",
    featured: true,
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
    ],
    features: [
      "JWT auth with refresh tokens, protected routes and role guard for admins",
      "Post feed with like, comment and follow/unfollow interactions",
      "Realtime 1:1 and group chat with typing indicators and read receipts",
      "Online presence tracking across the app via Socket.IO",
      "Profile pages, image uploads and search across users and posts",
    ],
    about: [
      "ConnectHub is my largest MERN project — a social network built end to end, from schema design to a responsive React UI. The app is organised around three layers: an Express API with JWT-secured routes, MongoDB collections wired through Mongoose, and a React client split into modular feature folders.",
      "The realtime layer was the most interesting part. Socket.IO sessions are authenticated with the user's JWT, then scoped to rooms per conversation so events only reach the right people. Typing indicators and read receipts run over the same channel, which taught me a lot about message ordering, presence, and quiet failure handling on the client.",
      "The product is what I would ship to production: rate-limited auth endpoints, optimistic UI updates for likes, a skeleton-loading feed, and clean empty states across every screen.",
    ],
    liveUrl: null,
    sourceUrl: "https://github.com/YOUR_GITHUB_USERNAME/connecthub",
    placeholderNote:
      "Add your deployed URL to liveUrl in data/projects.ts to enable the demo link.",
  },
  {
    slug: "driveme",
    name: "DriveMe",
    tagline: "A ride-booking flow with live trip tracking for riders and drivers.",
    description:
      "Ride-booking application with driver/rider role flows, fare estimates, and live location tracking through the full ride lifecycle.",
    category: "full-stack",
    tone: "indigo",
    year: "2025",
    status: "In development",
    featured: true,
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Mapbox",
    ],
    features: [
      "Rider and driver onboarding with KYC-style document uploads",
      "Fare estimation from route distance and duration",
      "Ride lifecycle state machine: requested, accepted, in-progress, completed",
      "Live location sharing between rider and driver during trips",
      "Ride history and trip receipts for both sides",
    ],
    about: [
      "DriveMe is a ride-booking platform in active development. It models the full trip lifecycle — a rider requests a ride, nearby drivers receive it in realtime, and both sides track the trip live until completion.",
      "The backend is a Node.js + Express API with MongoDB storing users, vehicles and trips. Socket.IO handles the realtime surface: ride requests broadcast to drivers in a geo-radius, acceptance events flip the trip state, and location pings stream between riders and drivers.",
      "The current focus is the driver side — a focused workflow for accepting rides, navigating to pickup, and ending trips. The frontend is mobile-first, designed to be genuinely usable one-handed on a phone.",
    ],
    liveUrl: null,
    sourceUrl: "https://github.com/YOUR_GITHUB_USERNAME/driveme",
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
    year: "2024",
    status: "Completed",
    featured: true,
    stack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
    ],
    features: [
      "Product catalog with category browsing, search and filtering",
      "Cart and wishlist persisted per user",
      "Order placement with Razorpay test-mode payments and webhook handling",
      "Admin dashboard for products, orders and stock management",
      "Order status pipeline with email-style notifications",
    ],
    about: [
      "TechHub is a complete e-commerce storefront. Shoppers get a fast, filterable catalog and a friction-free checkout; admins get a separate panel with full control over inventory and orders.",
      "The checkout flow was the hardest part to get right. Payment intent is created server-side, verified through Razorpay's webhook with signature validation, and only then is the order marked paid — stock is decremented in the same transaction. This taught me how to reason about state that changes from two directions.",
      "The frontend uses Redux Toolkit for cart and wishlist state, with React Router handling the multi-page shop and admin sections.",
    ],
    liveUrl: null,
    sourceUrl: "https://github.com/YOUR_GITHUB_USERNAME/techhub",
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