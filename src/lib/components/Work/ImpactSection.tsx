import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { ImpactSectionProps } from "../../types/work";
import StatCard from "./StatCard";

const ImpactSection = ({
  stats = [],
  title = "Impact",
  subtitle = "Measuring the literacy and educational achievements of our beneficiaries",
  animationSpeed = 1500,
  rotationInterval = 2000,
  activeCardClass = "bg-oghosa-green/10 border border-oghosa-gold/70 shadow-sm",
  inactiveCardClass = "bg-gray-50 border border-gray-100",
  containerClass = "",
}: ImpactSectionProps) => {
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  // Rotate through stats at specified interval
  useEffect(() => {
    if (stats.length <= 1) return; // No rotation needed if only one stat

    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % stats.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [stats.length, rotationInterval]);

  return (
    <section className={`py-16 bg-white ${containerClass}`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionHeader title={title} subtitle={subtitle} />
        </motion.div>

        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.id}
                stat={stat}
                isActive={index === activeStatIndex}
                animationSpeed={animationSpeed}
                activeClass={activeCardClass}
                inactiveClass={inactiveCardClass}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImpactSection;
