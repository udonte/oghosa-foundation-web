// components/AdvocacyMissionSection.tsx
import { motion } from "framer-motion";

const AdvocacyMissionSection = () => {
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
              was founded on the belief that{" "}
              <span className="text-oghosa-gold font-bold">
                sustainable change
              </span>{" "}
              requires both grassroots action and systemic policy reform.
            </p>
            <p className="text-lg mt-4">
              We've witnessed how{" "}
              <span className="text-oghosa-green font-semibold">
                community voices
              </span>{" "}
              - when properly organized and amplified - can transform unjust
              systems and create lasting solutions.
            </p>

            <p className="text-lg mt-4">
              As the saying goes:{" "}
              <span className="italic">
                "Charity feeds the hungry today, but advocacy builds the society
                where no one goes hungry tomorrow."
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
              In Nigeria, <span className="font-bold">millions</span> are
              affected by policies that ignore:
            </p>
            <ul className="space-y-2 mt-3">
              <li>• Education inequality in rural communities</li>
              <li>• Healthcare access for vulnerable populations</li>
              <li>• Economic barriers facing women and youth</li>
              <li>• Environmental injustices in underserved areas</li>
            </ul>
            <p className="mt-4">
              Our advocacy work ensures{" "}
              <span className="text-oghosa-gold">Oghosa's vision</span> of
              systemic justice becomes reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvocacyMissionSection;
