import EduGallery1 from "@/assets/images/work/education/school-supplies.jpg";
import EduGallery2 from "@/assets/images/work/education/coding.jpg";
import EduGallery3 from "@/assets/images/work/education/teacher-training.png";
import EduGallery4 from "@/assets/images/work/education/learning-center.png";
import EduGallery5 from "@/assets/images/work/education/back-to-school.jpg";
import EduGallery6 from "@/assets/images/work/education/school-renovation.jpg";
import FoodProject1 from "@/assets/images/work/food/food4.jpg";
import FoodProject2 from "@/assets/images/work/food/food5.jpg";   
import FoodProject3 from "@/assets/images/work/food/food6.jpg";
import FoodProject4 from "@/assets/images/work/food/food7.jpg";
import FoodProject5 from "@/assets/images/work/food/food8.jpg";
import FoodProject6 from "@/assets/images/work/food/food9.png";
import HealthGallery1 from "@/assets/images/work/health/health6.png"
import HealthGallery2 from "@/assets/images/work/health/health3.png"
import HealthGallery3 from "@/assets/images/work/health/health2.png"
import HealthGallery4 from "@/assets/images/work/health/health13.jpg"
import HealthGallery5 from "@/assets/images/work/health/health4.png"
import HealthGallery6 from "@/assets/images/work/health/health12.jpg"
import OutreachProject1 from "@/assets/images/work/outreach/outreach3.jpg";
import OutreachProject2 from "@/assets/images/work/outreach/outreach4.jpg";
import OutreachProject3 from "@/assets/images/work/outreach/outreach5.jpg";
import OutreachProject4 from "@/assets/images/work/outreach/outreach6.jpg";
import OutreachProject5 from "@/assets/images/work/outreach/outreach7.png";
import OutreachProject6 from "@/assets/images/work/outreach/outreach8.png";
import SickleCellGallery1 from "@/assets/images/work/health/health8.png";
import SickleCellGallery2 from "@/assets/images/work/health/health4.png";
import SickleCellGallery3 from "@/assets/images/work/health/health2.png";
import SkillsProject1 from "@/assets/images/work/skills/skills5.jpg";
import SkillsProject2 from "@/assets/images/work/skills/skills6.jpg";
import SkillsProject3 from "@/assets/images/work/skills/skills7.jpg";   
import SkillsProject4 from "@/assets/images/work/skills/skills8.png";
import SkillsProject5 from "@/assets/images/work/skills/skills15.jpg";   
import SkillsProject6 from "@/assets/images/work/skills/skills12.jpg";
import { FaProjectDiagram, FaMapMarkedAlt, FaCamera, FaEye } from 'react-icons/fa';
import { GalleryItem } from "@/lib/types/locations";
import { StatItem } from "@/lib/types/work";




