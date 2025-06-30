import { FAQItem, FocusArea, Projects, StatItem, Testimonials } from "@/lib/types/work";
import { FaAmbulance, FaClinicMedical, FaHeartbeat, FaMapMarkedAlt, FaProcedures, FaUserInjured, FaUserNurse, FaViruses } from "react-icons/fa";
import { MdHealthAndSafety, MdVaccines } from "react-icons/md";
import HealthGallery1 from "@/assets/images/work/health/health6.png"
import HealthGallery2 from "@/assets/images/work/health/health3.png"
import HealthGallery3 from "@/assets/images/work/health/health2.png"
import HealthGallery4 from "@/assets/images/work/health/health13.jpg"
import HealthGallery5 from "@/assets/images/work/health/health4.png"
import HealthGallery6 from "@/assets/images/work/health/health12.jpg"

export const healthFocusAreas: FocusArea[] = [
    {
      icon: FaClinicMedical,
      title: "Primary Healthcare",
      description: "Essential medical services for underserved communities",
      initiatives: [
        "Mobile clinic services",
        "Immunization drives",
        "Chronic disease management",
        "Emergency medical response"
      ],
    },
    {
      icon: FaHeartbeat,
      title: "Sickle Cell Care",
      description: "Comprehensive support for sickle cell patients",
      initiatives: [
        "Genetic counseling",
        "Pain management clinics",
        "Blood donation campaigns",
        "Patient support groups"
      ],
    },
    {
      icon: FaUserNurse,
      title: "Medical Training",
      description: "Capacity building for healthcare workers",
      initiatives: [
        "Community health worker programs",
        "Emergency response training",
        "Midwife skill development",
        "Telemedicine education"
      ],
    },
    {
      icon: FaProcedures,
      title: "Maternal Health",
      description: "Programs supporting mothers and infants",
      initiatives: [
        "Prenatal care services",
        "Safe delivery kits",
        "Postpartum support",
        "Newborn care education"
      ],
    },
    {
      icon: MdVaccines,
      title: "Disease Prevention",
      description: "Community-based health protection programs",
      initiatives: [
        "Malaria prevention",
        "HIV/AIDS education",
        "TB screening",
        "Hepatitis vaccination"
      ],
    },
    {
      icon: MdHealthAndSafety,
      title: "Health Infrastructure",
      description: "Improving medical facilities and access",
      initiatives: [
        "Clinic construction",
        "Medical equipment donations",
        "Clean water projects",
        "Sanitation systems"
      ],
    }
];


export const healthStatsData: StatItem[] = [
    {
      id: 1,
      value: 75,
      label: "Mobile Clinic Sessions",
      icon: FaAmbulance,
      suffix: "+",
    },
    {
      id: 2,
      value: 42,
      label: "Communities Served",
      icon: FaMapMarkedAlt,
      suffix: "+",
    },
    {
      id: 3,
      value: 1200,
      label: "Patients Treated Annually",
      icon: FaUserInjured,
      suffix: "+",
    },
    {
      id: 4,
      value: 3,
      label: "Reduction in malaria cases in partner communities",
      icon: FaViruses,
      suffix: "x",
    },
  ];

export const healthProjects: Projects[] = [
    {
      id: 1,
      title: "Mobile Clinic Initiative",
      description: "Providing essential medical services to underserved communities",
      location: "Northern Nigeria",
      date: "2021 - Present",
      imageUrl: HealthGallery1,
      tags: ["Primary Care", "Community"],
      status: "ongoing",
    },
    {
      id: 2,
      title: "Sickle Cell Awareness Campaign",
      description: "Community education and genetic counseling for sickle cell prevention",
      location: "Western Region",
      date: "2020 - 2022",
      imageUrl: HealthGallery2,
      tags: ["Disease Prevention", "Education"],
      status: "completed",
    },
    {
      id: 3,
      title: "Community Health Worker Training",
      description: "Professional development for local healthcare providers in rural areas",
      location: "Southern Nigeria",
      date: "2021 - Present",
      imageUrl: HealthGallery3,
      tags: ["Training", "Capacity Building"],
      status: "ongoing",
    },
    {
      id: 4,
      title: "Maternal Health Centers",
      date: "2019 - Present",
      location: "3 states",
      imageUrl: HealthGallery4,
      tags: ["Women's Health", "Community"],
      status: "ongoing",
      description:
        "Establishing safe spaces for prenatal care and deliveries in underserved communities",
    },
    {
      id: 5,
      title: "Annual Vaccination Drives",
      date: "Annually since 2017",
      location: "Nationwide",
      imageUrl: HealthGallery5,
      tags: ["Prevention", "Immunization"],
      status: "ongoing",
      description:
        "Providing free vaccinations against preventable diseases to children and adults",
    },
    {
      id: 6,
      title: "Clinic Renovation Projects",
      date: "2020 - 2023",
      location: "12 health centers",
      imageUrl: HealthGallery6,
      tags: ["Infrastructure", "Healthcare"],
      status: "completed",
      description:
        "Modernization of rural health facilities with improved equipment and sanitation",
    },
  ];

