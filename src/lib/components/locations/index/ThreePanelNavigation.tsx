import { motion } from "framer-motion";
import { FiUsers, FiMapPin } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router";

const ThreePanelNavigation = () => {
  const panels = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Our Communities",
      description: "Meet the people we serve",
      href: "/locations/communities",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Impact Areas",
      description: "See our program hotspots",
      href: "/locations/impact",
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Partnerships",
      description: "How we collaborate locally",
      href: "/locations/partnerships",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {panels.map((panel, index) => (
          <motion.div
            key={panel.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={panel.href}>
              <a
                className={`group block h-full p-8 rounded-xl bg-oghosa-green/10 border border-transparent hover:border-oghosa-gold transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex flex-col items-start h-full">
                  <div className="p-3 rounded-full bg-oghosa-green/20 text-oghosa-green mb-6 group-hover:bg-oghosa-gold group-hover:text-white transition-colors duration-300">
                    {panel.icon}
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-oghosa-green mb-2">
                    {panel.title}
                  </h3>
                  <p className="text-gray-600 font-dm-sans mb-6 flex-grow">
                    {panel.description}
                  </p>
                  <span className="inline-flex items-center font-dm-sans text-oghosa-green group-hover:text-oghosa-gold font-medium transition-colors duration-300">
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ThreePanelNavigation;
