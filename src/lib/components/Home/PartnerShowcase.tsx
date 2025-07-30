import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FiExternalLink } from "react-icons/fi";
import Client1 from "@/assets/images/partners/dangote.png";
import Client2 from "@/assets/images/partners/edo.png";
import Client3 from "@/assets/images/partners/glo.png";
import Client4 from "@/assets/images/partners/imf.png";
import Client5 from "@/assets/images/partners/lagos.png";
import Client6 from "@/assets/images/partners/arise.jpeg";
import Client7 from "@/assets/images/partners/bua.png";
import Client8 from "@/assets/images/partners/dstv.png";
import Client9 from "@/assets/images/partners/hiptv.jpeg";
import Client10 from "@/assets/images/partners/mavin.jpeg";
import Client11 from "@/assets/images/partners/samsung.png";
import Client12 from "@/assets/images/partners/spotify.png";
import Client13 from "@/assets/images/partners/usaid.png";

const PartnerShowcase = () => {
  const partners = [
    {
      id: 1,
      image: Client1,
    },
    {
      id: 2,
      image: Client2,
    },
    {
      id: 3,
      image: Client3,
    },
    {
      id: 4,
      image: Client4,
    },
    {
      id: 5,
      image: Client5,
    },
    {
      id: 6,
      image: Client6,
    },
    {
      id: 7,
      image: Client7,
    },
    {
      id: 8,
      image: Client8,
    },
    {
      id: 9,
      image: Client9,
    },
    {
      id: 10,
      image: Client10,
    },
    {
      id: 11,
      image: Client11,
    },
    {
      id: 12,
      image: Client12,
    },
    {
      id: 13,
      image: Client13,
    },
  ];

  return (
    <section className="px-4 py-16 relative overflow-hidden">
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
        <div className="w-full overflow-hidden">
          <div className="">
            <Marquee
              className="w-full flex items-center justify-center"
              speed={25}
              pauseOnHover={true}
            >
              {partners.map((partner) => (
                <div key={partner.id} className="mx-4 w-[100px] md:w-[150px]">
                  <img
                    src={partner.image}
                    alt="client"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

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
          <a
            href="/support/partner"
            className="inline-flex items-center bg-oghosa-green hover:bg-oghosa-gold text-white font-montserrat font-semibold py-3 px-8 rounded-lg transition-colors duration-300 group"
          >
            Become a Partner
            <FiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerShowcase;
