import { regions } from "@/lib/constants/locations/communities";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "../../common/SectionHeader";

export const RegionSelector = () => {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section className="px-4 py-12 sm:py-16 lg:px-24 bg-white">
      <div className="container mx-auto">
        <SectionHeader
          title="Local Touchpoints"
          subtitle="See the communities we impacted"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            {/* Region Tabs - Mobile: Horizontal Scroll */}
            <div className="mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex gap-2 w-max min-w-full">
                {regions.map((region, index) => (
                  <motion.button
                    key={region.id}
                    onClick={() => setActiveRegion(index)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium flex-shrink-0 transition-colors cursor-pointer ${
                      activeRegion === index
                        ? "bg-oghosa-green text-white shadow-md "
                        : "bg-oghosa-green/10 text-gray-700 hover:bg-gray-200 border border-oghosa-gold/20"
                    }`}
                  >
                    {region.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Stats Grid - Mobile: 2 columns, Desktop: 3 columns */}
            <motion.div
              key={regions[activeRegion].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              {regions[activeRegion].stats.map((stat, i) => (
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-100 shadow-xs text-center"
                  key={i}
                >
                  <div className="flex justify-center mb-1 sm:mb-2 text-oghosa-green">
                    {<stat.icon className="text-lg sm:text-xl" />}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-oghosa-green">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${regions[activeRegion].id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 font-dm-sans"
              >
                {regions[activeRegion].description}
              </motion.p>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-oghosa-gold text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-oghosa-green transition-colors"
            >
              Learn About {regions[activeRegion].name} Programs
            </motion.button>
          </div>

          {/* Image Side - Mobile: Full width, Desktop: Fixed height */}
          <div className="order-1 lg:order-2 relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96 lg:h-full w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${regions[activeRegion].id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <img
                  src={regions[activeRegion].image}
                  alt={`OGF activities in ${regions[activeRegion].name}`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <h3 className="text-white text-lg sm:text-xl font-bold">
                    OGF in {regions[activeRegion].name}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {regions[activeRegion].stats[0].value} lives transformed
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
