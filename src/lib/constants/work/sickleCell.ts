import { FAQItem, FocusArea, Projects, StatItem, Testimonials } from "@/lib/types/work"
import {  FaDna, FaHandsHelping, FaHeartbeat, FaMapMarkedAlt, FaTint, FaUserInjured } from "react-icons/fa";
import { PiChartLineDownLight } from "react-icons/pi";
import SickleCellGallery1 from "@/assets/images/work/health/health8.png";
import SickleCellGallery2 from "@/assets/images/work/health/health4.png";
import SickleCellGallery3 from "@/assets/images/work/health/health2.png";

export const sickleCellFocusAreas: FocusArea[] = [
    {
      icon: FaHeartbeat,
      title: "Medical Support",
      description: "Comprehensive healthcare services for sickle cell patients",
      initiatives: [
        "Pain management clinics",
        "Emergency blood transfusion access",
        "Specialist doctor consultations",
        "Medication assistance programs"
      ],
    },
    {
      icon: FaDna,
      title: "Genetic Counseling",
      description: "Prevention and awareness programs",
      initiatives: [
        "Genotype testing campaigns",
        "Pre-marital counseling",
        "Newborn screening advocacy",
        "Community education workshops"
      ],
    },
    {
      icon: FaHandsHelping,
      title: "Patient Support",
      description: "Holistic care for sickle cell warriors",
      initiatives: [
        "Mental health counseling",
        "Support group meetings",
        "Nutritional guidance",
        "Patient advocacy training"
      ],
    }
  ];

export const sickleCellStatsData: StatItem[] = [
    {
      id: 1,
      value: 850,
      label: "Patients Supported Annually",
      icon: FaUserInjured,
      suffix: "+",
    },
    {
      id: 2,
      value: 42,
      label: "Communities Reached",
      icon: FaMapMarkedAlt,
      suffix: "+",
    },
    {
      id: 3,
      value: 1200,
      label: "Blood Donations Facilitated",
      icon: FaTint,
      suffix: "+",
    },
    {
      id: 4,
      value: 65,
      label: "Reduction in crisis hospitalizations",
      icon: PiChartLineDownLight,
      suffix: "%",
    },
  ];

export const sickleCellProjects: Projects[] = [
    {
      id: 1,
      title: "Mobile Sickle Cell Clinics",
      description: "Providing specialized care and pain management for sickle cell patients in remote areas",
      location: "Northern Nigeria",
      date: "2021 - Present",
      imageUrl: SickleCellGallery1,
      tags: ["Healthcare", "Mobile"],
      status: "ongoing",
    },
    {
      id: 2,
      title: "Blood Donation Drives",
      description: "Community blood donation campaigns to support sickle cell patients in crisis",
      location: "Southwest Region",
      date: "2020 - Present",
      imageUrl: SickleCellGallery2,
      tags: ["Awareness", "Community"],
      status: "ongoing",
    },
    {
      id: 3,
      title: "Genetic Counseling Initiative",
      description: "Education and testing programs to reduce sickle cell births through pre-marital counseling",
      location: "5 Southern States",
      date: "2022 - Present",
      imageUrl: SickleCellGallery3,
      tags: ["Prevention", "Education"],
      status: "ongoing",
    }
];

export const sickleCellTestimonials: Testimonials[] = [
    {
      id: 1,
      image: SickleCellGallery1,
      name: "Ngozi Eze",
      role: "Sickle Cell Warrior",
      quote:
        "Before Oghosa Foundation, I faced my pain crises alone. Now I have medical support and a community that understands my struggle.",
    },
    {
      id: 2,
      image: SickleCellGallery2,
      name: "Dr. Ibrahim Chukwu",
      role: "Partner Hematologist",
      quote:
        "The foundation's work has reduced emergency hospitalizations by 40% in our sickle cell patient community through their prevention programs.",
    }
];

export const sickleCellFaqItems: FAQItem[] = [
    {
      id: 1,
      question: "Who qualifies for your sickle cell support programs?",
      answer:
        "Our programs serve sickle cell patients of all ages, with specialized support for: children (0-12), adolescents (13-19), and adults (20+). We prioritize those from low-income families with limited healthcare access.",
    },
    {
      id: 2,
      question: "How do you help manage sickle cell pain crises?",
      answer:
        "We provide: 1) Emergency pain medication assistance, 2) 24/7 telemedicine support, 3) Hospital referral partnerships, and 4) At-home crisis care kits with heating pads and hydration supplies.",
    },
    {
      id: 3,
      question: "Are your medical protocols approved by health authorities?",
      answer:
        "Yes, all our treatment guidelines follow Nigeria's Federal Ministry of Health standards for sickle cell care, developed in consultation with hematology specialists from teaching hospitals.",
    },
    {
      id: 4,
      question: "Do you provide genetic counseling for couples?",
      answer:
        "We offer free genotype testing and pre-marital counseling sessions to help couples understand their sickle cell carrier risks. Appointments are available at all our regional centers.",
    },
    {
      id: 5,
      question: "How do you measure the impact of your programs?",
      answer:
        "We track: crisis hospitalization rates, patient pain diaries, medication adherence, school/work attendance for patients, and newborn screening results in partner communities.",
    },
    {
      id: 6,
      question: "What support exists for parents of children with SCD?",
      answer:
        "We provide: parent education workshops, emergency care training, nutritional guidance, and monthly support group meetings to share coping strategies.",
    },
    {
      id: 7,
      question: "Can medical professionals volunteer with your programs?",
      answer:
        "We need hematologists, nurses, counselors and phlebotomists. Requirements include: valid license, 1+ year SCD experience, and minimum 4-hour weekly commitment. Apply through our website.",
    },
    {
      id: 8,
      question: "Do you help with blood donation needs?",
      answer:
        "Yes, we maintain a donor registry and host quarterly blood drives. Eligible donors receive health screenings and can specify recipients for directed donations.",
    },
  ];