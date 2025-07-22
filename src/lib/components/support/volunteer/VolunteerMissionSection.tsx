// components/VolunteerMissionSection.tsx
import { motion } from "framer-motion";

const VolunteerMissionSection = () => {
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
              was built on the belief that{" "}
              <span className="text-oghosa-gold font-bold">
                everyone has something valuable to give
              </span>{" "}
              - not just money, but time, skills, and compassion.
            </p>
            <p className="text-lg mt-4">
              Our volunteers form the backbone of every program, proving that{" "}
              <span className="text-oghosa-green font-semibold">
                community transformation
              </span>{" "}
              happens when people come together in service.
            </p>

            <p className="text-lg mt-4">
              We believe in the saying:{" "}
              <span className="italic">
                "Change doesn't require grand gestures, just many hands doing
                small things with great love."
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
              Since our founding,{" "}
              <span className="text-oghosa-green font-semibold">
                over 30,000 volunteers
              </span>{" "}
              have dedicated their time and skills to uplift communities across
              Nigeria. Together, we have:
            </p>
            <ul className="space-y-2 mt-3">
              <li>• 240 community development projects</li>
              <li>• Education for 15,000+ children</li>
              <li>• Skills training for 8,000 youth</li>
              <li>• Healthcare access for 50,000 families</li>
            </ul>
            <p className="mt-4">
              Your time creates{" "}
              <span className="text-oghosa-gold">ripples of impact</span> that
              last generations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerMissionSection;
