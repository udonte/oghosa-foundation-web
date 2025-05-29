import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface StatItem {
  id: number | string;
  value: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

interface ImpactSectionProps {
  stats?: StatItem[];
  title?: string;
  subtitle?: string;
  animationSpeed?: number;
  rotationInterval?: number;
  activeCardClass?: string;
  inactiveCardClass?: string;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
}

const ImpactSection = ({
  stats = [],
  title = "Our Education Impact",
  subtitle = "Measuring the literacy and educational achievements of our beneficiaries",
  animationSpeed = 1500,
  rotationInterval = 2000,
  activeCardClass = "bg-oghosa-green/10 border border-oghosa-gold/70 shadow-sm",
  inactiveCardClass = "bg-gray-50 border border-gray-100",
  containerClass = "",
  titleClass = "font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4",
  subtitleClass = "font-dmsans text-lg text-oghosa-gold max-w-2xl mx-auto",
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
          {title && <h2 className={titleClass}>{title}</h2>}
          {subtitle && <p className={subtitleClass}>{subtitle}</p>}
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

interface StatCardProps {
  stat: StatItem;
  isActive: boolean;
  animationSpeed: number;
  activeClass: string;
  inactiveClass: string;
}

const StatCard = ({
  stat,
  isActive,
  animationSpeed,
  activeClass,
  inactiveClass,
}: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const increment = stat.value / (animationSpeed / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [stat.value, isActive, animationSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center p-6 rounded-lg transition-all duration-300 ${
        isActive ? activeClass : inactiveClass
      }`}
    >
      <div className="flex justify-center text-oghosa-green text-3xl mb-3">
        {stat.icon}
      </div>
      <div className="font-montserrat text-4xl md:text-5xl font-bold text-oghosa-green mb-2">
        {count.toLocaleString()}
        {stat.suffix || ""}
      </div>
      <div className="font-dmsans text-lg text-gray-600">{stat.label}</div>
    </motion.div>
  );
};

export default ImpactSection;
