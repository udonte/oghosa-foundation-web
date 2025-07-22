// components/WhyVolunteer.tsx
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaLightbulb,
  FaNetworkWired,
  FaHeart,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";

const WhyVolunteer = () => {
  const benefits = [
    {
      icon: <FaHandsHelping className="text-oghosa-gold" />,
      title: "Direct Impact",
      desc: "See tangible results as you help distribute food, educate children, and support families in need.",
    },
    {
      icon: <FaLightbulb className="text-oghosa-gold" />,
      title: "Skill Development",
      desc: "Gain practical experience in logistics, teaching, community organizing, and nonprofit operations.",
    },
    {
      icon: <FaNetworkWired className="text-oghosa-gold" />,
      title: "Build Connections",
      desc: "Join a network of 30,000+ professionals, students, and community leaders across Nigeria.",
    },
    {
      icon: <FaHeart className="text-oghosa-gold" />,
      title: "Personal Fulfillment",
      desc: "Experience the joy of serving others and being part of something larger than yourself.",
    },
    {
      icon: <FaChartLine className="text-oghosa-gold" />,
      title: "Career Growth",
      desc: "Enhance your CV with verifiable experience and earn recommendation letters after 80+ service hours.",
    },
    {
      icon: <FaUserTie className="text-oghosa-gold" />,
      title: "Leadership Opportunities",
      desc: "Qualify to lead outreach teams or special programs after consistent service.",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-16 lg:px-24 lg:py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Why Volunteer With Us?"
          subtitle="Join our mission to uplift communities and make a difference"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:border-t-1 border-l-4 border-oghosa-green"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{benefit.icon}</div>
                <h3 className="font-montserrat text-xl font-semibold text-oghosa-green">
                  {benefit.title}
                </h3>
              </div>

              <p className="font-dmsans text-gray-700 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#register"
            className="inline-block bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-bold py-3 px-8 rounded-md transition-colors"
          >
            Join Our Volunteer Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVolunteer;
