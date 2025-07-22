import { IconType } from "react-icons";

export interface Community  {
    id: number;
    name: string;
    region: string;
    image: string;
    challenges: string[];
    stats: {
      value: string | number;
      label: string;
      icon?: IconType;
    }[];
    programs: {
      name: string;
      icon: IconType;
    }[];
    testimonial?: string;
  };

  export interface StatItem  {
    value: string | number;
    label: string;
    icon: IconType;
    suffix?: string;
  };
  
  export interface KeyStatsBannerProps  {
    stats: StatItem[];
    bgColor?: string;
    textColor?: string;
    className?: string;
  };



  export type GalleryItem = {
  id: string;
  image: string;
  title: string;
  location: string;
  date: string;
  caption?: string;
  tags?: string[];
  program?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
};