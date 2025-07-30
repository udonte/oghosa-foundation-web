import Program1 from "@/assets/images/work/programs/work1.jpg";
import Program2 from "@/assets/images/work/programs/work2.jpg";
import Program3 from "@/assets/images/work/programs/work3.jpg";
import Program4 from "@/assets/images/work/programs/work4.jpg";
import Program5 from "@/assets/images/work/programs/work5.jpg";
import Program6 from "@/assets/images/work/programs/work6.jpg";
import Program7 from "@/assets/images/work/programs/work2.jpg"; 

import {
  FaHandsHelping,
  FaBook,
  FaHeartbeat,
  FaClinicMedical,
  FaUtensils,
  FaTools,
  FaHands,
} from "react-icons/fa";
 
 export const programs = [
    {
      label: "Programs & Initiatives",
      page: "/work/programs",
      description: "Overview of all our programs and initiatives making impact",
      icon: FaHandsHelping,
      image: Program1,
      featured: true,
      stats: [
        { value: "20+", label: "Active Programs" },
        { value: "50+", label: "Communities Reached" },
      ],
    },
    {
      label: "Education Programs",
      page: "/work/education",
      description: "Our initiatives to improve access to quality education",
      icon: FaBook,
      image: Program2,
      featured: true,
      stats: [
        { value: "500+", label: "Students Supported" },
        { value: "15", label: "Schools Renovated" },
      ],
    },
    {
      label: "Health Initiatives",
      page: "/work/health",
      description: "Programs focused on community health and wellbeing",
      icon: FaHeartbeat,
      image: Program3,
      featured: true,
      stats: [
        { value: "10+", label: "Sickle Cell Treatments" },
        { value: "15+", label: "Free Surgeries" },
      ],
    },
    {
      label: "Sickle Cell Support",
      page: "/work/sickle-cell",
      description:
        "Specialized support for individuals with sickle cell disease",
      icon: FaClinicMedical,
      image: Program4,
    },
    {
      label: "Food Security",
      page: "/work/food-security",
      description: "Initiatives to combat hunger and improve nutrition",
      icon: FaUtensils,
      image: Program5,
    },
    {
      label: "Skills Training",
      page: "/work/skills-training",
      description: "Vocational training and empowerment programs",
      icon: FaTools,
      image: Program6,
    },
    {
      label: "Charitable Outreach",
      page: "/work/outreach",
      description: "Community outreach and support programs",
      icon: FaHands,
      image: Program7,
    },
  ];