// src/components/food/FoodMissionSection.tsx
import { motion } from "framer-motion";
import { FaSeedling, FaHandHoldingWater } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";

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

const foodPillars = [
  {
    icon: <MdOutlineFoodBank className="w-8 h-8 text-oghosa-gold" />,
    title: "Emergency Food Relief",
    description:
      "Community food banks and meal programs for vulnerable families",
  },
  {
    icon: <FaSeedling className="w-8 h-8 text-oghosa-gold" />,
    title: "Sustainable Farming",
    description: "Training and resources for climate-resilient agriculture",
  },
  {
    icon: <FaHandHoldingWater className="w-8 h-8 text-oghosa-gold" />,
    title: "Nutrition Education",
    description: "Cooking classes and dietary planning for healthy communities",
  },
];

const FoodMissionSection = () => {
  return (
    <motion.section
      id="food-mission"
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
                  food security
                </span>{" "}
                is the foundation of thriving communities. Our programs combat
                hunger while building sustainable solutions to food insecurity
                across Nigeria. We provide emergency food relief, train farmers
                in climate-resilient practices, and educate families on
                nutrition and healthy eating.
                <br />
                <br />
                We envision a future where everyone has access to nutritious
                food, empowering them to lead healthy, productive lives.
              </p>
              <br />
              <p className="">
                Our work aligns with the United Nations' SDG 2: Zero Hunger and
                SDG 12: Responsible Consumption and Production.
              </p>
              <motion.div variants={item} className="flex flex-wrap gap-2 mt-8">
                {[
                  "Hunger Relief",
                  "Farm Training",
                  "Food Banks",
                  "Nutrition",
                  "Irrigation",
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

          {/* Right - Food Pillars */}
          <motion.div variants={container} className="space-y-8">
            {foodPillars.map((pillar, index) => (
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

export default FoodMissionSection;
