import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiMapPin,
  FiDroplet,
  FiPackage,
  FiDollarSign,
} from "react-icons/fi";

interface StatItem {
  id: number;
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const StatsSection = () => {
  // Mock data
  const mockStats: StatItem[] = [
    {
      id: 1,
      value: 10250,
      suffix: "+",
      label: "Lives Impacted",
      icon: <FiUsers />,
    },
    {
      id: 2,
      value: 58,
      suffix: "+",
      label: "Communities Served",
      icon: <FiMapPin />,
    },
    {
      id: 3,
      value: 632,
      suffix: "+",
      label: "Sickle Cell Screenings",
      icon: <FiDroplet />,
    },
    {
      id: 4,
      value: 1250,
      suffix: "+",
      label: "Meals Served Monthly",
      icon: <FiPackage />,
    },
  ];

  const donationGoal = 500000;
  const [currentDonations] = useState(325000);
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  // Rotate through stats every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % mockStats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [mockStats.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4">
            Our Impact in Numbers
          </h2>
          <p className="font-dmsans text-lg text-oghosa-gold max-w-2xl mx-auto">
            Measurable change through education, health initiatives, and
            community empowerment
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {mockStats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              isActive={index === activeStatIndex}
            />
          ))}
        </div>

        {/* Donation Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-oghosa-green/5 p-6 rounded-lg border border-oghosa-green/20"
        >
          <div className="flex items-center mb-4">
            <FiDollarSign className="text-oghosa-green text-2xl mr-3" />
            <h3 className="font-montserrat text-xl font-semibold text-oghosa-green">
              Donation Progress
            </h3>
          </div>

          <div className="mb-2 flex justify-between font-dmsans text-gray-700">
            <span>Raised: ₦{currentDonations.toLocaleString()}</span>
            <span>Goal: ₦{donationGoal.toLocaleString()}</span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${(currentDonations / donationGoal) * 100}%`,
                transition: { duration: 1.5, ease: "easeOut" },
              }}
              className="h-full bg-oghosa-gold rounded-full"
            />
          </div>

          <button className="mt-4 bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-bold py-2 px-6 rounded-lg transition-all duration-300">
            Donate Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({
  stat,
  isActive,
}: {
  stat: StatItem;
  isActive: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const duration = 1500; // 1.5 second animation
    const increment = stat.value / (duration / 16); // 60fps

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
  }, [stat.value, isActive]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center p-6 rounded-lg transition-all duration-300 ${
        isActive
          ? "bg-oghosa-green/10 border border-oghosa-gold/70 shadow-sm"
          : "bg-gray-50 border border-gray-100"
      }`}
    >
      <div className="flex justify-center text-oghosa-green text-3xl mb-3">
        {stat.icon}
      </div>
      <div className="font-montserrat text-4xl md:text-5xl font-bold text-oghosa-green mb-2">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="font-dmsans text-lg text-gray-600">{stat.label}</div>
    </motion.div>
  );
};

export default StatsSection;
