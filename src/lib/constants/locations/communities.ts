import {
  FaHeartbeat,
  FaHandHoldingUsd,
  FaWater,
  FaChild,
  FaSeedling,
  FaMapMarkerAlt, 
  FaUtensils, 
  FaSmile,
  FaSchool,
  FaHandHoldingMedical,
  FaGraduationCap,
  FaHome,
  FaLaptopCode,
  FaHeart,
  FaBook,
  FaBreadSlice,
  FaGavel,
  FaUsers,
  FaClinicMedical,
  FaHandsHelping,
  FaTools,
  FaTree,
  FaHandshake
} from "react-icons/fa";

import BuaLogo from "@/assets/images/partners/bua.png";
import DstvLogo from "@/assets/images/partners/dstv.png";
import HiptvLogo from "@/assets/images/partners/hiptv.jpeg";
import MavinLogo from "@/assets/images/partners/mavin.jpeg";
import SamsungLogo from "@/assets/images/partners/samsung.png";
import SpotifyLogo from "@/assets/images/partners/spotify.png";
import UsaidLogo from "@/assets/images/partners/usaid.png";
import { StatItem } from "@/lib/types/work";


import LagosImage from "@/assets/images/work/education/coding.jpg";
import KanoImage from "@/assets/images/work/education/teacher-training.png";
import RiversImage from "@/assets/images/work/food/food6.jpg";
import EnuguImage from "@/assets/images/work/food/food7.jpg";
import BornoImage from "@/assets/images/work/health/health4.png"
import AbujaImage from "@/assets/images/work/health/health12.jpg"


export const regions = [
  {
    id: 1,
    name: "Lagos",
    image: LagosImage,
    stats: [
      {
        value: "12K+",
        label: "Lives Impacted",
        icon: FaUsers,
      },
      {
        value: "8",
        label: "Schools Built",
        icon: FaSchool,
      },
      {
        value: "24",
        label: "Health Camps",
        icon: FaHeartbeat,
      },
    ],
    description:
      "Our flagship programs in Nigeria's commercial capital focus on youth empowerment through tech education and food security initiatives in urban slums.",
  },
  {
    id: 2,
    name: "Kano",
    image: KanoImage,
    stats: [
      {
        value: "8.5K+",
        label: "Lives Impacted",
        icon: FaUsers,
      },
      {
        value: "5K",
        label: "Sickle Cell Tests",
        icon: FaHeartbeat,
      },
      {
        value: "120",
        label: "Women Trained",
        icon: FaHandHoldingUsd,
      },
    ],
    description:
      "In Northern Nigeria, we prioritize healthcare access and women's economic empowerment through textile cooperatives and medical outreach.",
  },
  {
    id: 3,
    name: "Rivers",
    image: RiversImage,
    stats: [
      {
        value: "6.2K+",
        label: "Lives Impacted",
        icon: FaUsers,
      },
      {
        value: "18",
        label: "Water Projects",
        icon: FaWater,
      },
      {
        value: "350",
        label: "Vocational Graduates",
        icon: FaHandHoldingUsd,
      },
    ],
    description:
      "In the Niger Delta, we focus on clean water access, vocational training for ex-militants, and environmental rehabilitation programs.",
  },
  {
    id: 4,
    name: "Enugu",
    image: EnuguImage,
    stats: [
      {
        value: "4.8K+",
        label: "Lives Impacted",
        icon: FaUsers,
      },
      {
        value: "210",
        label: "Homes Built",
        icon: FaHome,
      },
      {
        value: "15",
        label: "Farm Co-ops",
        icon: FaSeedling,
      },
    ],
    description:
      "Our Eastern Nigeria initiatives emphasize affordable housing projects, agricultural cooperatives, and SME development for rural communities.",
  },
  {
    id: 5,
    name: "Borno",
    image: BornoImage,
    stats: [
      {
        value: "15K+",
        label: "IDPs Supported",
        icon: FaUsers,
      },
      {
        value: "3.2K",
        label: "Children in School",
        icon: FaChild,
      },
      {
        value: "9",
        label: "Rebuilt Communities",
        icon: FaHome,
      },
    ],
    description:
      "In Northeast Nigeria, we provide humanitarian aid, education for displaced children, and trauma counseling in post-conflict zones.",
  },
  {
    id: 6,
    name: "Abuja",
    image: AbujaImage,
    stats: [
      {
        value: "5.7K+",
        label: "Lives Impacted",
        icon: FaUsers,
      },
      {
        value: "12",
        label: "Policy Programs",
        icon: FaSchool,
      },
      {
        value: "45",
        label: "Youth Initiatives",
        icon: FaChild,
      },
    ],
    description:
      "In the federal capital, we focus on advocacy programs, youth leadership development, and partnerships with government agencies.",
  },
];


