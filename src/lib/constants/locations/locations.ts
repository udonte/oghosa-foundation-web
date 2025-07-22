import { Community } from "@/lib/types/locations";
import { FaAppleAlt, FaBalanceScale, FaBreadSlice, FaBriefcase, FaCalendarAlt, FaChartLine, FaDove, FaGavel, FaHandHoldingHeart, FaHandshake, FaHandsWash, FaHeart, FaHeartbeat, FaHome, FaLeaf, FaMapMarkerAlt, FaPeace, FaSchool, FaSeedling, FaShieldAlt, FaSolarPanel, FaSun, FaToilet, FaTractor, FaTree, FaUserNurse, FaUsers, FaUserTie, FaUtensils } from "react-icons/fa";
import makokoImage from "@/assets/images/locations/index/makoko.jpg";
import kanoImage from "@/assets/images/locations/index/kano.jpg";
import ogoniImage from "@/assets/images/locations/index/ogoniImage.jpg";
import idpImage from "@/assets/images/locations/index/idpImage.jpg";
import ijeododoImage from "@/assets/images/locations/index/ijeododoImage.jpg";
import atyapImage from "@/assets/images/locations/index/atyapImage.jpg";
import { StatItem } from "@/lib/types/work";

  // Sample data - replace with your actual communities
export const featuredCommunities: Community[] = [
    {
      id: 1,
      name: "Makoko Community",
      region: "Lagos State",
      image: makokoImage,
      challenges: [
        "Flood vulnerability",
        "Limited school access",
        "High child malnutrition",
      ],
      stats: [
        {
          value: 3,
          label: "Schools Built",
          icon: FaSchool,
        },
        { value: "80%", label: "Reduction in flood deaths" },
        { value: 500, label: "Children Fed Daily" },
      ],
      programs: [
        { name: "Floating School", icon: FaSchool },
        { name: "Health Clinic", icon: FaHeartbeat },
        { name: "Vocational Training", icon: FaUsers },
      ],
      testimonial:
        "Our children now attend school without canoes thanks to Oghosa's floating school.",
    },
    {
      id: 2,
      name: "Kano Rural Villages",
      region: "Kano State",
      image: kanoImage,
      challenges: [
        "Drought conditions",
        "Gender disparity in education",
        "Limited healthcare",
      ],
      stats: [
        { value: 8, label: "Wells Drilled" },
        { value: 200, label: "Girls in School" },
        {
          value: 1,
          label: "Mobile Clinic",
          icon: FaHeartbeat,
        },
      ],
      programs: [
        { name: "Girls' Education", icon: FaUsers },
        { name: "Water Access", icon: FaHeartbeat },
      ],
    },
    {
      id: 3,
      name: "Ogoni Farmlands",
      region: "Rivers State",
      image: ogoniImage,
      challenges: [
        "Soil degradation",
        "Youth unemployment",
        "Low crop yields"
      ],
      stats: [
        {
          value: 1200,
          label: "Farmers Trained",
          icon: FaUserTie
        },
        { 
          value: "65%", 
          label: "Yield Increase",
          icon: FaChartLine
        },
        { 
          value: 18,
          label: "Cooperative Groups Formed",
          icon: FaHandshake
        }
      ],
      programs: [
        { name: "Sustainable Farming", icon: FaLeaf },
        { name: "Agri-Entrepreneurship", icon: FaBriefcase },
        { name: "Soil Remediation", icon: FaSeedling }
      ],
      testimonial: "Oghosa's training turned my barren land into a thriving cassava farm."
    },
    {
      id: 4,
      name: "IDP Camp",
      region: "Borno State",
      image: idpImage,
      challenges: [
        "Trauma counseling needs",
        "Sanitation issues",
        "Child malnutrition"
      ],
      stats: [
        {
          value: 3200,
          label: "Monthly Food Packs",
          icon: FaUtensils
        },
        { 
          value: 15, 
          label: "Trained Counselors",
          icon: FaUserNurse
        },
        { 
          value: 4,
          label: "Sanitation Blocks",
          icon: FaToilet
        }
      ],
      programs: [
        { name: "Psychosocial Support", icon: FaHeart },
        { name: "Nutrition Program", icon: FaAppleAlt },
        { name: "Hygiene Education", icon: FaHandsWash }
      ]
    },
    {
      id: 5,
      name: "Ijegun-Ijeododo",
      region: "Lagos State",
      image: ijeododoImage,
      challenges: [
        "Coastal erosion",
        "No electricity",
        "Illegal dredging"
      ],
      stats: [
        {
          value: 2,
          label: "Km Shoreline Protected",
          icon: FaShieldAlt
        },
        { 
          value: 600, 
          label: "Solar Lights Installed",
          icon: FaSolarPanel
        },
        { 
          value: "100%",
          label: "Dredging Regulation",
          icon: FaBalanceScale
        }
      ],
      programs: [
        { name: "Eco-Defense", icon: FaTree },
        { name: "Solar Electrification", icon: FaSun },
        { name: "Legal Advocacy", icon: FaGavel }
      ],
      testimonial: "For the first time, our children can study after dark thanks to solar lights."
    },
    {
      id: 6,
      name: "Atyap Villages",
      region: "Kaduna State",
      image: atyapImage,
      challenges: [
        "Ethnic conflicts",
        "Destroyed farms",
        "Displaced families"
      ],
      stats: [
        {
          value: 240,
          label: "Homes Rebuilt",
          icon: FaHome
        },
        { 
          value: 18, 
          label: "Peace Committees",
          icon: FaDove
        },
        { 
          value: 1200,
          label: "Farm Kits Distributed",
          icon: FaTractor
        }
      ],
      programs: [
        { name: "Conflict Mediation", icon: FaPeace },
        { name: "Farm Recovery", icon: FaBreadSlice },
        { name: "Trauma Healing", icon: FaHandHoldingHeart }
      ]
    }
  ];

export const communityStats: StatItem[] = [
    {
      id: 1,
      value: 15,
      label: "Communities Engaged",
      icon: FaMapMarkerAlt,
      suffix: "+",
    },
    {
      id:2,
      value: 5,
      label: "States Active",
      icon: FaUsers,
      suffix: "+",
    },
    {
      id: 3,
      value: 80,
      label: "Local Partners",
      icon: FaHandshake,
      suffix: "+",
    },
    {
      id: 4,
      value: 10,
      label: "Years of Presence",
      icon: FaCalendarAlt,
      suffix: "+",
    },
  ];


