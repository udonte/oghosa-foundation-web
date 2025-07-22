// components/VolunteerTestimonials.tsx
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

const PartnershipTestimonials = ({ testimonials }) => {
  return (
    <section className="text-oghosa-green px-4 py-16 lg:px-24 lg:py-16 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-oghosa-gold/40 to-oghosa-green/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Partnership Stories"
          subtitle="Hear from those who've made an impact partnering with us"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 p-8 rounded-xl border border-oghosa-gold/10 shadow-oghosa-gold/20 hover:shadow-md hover:border-oghosa-gold/40 transition-all"
            >
              <div className="mb-6 h-40 rounded-lg overflow-hidden relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <blockquote className="font-dmsans italic text-lg text-center mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="text-center">
                <p className="font-montserrat font-bold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-oghosa-gold mb-1">{testimonial.role}</p>
                <p className="text-sm text-gray-400">{testimonial.program}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#share-story"
            className="inline-block border-2 border-oghosa-green text-oghosa-green hover:bg-oghosa-green hover:text-white font-montserrat font-bold py-3 px-8 rounded-md transition-colors"
          >
            Join Our Volunteer Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipTestimonials;
