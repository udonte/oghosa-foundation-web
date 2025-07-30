import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronRight,
  FaChevronDown,
  FaRegClock,
} from "react-icons/fa";
import { useState } from "react";
import SectionHeader from "../../common/SectionHeader";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  hover: {
    y: -3,
    boxShadow: "0 10px 25px -5px rgba(0, 102, 51, 0.1)",
  },
};

export const EventCalendar = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      title: "Lagos Health Outreach",
      date: "2024-08-15",
      time: "9:00 AM - 3:00 PM",
      location: "Agege Community Center",
      type: "Medical Camp",
      description: "Free sickle cell screenings + nutritional counseling",
      cta: "Volunteer",
      ctaLink: "/support/volunteer",
      image: "/images/lagos-health.jpg",
      slots: "15/20 volunteers registered",
    },
    {
      id: 2,
      title: "Kano Skills Workshop",
      date: "2024-09-03",
      time: "10:00 AM - 4:00 PM",
      location: "Kano Vocational Hub",
      type: "Training",
      description: "Tailoring & carpentry for 100+ youth",
      cta: "Donate Supplies",
      ctaLink: "/support/donate",
      image: "/images/kano-workshop.jpg",
      requirements: "Fabric, sewing machines, woodworking tools",
    },
    {
      id: 3,
      title: "Borno School Reopening",
      date: "2024-09-20",
      time: "11:00 AM",
      location: "Maiduguri Primary School",
      type: "Education",
      description: "Inauguration of rebuilt classrooms",
      cta: "Attend Event",
      ctaLink: "/contact",
      image: "/images/borno-school.jpg",
      guests: "Governor expected to attend",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-oghosa-green/5 px:4 py-8  lg:py-16 lg:px-24 rounded-2xl"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Upcoming Community Events"
          subtitle="Join us in person or virtually"
        />

        {/* Mobile: Accordion Cards */}
        <div className="md:hidden space-y-4">
          <AnimatePresence>
            {events.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() =>
                    setExpandedEvent(
                      expandedEvent === event.id ? null : event.id
                    )
                  }
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-medium">{event.title}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2 text-oghosa-green" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                      <span className="mx-2">•</span>
                      <FaMapMarkerAlt className="mr-2 text-oghosa-green" />
                      {event.location}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedEvent === event.id ? 180 : 0 }}
                  >
                    <FaChevronDown className="text-oghosa-green" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedEvent === event.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <FaRegClock className="text-oghosa-green" />
                        {event.time}
                      </div>
                      {event.slots && (
                        <div className="text-sm mb-3">
                          <span className="font-medium">Volunteer slots:</span>{" "}
                          {event.slots}
                        </div>
                      )}
                      {event.requirements && (
                        <div className="text-sm mb-3">
                          <span className="font-medium">Needed:</span>{" "}
                          {event.requirements}
                        </div>
                      )}
                      <a
                        href={event.ctaLink}
                        className="inline-block bg-oghosa-gold text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-oghosa-green transition-colors"
                      >
                        {event.cta}
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Desktop: Table Layout */}
        <div className="hidden md:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 p-6 border-b border-oghosa-gold/50 bg-oghosa-gold text-white font-montserrat font-medium">
              <div className="col-span-3">Date & Time</div>
              <div className="col-span-4">Event</div>
              <div className="col-span-3">Location</div>
              <div className="col-span-2">Action</div>
            </div>

            <AnimatePresence>
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ backgroundColor: "rgba(0, 102, 51, 0.03)" }}
                  className="grid grid-cols-12 gap-4 p-6 border-b border-gray-100 items-center"
                >
                  <div className="col-span-3">
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-oghosa-green" />
                      <div>
                        <p className="font-medium">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <FaRegClock size={12} /> {event.time}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.description}</p>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-oghosa-green" />
                      {event.location}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <motion.a
                      href={event.ctaLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-oghosa-gold text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-oghosa-green transition-colors text-center"
                    >
                      {event.cta}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* "View All" Button */}
        <motion.div
          className="text-center mt-12"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            disabled
            className="inline-flex items-center bg-white text-oghosa-green px-6 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all border border-oghosa-green/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            View full calendar <FaChevronRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
