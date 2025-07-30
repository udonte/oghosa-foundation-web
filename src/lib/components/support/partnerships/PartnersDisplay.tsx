// components/PartnersShowcase.tsx
import { motion } from "framer-motion";
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
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

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

const PartnersDisplay = () => {
  return (
    <section className="py-16 lg:px-24 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Trusted Partners"
          subtitle="Organizations who share our vision for community transformation"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-sm transition-all"
            >
              <img
                src={partner.image}
                alt={`Partner ${partner.id}`}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-block border-2 border-oghosa-green text-oghosa-green hover:bg-oghosa-green hover:text-white font-montserrat font-bold py-3 px-8 rounded-md transition-colors"
          >
            Join Our Partner Network
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersDisplay;
