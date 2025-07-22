// components/PartnershipProcess.tsx
import { motion } from "framer-motion";
import {
  FiSearch,
  FiCalendar,
  FiUsers,
  FiBarChart2,
  FiAward,
} from "react-icons/fi";
import SectionHeader from "../../common/SectionHeader";

type ProcessStep = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  duration?: string;
};

const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: <FiSearch className="text-oghosa-green" size={24} />,
    title: "Discovery Call",
    description:
      "We discuss your organization's goals and identify alignment opportunities",
    duration: "30-45 mins",
  },
  {
    id: 2,
    icon: <FiUsers className="text-oghosa-green" size={24} />,
    title: "Proposal Development",
    description:
      "Our team creates a customized partnership plan with clear objectives",
    duration: "1-2 weeks",
  },
  {
    id: 3,
    icon: <FiCalendar className="text-oghosa-green" size={24} />,
    title: "Program Design",
    description: "We co-create implementation timelines and success metrics",
    duration: "2-3 weeks",
  },
  {
    id: 4,
    icon: <FiUsers className="text-oghosa-green" size={24} />,
    title: "Onboarding",
    description: "Your team receives orientation and resource materials",
    duration: "1 week",
  },
  {
    id: 5,
    icon: <FiBarChart2 className="text-oghosa-green" size={24} />,
    title: "Implementation",
    description: "Joint execution with regular progress reviews",
    duration: "Ongoing",
  },
  {
    id: 6,
    icon: <FiAward className="text-oghosa-green" size={24} />,
    title: "Impact Evaluation",
    description: "We share comprehensive reports and celebrate successes",
    duration: "Quarterly",
  },
];

const PartnershipProcess = () => {
  return (
    <section className="py-8 px-4 lg:px-24 lg:py-16 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeader
          title="Our Partnership Process"
          subtitle="A transparent journey from initial contact to measurable impact"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block h-full w-0.5 bg-oghosa-green/20 "></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="flex items-start justify-center md:justify-start"
              >
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all h-full border-l-4 border-oghosa-green">
                  <div className="flex items-start mb-4">
                    <div className="bg-oghosa-green/10 p-3 rounded-full mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-montserrat text-xl font-semibold text-oghosa-green">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <span className="font-dmsans text-sm text-oghosa-gold">
                          {step.duration}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="font-dmsans text-gray-700 pl-16">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#start-process"
            className="inline-block bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-bold py-3 px-8 rounded-md transition-colors"
          >
            Begin Your Partnership Journey
          </a>
          <p className="font-dmsans text-gray-600 mt-4">
            Have questions? Email{" "}
            <a
              href="mailto:partners@oghosa-foundation.org"
              className="text-oghosa-green underline"
            >
              partners@oghosa-foundation.org
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipProcess;
