import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { GallerySectionProps } from "@/lib/types/work";

const GallerySection = ({
  title = "Gallery",
  subtitle = "Visual storytelling — makes the mission more tangible and emotive",
  items = [],
  columns = 3,
  gap = "gap-4",
  imageHeight = "h-64",
  showDescriptions = true,
}: GallerySectionProps) => {
  const gridCols =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
    }[columns] || "grid-cols-3";

  return (
    <section className={`px:4 py-8 lg:px-16 lg:py-16 bg-white`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader title={title} subtitle={subtitle} />
        {/* Gallery Grid */}
        {items.length > 0 ? (
          <div className={`grid ${gridCols} ${gap}`}>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div
                  className={`relative overflow-hidden rounded-lg shadow-md ${imageHeight}`}
                >
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {showDescriptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3 text-center font-dmsans text-gray-600"
                  >
                    {item.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 font-dmsans">
            No gallery items to display
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
