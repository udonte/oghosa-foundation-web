import { motion } from "framer-motion";
import {
  FaHandHoldingHeart,
  FaUsers,
  FaHandshake,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

const SupportPathwaysGrid = () => {
  const pathways = [
    {
      id: 1,
      type: "Donate",
      icon: <FaHandHoldingHeart className="text-3xl" />,
      features: [
        "One-time or recurring gifts",
        "Tax deductible in Nigeria",
        "100% transparent allocation",
      ],
      cta: {
        text: "Give Now",
        link: "/support/donate",
      },
      color: "bg-green-50 text-green-800",
      hoverColor: "hover:bg-green-100",
    },
    {
      id: 2,
      type: "Volunteer",
      icon: <FaUsers className="text-3xl" />,
      features: [
        "Skill-based opportunities",
        "Flexible time commitments",
        "Training provided",
      ],
      cta: {
        text: "Join Our Team",
        link: "/support/volunteer",
      },
      color: "bg-blue-50 text-blue-800",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: 3,
      type: "Partner",
      icon: <FaHandshake className="text-3xl" />,
      features: [
        "Corporate collaborations",
        "NGO alliances",
        "CSR opportunities",
      ],
      cta: {
        text: "Explore Synergies",
        link: "/support/partner",
      },
      color: "bg-purple-50 text-purple-800",
      hoverColor: "hover:bg-purple-100",
    },
    {
      id: 4,
      type: "Advocate or Fundraise ",
      icon: <FaBullhorn className="text-3xl" />,
      features: [
        "Personal campaign tools",
        "Social media integration",
        "Progress tracking",
      ],
      cta: {
        text: "Start Campaign",
        link: "/support/advocate",
      },
      color: "bg-orange-50 text-orange-800",
      hoverColor: "hover:bg-orange-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <section className="px-4 py-12 sm:py-16 lg:px-24 bg-white">
      <div className="container mx-auto">
        <SectionHeader
          title=" Ways to Support"
          subtitle=" Choose the support method that aligns with your passion and capacity"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pathways.map((pathway) => (
            <motion.div
              key={pathway.id}
              variants={cardVariants}
              whileHover="hover"
              className={`rounded-xl p-6 ${pathway.color} ${pathway.hoverColor} transition-all border border-transparent hover:border-oghosa-green/20`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                    {pathway.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{pathway.type}</h3>
                  <ul className="space-y-2 mb-6">
                    {pathway.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-oghosa-gold mr-2">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link
                    to={pathway.cta.link}
                    className={`inline-flex items-center font-medium text-oghosa-green hover:text-oghosa-gold transition-colors`}
                  >
                    {pathway.cta.text}
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportPathwaysGrid;
