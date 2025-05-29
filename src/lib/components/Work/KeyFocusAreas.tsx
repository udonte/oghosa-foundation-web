// src/components/education/KeyFocusAreas.tsx
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptop,
  FaChalkboardTeacher,
  FaBook,
  FaFemale,
  FaUsers,
  FaSeedling,
  FaHeartbeat,
} from "react-icons/fa";
import { MdComputer, MdScience, MdAccessibility } from "react-icons/md";
import SectionHeader from "../SectionHeader";

interface FocusArea {
  icon: React.ReactNode;
  title: string;
  description: string;
  initiatives: string[];
}

const KeyFocusAreas = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const focusAreas: FocusArea[] = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Scholarship Programs",
      description:
        "Comprehensive support for deserving students at all education levels",
      initiatives: [
        "Full tuition coverage",
        "Mentorship pairing",
        "Career readiness workshops",
        "Alumni network",
      ],
    },
    {
      icon: <FaLaptop className="text-3xl" />,
      title: "Digital Literacy",
      description: "Bridging the technology gap in underserved communities",
      initiatives: [
        "Computer labs setup",
        "Coding bootcamps",
        "E-learning platforms",
        "Digital skills certification",
      ],
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl" />,
      title: "Teacher Development",
      description: "Professional growth programs for educators",
      initiatives: [
        "Pedagogy workshops",
        "STEM training",
        "Leadership development",
        "Classroom resources",
      ],
    },
    {
      icon: <FaFemale className="text-3xl" />,
      title: "Girls' Education",
      description: "Special initiatives to support female students",
      initiatives: [
        "STEM scholarships",
        "Menstrual health programs",
        "Safety training",
        "Women mentors",
      ],
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Adult Education",
      description: "Literacy and vocational training programs",
      initiatives: [
        "Basic literacy classes",
        "Financial literacy",
        "Vocational certification",
        "Small business training",
      ],
    },
    {
      icon: <MdScience className="text-3xl" />,
      title: "STEM Education",
      description: "Advancing science and technology education",
      initiatives: [
        "Robotics clubs",
        "Science equipment grants",
        "University partnerships",
        "Research opportunities",
      ],
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title=" Our Key Focus Areas"
          subtitle=" We address education holistically through targeted programs that
            create lasting impact"
        />

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
            >
              {/* Card Header */}
              <div
                className={`bg-oghosa-gold/20 text-oghosa-green p-6 flex items-center gap-4`}
              >
                <div
                  className={`p-3 rounded-full bg-oghosa-green/5 text-oghosa-gold`}
                >
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold font-montserrat">
                  {area.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="font-dmsans text-gray-600 mb-6">
                  {area.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-gray-500 mb-3">
                    Key Initiatives
                  </h4>
                  <ul className="space-y-2">
                    {area.initiatives.map((initiative, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[var(--color-oghosa-gold)] mr-2">
                          •
                        </span>
                        <span className="font-dmsans text-gray-700">
                          {initiative}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Note */}
        <motion.div
          variants={item}
          className="mt-16 bg-gradient-to-r from-oghosa-green to-oghosa-gold text-white rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold font-montserrat mb-4">
            Integrated Approach to Education
          </h3>
          <p className="font-dmsans max-w-4xl mx-auto">
            Our programs work synergistically to address all aspects of
            educational development - from infrastructure and teacher training
            to student support and community engagement, creating a
            comprehensive ecosystem for learning.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default KeyFocusAreas;
