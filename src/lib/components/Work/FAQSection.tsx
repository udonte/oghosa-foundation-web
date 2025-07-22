import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FAQSectionProps } from "../../types/work";
import SectionHeader from "../common/SectionHeader";

const FAQSection = ({
  title = "",
  subtitle = "",
  items = [],
  itemClass = "",
  defaultOpenId = null,
}: FAQSectionProps) => {
  const [openId, setOpenId] = useState<string | number | null>(defaultOpenId);

  const toggleItem = (id: string | number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={`py-16 bg-white`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeader title={title} subtitle={subtitle} />
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {items.length > 0 ? (
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.3 }}
                  className={`border  ${
                    openId === item.id
                      ? "border-oghosa-green/40"
                      : "border-gray-200"
                  } rounded-lg overflow-hidden ${itemClass}`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full flex justify-between items-center p-6 text-left cursor-pointer ${
                      openId === item.id
                        ? "bg-oghosa-green/5 text-oghosa-green"
                        : "bg-white text-gray-900 hover:bg-oghosa-green/5 hover:text-oghosa-green"
                    }`}
                    aria-expanded={openId === item.id}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <h3 className="text-lg font-medium font-montserrat">
                      {item.question}
                    </h3>
                    {openId === item.id ? (
                      <FiChevronUp className="w-5 h-5 text-oghosa-gold" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-oghosa-gold" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`overflow-hidden`}
                      >
                        <div className="p-6 pt-2 font-dmsans text-gray-600">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 font-dmsans">
              No FAQs to display
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
