// src/components/cards/ProgramCard.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiArrowRight } from "react-icons/fi";
import React from "react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  stats?: { value: string; label: string }[];
  variant?: "default" | "featured" | "minimal";
  className?: string;
}

const ProgramCard = ({
  title,
  description,
  icon: Icon,
  image,
  link,
  stats = [],
  variant = "default",
  className = "",
}: ProgramCardProps) => {
  // Variant styles
  const variants = {
    default: "bg-white border border-gray-100 shadow-sm",
    featured: "bg-white border-2 border-oghosa-gold/30 shadow-md",
    minimal: "bg-transparent border-none shadow-none",
  };

  // Image height based on variant
  const imageHeight = {
    default: "h-48",
    featured: "h-56",
    minimal: "h-40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl overflow-hidden flex flex-col ${variants[variant]} ${className}`}
    >
      <Link to={link} className="group block h-full">
        {/* Image Section */}
        <div className={`relative ${imageHeight[variant]} overflow-hidden`}>
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-4 left-4 p-2 rounded-full bg-oghosa-green text-white shadow-md">
            Icon
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-xl font-semibold font-montserrat text-oghosa-green mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-gray-600 font-dmsans mb-4 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Stats */}
          {stats.length > 0 && variant !== "minimal" && (
            <div className="mb-4 grid grid-cols-2 gap-2">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-oghosa-gold/5 p-2 rounded-lg text-center border border-oghosa-gold/10"
                >
                  <p className="text-lg font-bold font-montserrat text-oghosa-green">
                    {stat.value}
                  </p>
                  <p className="text-xs font-dmsans text-gray-600 line-clamp-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center text-oghosa-gold font-dmsans font-medium mt-2 group-hover:underline">
            <span>Learn more</span>
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProgramCard;
