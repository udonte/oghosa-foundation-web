import { StatCardProps } from "@/lib/types/work";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        {<stat.icon />}
      </div>
      <div className="font-montserrat text-4xl md:text-5xl font-bold text-oghosa-green mb-2">
        {count.toLocaleString()}
        {stat.suffix || ""}
      </div>
      <div className="font-dmsans text-lg text-gray-600">{stat.label}</div>
    </motion.div>
  );
};

export default StatCard;
