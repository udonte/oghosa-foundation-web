import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Import images
import EducationImg from "@/assets/images/education-program1.jpg";
import HealthImg from "@/assets/images/health-program1.jpg";
import SickleCellImg from "@/assets/images/sickle-cell-program1.jpg";
import FoodSecurityImg from "@/assets/images/food-program1.jpg";
import SkillsImg from "@/assets/images/skills-program1.jpg";
import CharityImg from "@/assets/images/charity-program1.jpg"; //

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Education Empowerment",
      description:
        "Comprehensive educational support programs designed to break the cycle of poverty through learning opportunities for underprivileged children.",
      image: EducationImg,
      link: "/work/education#",
      stats: "1,200+ children supported",
      featured: true,
      details: [
        "Full scholarships for primary and secondary education",
        "School supplies distribution twice annually",
        "After-school tutoring programs",
        "Digital literacy workshops",
      ],
    },
    {
      id: 2,
      title: "Community Health Outreach",
      description:
        "Mobile medical units providing essential healthcare services to remote communities with limited access to medical facilities.",
      image: HealthImg,
      link: "/work/health#",
      stats: "5,000+ screenings conducted",
      details: [
        "Free diagnostic tests (malaria, HIV, blood pressure)",
        "Vaccination drives for children",
        "Maternal health education",
        "First aid training for community volunteers",
      ],
    },
    {
      id: 3,
      title: "Sickle Cell Advocacy",
      description:
        "Comprehensive support system for individuals and families affected by sickle cell disease.",
      image: SickleCellImg,
      link: "/work/sickle-cell",
      stats: "300+ families assisted",
      details: [
        "Genetic counseling services",
        "Monthly support group meetings",
        "Emergency medical fund",
        "Awareness campaigns in schools",
      ],
    },
    {
      id: 4,
      title: "Sustainable Food Initiative",
      description:
        "Programs focused on eradicating hunger through both immediate relief and long-term agricultural solutions.",
      image: FoodSecurityImg,
      link: "/work/food-security",
      stats: "10,000+ meals served",
      details: [
        "Community vegetable gardens",
        "Food bank distributions",
        "Agricultural training programs",
        "School feeding initiatives",
      ],
    },
    {
      id: 5,
      title: "Skills Development Hub",
      description:
        "Vocational training programs designed to equip youth and adults with marketable skills for economic independence.",
      image: SkillsImg,
      link: "/work/skills-training",
      stats: "500+ trainees empowered",
      details: [
        "6-month intensive courses",
        "Apprenticeship placements",
        "Startup kits for graduates",
        "Business management training",
      ],
    },
    {
      id: 6, // New program item
      title: "Humanitarian Aid Network",
      description:
        "Direct assistance programs providing essential resources to vulnerable populations during times of need.",
      image: CharityImg,
      link: "/work/outreach",
      stats: "2,500+ beneficiaries",
      details: [
        "Emergency shelter provisions",
        "Clothing and hygiene kits",
        "Disaster response teams",
        "Elderly care packages",
      ],
    },
  ];

  return (
    <section className="px-4 py-16 lg:px-24 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-oghosa-green mb-4">
            Transforming Communities
          </h2>
          <p className="font-dmsans text-xl text-oghosa-gold max-w-4xl mx-auto mb-6">
            Our comprehensive programs address critical needs through
            sustainable, community-driven solutions
          </p>
          <div className="w-24 h-1 bg-oghosa-gold mx-auto"></div>
        </motion.div>

        {/* Program Cards - Now with alternating layout */}
        <div className="flex flex-col gap-16">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/work"
            className="inline-flex items-center bg-oghosa-green hover:bg-oghosa-gold text-white font-montserrat font-bold py-4 px-10 rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            Explore All Initiatives
            <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform text-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ProgramCard = ({ program, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-auto min-h-[400px] ${
        program.featured ? "border-l-4 border-oghosa-gold" : ""
      }`}
    >
      {/* Image Container (40% width) */}
      <div className={`relative w-full md:w-2/5 h-64 md:h-auto`}>
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {program.featured && (
          <div className="absolute top-4 right-4 bg-oghosa-gold text-white text-sm font-bold px-4 py-1 rounded-full z-10 shadow-md">
            Featured Program
          </div>
        )}
      </div>

      {/* Content Container (60% width) */}
      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
        <div className="mb-2 flex items-center">
          <div className="w-8 h-1 bg-oghosa-gold mr-3"></div>
          <span className="font-dmsans text-sm font-semibold text-oghosa-gold uppercase tracking-wider">
            {program.stats}
          </span>
        </div>

        <h3
          className={`font-montserrat text-3xl lg:text-4xl font-bold mb-4 ${
            program.featured ? "text-oghosa-gold" : "text-oghosa-green"
          }`}
        >
          {program.title}
        </h3>

        <p className="font-dmsans text-lg text-gray-700 mb-6">
          {program.description}
        </p>

        {/* Program Details List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
          {program.details.map((item, i) => (
            <li key={i} className="flex items-start font-dmsans text-gray-600">
              <span className="text-oghosa-gold mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <a
            href={program.link}
            className="inline-flex items-center text-oghosa-green hover:text-oghosa-gold font-montserrat font-semibold transition-colors group"
          >
            Discover More About This Program
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramsSection;