export const healthFaqItems: FAQItem[] = [
    {
      id: 1,
      question: "What health services do you provide in your programs?",
      answer:
        "We offer primary healthcare services including immunizations, maternal care, chronic disease management, and health education. Our mobile clinics provide screenings, basic treatments, and referrals to partner hospitals when needed.",
    },
    {
      id: 2,
      question: "How do you ensure quality healthcare in underserved communities?",
      answer:
        "We implement a three-tier approach: 1) Training community health workers, 2) Equipping facilities with essential medicines and equipment, and 3) Partnering with local hospitals for specialist referrals and emergency cases.",
    },
    {
      id: 3,
      question: "Are your health programs aligned with national health guidelines?",
      answer:
        "Yes, all our medical protocols follow national health guidelines and WHO standards. We work closely with state health ministries to ensure compliance and proper reporting of health data.",
    },
    {
      id: 4,
      question: "Do you provide free or subsidized treatments for patients?",
      answer:
        "We offer free basic medical services through our mobile clinics and community health centers. Some specialized treatments may have subsidized costs based on need, determined by our patient support team.",
    },
    {
      id: 5,
      question: "How do you measure the impact of your health programs?",
      answer:
        "We track key health indicators including: patient visits, vaccination rates, disease incidence reductions, maternal/infant mortality rates, and community health knowledge improvements through pre/post surveys.",
    },
    {
      id: 6,
      question: "What focus areas do your health programs cover?",
      answer:
        "Our core services include maternal/child health, infectious disease control, chronic disease management, nutrition programs, and health education. We also have specialized sickle cell care initiatives.",
    },
    {
      id: 7,
      question: "How can medical professionals volunteer with your programs?",
      answer:
        "We welcome licensed doctors, nurses, and health technicians. Requirements include valid certification, 2+ years experience, and minimum 3-month commitment. Visit our Volunteer page for application details.",
    },
    {
      id: 8,
      question: "Do you provide mental health services?",
      answer:
        "Yes, we offer basic mental health screenings, counseling services, and community awareness programs through trained psychosocial support workers and partner psychiatrists.",
    },
    {
      id: 9,
      question: "How do you handle medical emergencies in remote areas?",
      answer:
        "Our community health workers are trained in emergency first response. We maintain referral networks with nearby hospitals and have emergency transport agreements with local ambulance services.",
    },
    {
      id: 10,
      question: "What makes your sickle cell program unique?",
      answer:
        "Our comprehensive approach includes genetic counseling, pain management clinics, regular check-ups, patient support groups, and community education to reduce stigma and promote early testing.",
    },
  ];

export const healthTestimonials: Testimonials[] = [
    {
      id: 1,
      image: HealthGallery1,
      name: "Hassan Ibrahim",
      role: "Patient, Kano State",
      quote:
        "The mobile clinic saved my life when I couldn't afford treatment for my diabetes. Now I get regular check-ups and medication through their program.",
    },
    {
      id: 2,
      image: HealthGallery2,
      name: "Grace Oluwaseun",
      role: "New Mother, Ogun State",
      quote:
        "Thanks to the maternal health program, I had a safe delivery and my baby received all necessary vaccinations. The health workers were angels!",
    },
    {
      id: 3,
      image: HealthGallery3,
      name: "Dr. Adebayo Johnson",
      role: "Partner Physician",
      quote:
        "Working with Oghosa's health initiatives has allowed us to reach 3x more patients in rural areas with quality care.",
    },
    {
      id: 4,
      image: HealthGallery4,
      name: "Chinyere Nwosu",
      role: "Sickle Cell Patient",
      quote:
        "Before joining the support program, I felt alone with my condition. Now I have medical care, counseling, and a community that understands.",
    }
];