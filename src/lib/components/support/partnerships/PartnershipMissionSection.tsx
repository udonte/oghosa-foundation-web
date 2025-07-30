// components/PartnershipMissionSection.tsx
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const PartnershipMissionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission Statement */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose max-w-none"
          >
            <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-6">
              Powering Change Through Strategic Partnerships
            </h2>

            <p className="font-dmsans text-gray-700 text-lg leading-relaxed">
              The{" "}
              <span className="text-oghosa-green font-semibold">
                Oghosa Godson Foundation
              </span>{" "}
              serves as a bridge between private sector innovation and community
              transformation. We unite corporations, institutions, and
              individuals to tackle Nigeria's most urgent challenges in
              education, healthcare, and economic empowerment.
              <br />
              <br />
              By partnering with us, you become part of a mission that is not
              just about philanthropy, but about creating sustainable impact.
            </p>

            <p className="font-dmsans text-gray-700 text-lg leading-relaxed mt-6">
              Our{" "}
              <span className="text-oghosa-gold font-medium">
                corporate partnerships
              </span>{" "}
              combine business expertise with sustainable development goals,
              while collaborations with{" "}
              <span className="text-oghosa-gold font-medium">
                NGOs, faith groups, and government agencies
              </span>{" "}
              amplify our impact where it's needed most.
            </p>

            <div className="mt-8">
              <a
                href="/partnership-prospectus"
                download
                className="inline-flex items-center text-oghosa-green font-montserrat font-bold hover:text-oghosa-gold transition-colors"
              >
                Download Partnership Prospectus
                <FiArrowRight className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Partnership Channels */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-oghosa-green"
          >
            <h3 className="font-montserrat text-xl text-oghosa-green mb-6">
              Partner With Us As:
            </h3>

            <ul className="space-y-6">
              {[
                {
                  title: "Corporate Partners",
                  desc: "Align your CSR with our proven programs through funding, employee volunteering, or cause marketing",
                },
                {
                  title: "Government Agencies",
                  desc: "Collaborate on large-scale community development initiatives",
                },
                {
                  title: "Faith Organizations",
                  desc: "Mobilize your congregation for targeted outreach programs",
                },
                {
                  title: "Non-Profit Allies",
                  desc: "Combine resources for greater impact through joint initiatives",
                },
                {
                  title: "Celebrities & Influencers",
                  desc: "Leverage your platform to raise awareness and funds for our mission",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
                  <h4 className="font-montserrat font-bold text-oghosa-green">
                    {item.title}
                  </h4>
                  <p className="font-dmsans text-gray-600 mt-1">{item.desc}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="font-dmsans text-gray-700">
                <strong>Contact our Partnerships Team:</strong>
                <br />
                <a
                  href="tel:+2342012918754"
                  className="text-oghosa-green hover:text-oghosa-gold"
                >
                  020 1291 8754
                </a>
                <br />
                <a
                  href="mailto:partnerships@oghosa-foundation.org"
                  className="text-oghosa-green hover:text-oghosa-gold"
                >
                  partnerships@oghosa-foundation.org
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipMissionSection;
