import {
  FaHandshake,
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaGift,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";
import PartnerShowcase from "../../Home/PartnerShowcase";
import { Link } from "react-router";

const CorporateGiving = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const partnershipOptions = [
    {
      icon: <FaGift className="w-8 h-8 text-oghosa-green" />,
      title: "Matching Gifts",
      description:
        "Double your employees' donations through corporate matching programs",
      benefits: [
        "Tax-deductible contributions",
        "Boost employee morale",
        "Community recognition",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8 text-oghosa-green" />,
      title: "Employee Volunteering",
      description:
        "Organize team volunteering days with skills-based opportunities",
      benefits: [
        "Team building experiences",
        "CSR fulfillment",
        "Hands-on impact",
      ],
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-oghosa-green" />,
      title: "Program Sponsorship",
      description:
        "Directly fund specific initiatives aligned with your CSR goals",
      benefits: [
        "Brand visibility",
        "Impact reporting",
        "Custom naming opportunities",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-oghosa-green/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <SectionHeader
          title=" Corporate Giving Opportunities"
          subtitle=" Partner with us to create sustainable impact while achieving your
            CSR objectives"
        />

        {/* Partnership Options */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {partnershipOptions.map((option, index) => (
            <motion.div
              key={option.title}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold font-montserrat text-center text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="font-dm-sans text-gray-700 text-center mb-4">
                  {option.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium font-montserrat text-oghosa-green mb-2">
                    Corporate Benefits:
                  </h4>
                  <ul className="space-y-2 font-dm-sans text-gray-700">
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-oghosa-green mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block text-center font-medium text-oghosa-green hover:text-oghosa-gold transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Partners */}
        <PartnerShowcase />

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-oghosa-green rounded-xl p-8 sm:p-10 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <FaBuilding className="h-10 w-10 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-montserrat text-white mb-4">
              Ready to Become a Corporate Partner?
            </h3>
            <p className="font-dm-sans text-white/90 mb-6">
              Our team will work with you to create a customized partnership
              that aligns with your business goals and social impact objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-oghosa-green bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Request Partnership Info
              </Link>
              <Link
                to="tel:+2349087654321"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <FaHandshake className="mr-2" />
                Speak to Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateGiving;