// galleryData.ts
export const galleryItems: GalleryItem[] = [
  // EDUCATION (6 items)
  {
    id: "edu1",
    image: EduGallery1,
    title: "School Supplies Distribution",
    location: "Lagos",
    date: "January 2023",
    caption: "Distributed 5,000+ educational kits to underprivileged students",
    tags: ["education", "lagos"],
    
  },
  {
    id: "edu2",
    image: EduGallery2,
    title: "Youth Coding Workshop",
    date: "March 2023",
    location: "Abuja",
    caption: "100+ students trained in basic programming skills",
    tags: ["education", "technology"],
    
  },
  {
    id: "edu3",
    image: EduGallery3,
    title: "Teacher Training Program",
    date: "June 2023",
    location: "Kano",
    caption: "Trained 50 educators in modern teaching methodologies",
    tags: ["education", "capacity building"],
    
  },
  {
    id: "edu4",
    image: EduGallery4,
    title: "Community Learning Center Launch",
    date: "August 2023",
    location: "Rivers",
    caption: "Established 3 new learning centers serving 300+ children",
    tags: ["education", "infrastructure"],
    
  },
  {
    id: "edu5",
    image: EduGallery5,
    title: "Back-to-School Campaign",
    date: "September 2023",
    location: "Ogun",
    caption: "Enrolled 200 out-of-school children in formal education",
    tags: ["education", "advocacy"],
    
  },
  {
    id: "edu6",
    image: EduGallery6,
    title: "School Renovation Project",
    date: "November 2023",
    location: "Enugu",
    caption: "Renovated 5 dilapidated classrooms benefiting 500+ students",
    tags: ["education", "infrastructure"],
    
  },

  // FOOD SECURITY (6 items)
  {
    id: "food1",
    image: FoodProject1,
    title: "Community Food Bank Opening",
    date: "February 2023",
    location: "Kaduna",
    caption: "Served 1,200+ families in first month of operation",
    tags: ["food security", "hunger relief"],
    
  },
  {
    id: "food2",
    image: FoodProject2,
    title: "Farmers Cooperative Training",
    date: "April 2023",
    location: "Oyo",
    caption: "Trained 80 smallholder farmers in sustainable agriculture",
    tags: ["food security", "agriculture"],
    
  },
  {
    id: "food3",
    image: FoodProject3,
    title: "Nutrition Workshop",
    date: "May 2023",
    location: "Plateau",
    caption: "Educated 150 mothers on child nutrition best practices",
    tags: ["food security", "health"],
    
  },
  {
    id: "food4",
    image: FoodProject4,
    title: "Emergency Food Relief",
    date: "July 2023",
    location: "Borno",
    caption: "Provided meals for 3,000+ IDPs affected by flooding",
    tags: ["food security", "disaster relief"],
    
  },
  {
    id: "food5",
    image: FoodProject5,
    title: "School Feeding Program",
    date: "October 2023",
    location: "Katsina",
    caption: "Daily meals for 1,500 students across 10 schools",
    tags: ["food security", "education"],
    
  },
  {
    id: "food6",
    image: FoodProject6,
    title: "Urban Farming Initiative",
    date: "December 2023",
    location: "Lagos",
    caption: "Established 20 community gardens in low-income areas",
    tags: ["food security", "sustainability"],
    
  },

  // HEALTH (6 items)
  {
    id: "health1",
    image: HealthGallery1,
    title: "Mobile Health Clinic",
    date: "January 2023",
    location: "Sokoto",
    caption: "Provided free medical care to 800+ rural residents",
    tags: ["health", "rural"],
    
  },
  {
    id: "health2",
    image: HealthGallery2,
    title: "Maternal Health Workshop",
    date: "March 2023",
    location: "Bauchi",
    caption: "Trained 60 traditional birth attendants in safe delivery practices",
    tags: ["health", "women"],
    
  },
  {
    id: "health3",
    image: HealthGallery3,
    title: "Vaccination Drive",
    date: "May 2023",
    location: "Kebbi",
    caption: "Administered 2,000+ childhood immunizations",
    tags: ["health", "children"],
    
  },
  {
    id: "health4",
    image: HealthGallery4,
    title: "Mental Health Awareness",
    date: "August 2023",
    location: "Lagos",
    caption: "Screened 500+ individuals for depression and anxiety",
    tags: ["health", "mental health"],
    
  },
  {
    id: "health5",
    image: HealthGallery5,
    title: "Dental Care Outreach",
    date: "October 2023",
    location: "Delta",
    caption: "Free dental checkups for 300 school children",
    tags: ["health", "children"],
    
  },
  {
    id: "health6",
    image: HealthGallery6,
    title: "HIV/AIDS Testing Campaign",
    date: "December 2023",
    location: "Akwa Ibom",
    caption: "Tested 1,200 community members with counseling services",
    tags: ["health", "awareness"],
    
  },

  // OUTREACH (6 items)
  {
    id: "out1",
    image: OutreachProject1,
    title: "Slum Community Empowerment",
    date: "February 2023",
    location: "Lagos",
    caption: "Skill acquisition program for 200 slum dwellers",
    tags: ["outreach", "empowerment"],
    
  },
  {
    id: "out2",
    image: OutreachProject2,
    title: "Women's Rights Workshop",
    date: "April 2023",
    location: "Kano",
    caption: "Educated 150 women on legal rights and financial literacy",
    tags: ["outreach", "women"],
    
  },
  {
    id: "out3",
    image: OutreachProject3,
    title: "Youth Leadership Summit",
    date: "June 2023",
    location: "Abuja",
    caption: "Trained 100 young leaders in civic engagement",
    tags: ["outreach", "youth"],
    
  },
  {
    id: "out4",
    image: OutreachProject4,
    title: "Disability Inclusion Program",
    date: "September 2023",
    location: "Enugu",
    caption: "Provided assistive devices to 50 persons with disabilities",
    tags: ["outreach", "inclusion"],
    
  },
  {
    id: "out5",
    image: OutreachProject5,
    title: "Elderly Care Initiative",
    date: "November 2023",
    location: "Ogun",
    caption: "Monthly care packages for 100 vulnerable seniors",
    tags: ["outreach", "elderly"],
    
  },
  {
    id: "out6",
    image: OutreachProject6,
    title: "Refugee Support Program",
    date: "December 2023",
    location: "Borno",
    caption: "Essential supplies for 300 displaced families",
    tags: ["outreach", "displacement"],
    
  },

  // SICKLE CELL (3 items)
  {
    id: "sc1",
    image: SickleCellGallery1,
    title: "Sickle Cell Awareness Walk",
    date: "June 2023",
    location: "Lagos",
    caption: "1,000+ participants advocating for better healthcare policies",
    tags: ["sickle cell", "awareness"],
    
  },
  {
    id: "sc2",
    image: SickleCellGallery2,
    title: "Patient Support Group",
    date: "September 2023",
    location: "Abuja",
    caption: "Monthly meetings connecting 50+ patients with specialists",
    tags: ["sickle cell", "support"],
    
  },
  {
    id: "sc3",
    image: SickleCellGallery3,
    title: "Genetic Counseling Workshop",
    date: "November 2023",
    location: "Port Harcourt",
    caption: "Educated 200 couples on sickle cell inheritance patterns",
    tags: ["sickle cell", "education"],
    
  },

  // SKILLS DEVELOPMENT (6 items)
  {
    id: "skill1",
    image: SkillsProject1,
    title: "Vocational Training Graduation",
    date: "January 2023",
    location: "Kaduna",
    caption: "Certified 80 youths in tailoring and fashion design",
    tags: ["skills", "employment"],
    
  },
  {
    id: "skill2",
    image: SkillsProject2,
    title: "Tech Bootcamp",
    date: "April 2023",
    location: "Lagos",
    caption: "6-month intensive training in software development for 50 students",
    tags: ["skills", "technology"],
    
  },
  {
    id: "skill3",
    image: SkillsProject3,
    title: "Entrepreneurship Workshop",
    date: "July 2023",
    location: "Oyo",
    caption: "Trained 120 small business owners in financial management",
    tags: ["skills", "business"],
    
  },
  {
    id: "skill4",
    image: SkillsProject4,
    title: "Carpentry Apprenticeship",
    date: "August 2023",
    location: "Kano",
    caption: "1-year program graduating 30 skilled carpenters",
    tags: ["skills", "craftsmanship"],
    
  },
  {
    id: "skill5",
    image: SkillsProject5,
    title: "Beauty Academy Launch",
    date: "October 2023",
    location: "Abia",
    caption: "Empowering 60 women with cosmetology skills",
    tags: ["skills", "women"],
    
  },
  {
    id: "skill6",
    image: SkillsProject6,
    title: "Agricultural Training",
    date: "December 2023",
    location: "Benue",
    caption: "Modern farming techniques for 100 rural farmers",
    tags: ["skills", "agriculture"],
    
  }
];



export const galleryImpactStats: StatItem[] = [
  {
    id: 1,
    value: 240,
    label: "Projects Documented",
    icon: FaProjectDiagram,
    suffix: "+"
  },
  {
    id: 2,
    value: 15,
    label: "States Covered",
    icon: FaMapMarkedAlt
  },
  {
    id: 3,
    value: 120000,
    label: "Photos & Videos",
    icon: FaCamera,
    suffix: "+"
  },
  {
    id: 4,
    value: 200000,
    label: "Views Last Year",
    icon: FaEye,
    suffix: "+"
  }
];