// components/TabbedComponent.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

const TabbedComponent = ({ tabs }: { tabs: Tab[] }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex justify-center border-b border-oghosa-gold/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3  text-sm md:text-base transition-colors cursor-pointer ${
              activeTab === tab.id
                ? "text-oghosa-green font-bold"
                : "text-gray-500 hover:text-gray-700 font-medium"
            }`}
          >
            <div className="flex items-center gap-2">
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
            </div>

            {/* Active indicator */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-oghosa-green"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabbedComponent;
