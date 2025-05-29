// src/lib/types/work.ts
import { ReactNode } from "react";

export interface ProgramStat {
  value: string;
  label: string;
}

export interface Program {
  label: string;
  page: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  stats?: ProgramStat[];
  featured?: boolean;
  cta?: ReactNode;
}

export interface Project {
  id: string | number;
  title: string;
  description: string;
  location: string;
  date: string;
  imageUrl: string;
  tags: string[];
  status: string;
  link?: string;
}

export interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects: Project[];
  ongoingTitle?: string;
  completedTitle?: string;
  ctaText?: string;
  containerClass?: string;
  cardClass?: string;
  tagClass?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
}

// src/lib/types/testimonials.ts
import { IconType } from "react-icons";

export interface Testimonial {
  id: string | number;
  image: string;
  name: string;
  role?: string; // Optional role/position
  quote: string;
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  autoRotate?: boolean; // Enable/disable auto-rotation
  rotationInterval?: number; // Rotation speed in ms
  showNavigation?: boolean; // Show/hide arrows
  containerClass?: string; // Additional container classes
  cardClass?: string; // Additional card classes
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  variant?: "default" | "card" | "minimal";
  cols?: 1 | 2 | 3;
  className?: string;
}

export interface GalleryItem {
  id: string | number;
  image: string;
  description: string;
  altText?: string;
}

export interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  items: GalleryItem[];
  columns?: number; // 1-5
  gap?: string; // Tailwind gap class
  imageHeight?: string; // Tailwind height class
  showDescriptions?: boolean;
  enableZoom?: boolean;
  containerClass?: string;
}

export interface FAQItem {
  id: string | number;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  containerClass?: string;
  itemClass?: string;
  questionClass?: string;
  answerClass?: string;
  defaultOpenId?: string | number | null;
}
