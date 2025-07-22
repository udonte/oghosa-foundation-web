// components/VideoGallery.tsx
import { motion } from "framer-motion";

type VideoItem = {
  id: string;
  src: string;
  thumbnail: string;
  title: string;
  location: string;
  date: string;
  caption?: string;
  tags?: string[];
  duration?: string; // "2:45"
};

const VideoGallery = ({ items }: { items: VideoItem[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          {/* Video Container */}
          <div className="relative aspect-video">
            <video
              src={item.src}
              poster={item.thumbnail}
              controls
              className="w-full h-full object-cover"
            />

            {/* Overlay (matches GalleryGrid) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-montserrat font-bold text-lg">
                {item.title}
              </h3>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-oghosa-gold font-dmsans">
                  {item.location}
                </span>
                <span className="text-white/80 font-dmsans">
                  {item.date} {item.duration && `• ${item.duration}`}
                </span>
              </div>

              {/* Caption */}
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

export default VideoGallery;
