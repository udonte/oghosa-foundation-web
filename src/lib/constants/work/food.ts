import { FAQItem, FocusArea, Projects, StatItem, Testimonials } from "@/lib/types/work";
import { FaAppleAlt, FaChild, FaSeedling, FaUserTie, FaUtensils, FaWarehouse } from "react-icons/fa";
import FoodProject1 from "@/assets/images/work/food/food4.jpg";
import FoodProject2 from "@/assets/images/work/food/food5.jpg";   
import FoodProject3 from "@/assets/images/work/food/food6.jpg";
import FoodProject4 from "@/assets/images/work/food/food7.jpg";
import FoodProject5 from "@/assets/images/work/food/food8.jpg";
import FoodProject6 from "@/assets/images/work/food/food9.png";


export const foodSecurityFocusAreas: FocusArea[] = [
    {
      icon: FaUtensils,
      title: "Emergency Food Relief",
      description: "Immediate hunger assistance for vulnerable communities",
      initiatives: [
        "Community food banks",
        "School meal programs",
        "Crisis food packages",
        "Mobile soup kitchens"
      ],
    },
    {
      icon: FaSeedling,
      title: "Sustainable Agriculture",
      description: "Empowering farmers with climate-smart techniques",
      initiatives: [
        "Seed distribution programs",
        "Irrigation system training",
        "Organic farming workshops",
        "Crop rotation education"
      ],
    },
    {
      icon: FaAppleAlt,
      title: "Nutrition Security",
      description: "Improving dietary health in underserved areas",
      initiatives: [
        "Cooking/nutrition classes",
        "Home garden starter kits",
        "Child malnutrition programs",
        "Food preservation training"
      ],
    }
  ];

export const foodSecurityStatsData: StatItem[] = [
    {
      id: 1,
      value: 1.2,
      label: "Meals Served Yearly",
      icon: FaUtensils,
      suffix: "M+", // 1.2 Million+
    },
    {
      id: 2,
      value: 650,
      label: "Farmers Trained",
      icon: FaUserTie,
      suffix: "+",
    },
    {
      id: 3,
      value: 80,
      label: "Reduction in Child Malnutrition",
      icon: FaChild,
      suffix: "%", // In partner communities
    },
    {
        id: 4,
        value: 120,
        label: "Community Food Banks Established",
        icon: FaWarehouse,
        suffix: "+",
      }
  ];

export const foodSecurityProjects: Projects[] = [
    {
      id: 1,
      title: "Harvest of Hope",
      description: "Community farms providing fresh produce to low-income neighborhoods",
      location: "Lagos, Kano, Rivers States",
      date: "2020 - Present",
      imageUrl: FoodProject1,
      tags: ["Agriculture", "Community"],
      status: "ongoing",
    },
    {
      id: 2,
      title: "School Feeding Initiative",
      description: "Daily nutritious meals for 50,000 students to boost attendance and learning",
      location: "Northern Nigeria",
      date: "2018 - Present",
      imageUrl: FoodProject2,
      tags: ["Education", "Nutrition"],
      status: "ongoing",
    },
    {
      id: 3,
      title: "Seed Resilience Program",
      description: "Distributing drought-resistant crop varieties to smallholder farmers",
      location: "Drought-prone regions",
      date: "2021 - 2023",
      imageUrl: FoodProject3,
      tags: ["Farmers", "Climate"],
      status: "completed",
    },
    {
      id: 4,
      title: "Urban Food Bank Network",
      description: "Establishing food distribution hubs in 15 major cities",
      location: "Nationwide",
      date: "2022 - Present",
      imageUrl: FoodProject4,
      tags: ["Hunger Relief", "Logistics"],
      status: "ongoing",
    },
    {
      id: 5,
      title: "Women's Cooperative Farming",
      description: "Empowering 2,000 female farmers with tools and training",
      location: "Rural communities",
      date: "2019 - Present",
      imageUrl: FoodProject5,
      tags: ["Gender", "Empowerment"],
      status: "ongoing",
    },
    {
      id: 6,
      title: "Post-Harvest Loss Reduction",
      description: "Training and storage facilities to preserve 30% more crops",
      location: "Farm belts",
      date: "2023 - Present",
      imageUrl: FoodProject6,
      tags: ["Food Waste", "Innovation"],
      status: "ongoing",
    }
  ];

export const foodSecurityTestimonials: Testimonials[] = [
  {
    id: 1,
    image: FoodProject1,
    name: "Hajia Amina Bello",
    role: "Smallholder Farmer, Kano State",
    quote: "The seed program saved my farm during the drought. Now I grow enough to feed my family and sell at the market.",
  },
  {
    id: 2,
    image: FoodProject2,
    name: "Dr. Femi Adekunle",
    role: "Nutritionist, Partner Health Clinic",
    quote: "Since the school feeding program began, we’ve seen a 40% drop in malnutrition cases among children in our community.",
  },
  {
    id: 3,
    image: FoodProject3,
    name: "Grace Oluwaseyi",
    role: "Mother & Food Bank Recipient",
    quote: "When my husband lost his job, the food bank kept my children from going hungry. The nutrition classes taught me how to stretch every meal.",
  },
  {
    id: 4,
    image: FoodProject4,
    name: "Ibrahim Mohammed",
    role: "Women’s Cooperative Trainer",
    quote: "These women now produce 60% of the rice in our district. When you invest in female farmers, you transform entire communities.",
  }
];

export const foodSecurityFaqItems: FAQItem[] = [
  {
    id: 1,
    question: "Who qualifies for your food assistance programs?",
    answer:
      "We prioritize low-income families, smallholder farmers, and vulnerable groups (pregnant women, children under 5, and the elderly) across our partner communities.",
  },
  {
    id: 2,
    question: "How do you ensure food reaches those most in need?",
    answer:
      "We work with local leaders to identify recipients, conduct needs assessments, and distribute through trusted community channels like schools and health clinics.",
  },
  {
    id: 3,
    question: "Do you provide agricultural training?",
    answer:
      "Yes, we offer free workshops on climate-smart farming, irrigation, and crop storage. Training schedules are announced through radio and community bulletin boards.",
  },
  {
    id: 4,
    question: "Can urban areas access your programs?",
    answer:
      "Our urban food banks serve 15 cities, while rural areas benefit from farm initiatives. Use our location map to find the nearest service point.",
  },
  {
    id: 5,
    question: "How do you measure impact?",
    answer:
      "We track meals distributed, farmer income increases, child malnutrition rates, and community self-sufficiency scores.",
  },
  {
    id: 6,
    question: "What crops do you promote?",
    answer:
      "We focus on nutritious staples like yams, cassava, and millet, plus drought-resistant varieties suited to local conditions.",
  },
  {
    id: 7,
    question: "How can I volunteer?",
    answer:
      "Volunteers help with farming, food packing, or education. No experience needed – sign up through our website.",
  },
  {
    id: 8,
    question: "Do you accept food donations?",
    answer:
      "We welcome non-perishables from certified suppliers. Contact our logistics team for safety guidelines.",
  },
];