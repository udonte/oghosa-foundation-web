// components/SubHeroSection.tsx
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Breadcrumbs from "./Breadcrumbs";

type SubHeroSectionProps = {
  image: string;
  title: string;
  subtitle: string;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  showScrollIndicator?: boolean;
  cta?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
};

const SubHeroSection = ({
  image,
  title,
  subtitle,
  breadcrumbs = [],
  showScrollIndicator = true,
  cta,
}: SubHeroSectionProps) => {
  // Default breadcrumb if none provided
  const defaultBreadcrumbs = [{ label: "Home", href: "/" }, { label: title }];

  const crumbs = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs;

  return (
    <section className="relative bg-oghosa-green text-white py-24 overflow-hidden h-[70vh] min-h-[500px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={image}
          alt="Background Image"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col">
        {/* Breadcrumbs (positioned at top) */}
        <div className="w-full flex justify-center">
          <Breadcrumbs items={crumbs} />
        </div>

        {/* Centered Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-montserrat text-4xl md:text-5xl font-bold mb-4"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-24 h-1 bg-oghosa-gold mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-dmsans text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Spacer to push content down */}
        <div className="h-16" />

        {/* Bottom Elements Container */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center space-y-4">
          {/* Scrolling Indicator */}
          {showScrollIndicator && (
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <FaChevronDown className="h-8 w-8 text-white" />
            </motion.div>
          )}
        </div>
        {/* CTA Button */}
        {cta && (
          <div className="flex items-center justify-center">
            <motion.a
              href={cta.href}
              onClick={cta.onClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-oghosa-gold text-lg hover:bg-oghosa-green text-white hover:text-oghosa-gold hover:border-2 hover:border-oghosa-gold font-medium py-3 px-6 rounded-md shadow-lg transition-colors duration-300 absolute -bottom-16 w-fit"
            >
              {cta.text}
            </motion.a>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubHeroSection;
