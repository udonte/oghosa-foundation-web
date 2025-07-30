import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router";

const PartnerShowcase = () => {
  const partners = [
    {
      id: 1,
      name: "Global Health Initiative",
      logo: "/partners/global-health.png",
      url: "https://example.com",
      since: "2018",
    },
    {
      id: 2,
      name: "Education For All",
      logo: "/partners/education-for-all.png",
      url: "https://example.com",
      since: "2019",
    },
    {
      id: 3,
      name: "Sickle Cell Foundation",
      logo: "/partners/sickle-cell-foundation.png",
      url: "https://example.com",
      since: "2020",
    },
    {
      id: 4,
      name: "Food Security Network",
      logo: "/partners/food-security.png",
      url: "https://example.com",
      since: "2017",
    },
    {
      id: 5,
      name: "Skills Development Africa",
      logo: "/partners/skills-africa.png",
      url: "https://example.com",
      since: "2021",
    },
    {
      id: 6,
      name: "United Charities",
      logo: "/partners/united-charities.png",
      url: "https://example.com",
      since: "2016",
    },
  ];

  return (
    <section className="px-4 py-16 lg:px-24 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-oghosa-green/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-oghosa-gold/10 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4">
            Our Trusted Partners
          </h2>
          <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
          <p className="font-dmsans text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading organizations to amplify our impact
          </p>
        </motion.div>

        {/* Partner grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col items-center p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-24 flex items-center justify-center mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-gray-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
              <div className="text-center">
                <h4 className="font-montserrat text-sm font-medium text-gray-700 mb-1">
                  {partner.name}
                </h4>
                <div className="flex items-center justify-center">
                  <span className="font-dmsans text-xs text-oghosa-gold mr-1">
                    Since {partner.since}
                  </span>
                  <FiExternalLink className="text-gray-400 text-xs" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-dmsans text-gray-600 mb-6">
            Want to join our network of change-makers?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-oghosa-green hover:bg-oghosa-gold text-white font-montserrat font-semibold py-3 px-8 rounded-lg transition-colors duration-300 group"
          >
            Become a Partner
            <FiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerShowcase;
