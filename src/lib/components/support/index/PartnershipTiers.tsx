import { motion } from "framer-motion";
import { FaHandshake, FaMedal, FaChartLine } from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";

export const PartnershipTiers = () => {
  const tiers = [
    {
      name: "Bronze",
      icon: <FaMedal className="text-amber-600" />,
      benefits: [
        "Logo placement on website",
        "Recognition in annual report",
        "Social media shoutouts",
        "Quarterly impact reports",
      ],
      range: "₦500K - ₦2M",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      name: "Silver",
      icon: <FaHandshake className="text-gray-400" />,
      benefits: [
        "Project naming rights",
        "Featured blog post",
        "Event speaking opportunities",
        "Dedicated account manager",
        "Annual site visit",
      ],
      range: "₦2M - ₦5M",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-300",
    },
    {
      name: "Gold",
      icon: <FaChartLine className="text-oghosa-gold" />,
      benefits: [
        "Executive advisory role",
        "Priority project selection",
        "Custom impact reporting",
        "VIP event invitations",
        "Media co-branding",
        "Employee engagement programs",
      ],
      range: "₦5M+",
      bgColor: "bg-oghosa-green/10",
      borderColor: "border-oghosa-green/30",
    },
  ];

  return (
    <section className="px-4 py-12 sm:py-16 lg:px-24 bg-white">
      <div className="container mx-auto">
        <SectionHeader
          title="Corporate Partnership Tiers"
          subtitle="Align your brand with meaningful impact"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${tier.bgColor} ${tier.borderColor} border rounded-xl shadow-sm overflow-hidden transition-all`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {tier.name}
                  </h3>
                  <div className="text-3xl">{tier.icon}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-oghosa-green mb-2">
                    Investment: {tier.range}
                  </h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        tier.name === "Bronze"
                          ? "bg-amber-400"
                          : tier.name === "Silver"
                          ? "bg-gray-400"
                          : "bg-oghosa-gold"
                      }`}
                      style={{
                        width:
                          tier.name === "Bronze"
                            ? "33%"
                            : tier.name === "Silver"
                            ? "66%"
                            : "100%",
                      }}
                    />
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-oghosa-green mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium ${
                    tier.name === "Bronze"
                      ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
                      : tier.name === "Silver"
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      : "bg-oghosa-gold text-white hover:bg-oghosa-green"
                  } transition-colors`}
                >
                  Partner at {tier.name} Level
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 p-6 rounded-xl border border-gray-200"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaHandshake className="text-oghosa-green" />
            Custom Partnership Options
          </h3>
          <p className="text-gray-600 mb-4">
            Have a unique collaboration idea? We welcome tailored partnerships
            for:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {[
              "Multi-year commitments",
              "Employee matching programs",
              "Cause-related marketing",
              "Skills-based volunteering",
              "In-kind donations",
              "Research collaborations",
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <span className="text-oghosa-green mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-white text-oghosa-green border border-oghosa-green hover:bg-oghosa-green hover:text-white px-6 py-2 rounded-lg transition-colors">
            Discuss Custom Partnership
          </button>
        </motion.div>
      </div>
    </section>
  );
};
