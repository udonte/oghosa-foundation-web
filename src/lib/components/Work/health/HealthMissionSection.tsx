// src/components/health/HealthMissionSection.tsx
import { motion } from "framer-motion";
import { FaHeartbeat, FaClinicMedical } from "react-icons/fa";
import { MdVaccines } from "react-icons/md";

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

const healthPillars = [
  {
    icon: <FaClinicMedical className="w-8 h-8 text-oghosa-gold" />,
    title: "Primary Healthcare",
    description:
      "Mobile clinics and community health centers to underserved communities",
  },
  {
    icon: <FaHeartbeat className="w-8 h-8 text-oghosa-gold" />,
    title: "Sickle Cell Program",
    description:
      "Special genetic counseling, pain management, and blood donation drives",
  },
  {
    icon: <MdVaccines className="w-8 h-8 text-oghosa-gold" />,
    title: "Immunization",
    description:
      "Vaccination campaigns targeting preventable diseases in rural areas",
  },
];

const HealthMissionSection = () => {
  return (
    <motion.section
      id="health-mission"
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
                  health access
                </span>{" "}
                is fundamental to community development. Our health initiatives
                provide critical medical services while addressing systemic
                healthcare disparities in underserved regions.
              </p>
              <br />
              <p className="">
                Our work aligns with the United Nations' SDG 3: Ensure healthy
                lives and promote well-being for all at all ages.
              </p>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-8">
                {[
                  "Preventive Care",
                  "Maternal Health",
                  "Disease Control",
                  "Health Education",
                  "Medical Training",
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

          {/* Right - Health Pillars */}
          <motion.div variants={container} className="space-y-8">
            {healthPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start gap-6 border-l-4 border-oghosa-gold"
              >
                <div className="flex-shrink-0 ">{pillar.icon}</div>
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

export default HealthMissionSection;
