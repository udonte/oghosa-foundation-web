import { motion } from "framer-motion";
import { FaGraduationCap, FaHeartbeat, FaUtensils } from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";
import { impactStories } from "@/lib/constants/locations/impact";

// Program config (maps to colors/icons)
const programConfig = {
  "skills-training": {
    name: "Skills Training",
    icon: <FaGraduationCap className="inline mr-1" />,
  },
  "sickle-cell": {
    name: "Health",
    icon: <FaHeartbeat className="inline mr-1" />,
  },
  "food-security": {
    name: "Food Security",
    icon: <FaUtensils className="inline mr-1" />,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const FeaturedImpactStories = () => {
  return (
    <section className="px-4 py-8 lg:py-16 lg:px-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Impact Stories"
          subtitle="Real Lives Transformed"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {impactStories.map((story) => (
            <motion.div
              key={story.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              {/* YouTube Embed */}
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe
                  src={story.youtubeId}
                  className="w-full h-64"
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className={`${
                    programConfig[story.program].color
                  } py-1 rounded-full text-sm items-center  text-oghosa-green hover:text-oghosa-gold`}
                >
                  <span className="text-oghosa-gold">
                    {programConfig[story.program].icon}
                  </span>
                  {programConfig[story.program].name}
                </span>
                <p className="mt-3 text-gray-600 font-dm-sans">
                  {story.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
