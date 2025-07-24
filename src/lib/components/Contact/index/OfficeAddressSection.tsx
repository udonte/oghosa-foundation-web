import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";

export const OfficeAddressSection = () => {
  return (
    <section className="px-4 py-8 sm:py-16 lg:px-24 bg-white">
      <div className="container mx-auto">
        <SectionHeader
          title="Our Headquarters"
          subtitle="Visit or contact our main office"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Address Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-oghosa-green/10 p-3 rounded-full">
                <FaMapMarkerAlt className="text-2xl text-oghosa-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">OGF Headquarters</h3>
                <address className="not-italic text-gray-600">
                  9, Michael Street
                  <br />
                  Mangoro, Lagos
                  <br />
                  Nigeria
                </address>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaClock className="text-oghosa-green" />
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-oghosa-green" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+2348123456789"
                    className="text-oghosa-green hover:text-oghosa-gold transition-colors"
                  >
                    +234 812 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-oghosa-green" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:info@oghosa-foundation.org"
                    className="text-oghosa-green hover:text-oghosa-gold transition-colors"
                  >
                    info@oghosa-foundation.org
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="h-96 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d833.184330037998!2d3.32669044529023!3d6.607732605197571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b919d187b2b49%3A0x86f054bb16e4e027!2sMangoro%20Bus%20Stop!5e0!3m2!1sen!2sng!4v1753217482067!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OGF Headquarters Location"
            />
          </motion.div>
        </motion.div>

        {/* Additional Offices */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-oghosa-gold mb-6 text-center">
            Our Other Offices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                city: "Kano",
                address: "34 Hope Road, Kano State",
                phone: "+234 907 654 3210",
                hours: "Mon-Fri: 9AM-4PM",
              },
              {
                city: "Abuja",
                address: "12 Unity Avenue, FCT",
                phone: "+234 803 123 4567",
                hours: "Mon-Fri: 8:30AM-5PM",
              },
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h4 className="font-bold text-lg mb-2">{office.city} Office</h4>
                <address className="not-italic text-gray-600 mb-3">
                  {office.address}
                </address>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <FaPhone className="text-oghosa-green" />
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, "")}`}
                    className="hover:text-oghosa-green"
                  >
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaClock className="text-oghosa-green" />
                  {office.hours}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
