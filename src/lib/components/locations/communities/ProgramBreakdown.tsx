import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaChevronDown,
  FaProjectDiagram,
  FaHandshake,
  FaTrophy,
} from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";
import { regionalPrograms } from "@/lib/constants/locations/communities";

const accordionVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const ProgramBreakdown = () => {
  const [expandedState, setExpandedState] = useState<number | null>(1);

  return (
    <section className="px-4 py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeader
          title="Programs by Region"
          subtitle="Our Geographic Impact"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {regionalPrograms.map((region) => (
            <motion.div
              key={region.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              whileHover={{ boxShadow: "0 4px 20px rgba(0, 102, 51, 0.1)" }}
            >
              <button
                onClick={() =>
                  setExpandedState(
                    expandedState === region.id ? null : region.id
                  )
                }
                className={`w-full p-6 text-left flex justify-between items-center ${
                  expandedState === region.id ? "bg-oghosa-green/10" : ""
                }`}
              >
                <h3 className="text-xl font-bold">{region.state}</h3>
                <motion.div
                  animate={{ rotate: expandedState === region.id ? 180 : 0 }}
                >
                  <FaChevronDown className="text-oghosa-green" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedState === region.id && (
                  <motion.div
                    variants={accordionVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="px-6 pb-6"
                  >
                    {/* Programs */}
                    <div className="my-6">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <FaProjectDiagram className="text-oghosa-green" />
                        Active Programs
                      </h4>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {region.programs.map((program, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 p-4 rounded-lg"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-oghosa-gold">
                                {<program.icon />}
                              </span>
                              <span className="font-medium">
                                {program.name}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              {program.count}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Partners & Milestone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <FaHandshake className="text-oghosa-green" />
                          Local Partners
                        </h4>
                        <div className="flex flex-wrap gap-4">
                          {region.partners.map((logo, i) => (
                            <motion.img
                              key={i}
                              src={logo}
                              alt="Partner logo"
                              className="h-12 object-contain"
                              whileHover={{ y: -3 }}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <FaTrophy className="text-oghosa-green" />
                          Recent Milestone
                        </h4>
                        <motion.p
                          className="bg-oghosa-green/10 p-4 rounded-lg border-l-4 border-oghosa-gold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {region.milestone}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
