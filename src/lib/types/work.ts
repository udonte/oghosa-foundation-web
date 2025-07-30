import { IconType } from 'react-icons';
import { ReactNode } from "react";



export interface FAQSectionProps  {
  title?: string;
  subtitle?: string;
  items?: { id: string | number; question: string; answer: string }[];
  itemClass?: string;
  defaultOpenId?: string | number | null;
};

export interface EducationPillar {
    icon: ReactNode;
    title: string;
    description: string;
  }

  export interface FocusArea {
    icon: IconType;
    title: string;
    description: string;
    initiatives: string[];
  }

  export interface StatItem {
    id: number | string;
    value: number;
    label: string;
    icon: IconType;
    suffix?: string;
  }
  
  export interface ImpactSectionProps {
    stats?: StatItem[];
    title?: string;
    subtitle?: string;
    animationSpeed?: number;
    rotationInterval?: number;
    activeCardClass?: string;
    inactiveCardClass?: string;
    containerClass?: string;
    titleClass?: string;
    subtitleClass?: string;
  }

  export interface StatCardProps {
    stat: StatItem;
    isActive: boolean;
    animationSpeed: number;
    activeClass: string;
    inactiveClass: string;
  }

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}


export interface GalleryItems {
  id: number;
  image: string;
  description: string;
}

export interface GallerySectionProps {
  title: string;
  subtitle: string;
  items: GalleryItems[]
  columns: number
  gap: string,
  imageHeight: string,
  showDescriptions?: boolean;
}

export interface Testimonials {
  id: number;
  image: string;
  name: string;
  role: string;
  quote: string;
}

export interface Projects {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  imageUrl: string;
  tags: string[];
  status: string;
}

export interface ProjectsSectionProps {
  title: string;
  subtitle: string;
  projects: Projects[];
  cardClass?: string;
  tagClass?: string;
  containerClass?: string;
}