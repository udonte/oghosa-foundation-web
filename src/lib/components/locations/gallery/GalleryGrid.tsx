// components/GalleryGrid.tsx
import { GalleryItem } from "@/lib/types/locations";
import { motion } from "framer-motion";

const GalleryGrid = ({ items }: { items: GalleryItem[] }) => {
  // Aspect ratio classes
  const getAspectClass = (ratio = "landscape") => {
    switch (ratio) {
      case "portrait":
        return "aspect-[3/4]";
      case "landscape":
        return "aspect-[4/3]";
      default:
        return "aspect-square";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          {/* Image Container */}
          <div className={`relative ${getAspectClass(item.aspectRatio)}`}>
            {/* Regular img tag for React */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-montserrat font-bold text-lg">
                {item.title}
              </h3>
              <div className="flex gap-2 text-sm mt-1">
                <span className="text-oghosa-green font-dmsans bg-oghosa-gold px-4 py-0.5 rounded-full ">
                  {item.location}
                </span>
                <span className="text-white/80 font-dmsans">{item.date}</span>
              </div>

              {/* Caption - shown only if exists */}
              {item.caption && (
                <p className="text-white/90 font-dmsans text-sm mt-2">
                  {item.caption}
                </p>
              )}

              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-oghosa-green/90 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
