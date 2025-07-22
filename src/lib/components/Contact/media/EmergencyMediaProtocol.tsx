import { FaPhoneAlt, FaLock, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";

const EmergencyMediaProtocol = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-oghosa-green/5 border-t border-b border-oghosa-green/20"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Emergency Media Protocol"
          subtitle="For urgent press inquiries outside normal business hours"
          icon={<FaExclamationTriangle className="h-8 w-8 text-oghosa-green" />}
        />
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0">
                <FaLock className="h-6 w-6 text-oghosa-gold mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold font-montserrat text-gray-900">
                  For Breaking News Inquiries:
                </h3>
              </div>
            </div>

            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-oghosa-green text-white font-montserrat font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  1
                </span>
                <div>
                  <p className="font-dm-sans font-medium text-gray-900">
                    Call our 24/7 media hotline:
                  </p>
                  <a
                    href="tel:+2349087654321"
                    className="inline-flex items-center font-dm-sans text-lg text-oghosa-green hover:text-oghosa-gold mt-1 transition-colors"
                  >
                    <FaPhoneAlt className="mr-2" />
                    +234 908 765 4321
                  </a>
                  <p className="text-sm text-gray-500 font-dm-sans mt-1">
                    (Press officers available around the clock)
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 bg-oghosa-green text-white font-montserrat font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  2
                </span>
                <div>
                  <p className="font-dm-sans font-medium text-gray-900">
                    Email with urgent subject line:
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-md bg-oghosa-green/10 font-mono text-sm font-medium text-oghosa-green">
                      URGENT: [Your Outlet Name]
                    </span>
                    <span className="text-sm text-gray-500 font-dm-sans">
                      Send to: press@oghosa.org
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-dm-sans mt-1">
                    Include deadline in first paragraph
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 bg-oghosa-green text-white font-montserrat font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  3
                </span>
                <div>
                  <p className="font-dm-sans font-medium text-gray-900">
                    Review our crisis response policies:
                  </p>
                  <a
                    href="/legal/media-policy"
                    className="inline-flex items-center font-dm-sans text-oghosa-green hover:text-oghosa-gold mt-1 transition-colors"
                  >
                    <FaExclamationTriangle className="mr-2" />
                    Crisis Response FAQ
                  </a>
                </div>
              </li>
            </ol>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaLock className="h-5 w-5 text-oghosa-gold mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="font-montserrat font-bold text-gray-900">
                    Confidentiality Notice
                  </h4>
                  <p className="font-dm-sans text-gray-600 mt-1">
                    This contact information is for verified journalists only.
                    Unauthorized use may result in legal action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EmergencyMediaProtocol;
