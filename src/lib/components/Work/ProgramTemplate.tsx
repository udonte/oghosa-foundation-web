// src/components/ProgramTemplate.tsx
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProgramTemplateProps {
  title: string;
  description: string;
  stats?: {
    value: string;
    label: string;
  }[];
  children: ReactNode;
}

const ProgramTemplate = ({
  title,
  description,
  stats,
  children,
}: ProgramTemplateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {/* Page Header */}
      <div className="bg-oghosa-green text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-dmsans max-w-3xl"
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Stats Section (if provided) */}
      {stats && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white shadow-sm py-8"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-oghosa-green/5 p-4 rounded-lg text-center border border-oghosa-green/10"
                >
                  <p className="text-2xl font-bold font-montserrat text-oghosa-green">
                    {stat.value}
                  </p>
                  <p className="text-sm font-dmsans text-gray-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="container mx-auto px-4 py-12"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ProgramTemplate;
