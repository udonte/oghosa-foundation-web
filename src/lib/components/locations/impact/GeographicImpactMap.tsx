import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { impactLocations } from "@/lib/constants/locations/impact";
import SectionHeader from "../../common/SectionHeader";
import ImageSection from "@/lib/components/Work/ImageSection";
import NigeriaMap from "@/assets/images/locations/impacts/nigeria-map.gif";

type StatCardProps = {
  metric: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
};

const StatCard = ({ metric, value, icon, trend }: StatCardProps) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="bg-white p-4 rounded-lg shadow-xs border border-gray-100"
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-gray-500 text-sm">{metric}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-oghosa-green">{value}</h3>
          {trend && <span className="text-xs text-oghosa-gold">{trend}</span>}
        </div>
      </div>
    </div>
  </motion.div>
);

export const GeographicImpactMap = () => {
  const [activeId, setActiveId] = useState(impactLocations[0].id);
  const activeRegion = impactLocations.find((r) => r.id === activeId);

  return (
    <section className="py-8 px-4 lg:py-16 lg:px-24 bg-gradient-to-b from-oghosa-green/5 to-oghosa-gold/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader
          title="Geographical Data Points"
          subtitle="See how OGF’s programs create lasting change in these regions"
        />

        {/* map */}
        <ImageSection imageSrc={NigeriaMap} />
        {/* Interactive Region Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {impactLocations.map((region) => (
            <motion.button
              key={region.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveId(region.id)}
              className={`px-5 py-3 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                activeId === region.id
                  ? "bg-oghosa-green text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-oghosa-green/20 shadow-md"
              }`}
            >
              <span className="font-medium">{region.region}</span>
              {activeId === region.id && <FaChevronRight className="ml-1" />}
            </motion.button>
          ))}
        </div>

        {/* Animated Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Region Header */}
            <div className="bg-oghosa-green/10 p-6 border-b border-gray-200">
              <div className="flex items-start gap-4">
                <h3 className="text-2xl font-bold text-oghosa-green">
                  {activeRegion?.region}
                </h3>
                <p className="text-oghosa-gold flex items-center">
                  <FaQuoteLeft className="mr-1 opacity-50" />
                  {activeRegion?.testimonial}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 p-6">
              {activeRegion?.stats.map((stat, i) => (
                <StatCard
                  key={i}
                  metric={stat.metric}
                  value={stat.value}
                  icon={stat.icon && <stat.icon />}
                  trend={stat.trend}
                />
              ))}
            </div>

            {/* Program Highlights */}
            <div className="p-6 bg-gray-50">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                Key Programs
              </h4>
              <div className="space-y-4">
                {activeRegion?.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-4">
                    <highlight.icon className="text-2xl mt-1 text-oghosa-gold" />
                    <div>
                      <h5 className="font-medium text-oghosa-green">
                        {highlight.title}
                      </h5>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
