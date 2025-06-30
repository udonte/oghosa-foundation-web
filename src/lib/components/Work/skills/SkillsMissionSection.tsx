// src/components/skills/SkillsMissionSection.tsx
import { motion } from "framer-motion";
import { FaTools, FaLaptopCode, FaUserTie } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

const skillsPillars = [
  {
    icon: <FaTools className="w-8 h-8 text-oghosa-gold" />,
    title: "Vocational Training",
    description: "Hands-on skills for immediate employment",
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 text-oghosa-gold" />,
    title: "Digital Skills",
    description: "Tech training for the modern workforce",
  },
  {
    icon: <FaUserTie className="w-8 h-8 text-oghosa-gold" />,
    title: "Entrepreneurship",
    description: "Turning skills into sustainable businesses",
  },
];

const SkillsMissionSection = () => {
  return (
    <motion.section
      id="skills-mission"
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
                  practical skills
                </span>{" "}
                unlock economic freedom. Our programs are designed to equip
                unemployed youth and women into skilled professionals and
                entrepreneurs, creating pathways to sustainable livelihoods.
              </p>
              <br />
              <p>
                By focusing on{" "}
                <span className="font-semibold">market-relevant training</span>,
                we bridge the gap between potential and opportunity.
              </p>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-8">
                {[
                  "Job Readiness",
                  "Technical Skills",
                  "Business Development",
                  "Career Counseling",
                  "Industry Certifications",
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

          {/* Right - Skills Pillars */}
          <motion.div variants={container} className="space-y-8">
            {skillsPillars.map((pillar, index) => (
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

export default SkillsMissionSection;
