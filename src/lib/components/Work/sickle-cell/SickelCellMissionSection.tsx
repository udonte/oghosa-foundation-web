// src/components/sicklecell/MissionSection.tsx
import { motion } from "framer-motion";

const SickleMissionSection = () => {
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
              <span className="text-oghosa-green">Oghosa Godson</span> lived
              with{" "}
              <span className="text-oghosa-gold font-bold">
                sickle cell anemia
              </span>{" "}
              for 29 years. He knew firsthand the excruciating pain crises, the
              hospital stays, and the loneliness that comes with this invisible
              illness.
            </p>
            <p className="text-lg mt-4">
              More than anything, Oghosa understood the{" "}
              <span className="text-oghosa-green font-semibold">stigma</span> -
              how society often dismisses sickle cell warriors as "too
              sensitive" or "exaggerating their pain."
            </p>

            <p className="text-lg mt-4">
              Before his passing, Oghosa made a vow:{" "}
              <span className="italic">
                "No one should suffer this pain alone."
              </span>
              This foundation exists to fulfill that promise.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="prose max-w-none font-dmsans text-gray-700 border-l-4 border-oghosa-gold pl-6 py-4 md:py-0"
          >
            {/* <h3 className="font-montserrat text-oghosa-green text-xl mb-4">
              Why We Fight
            </h3> */}
            <p>
              In Nigeria, <span className="font-bold">150,000 children</span>{" "}
              are born with SCD annually. Many won't see their 5th birthday.
              Those who survive face:
            </p>
            <ul className="space-y-2 mt-3">
              <li>• Chronic pain with limited pain management</li>
              <li>• Discrimination in schools and workplaces</li>
              <li>• Families bankrupted by medical costs</li>
              <li>• Misinformation about their condition</li>
            </ul>
            <p className="mt-4">
              We exist because{" "}
              <span className="text-oghosa-gold">Oghosa's struggle</span> should
              not be in vain.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SickleMissionSection;
