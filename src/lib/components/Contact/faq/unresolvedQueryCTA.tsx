import { FaEnvelope, FaComments, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

const UnresolvedQueryCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-oghosa-green/5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-xl shadow-md p-8 sm:p-10 border border-oghosa-green/20">
          <SectionHeader
            title="Still have questions?"
            subtitle="  Our team responds to inquiries within 24 hours"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email Option */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-5 rounded-lg border border-gray-200 hover:border-oghosa-gold transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="bg-oghosa-green/10 p-3 rounded-full mb-4 text-oghosa-green">
                  <FaEnvelope className="h-6 w-6" />
                </div>
                <h3 className="font-montserrat font-bold text-gray-900 mb-2">
                  Email Us
                </h3>
                <a
                  href="mailto:contact@oghosa.org"
                  className="font-dm-sans text-oghosa-green hover:text-oghosa-gold transition-colors text-sm break-all"
                >
                  contact@oghosa.org
                </a>
              </div>
            </motion.div>

            {/* Live Chat Option */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-5 rounded-lg border border-gray-200 hover:border-oghosa-gold transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="bg-oghosa-green/10 p-3 rounded-full mb-4 text-oghosa-green">
                  <FaComments className="h-6 w-6" />
                </div>
                <h3 className="font-montserrat font-bold text-gray-900 mb-2">
                  Live Chat
                </h3>
                <button className="font-dm-sans text-sm text-oghosa-green hover:text-oghosa-gold transition-colors">
                  Click to start chat
                </button>
              </div>
            </motion.div>

            {/* Phone Option */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-5 rounded-lg border border-gray-200 hover:border-oghosa-gold transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="bg-oghosa-green/10 p-3 rounded-full mb-4 text-oghosa-green">
                  <FaPhoneAlt className="h-6 w-6" />
                </div>
                <h3 className="font-montserrat font-bold text-gray-900 mb-2">
                  Call Us
                </h3>
                <a
                  href="tel:+2349087654321"
                  className="font-dm-sans text-sm text-oghosa-green hover:text-oghosa-gold transition-colors"
                >
                  +234 908 765 4321
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  Mon-Fri, 9AM-5PM WAT
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="font-dm-sans text-gray-600 mb-4">
              Prefer to visit us in person?
            </p>
            <Link
              to="/contact#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-oghosa-green hover:bg-oghosa-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oghosa-gold transition-all"
            >
              View office locations
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default UnresolvedQueryCTA;