export const impactHighlights = [
  {
    id: 1,
    youtubeId: "https://www.youtube.com/embed/Fmhe1soG4XI?si=vluTc2KRiCyiQU29",
    program: "skills-training",
    summary: "Amina, a 22-year-old from Kano, transformed her life through our tailoring program. From struggling to afford meals to now employing 3 others in her workshop."
  },
  {
    id: 2,
    youtubeId: "https://www.youtube.com/embed/Li5XdRlhdTE?si=elRCPLImp0aghyQj",
    program: "sickle-cell",
    summary: "12-year-old Chike's sickle cell management improved dramatically after joining our health initiative. His hospital visits reduced from monthly to twice yearly."
  },
  {
    id: 3,
    youtubeId: "https://www.youtube.com/embed/zIfx3SEDhhU?si=ed42biBBe0DmYaGw",
    program: "food-security",
    summary: "The Okorie family went from one meal a day to food sustainability through our urban farming training. They now supply vegetables to local markets."
  },
  {
    id: 4,
    youtubeId: "https://www.youtube.com/embed/mzb1PRgcLOM?si=TuJ_YYjZbuBb6M9n",
    program: "skills-training",
    summary: "After our coding bootcamp, Tunde developed a mobile app that connects farmers to buyers, increasing local agricultural sales by 40%."
  },
  {
    id: 5,
    youtubeId: "https://www.youtube.com/embed/u9DkVnDs7Yw?si=6SKq6yBo9ojB4Jm9",
    program: "sickle-cell",
    summary: "Hajia's support group for mothers of children with sickle cell has helped 120 families access proper treatment and counseling."
  },
  {
    id: 6,
    youtubeId: "https://www.youtube.com/embed/SPv_t-lwGWk?si=hSSYW8uaNdb60owY",
    program: "food-security",
    summary: "Our school feeding program in Lagos slums has improved attendance rates from 45% to 89% in just one academic year."
  }
];

export const programConfig = {
  "skills-training": {
    name: "Skills Training",
    icon: FaGraduationCap,
    color: "bg-purple-100 text-purple-800"
  },
  "sickle-cell": {
    name: "Health",
    icon: FaHeartbeat,
    color: "bg-red-100 text-red-800"
  },
  "food-security": {
    name: "Food Security",
    icon: FaUtensils,
    color: "bg-green-100 text-green-800"
  }
};



export const CommunityHighlightStats: StatItem[] = [
  {
    id: 1,
    value: 42,
    label: "Communities Reached",
    icon: FaMapMarkerAlt,
    suffix: "+"
  },
  {
    id: 2,
    value: 125000,
    label: "Annual Meals Served",
    icon: FaUtensils,
    suffix: "+"
  },
  {
    id: 3,
    value: 89,
    label: "Program Satisfaction Rate",
    icon: FaSmile,
    suffix: "%"
  },
  {
    id: 4,
    value: 3600,
    label: "Youth Trained",
    icon: FaUsers,
    suffix: "+"
  },
  {
    id: 5,
    value: 18,
    label: "Schools Supported",
    icon: FaSchool
  },
  {
    id: 6,
    value: 7500,
    label: "Health Screenings",
    icon: FaHandHoldingMedical,
    suffix: "+"
  }
];


export const regionalPrograms = [
  {
    id: 1,
    state: "Lagos",
    programs: [
      { name: "Tech Education", icon: FaGraduationCap, count: "8 centers" },
      { name: "Urban Farming", icon: FaSeedling, count: "12 communities" },
      { name: "Health Outreach", icon: FaClinicMedical, count: "24 camps" }
    ],
    partners: [ SamsungLogo, SpotifyLogo],
    milestone: "Trained 1,200+ youth in digital skills (2024)"
  },
  {
    id: 2,
    state: "Kano",
    programs: [
      { name: "Sickle Cell Care", icon: FaClinicMedical, count: "5 clinics" },
      { name: "Textile Training", icon: FaHandsHelping, count: "3 centers" },
      { name: "Water Projects", icon: FaWater, count: "18 wells" }
    ],
    partners: [BuaLogo],
    milestone: "Built 3 new wells in Gwale LGA (2024)"
  },
  {
    id: 3,
    state: "Rivers",
    programs: [
      { name: "Vocational Training", icon: FaTools, count: "6 workshops" },
      { name: "Riverine Clinics", icon: FaClinicMedical, count: "4 boats" },
      { name: "Environmental Cleanup", icon: FaTree, count: "9 sites" }
    ],
    partners: [DstvLogo],
    milestone: "Cleaned 5 oil spill sites (2023)"
  },
  {
    id: 4,
    state: "Enugu",
    programs: [
      { name: "Agricultural Training", icon: FaSeedling, count: "7 farms" },
      { name: "Housing Initiative", icon: FaHome, count: "120 homes" },
      { name: "Tech Hub", icon: FaLaptopCode, count: "2 centers" }
    ],
    partners: [HiptvLogo, MavinLogo, UsaidLogo],
    milestone: "Established first tech hub for rural youth (2024)"
  },
  {
    id: 5,
    state: "Borno",
    programs: [
      { name: "Trauma Counseling", icon: FaHeart, count: "9 centers" },
      { name: "Education Revival", icon: FaBook, count: "15 schools" },
      { name: "Food Relief", icon: FaBreadSlice, count: "50K+ meals" }
    ],
    partners: [UsaidLogo],
    milestone: "Reopened 10 schools in conflict zones (2023)"
  },
  {
    id: 6,
    state: "Abuja",
    programs: [
      { name: "Policy Advocacy", icon: FaGavel, count: "8 programs" },
      { name: "Youth Leadership", icon: FaUsers, count: "500+ trained" },
      { name: "Corporate Partnerships", icon: FaHandshake, count: "12 alliances" }
    ],
    partners: [BuaLogo, SamsungLogo, DstvLogo],
    milestone: "Launched national youth policy framework (2024)"
  }
];