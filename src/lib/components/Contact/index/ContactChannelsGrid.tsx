import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShareAlt,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaClock,
} from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";

const ContactChannelsGrid = () => {
  const contactItems = [
    {
      id: 1,
      icon: <FaPhone className="text-3xl text-oghosa-green" />,
      title: "Phone",
      items: [
        {
          label: "Primary",
          value: "+234 812 345 6789",
          subtext: "Lagos HQ",
          icon: <FaClock className="text-oghosa-gold mr-1" />,
        },
        {
          label: "Emergency",
          value: "+234 907 654 3210",
          subtext: "24/7 Support",
          icon: <FaClock className="text-red-500 mr-1" />,
        },
      ],
    },
    {
      id: 2,
      icon: <FaEnvelope className="text-3xl text-oghosa-green" />,
      title: "Email",
      items: [
        {
          label: "General",
          value: "contact@oghosa-foundation.org",
          subtext: "Response within 24hrs",
        },
        {
          label: "Media",
          value: "press@oghosa-foundation.org",
          subtext: "For journalists & PR",
        },
      ],
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-3xl text-oghosa-green" />,
      title: "Address",
      items: [
        {
          label: "Headquarters",
          value: "12 Charity Way, Lagos, Nigeria",
          subtext: "Mon-Fri, 8AM-5PM",
        },
        {
          label: "Field Office",
          value: "34 Hope Road, Kano, Nigeria",
          subtext: "Mon-Fri, 9AM-4PM",
        },
      ],
    },
    {
      id: 4,
      icon: <FaShareAlt className="text-3xl text-oghosa-green" />,
      title: "Social Media",
      items: [
        {
          value: (
            <div className="flex space-x-4 justify-center">
              <a
                href="#"
                className="text-gray-600 hover:text-[#1DA1F2] transition-colors"
                target="_blank"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#E1306C] transition-colors"
                target="_blank"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#4267B2] transition-colors"
                target="_blank"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#0077B5] transition-colors"
                target="_blank"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          ),
          subtext: "Connect with us",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 102, 51, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="px-4 py-12 sm:py-16 lg:px-24 bg-white">
      <div className="container mx-auto">
        <SectionHeader
          title=" Reach Out to Us"
          subtitle=" We're available through multiple channels. Choose what works best for you."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-oghosa-gold/40 transition-all"
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {item.title}
                </h3>

                <div className="space-y-4">
                  {item.items.map((subItem, index) => (
                    <div key={index} className="text-center">
                      {subItem.label && (
                        <p className="text-sm font-medium text-gray-500 mb-1">
                          {subItem.label}
                        </p>
                      )}
                      {typeof subItem.value === "string" ? (
                        <a
                          href={
                            item.title === "Email"
                              ? `mailto:${subItem.value}`
                              : item.title === "Phone"
                              ? `tel:${subItem.value.replace(/\s+/g, "")}`
                              : "#"
                          }
                          className="text-oghosa-green hover:text-oghosa-gold font-medium transition-colors"
                        >
                          {subItem.value}
                        </a>
                      ) : (
                        subItem.value
                      )}
                      {subItem.subtext && (
                        <p className="text-xs text-gray-500 mt-1 flex items-center justify-center">
                          {subItem.icon && subItem.icon}
                          {subItem.subtext}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactChannelsGrid;
