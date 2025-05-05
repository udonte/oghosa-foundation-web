import { motion } from "framer-motion";
import { FiArrowRight, FiGift, FiUsers } from "react-icons/fi";
import CtaBg from "@/assets/images/food-program1.jpg";

const CTASection = () => {
  return (
    <section className=" bg-gray-50 relative px-4 py-16 lg:px-24 lg:py-24 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-oghosa-gold/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-white/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading with animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-oghosa-green mb-6">
              Join Our Movement
            </h2>
            <div
              className="w-24 h-1 bg-oghosa-gold mx-auto"
              style={{ transform: "translateY(-50%)" }}
            ></div>
          </motion.div>

          {/* Animated text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-dmsans text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Every action—whether donating, volunteering, or sharing our
            mission—helps build a future where compassion creates lasting
            change.
          </motion.p>

          {/* Animated buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a
              href="/donate"
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(207, 163, 58, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center bg-oghosa-gold hover:bg-oghosa-gold/90 text-oghosa-green font-montserrat font-bold px-10 py-5 rounded-lg text-lg shadow-lg transition-all"
            >
              <FiGift className="mr-3 text-xl" />
              Donate Now
            </motion.a>

            <motion.a
              href="/volunteer"
              whileHover={{
                y: -3,
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center border-2 border-oghosa-gold hover:border-oghosa-green text-oghosa-green font-montserrat font-bold px-10 py-5 rounded-lg text-lg shadow-lg transition-all"
            >
              <FiUsers className="mr-3 text-xl" />
              Volunteer Today
            </motion.a>
          </motion.div>

          {/* Additional CTA link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <a
              href="/get-involved"
              className="inline-flex items-center text-white/90 hover:text-white font-dmsans font-medium group transition-colors"
            >
              Explore other ways to support
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, 100],
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute top-0 w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CTASection;
