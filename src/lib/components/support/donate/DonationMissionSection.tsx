// src/components/donations/MissionSection.tsx
import { motion } from "framer-motion";

const DonationMissionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center text-lg">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="prose max-w-none font-dmsans text-gray-700"
          >
            <p className="">
              The{" "}
              <span className="text-oghosa-green">
                Oghosa Godson Foundation
              </span>{" "}
              was established to honor the legacy of{" "}
              <span className="text-oghosa-gold font-bold">
                compassion and service
              </span>{" "}
              that defined Oghosa's life.
            </p>
            <p className="text-lg mt-4">
              We believe in{" "}
              <span className="text-oghosa-green font-semibold">
                empowering communities
              </span>{" "}
              through education, health initiatives, and sustainable support
              systems.
            </p>

            <p className="text-lg mt-4">
              Our mission is simple:{" "}
              <span className="italic">
                "To create opportunities where they are needed most."
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="prose max-w-none font-dmsans text-gray-700 border-l-4 border-oghosa-gold pl-6 py-4 md:py-0"
          >
            <p>
              In underserved communities,{" "}
              <span className="font-bold">every donation</span> directly
              impacts:
            </p>
            <ul className="space-y-2 mt-3">
              <li>• Children's access to quality education</li>
              <li>• Families in need of healthcare and nutrition</li>
              <li>• Skills training for economic independence</li>
              <li>• Crisis support for vulnerable groups</li>
            </ul>
            <p className="mt-4">
              Your contribution helps us honor{" "}
              <span className="text-oghosa-gold">Oghosa's vision</span> of a
              more equitable world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationMissionSection;
