import { FAQItem, FocusArea, Projects, StatItem, Testimonials } from "@/lib/types/work";
import { FaCalendarAlt, FaGift, FaHandsHelping, FaHome, FaMapMarkerAlt, FaTruck, FaUsers } from "react-icons/fa";
import OutreachProject1 from "@/assets/images/work/outreach/outreach3.jpg";
import OutreachProject2 from "@/assets/images/work/outreach/outreach4.jpg";
import OutreachProject3 from "@/assets/images/work/outreach/outreach5.jpg";
import OutreachProject4 from "@/assets/images/work/outreach/outreach6.jpg";
import OutreachProject5 from "@/assets/images/work/outreach/outreach7.png";
import OutreachProject6 from "@/assets/images/work/outreach/outreach8.png";

export const outreachFocusAreas: FocusArea[] = [
    {
      icon: FaHandsHelping,
      title: "Disaster Response",
      description: "Rapid aid for communities affected by crises",
      initiatives: [
        "Emergency food/water kits",
        "Temporary shelter setup",
        "Medical first response",
        "Trauma counseling"
      ],
    },
    {
      icon: FaUsers,
      title: "Vulnerable Groups",
      description: "Targeted support for at-risk populations",
      initiatives: [
        "Elderly care packages",
        "Street youth rehabilitation",
        "Orphanage partnerships",
        "Disability access programs"
      ],
    },
    {
      icon: FaGift,
      title: "Seasonal Programs",
      description: "Annual campaigns bringing hope and relief",
      initiatives: [
        "Back-to-school drives",
        "Holiday meal distributions",
        "Winter blanket donations",
        "Children's day gift campaigns"
      ],
    }
  ];

export const outreachStatsData: StatItem[] = [
    {
      id: 1,
      value: 25,
      label: "Emergency Responses",
      icon: FaTruck,
      suffix: "+", // 25+ crises addressed
    },
    {
      id: 2,
      value: 10,
      label: "Communities Served Annually",
      icon: FaMapMarkerAlt,
      suffix: "K+", // 10,000+ people
    },
    {
      id: 3,
      value: 80,
      label: "Families Housed Temporarily",
      icon: FaHome,
      suffix: "%", // Of displaced families assisted
    },
    {
      id: 4,
      value: 5,
      label: "Year-Round Care Programs",
      icon: FaCalendarAlt,
      suffix: "", // Exact count
    }
  ];

export const outreachProjects: Projects[] = [
    {
      id: 1,
      title: "Flood Relief Initiative",
      description: "Emergency aid for communities affected by seasonal flooding",
      location: "Rivers, Bayelsa, Anambra States",
      date: "Annually since 2019",
      imageUrl: OutreachProject1,
      tags: ["Disaster", "Shelter"],
      status: "ongoing",
    },
    {
      id: 2,
      title: "Hope for the Homeless",
      description: "Night shelters and rehabilitation for street populations",
      location: "Lagos, Abuja, Kano",
      date: "2020 - Present",
      imageUrl: OutreachProject2,
      tags: ["Housing", "Rehabilitation"],
      status: "ongoing",
    },
    {
      id: 3,
      title: "Elderly Care Campaign",
      description: "Monthly food deliveries and medical checkups for seniors",
      location: "20 rural communities",
      date: "2018 - Present",
      imageUrl: OutreachProject3,
      tags: ["Geriatric", "Nutrition"],
      status: "ongoing",
    },
    {
      id: 4,
      title: "Children's Holiday Joy",
      description: "Annual gift drives for orphans and vulnerable children",
      location: "Nationwide",
      date: "December each year",
      imageUrl: OutreachProject4,
      tags: ["Orphans", "Festive"],
      status: "ongoing",
    },
    {
      id: 5,
      title: "Disability Access Project",
      description: "Installing ramps and inclusive facilities in public spaces",
      location: "5 pilot communities",
      date: "2022 - 2023",
      imageUrl: OutreachProject5,
      tags: ["Accessibility", "Infrastructure"],
      status: "completed",
    },
    {
      id: 6,
      title: "COVID-19 Relief Program",
      description: "Pandemic response with food packages and PPE distribution",
      location: "Urban slums nationwide",
      date: "2020 - 2021",
      imageUrl: OutreachProject6,
      tags: ["Health", "Crisis"],
      status: "completed",
    }
  ];

export const outreachTestimonials: Testimonials[] = [
    {
      id: 1,
      image: OutreachProject1,
      name: "Chief Adebayo Okafor",
      role: "Community Leader, Anambra State",
      quote: "When floods displaced 300 families, Oghosa Foundation's boats arrived first. They didn’t just bring food—they brought hope.",
    },
    {
      id: 2,
      image: OutreachProject2,
      name: "Halima Yusuf",
      role: "Mother & Shelter Beneficiary",
      quote: "After the fire destroyed our home, the Foundation housed my children for 3 months. Today, we have a new start because they cared.",
    },
    {
      id: 3,
      image: OutreachProject3,
      name: "Dr. Chinedu Okeke",
      role: "Partner Physician",
      quote: "Their elderly nutrition program reduced malnutrition cases by 65% in our clinic. This is systemic change at its finest.",
    }
  ];

export const outreachFaqItems: FAQItem[] = [
    {
      id: 1,
      question: "How do you prioritize who receives aid?",
      answer: "We partner with local leaders to identify the most vulnerable—families with children, elderly without support, and persons with disabilities are prioritized.",
    },
    {
      id: 2,
      question: "Can I request help for my community?",
      answer: "Yes! Contact our outreach team with details of the need. We assess all requests within 72 hours for crisis cases.",
    },
    {
      id: 3,
      question: "What’s in your emergency relief kits?",
      answer: "Food for 1 week, clean water, hygiene supplies, blankets, and first aid items. Kits are tailored to specific disasters (e.g., mosquito nets for flood zones).",
    },
    {
      id: 4,
      question: "How quickly do you respond to disasters?",
      answer: "Our rapid response team depllies within 24 hours for local crises, 48 hours for national emergencies, with aid reaching first recipients within 72 hours.",
    },
    {
      id: 5,
      question: "Do you accept item donations?",
      answer: "We welcome new/gently used clothing, non-perishable food, and medical supplies. See our ‘Donate Goods’ page for current needs and drop-off points.",
    },
    {
      id: 6,
      question: "Can I volunteer without medical/first aid training?",
      answer: "Absolutely! 80% of volunteer roles require no special skills—from packing supplies to administrative support. We provide on-site training.",
    },
    {
      id: 7,
      question: "How are seasonal gift recipients chosen?",
      answer: "Partner orphanages, schools, and clinics nominate beneficiaries. Each child receives a personalized gift based on age and needs.",
    },
    {
      id: 8,
      question: "What percentage of donations goes directly to aid?",
      answer: "87% funds programs, 10% operations, 3% fundraising. We’re audited annually to ensure transparency.",
    }
  ];