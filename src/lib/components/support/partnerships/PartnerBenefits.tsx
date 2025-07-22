// components/PartnerBenefits.tsx
import { motion } from "framer-motion";
import {
  FiGlobe,
  FiBarChart2,
  FiAward,
  FiHeart,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import SectionHeader from "../../common/SectionHeader";

const benefits = [
  {
    icon: <FiGlobe className="text-oghosa-gold" size={24} />,
    title: "Amplified Impact",
    desc: "Multiply your social investment through our network of 30,000+ volunteers and 200+ community partners across Nigeria",
  },
  {
    icon: <FiBarChart2 className="text-oghosa-gold" size={24} />,
    title: "Measurable Outcomes",
    desc: "Receive quarterly impact reports with verified metrics and success stories from your supported programs",
  },
  {
    icon: <FiAward className="text-oghosa-gold" size={24} />,
    title: "Brand Enhancement",
    desc: "Align with award-winning initiatives recognized by the Nigerian Government and international development agencies",
  },
  {
    icon: <FiHeart className="text-oghosa-gold" size={24} />,
    title: "Employee Engagement",
    desc: "Boost team morale through meaningful volunteer opportunities and skills-based contribution programs",
  },
  {
    icon: <FiUsers className="text-oghosa-gold" size={24} />,
    title: "Strategic Networking",
    desc: "Connect with other purpose-driven organizations through our partnership forums and annual impact summit",
  },
  {
    icon: <FiTrendingUp className="text-oghosa-gold" size={24} />,
    title: "Sustainable Solutions",
    desc: "Invest in programs with proven models for long-term community transformation, not temporary relief",
  },
];

const PartnerBenefits = () => {
  return (
    <section className="py-16 lg:px-24 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Partner With Us?"
          subtitle="Strategic alliances that create shared value for businesses and communities"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-lg border border-oghosa-green/20 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl text-oghosa-gold">{benefit.icon}</div>
                <h3 className="font-montserrat text-xl font-semibold text-oghosa-green">
                  {benefit.title}
                </h3>
              </div>

              <p className="font-dmsans text-gray-700">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#partner-form"
            className="inline-block bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-bold py-3 px-8 rounded-md transition-colors"
          >
            Start Your Partnership Journey
          </a>
          <p className="font-dmsans text-gray-600 mt-4">
            or contact us directly at{" "}
            <a
              href="mailto:partners@oghosa-foundation.org"
              className="text-oghosa-green underline"
            >
              partners@oghosa-foundation.org
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
