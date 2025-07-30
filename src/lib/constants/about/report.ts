import { StatItem } from "@/lib/types/work";
import { FaGraduationCap, FaHeartbeat } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";

 export const reportsImpactMetrics: StatItem[] = [
    {
    id:1,
      value: 1240,
      label: "Scholarships awarded",
      icon: FaGraduationCap,
        suffix: "+",
    },
    {
        id:2,
      value: 3750,
      label: "Medical screenings conducted",
      icon: FaHeartbeat,
      suffix: "+"
    },
    {
        id:3,
      value: 18200,
      label: "Meals distributed",
      icon: FaBowlFood,
      suffix: "+",
    },
    {
        id: 4,
      value: 480,
      label: "Graduates empowered",
      icon: FaGraduationCap,
      suffix: "+"
    },
  ];



