import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import EventImage from "@/assets/images/event-volunteer.jpg";
import EventBg from "@/assets/images/food-program1.jpg";

const EventSection = () => {
  const events = [
    {
      id: 1,
      title: "Annual Health Outreach",
      description:
        "Free medical checkups, vaccinations, and health education for underserved communities in Lagos.",
      date: "June 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Lagos Community Center",
      featured: true,
    },
    {
      id: 2,
      title: "Sickle Cell Awareness Walk",
      description:
        "5km charity walk to raise awareness and funds for sickle cell research and support programs.",
      date: "July 20, 2024",
      time: "7:00 AM - 12:00 PM",
      location: "National Stadium, Abuja",
    },
    {
      id: 3,
      title: "Vocational Skills Workshop",
      description:
        "Hands-on training in tailoring, carpentry, and digital skills for youth empowerment.",
      date: "August 5-9, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Oghosa Foundation HQ",
    },
    {
      id: 4,
      title: "Back-to-School Drive",
      description:
        "Annual initiative providing school supplies, uniforms, and educational materials to underprivileged.",
      date: "September 3, 2024",
      time: "8:00 AM - 2:00 PM",
      location: "Central Primary School, Benin City",
    },
  ];

  return (
    <section className="relative px-4 py-16 lg:px-24 lg:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={EventBg}
          alt="Volunteers at event"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-oghosa-green/90 mix-blend-multiply"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-oghosa-gold/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-xl translate-x-1/2 translate-y-1/2 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-white">
            Upcoming Events & Initiatives
          </h2>
          <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
          <p className="font-dmsans text-xl text-white/90 max-w-3xl mx-auto">
            Join us in creating meaningful change through these upcoming
            activities
          </p>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
              }}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-oghosa-gold/50 transition-all duration-300 ${
                event.featured ? "lg:col-span-3" : ""
              }`}
            >
              {event.featured && (
                <div className="bg-oghosa-gold text-oghosa-green font-montserrat font-bold px-4 py-1 text-sm text-center">
                  FEATURED EVENT
                </div>
              )}

              <div className={`p-6 ${event.featured ? "lg:flex gap-8" : ""}`}>
                {event.featured && (
                  <motion.div
                    className="lg:w-1/2 mb-6 lg:mb-0"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={EventImage}
                        alt="Featured Event"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                )}

                <div className={event.featured ? "lg:w-1/2" : ""}>
                  <div className="flex items-center gap-2 text-oghosa-gold font-montserrat font-bold mb-3">
                    <FiCalendar />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="font-montserrat text-2xl font-bold mb-3 text-white">
                    {event.title}
                  </h3>

                  <p className="font-dmsans text-white/90 mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 font-dmsans text-white/90">
                      <FiClock className="text-oghosa-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 font-dmsans text-white/90">
                      <FiMapPin className="text-oghosa-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.a
                      href="#"
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-oghosa-gold hover:bg-oghosa-gold/90 text-oghosa-green font-montserrat font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
                    >
                      Register Now <FiArrowRight />
                    </motion.a>
                    <motion.a
                      href="https://calendar.google.com/calendar/u/0/r"
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-white/30 hover:border-oghosa-gold text-white font-dmsans px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                    >
                      Add to Calendar
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all events */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/locations/gallery"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(207, 163, 58, 0.1)",
              borderColor: "var(--color-oghosa-gold)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center border-2 border-white hover:border-oghosa-gold text-white hover:text-oghosa-gold font-montserrat font-bold py-3 px-8 rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            View All Events
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
