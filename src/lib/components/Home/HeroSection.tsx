import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection = ({ slides }: { slides: Slide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("right");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [isAnimating, slides.length]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("left");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides every 9.9 seconds
  useEffect(() => {
    if (isAnimating) return;

    const interval = setInterval(() => {
      handleNext();
    }, 9900);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating, handleNext]);

  const slideVariants = {
    hidden: (direction: string) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 1,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction: string) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        onComplete: () => setIsAnimating(false),
      },
    }),
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full overflow-hidden bg-oghosa-green"
    >
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 flex items-center"
        >
          {/* Background Image with Overlay and Loading State */}
          <div className="absolute inset-0 z-0">
            {!loadedImages[slides[currentSlide].id] && (
              <div className="absolute inset-0 bg-oghosa-green/80 flex items-center justify-center">
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 w-12 bg-oghosa-gold/30 rounded-full"></div>
                </div>
              </div>
            )}
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className={`object-cover w-full h-full transition-opacity duration-300 ${
                loadedImages[slides[currentSlide].id]
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              loading="eager"
              onLoad={() => handleImageLoad(slides[currentSlide].id)}
              onError={() => handleImageLoad(slides[currentSlide].id)} // Fallback if image fails to load
            />
            <div className="absolute inset-0 bg-oghosa-green opacity-40" />
          </div>

          {/* Content */}
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
            <motion.h1
              variants={contentVariants}
              initial="hidden"
              animate={
                loadedImages[slides[currentSlide].id] ? "visible" : "hidden"
              }
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-montserrat text-4xl md:text-6xl font-bold mb-4"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              variants={contentVariants}
              initial="hidden"
              animate={
                loadedImages[slides[currentSlide].id] ? "visible" : "hidden"
              }
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-dmsans text-xl md:text-2xl mb-8 max-w-2xl"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.a
              href={slides[currentSlide].ctaLink}
              variants={contentVariants}
              initial="hidden"
              animate={
                loadedImages[slides[currentSlide].id] ? "visible" : "hidden"
              }
              transition={{ delay: 0.7, duration: 0.4 }}
              className="inline-block bg-oghosa-gold hover:bg-opacity-90 text-oghosa-green font-montserrat font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              {slides[currentSlide].ctaText}
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Only show when image is loaded */}
      {loadedImages[slides[currentSlide].id] && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-oghosa-gold/30 cursor-pointer bg-opacity-30 text-oghosa-gold hover:text-oghosa-green p-3 rounded-full z-10 hover:bg-opacity-20 transition-all"
            aria-label="Previous slide"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-oghosa-gold/30 cursor-pointer bg-opacity-30 text-oghosa-gold hover:text-oghosa-green p-3 rounded-full z-10 hover:bg-opacity-50 transition-all"
            aria-label="Next slide"
          >
            <FiArrowRight size={24} />
          </button>
        </>
      )}

      {/* Pagination Dots - Only show when image is loaded */}
      {loadedImages[slides[currentSlide].id] && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-oghosa-gold w-6"
                  : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
