import { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";
import punchlogo from "@/assets/images/contact/media/punch.png";
import channels from "@/assets/images/contact/media/channels.png";
import guardian from "@/assets/images/contact/media/guardian.png";
import { Link } from "react-router";

interface MediaItem {
  id: number;
  outlet: string;
  date: string;
  title: string;
  excerpt: string;
  logo: string;
  link: string;
  alt: string;
}

const MediaSpotlight = () => {
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      outlet: "Punch Newspaper",
      date: "May 2024",
      title: "How Oghosa's Floating Schools Are Changing Lagos",
      excerpt:
        "Innovative educational infrastructure brings hope to Makoko's waterfront communities...",
      logo: punchlogo,
      link: "https://punchng.com/oghosa-floating-schools",
      alt: "Punch Newspaper Logo",
    },
    {
      id: 2,
      outlet: "Channels TV",
      date: "April 2024",
      title: "Foundation Tackles Malnutrition in Northern Nigeria",
      excerpt:
        "Oghosa's food security program shows 80% reduction in child malnutrition rates...",
      logo: channels,
      link: "https://www.channelstv.com/oghosa-nutrition",
      alt: "Channels TV Logo",
    },
    {
      id: 3,
      outlet: "The Guardian",
      date: "March 2024",
      title: "Empowering Women Through Agri-Tech",
      excerpt:
        "Vocational training program graduates 500 female farmers in Edo State...",
      logo: guardian,
      link: "https://guardian.ng/features/oghosa-women-farmers",
      alt: "The Guardian Logo",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout>(null as unknown as NodeJS.Timeout);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const rotate = () => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
      );
    };

    timeoutRef.current = setTimeout(rotate, 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, mediaItems.length]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
    resetTimeout();
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
    resetTimeout();
  };

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetTimeout();
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-oghosa-green/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="  Recent Coverage"
          subtitle="  How media outlets are reporting our impact"
        />

        <div className="relative overflow-hidden">
          {/* Carousel */}
          <div className="relative h-[400px] sm:h-[350px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row"
              >
                {/* Media Logo */}
                <div className="sm:w-1/3 bg-gray-100 flex items-center justify-center p-6">
                  <img
                    src={mediaItems[currentIndex].logo}
                    alt={mediaItems[currentIndex].alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="sm:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-montserrat font-bold text-gray-900">
                          {mediaItems[currentIndex].outlet}
                        </h3>
                        <p className="text-oghosa-gold font-dm-sans mb-4">
                          {mediaItems[currentIndex].date}
                        </p>
                      </div>
                      <a
                        href={mediaItems[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-oghosa-green hover:text-oghosa-gold transition-colors"
                        aria-label="Read full article"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>

                    <h4 className="text-2xl font-montserrat font-bold text-oghosa-green mt-2 mb-4">
                      {mediaItems[currentIndex].title}
                    </h4>
                    <p className="font-dm-sans text-gray-700">
                      {mediaItems[currentIndex].excerpt}
                    </p>
                  </div>

                  <a
                    href={mediaItems[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center font-dm-sans font-medium text-oghosa-green hover:text-oghosa-gold transition-colors"
                  >
                    Read full coverage
                    <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-oghosa-green p-3 rounded-full shadow-md z-10 transition-all hover:scale-110"
            aria-label="Previous media coverage"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-oghosa-green p-3 rounded-full shadow-md z-10 transition-all hover:scale-110"
            aria-label="Next media coverage"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-oghosa-green w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/press-coverage"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-oghosa-green hover:bg-oghosa-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oghosa-gold transition-all"
          >
            View All Media Coverage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaSpotlight;
