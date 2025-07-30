// components/AdvocacyMethodsSection.tsx
import { motion } from "framer-motion";
import {
  FiUsers,
  FiMic,
  FiPenTool,
  FiMail,
  FiBook,
  FiLayers,
} from "react-icons/fi";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

const AdvocacyMethodsSection = () => {
  const methods = [
    {
      icon: <FiUsers className="text-oghosa-gold" size={24} />,
      title: "Community Mobilization",
      desc: "We organize town halls and local forums that have engaged 120,000+ citizens in policy discussions across 15 states",
    },
    {
      icon: <FiMic className="text-oghosa-gold" size={24} />,
      title: "Public Demonstrations",
      desc: "Our annual Education Rights March draws 5,000+ participants to government houses nationwide",
    },
    {
      icon: <FiPenTool className="text-oghosa-gold" size={24} />,
      title: "Policy Briefings",
      desc: "Direct engagement with legislators through 50+ evidence-based policy proposals submitted annually",
    },
    {
      icon: <FiMail className="text-oghosa-gold" size={24} />,
      title: "Grassroots Lobbying",
      desc: "Coordinate citizen advocacy days that generate 10,000+ letters/emails to policymakers each quarter",
    },
    {
      icon: <FiBook className="text-oghosa-gold" size={24} />,
      title: "Civic Education",
      desc: "Training programs that have empowered 8,000+ community advocates with policy analysis skills",
    },
    {
      icon: <FiLayers className="text-oghosa-gold" size={24} />,
      title: "Coalition Building",
      desc: "Lead 15+ strategic alliances that amplify marginalized voices in decision-making spaces",
    },
  ];

  return (
    <section className="py-8 px-4 lg:px-24 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Advocacy Methods"
          subtitle="Strategic approaches that create measurable policy change"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-oghosa-green"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">{method.icon}</div>
                <h3 className="font-montserrat text-xl font-semibold text-oghosa-green">
                  {method.title}
                </h3>
              </div>

              <p className="font-dmsans text-gray-700">{method.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-block bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-bold py-3 px-8 rounded-md transition-colors"
          >
            Get Advocacy Training
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvocacyMethodsSection;
