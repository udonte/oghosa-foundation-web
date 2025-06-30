// src/components/outreach/OutreachMissionSection.tsx
import { motion } from "framer-motion";
import { FaHandsHelping, FaHeart, FaHome } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const outreachPillars = [
  {
    icon: <FaHandsHelping className="w-8 h-8 text-oghosa-gold" />,
    title: "Crisis Relief",
    description: "Immediate aid for families facing emergencies",
  },
  {
    icon: <FaHeart className="w-8 h-8 text-oghosa-gold" />,
    title: "Community Care",
    description: "Support for vulnerable groups year-round",
  },
  {
    icon: <FaHome className="w-8 h-8 text-oghosa-gold" />,
    title: "Shelter Support",
    description: "Safe housing solutions for displaced people",
  },
];

const OutreachMissionSection = () => {
  return (
    <motion.section
      id="outreach-mission"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="py-16 bg-gray-50"
    >
      <div className="px-4 lg:px-24">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Mission Text */}
          <motion.div variants={item} className="">
            <motion.div
              variants={item}
              className="text-base md:text-xl font-dmsans text-gray-600 max-w-3xl mx-auto mb-8"
            >
              <p>
                We believe{" "}
                <span className="text-oghosa-gold font-bold underline">
                  no one should face hardship alone
                </span>
                . Oghosa's spirit of radical generosity drives us to meet urgent
                needs while restoring dignity and hope. Our outreach programs
                are designed to provide immediate relief and long-term support
                to the most vulnerable in our communities.
              </p>
              <br />
              <p>
                Our outreach extends beyond material aid—we listen, advocate,
                and walk alongside communities through their toughest seasons.
                From disaster response to ongoing support for the elderly and
                homeless, we are committed to being a source of light and
                resilience.
              </p>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-8">
                {[
                  "Disaster Response",
                  "Elderly Care",
                  "Homeless Aid",
                  "Clothing Drives",
                  "Holiday Programs",
                ].map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-oghosa-gold/10 text-oghosa-green px-3 py-1 rounded-full text-sm font-montserrat"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Outreach Pillars */}
          <motion.div variants={container} className="space-y-8">
            {outreachPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start gap-6 border-l-4 border-oghosa-gold"
              >
                <div className="flex-shrink-0">{pillar.icon}</div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-oghosa-green mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-dmsans text-gray-600">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OutreachMissionSection;
