import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Esohe from "@/assets/images/esohe.jpg";
import { Link } from "react-router";

const FounderSection = () => {
  return (
    <section className="bg-oghosa-green/5 px-4 py-16 lg:px-24 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center gap-12 lg:gap-24"
        >
          {/* Image with layered animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/5 flex justify-center relative"
          >
            <motion.img
              src={Esohe}
              alt="Oghosa Godson"
              className="z-10 shadow border-4 border-oghosa-gold w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-oghosa-gold rounded-full blur-xl"
            />
          </motion.div>

          {/* Content with staggered animations */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5 space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-montserrat text-3xl sm:text-4xl lg:text-5xl text-oghosa-green font-bold"
            >
              The Founding Philosophy Behind Our Mission
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-pacifico text-2xl lg:text-3xl italic text-oghosa-gold mb-6 tracking-widest border-l-4 border-oghosa-gold pl-6"
            >
              "It will be (IWB)"
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="font-dmsans text-gray-700 text-lg leading-relaxed">
                Oghosa Godson's legacy of compassion lives on through every
                initiative we undertake. Charity was not just something he did;
                it was who he was.
              </p>
              <p className="font-dmsans text-gray-700 text-lg leading-relaxed">
                Giving was his daily lifestyle—whether mentoring youth in
                technology, supporting sickle cell patients, or ensuring no one
                in his community went hungry. His mantra "IWB" reflected his
                unwavering faith in positive change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className=" mt-16"
            >
              <Link
                to="/about/founder"
                className="inline-flex items-center bg-oghosa-green hover:bg-oghosa-gold text-white font-montserrat font-bold py-4 px-10 rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                Continue Oghosa's Legacy
                <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform text-xl" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden lg:block absolute right-32 -bottom-20 w-32 h-32 bg-oghosa-gold/10 rounded-full"
        />
      </div>
    </section>
  );
};

export default FounderSection;
