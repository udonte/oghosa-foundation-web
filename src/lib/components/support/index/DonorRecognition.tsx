import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";

// Import partner logos (replace with your actual imports)
import BuaLogo from "@/assets/images/partners/bua.png";
import DstvLogo from "@/assets/images/partners/dstv.png";
import HiptvLogo from "@/assets/images/partners/hiptv.jpeg";
import MavinLogo from "@/assets/images/partners/mavin.jpeg";
import SamsungLogo from "@/assets/images/partners/samsung.png";
import SpotifyLogo from "@/assets/images/partners/spotify.png";
import UsaidLogo from "@/assets/images/partners/usaid.png";

export const DonorRecognition = () => {
  const partners = [
    BuaLogo,
    DstvLogo,
    HiptvLogo,
    MavinLogo,
    SamsungLogo,
    SpotifyLogo,
    UsaidLogo,
  ];

  const donorStories = [
    {
      id: 1,
      quote:
        "Seeing the impact reports showing how our contributions transformed schools made us double our annual commitment.",
      name: "BUA Group",
      role: "Corporate Partner since 2018",
      impact: "Funded 12 classrooms in Lagos",
    },
    {
      id: 2,
      quote:
        "The transparency in how funds are used gives us confidence our donations create real change where it's needed most.",
      name: "Amina Yusuf",
      role: "Monthly Donor",
      impact: "Sponsors 3 children's education",
    },
    {
      id: 3,
      quote:
        "Partnering with OGF allowed us to amplify our CSR impact beyond what we could achieve alone.",
      name: "Samsung Nigeria",
      role: "Technology Partner",
      impact: "Provided devices for 5 digital labs",
    },
  ];

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
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="px-4 py-12 sm:py-16 lg:px-24 bg-oghosa-gold/5">
      <div className="container mx-auto">
        <SectionHeader
          title="Our Valued Supporters"
          subtitle="Trusted by organizations and individuals committed to change"
        />

        {/* Partner Logo Wall */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <h3 className="text-center text-xl font-medium text-gray-600 mb-8">
            Trusted Partnerships
          </h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
            {partners.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-xs border border-gray-100 hover:shadow-sm transition-all"
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="h-12 sm:h-16 object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Donor Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-xl font-medium text-gray-600 mb-8">
            Why We Give
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donorStories.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: story.id * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start mb-6">
                    <div className="text-4xl text-oghosa-green mr-3">"</div>
                    <p className="text-gray-600 italic">{story.quote}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-bold text-oghosa-green">
                      {story.name}
                    </h4>
                    <p className="text-sm text-gray-500">{story.role}</p>
                    <div className="mt-2 text-sm bg-oghosa-green/5 px-3 py-1 rounded-full inline-block">
                      <span className="font-medium">Impact:</span>{" "}
                      {story.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Join our community of changemakers
          </p>
          <a
            href="/donate"
            className="inline-block bg-oghosa-green text-white px-8 py-3 rounded-full font-medium hover:bg-oghosa-gold transition-colors"
          >
            Become a Supporter
          </a>
        </motion.div>
      </div>
    </section>
  );
};
