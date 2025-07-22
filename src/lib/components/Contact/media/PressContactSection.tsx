import {
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaLock,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";

const PressContactSection = () => {
  // Data can be moved to a separate config file
  const pressTeam = [
    {
      name: "Adesuwa Ero",
      title: "Director of Communications",
      email: "press@oghosa.org",
      phone: "+234 812 345 6789",
      availability: "24-hour response for urgent inquiries",
      calendly: "https://calendly.com/oghosa-media",
      isPrimary: true,
      image: "/team/adesuwa-ero.jpg",
    },
    {
      name: "Emeka Nwankwo",
      title: "Media Relations Specialist",
      email: "media@oghosa.org",
      phone: "+234 813 987 6543",
      availability: "Mon-Fri, 9AM-5PM WAT",
      calendly: "https://calendly.com/oghosa-media-emeka",
      isPrimary: false,
      image: "/team/emeka-nwankwo.jpg",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title=" Press Contacts"
          subtitle="Reach our communications team directly for interviews, statements, and
          media partnerships."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressTeam.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl shadow-lg overflow-hidden ${
                person.isPrimary
                  ? "border-2 border-oghosa-gold"
                  : "border border-gray-200"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={person.image}
                      alt={`${person.name} portrait`}
                    />
                    {person.isPrimary && (
                      <span className="mt-2 block text-xs font-dm-sans font-bold text-oghosa-gold text-center">
                        PRIMARY CONTACT
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-montserrat font-bold text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-oghosa-green font-dm-sans">
                      {person.title}
                    </p>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center">
                        <FaPhone className="flex-shrink-0 text-oghosa-gold mr-2" />
                        <a
                          href={`tel:${person.phone.replace(/\D/g, "")}`}
                          className="text-gray-700 hover:text-oghosa-green font-dm-sans"
                        >
                          {person.phone}
                        </a>
                      </div>

                      <div className="flex items-center">
                        <FaEnvelope className="flex-shrink-0 text-oghosa-gold mr-2" />
                        <a
                          href={`mailto:${person.email}`}
                          className="text-gray-700 hover:text-oghosa-green font-dm-sans break-all"
                        >
                          {person.email}
                        </a>
                      </div>

                      <div className="flex items-center">
                        <FaCalendarAlt className="flex-shrink-0 text-oghosa-gold mr-2" />
                        <a
                          href={person.calendly}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-700 hover:text-oghosa-green font-dm-sans"
                        >
                          Schedule meeting{" "}
                          <FaExternalLinkAlt className="ml-1 text-xs" />
                        </a>
                      </div>

                      <p className="text-sm text-gray-500 font-dm-sans flex items-start">
                        <FaLock className="flex-shrink-0 text-oghosa-gold mr-2 mt-0.5" />
                        <span>{person.availability}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-oghosa-green/5 p-6 rounded-lg border border-oghosa-green/20">
          <h4 className="font-montserrat font-bold text-oghosa-green mb-2">
            After-Hours Emergency Protocol
          </h4>
          <p className="font-dm-sans text-gray-700 mb-3">
            For urgent media requests outside business hours:
          </p>
          <ol className="list-decimal list-inside space-y-1 font-dm-sans text-gray-700">
            <li>
              Call <span className="font-bold">+234 908 765 4321</span> (24/7
              hotline)
            </li>
            <li>
              Use email subject:{" "}
              <span className="font-mono bg-oghosa-green/10 px-2 py-0.5 rounded">
                URGENT: [Your Outlet]
              </span>
            </li>
            <li>
              Text your inquiry to{" "}
              <span className="font-bold">+234 807 654 3210</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PressContactSection;
