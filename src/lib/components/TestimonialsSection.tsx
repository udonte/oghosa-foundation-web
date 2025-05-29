import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsQuote } from "react-icons/bs";
import SectionHeader from "./SectionHeader";

interface Testimonial {
  id: string | number;
  image: string;
  name: string;
  role?: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  autoRotate?: boolean;
  rotationInterval?: number;
  showNavigation?: boolean;
  containerClass?: string;
  cardClass?: string;
}

const TestimonialsSection = ({
  testimonials,
  title = "Success Stories",
  subtitle = "Personal and emotional validation of our impact",
  autoRotate = true,
  rotationInterval = 3000,
  showNavigation = true,
  containerClass = "",
  cardClass = "",
}: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!autoRotate || testimonials.length <= 1) return;

    const interval = setInterval(nextTestimonial, rotationInterval);
    return () => clearInterval(interval);
  }, [testimonials.length, autoRotate, rotationInterval]);

  if (testimonials.length === 0) return null;

  return (
    <section className={`py-8 px-4 lg:py-16  ${containerClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeader title={title} subtitle={subtitle} />
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`bg-white p-8 rounded-lg shadow-lg ${cardClass}`}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-oghosa-gold/30"
                    />
                    <BsQuote className="absolute -top-2 -left-2 text-4xl text-oghosa-green/20" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-700 italic mb-4 font-dmsans text-lg">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-oghosa-green font-montserrat">
                      {testimonials[currentIndex].name}
                    </h4>
                    {testimonials[currentIndex].role && (
                      <p className="text-oghosa-gold text-sm font-dmsans">
                        {testimonials[currentIndex].role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {showNavigation && testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-oghosa-green hover:text-oghosa-gold transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="cursor-pointer absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-oghosa-green hover:text-oghosa-gold transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-oghosa-green" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
