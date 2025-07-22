import { StatItem } from "@/lib/types/work";
import { FaHeartbeat, FaSchool, FaUserGraduate, FaUtensils } from "react-icons/fa";

export const impactStats: StatItem[] = [
  {
    id: 1,
    value: 27,
    label: "Schools Built/Renovated",
    icon: FaSchool,
    suffix: "+",
  },
  {
    id: 2,
    value: 500000,
    label: "Meals Distributed Annually",
    icon: FaUtensils,
    suffix: "+",
  },
  {
    id: 3,
    value: 42,
    label: "Sickle Cell Awareness Campaigns",
    icon: FaHeartbeat,
    suffix: "+",
  },
  {
    id: 4,
    value: 75,
    label: "Increase in Vocational Training Graduates",
    icon: FaUserGraduate,
    suffix: "%", 
  },
];

export const impactStories = [
  {
    id: 1,
    youtubeId: "https://www.youtube.com/embed/EpDQfbM85Vg?si=yqHQccbGeZqN2_Cm",
    summary: "OGF's skills training program empowered Ada to launch a tailoring business that now employs three others.",
    program: "skills-training",
  },
  {
    id: 2,
    youtubeId: "https://www.youtube.com/embed/-a9Qj_ykAoo?si=ALsrOtUFNcJbjLhl",
    summary: "With OGF's medical support, Emmanuel now leads sickle cell awareness campaigns in his community.",
    program: "sickle-cell",
  },
  {
    id: 3,
    youtubeId: "https://www.youtube.com/embed/ASnKXWG1dBo?si=N3fij7tjHs6aIuoc",
    summary: "The Okorie family went from one meal a day to running a sustainable farm, thanks to OGF's training.",
    program: "food-security",
  },
];

import { 
  FaUserTie, 
  FaLaptopCode,
  FaShoppingBasket,
  FaUserShield,
  FaMicroscope,
  FaTools,
  FaShip,
  FaHandHoldingUsd,
  FaTractor,
  FaBreadSlice,
  FaSeedling,
  FaCampground,
  FaPencilAlt,
  FaBrain,
  FaFutbol
} from "react-icons/fa";
import { FaBookQuran, FaShirt } from "react-icons/fa6";

export const impactLocations = [
  {
    id: 1,
    region: "Lagos",
    testimonial: "“OGF’s tech training helped me start a digital marketing business.” – Emeka, Agege",
    stats: [
      { 
        metric: "Youth Trained", 
        value: "2,400+", 
        icon: FaUserTie,
        trend: "85% employed" 
      },
      { 
        metric: "Meals Served", 
        value: "180K", 
        icon: FaUtensils, 
        trend: "↑ 45% since 2022" 
      },
      { 
        metric: "Schools Supported", 
        value: "12", 
        icon: FaSchool,
      },
    ],
    highlights: [
      { 
        title: "Digital Skills Hub", 
        description: "6-month intensive program in coding and design",
        icon: FaLaptopCode,
      },
      { 
        title: "Lagos Food Bank", 
        description: "Weekly distributions to 500+ families",
        icon: FaShoppingBasket,      },
    ],
  },
  {
    id: 2,
    region: "Kano",
    testimonial: "“My sickle cell pain management improved thanks to OGF’s clinic.” – Aisha, Kano",
    stats: [
      { 
        metric: "Health Screenings", 
        value: "8,200+", 
        icon: FaHeartbeat,
        trend: "2 new clinics" 
      },
      { 
        metric: "Women Empowered", 
        value: "1,150+", 
        icon: FaUserShield,
        trend: "300 businesses" 
      },
      { 
        metric: "Quranic Schools", 
        value: "7", 
        icon: FaBookQuran,
        trend: "↑ 50% enrollment"
      },
    ],
    highlights: [
      { 
        title: "Sickle Cell Initiative", 
        description: "Free genotype testing for 5,000+ residents",
        icon: FaMicroscope,
      },
      { 
        title: "Textile Co-op", 
        description: "50 women producing handmade fabrics",
        icon: FaShirt,
      },
    ],
  },
  {
    id: 3,
    region: "Rivers",
    testimonial: "“The vocational center saved me from street life.” – Tamuno, Port Harcourt",
    stats: [
      { 
        metric: "Skills Graduates", 
        value: "900+", 
        icon: FaTools, 
        trend: "70% self-employed" 
      },
      { 
        metric: "Children Fed", 
        value: "75K", 
        icon: FaUtensils, 
        trend: "Daily school meals" 
      },
    ],
    highlights: [
      { 
        title: "Port Harcourt Workshop", 
        description: "Carpentry and welding training for ex-militants",
        icon: FaTools,
      },
      { 
        title: "Riverine Outreach", 
        description: "Medical boats serving island communities",
        icon: FaShip,
      },
    ],
  },
  {
    id: 4,
    region: "Enugu",
    testimonial: "“My bakery startup began with OGF’s microloan.” – Chioma, Enugu",
    stats: [
      { 
        metric: "Loans Disbursed", 
        value: "₦24M", 
        icon: FaHandHoldingUsd,
        trend: "92% repayment" 
      },
      { 
        metric: "Farmers Trained", 
        value: "620+", 
        icon: FaTractor,
        trend: "Organic techniques" 
      },
    ],
    highlights: [
      { 
        title: "Bakery Incubator", 
        description: "Ovens and business training for 30 women",
        icon: FaBreadSlice,
      },
      { 
        title: "Coal City Gardens", 
        description: "Urban farming in 10 neighborhoods",
        icon: FaSeedling,
      },
    ],
  },
  {
    id: 5,
    region: "Borno",
    testimonial: "“OGF rebuilt our school after Boko Haram.” – Ahmed, Maiduguri",
    stats: [
      { 
        metric: "IDPs Supported", 
        value: "15K+", 
        icon: FaCampground,
        trend: "3 new shelters" 
      },
      { 
        metric: "Children in School", 
        value: "3,200", 
        icon: FaPencilAlt ,
        trend: "↑ 200% since 2020" 
      },
    ],
    highlights: [
      { 
        title: "Trauma Counseling", 
        description: "Mental health support for 1,800+ survivors",
        icon: FaBrain,
      },
      { 
        title: "Peace Football League", 
        description: "Sports programs for 500+ youth",
        icon: FaFutbol,
      },
    ],
  },
];

