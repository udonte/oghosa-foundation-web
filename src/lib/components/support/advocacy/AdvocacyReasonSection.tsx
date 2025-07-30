// components/AdvocacyReasonsSection.tsx
import { motion } from "framer-motion";
import { FiBook, FiUsers, FiTrendingUp, FiVolume2 } from "react-icons/fi";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

const AdvocacyReasonsSection = () => {
  const advocacyReasons = [
    {
      icon: <FiBook className="text-oghosa-gold" size={24} />,
      title: "Policy Change",
      desc: "We've influenced 5 state-level education reforms and 3 healthcare access laws through direct engagement with legislators and evidence-based policy briefs.",
    },
    {
      icon: <FiVolume2 className="text-oghosa-gold" size={24} />,
      title: "Public Awareness",
      desc: "Our campaigns reach 2M+ Nigerians annually through community forums, social media, and partnerships with local media outlets.",
    },
    {
      icon: <FiUsers className="text-oghosa-gold" size={24} />,
      title: "Community Empowerment",
      desc: "We've trained over 15,000 grassroots advocates in civic engagement and leadership skills to drive local change.",
    },
    {
      icon: <FiTrendingUp className="text-oghosa-gold" size={24} />,
      title: "Sustainable Impact",
      desc: "Advocacy creates systemic solutions for every policy we've changed, we've impacted 10x more lives than direct service alone could reach.",
    },
  ];

  return (
    <section className="py-8 px-4 lg:px-24 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Advocacy Matters"
          subtitle="Join us in amplifying voices and driving systemic change"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advocacyReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg border border-oghosa-green/20 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl ">{reason.icon}</div>
                <h3 className="font-montserrat text-xl font-semibold  text-oghosa-green">
                  {reason.title}
                </h3>
              </div>
              <p className="font-dmsans text-gray-700">{reason.desc}</p>
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
            to="#contact"
            className="inline-block border-2 border-oghosa-green text-oghosa-green hover:bg-oghosa-green hover:text-white font-montserrat font-bold py-3 px-8 rounded-md transition-colors"
          >
            Learn About Our Advocacy Wins
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvocacyReasonsSection;
