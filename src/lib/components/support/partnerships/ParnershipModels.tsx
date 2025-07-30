// components/PartnershipModels.tsx
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiUsers,
  FiHome,
  FiGlobe,
  FiLayers,
  FiBook,
} from "react-icons/fi";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

const models = [
  {
    title: "Corporate Sponsorship",
    icon: <FiBriefcase className="text-oghosa-gold" size={24} />,
    desc: "Align your CSR objectives with our proven programs through strategic funding or in-kind support",
    examples: [
      "Adopt-a-School education initiatives",
      "Healthcare infrastructure projects",
      "Vocational training centers",
    ],
    benefits: [
      "Brand visibility across our networks",
      "Employee engagement opportunities",
      "ESG reporting support",
    ],
  },
  {
    title: "NGO Collaborations",
    icon: <FiUsers className="text-oghosa-gold" size={24} />,
    desc: "Combine resources and expertise to scale impact through joint initiatives",
    examples: [
      "Cross-program referrals",
      "Joint grant applications",
      "Capacity building workshops",
    ],
    benefits: [
      "Shared monitoring & evaluation",
      "Co-branded campaigns",
      "Technical assistance",
    ],
  },
  {
    title: "Government Partnerships",
    icon: <FiHome className="text-oghosa-gold" size={24} />,
    desc: "Complement public sector efforts through community-based implementation",
    examples: [
      "SDG-aligned projects",
      "Social welfare program support",
      "Policy advocacy coalitions",
    ],
    benefits: [
      "Local community buy-in",
      "Scalable implementation models",
      "Public-private coordination",
    ],
  },
  {
    title: "International Alliances",
    icon: <FiGlobe className="text-oghosa-gold" size={24} />,
    desc: "Connect global resources with local expertise for systemic change",
    examples: [
      "Diaspora engagement programs",
      "Knowledge exchange initiatives",
      "Cross-border funding vehicles",
    ],
    benefits: [
      "Best practice sharing",
      "Global networking",
      "Multilateral funding access",
    ],
  },
  {
    title: "Faith-Based Engagement",
    icon: <FiLayers className="text-oghosa-gold" size={24} />,
    desc: "Mobilize congregational networks for targeted community transformation",
    examples: [
      "Holiday outreach programs",
      "Moral leadership training",
      "Household empowerment initiatives",
    ],
    benefits: [
      "Grassroots mobilization",
      "Values-aligned programming",
      "Trusted community entry points",
    ],
  },
  {
    title: "Celebrity & Influencer Partnerships",
    icon: <FiBook className="text-oghosa-gold" size={24} />,
    desc: "Leverage public figures to amplify awareness and drive action",
    examples: [
      "Advocacy campaigns",
      "Fundraising events",
      "Social media awareness drives",
    ],
    benefits: [
      "Increased visibility",
      "Engaged audiences",
      "Authentic storytelling",
    ],
  },
  {
    title: "Academic Partnerships",
    icon: <FiBook className="text-oghosa-gold" size={24} />,
    desc: "Bridge research and practice through evidence-based program development",
    examples: [
      "Impact evaluation studies",
      "Student internship programs",
      "Curriculum co-creation",
    ],
    benefits: [
      "Data-driven decision making",
      "Talent pipeline development",
      "Innovation labs",
    ],
  },
];

const PartnershipModels = () => {
  return (
    <section className="py-16 lg:px-24 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Partnership Models "
          subtitle="Flexible collaboration frameworks tailored to your organization's goals and capacity"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-oghosa-green hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl text-oghosa-gold">{model.icon}</div>
                <h3 className="font-montserrat text-xl font-semibold text-oghosa-green">
                  {model.title}
                </h3>
              </div>
              <p className="font-dmsans text-gray-700 mb-4">{model.desc}</p>

              <div className="mb-5">
                <h4 className="font-montserrat font-bold text-sm text-oghosa-green/80 mb-2">
                  EXAMPLE PROJECTS
                </h4>
                <ul className="space-y-1 font-dmsans text-gray-600">
                  {model.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-oghosa-green mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-sm text-oghosa-green/80 mb-2">
                  YOUR BENEFITS
                </h4>
                <ul className="space-y-1 font-dmsans text-gray-600">
                  {model.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-oghosa-gold mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
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
            Customize Your Partnership
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipModels;
