import { motion } from "framer-motion";
import EducationHero from "@/assets/images/education-program1.jpg";
import { MdCastForEducation } from "react-icons/md";
import { FaLightbulb, FaUsers } from "react-icons/fa";

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

const educationPillars = [
  {
    icon: <MdCastForEducation className="w-8 h-8 text-oghosa-gold" />,
    title: "Quality Education",
    description: "Delivering world-class curriculum tailored to local needs",
  },
  {
    icon: <FaUsers className="w-8 h-8 text-oghosa-gold" />,
    title: "Community Engagement",
    description:
      "Working closely with parents and local leaders for sustainable impact",
  },
  {
    icon: <FaLightbulb className="w-8 h-8 text-oghosa-gold" />,
    title: "Innovative Solutions",
    description: "Leveraging technology to overcome infrastructure challenges",
  },
];

const MissionSection = () => {
  return (
    <motion.section
      id="education-mission"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="py-16 bg-gray-50"
    >
      <div className="px-4 lg:px-24">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <motion.div variants={item} className="">
            <motion.div
              variants={item}
              className="text-base md:text-xl font-dmsans text-gray-600 max-w-3xl mx-auto mb-8"
            >
              <p>
                We believe{" "}
                <span className="text-oghosa-gold font-bold underline">
                  education
                </span>{" "}
                is the cornerstone of sustainable development. Our mission is to
                eliminate barriers to quality education by providing inclusive,
                innovative, and equitable learning opportunities for all
                children and youth, especially those in underserved communities.
              </p>
              <br />
              <p className="">
                Our work directly contributes to the United Nations' SDG 4:
                Ensure inclusive and equitable quality education and promote
                lifelong learning opportunities for all.
              </p>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-8">
                {[
                  "Inclusive Education",
                  "Teacher Training",
                  "Digital Literacy",
                  "Gender Equality",
                  "Infrastructure",
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

          {/* Right - Pillars */}
          <motion.div variants={container} className="space-y-8">
            {educationPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start gap-6 border-l-4 border-[var(--color-oghosa-gold)]"
              >
                <div className="flex-shrink-0">{pillar.icon}</div>
                <div>
                  <h3 className="text-xl font-bold font-montserrat text-[var(--color-oghosa-green)] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-[var(--font-dmsans)] text-gray-600">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="mt-12">
          <motion.div
            variants={item}
            className="relative overflow-hidden shadow-2xl"
          >
            <img
              src={EducationHero}
              alt="Education Mission"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0  flex items-end p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-white"
              >
                <p className="text-sm uppercase tracking-wider mb-2">
                  Free Education program for kids at Kano State
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection;
