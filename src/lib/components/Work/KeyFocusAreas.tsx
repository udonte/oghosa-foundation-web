// src/components/education/KeyFocusAreas.tsx
import { motion } from "framer-motion";

import SectionHeader from "../common/SectionHeader";

const KeyFocusAreas = ({ focusAreas }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title="Focus Areas"
          subtitle=" We address education holistically through targeted programs that
            create lasting impact"
        />

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index: number) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300"
            >
              {/* Card Header */}
              <div
                className={`bg-oghosa-gold/20 text-oghosa-green p-6 flex items-center gap-4`}
              >
                <div
                  className={`p-3 rounded-full bg-oghosa-green/5 text-oghosa-gold text-3xl`}
                >
                  {<area.icon />}
                </div>
                <h3 className="text-xl font-bold font-montserrat">
                  {area.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="font-dmsans text-gray-600 mb-6">
                  {area.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-gray-500 mb-3">
                    Key Initiatives
                  </h4>
                  <ul className="space-y-2">
                    {area.initiatives.map((initiative, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-oghosa-gold mr-2">•</span>
                        <span className="font-dmsans text-gray-700">
                          {initiative}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default KeyFocusAreas;
