import { FAQItem, FocusArea, Projects, StatItem, Testimonials } from "@/lib/types/work";
import { FaBriefcase, FaChartLine, FaLaptop, FaStore, FaTools, FaUserGraduate } from "react-icons/fa";
import SkillsProject1 from "@/assets/images/work/skills/skills5.jpg";
import SkillsProject2 from "@/assets/images/work/skills/skills6.jpg";
import SkillsProject3 from "@/assets/images/work/skills/skills7.jpg";   
import SkillsProject4 from "@/assets/images/work/skills/skills8.png";
import SkillsProject5 from "@/assets/images/work/skills/skills15.jpg";   
import SkillsProject6 from "@/assets/images/work/skills/skills12.jpg";

export const skillsFocusAreas: FocusArea[] = [
    {
      icon: FaTools,
      title: "Vocational Trades",
      description: "Hands-on training in high-demand manual skills",
      initiatives: [
        "Carpentry & Furniture Making",
        "Tailoring & Fashion Design",
        "Electrical Installations",
        "Plumbing & Pipefitting"
      ],
    },
    {
      icon: FaLaptop,
      title: "Digital Skills",
      description: "Tech training for the modern economy",
      initiatives: [
        "Basic Computer Literacy",
        "Graphic Design",
        "Digital Marketing",
        "Coding & Software Fundamentals"
      ],
    },
    {
      icon: FaStore,
      title: "Entrepreneurship",
      description: "Turning skills into sustainable businesses",
      initiatives: [
        "Business Planning Workshops",
        "Microfinance Linkages",
        "Market Access Support",
        "Financial Literacy Training"
      ],
    }
  ];

export const skillsStatsData: StatItem[] = [
    {
      id: 1,
      value: 2.4,
      label: "Trained in Market-Relevant Skills",
      icon: FaUserGraduate,
      suffix: "K+", // 2,400+ trainees
    },
    {
      id: 2,
      value: 78,
      label: "Employment Rate Within 6 Months",
      icon: FaBriefcase,
      suffix: "%", 
    },
    {
      id: 3,
      value: 350,
      label: "Small Businesses Launched",
      icon: FaStore,
      suffix: "+",
    },
    {
      id: 4,
      value: 3,
      label: "Income Increase for Graduates",
      icon: FaChartLine,
      suffix: "x", // 3x higher earnings
    }
  ];

export const skillsProjects: Projects[] = [
    {
      id: 1,
      title: "Women in Trades Initiative",
      description: "Vocational training for 500+ women in male-dominated fields",
      location: "Lagos, Abuja, Port Harcourt",
      date: "2021 - Present",
      imageUrl: SkillsProject1,
      tags: ["Gender Equity", "Construction"],
      status: "ongoing",
    },
    {
      id: 2,
      title: "Digital Skills Bootcamps",
      description: "3-month intensive tech training for unemployed youth",
      location: "5 Urban Centers",
      date: "2022 - Present",
      imageUrl: SkillsProject2,
      tags: ["Technology", "Youth"],
      status: "ongoing",
    },
    {
      id: 3,
      title: "Artisan Upgrade Program",
      description: "Modern techniques for traditional craftspeople",
      location: "Rural Workshops",
      date: "2020 - 2023",
      imageUrl: SkillsProject3,
      tags: ["Heritage", "Innovation"],
      status: "completed",
    },
    // New additions below
    {
      id: 4,
      title: "Green Jobs Training",
      description: "Solar panel installation and eco-friendly construction skills",
      location: "Northern Nigeria",
      date: "2023 - Present",
      imageUrl: SkillsProject4,
      tags: ["Sustainability", "Energy"],
      status: "ongoing",
    },
    {
      id: 5,
      title: "Mobile Training Units",
      description: "Bringing skills workshops to remote communities",
      location: "Underserved Villages",
      date: "2020 - Present",
      imageUrl: SkillsProject5,
      tags: ["Accessibility", "Outreach"],
      status: "ongoing",
    },
    {
      id: 6,
      title: "Entrepreneur Incubator",
      description: "Seed funding + mentorship for graduate businesses",
      location: "National",
      date: "2021 - Present",
      imageUrl: SkillsProject6,
      tags: ["Startups", "Funding"],
      status: "ongoing",
    }
  ];

export const skillsTestimonials: Testimonials[] = [
    {
      id: 1,
      image: SkillsProject1,
      name: "Amina Yusuf",
      role: "Graduate, Women in Trades",
      quote: "The carpentry program changed everything. I now run a furniture workshop with 5 employees – something I never imagined as a housewife.",
    },
    {
      id: 2,
      image: SkillsProject2,
      name: "Chike Obi",
      role: "Digital Skills Graduate",
      quote: "After the bootcamp, I landed a remote web development job paying 4x my former market stall earnings. My kids now attend better schools.",
    },
    {
      id: 3,
      image: SkillsProject3,
      name: "Hajia Bola Adekunle",
      role: "Community Leader, Kano",
      quote: "Since the mobile training unit came, youth unemployment in our village dropped by half. The ripple effect on families is incredible.",
    }
  ];

export const skillsFaqItems: FAQItem[] = [
    {
      id: 1,
      question: "Who can apply for skills training programs?",
      answer: "We train unemployed youth (18-35), women seeking non-traditional work, and artisans looking to upgrade their skills. No prior experience needed for most courses.",
    },
    {
      id: 2,
      question: "Are your programs certified?",
      answer: "Yes, graduates receive nationally recognized certificates in their trade. Digital courses include Google/Microsoft certifications where applicable.",
    },
    {
      id: 3,
      question: "How long do trainings last?",
      answer: "Programs range from 2-week intensives (e.g., basic computer skills) to 6-month apprenticeships (e.g., advanced carpentry). Most average 3 months.",
    },
    {
      id: 4,
      question: "Do you provide job placement?",
      answer: "We partner with 200+ employers and offer guaranteed interviews for top graduates. 78% secure jobs within 6 months (2023 data).",
    },
    {
      id: 5,
      question: "What tools/materials do trainees receive?",
      answer: "Starter kits include: trade tools (vocational), laptops (digital courses), or seed grants (entrepreneurship). All materials are free during training.",
    },
    {
      id: 6,
      question: "Can rural residents participate?",
      answer: "Our mobile units reach 50+ villages annually. We also offer subsidized hostel stays for fixed-location programs.",
    },
    {
      id: 7,
      question: "How do you ensure training quality?",
      answer: "Instructors are industry practitioners with 10+ years experience. We update curricula yearly with employer feedback.",
    },
    {
      id: 8,
      question: "Is there an age limit?",
      answer: "While focused on youth, we train exceptional older applicants in high-demand fields like solar installation. Contact us for exceptions.",
    },
  ];