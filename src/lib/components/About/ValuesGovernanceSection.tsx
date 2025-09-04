import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHeart,
  FaShieldAlt,
  FaHandshake,
  FaRocket,
  FaLeaf,
  FaChartPie,
  FaEye,
  FaBalanceScale,
  FaCheckCircle,
  FaUsers,
  FaLock,
  FaAward,
} from "react-icons/fa";
import SectionHeader from "../common/SectionHeader";
import { Link } from "react-router-dom"; // Fixed import

const ValuesGovernanceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Core values data
  const coreValues = [
    {
      title: "Compassion",
      icon: <FaHeart className="text-2xl" />,
      description:
        "We prioritize care and empathy in all we do, ensuring our actions always consider the human impact.",
      color: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      title: "Integrity",
      icon: <FaShieldAlt className="text-2xl" />,
      description:
        "We uphold transparency and accountability in all our operations, maintaining the highest ethical standards.",
      color: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Collaboration",
      icon: <FaHandshake className="text-2xl" />,
      description:
        "We value partnerships that drive meaningful change, working together to amplify our impact.",
      color: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Empowerment",
      icon: <FaRocket className="text-2xl" />,
      description:
        "We are committed to helping individuals realize their potential through education and opportunity.",
      color: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Sustainability",
      icon: <FaLeaf className="text-2xl" />,
      description:
        "We focus on long-term solutions that create lasting impact for communities and the environment.",
      color: "bg-teal-50",
      textColor: "text-teal-600",
    },
  ];

  // Governance principles
  const governancePrinciples = [
    {
      title: "Financial Transparency",
      icon: <FaChartPie className="text-xl" />,
      description: "Annual independent audits and public financial reports",
    },
    {
      title: "Accountability",
      icon: <FaEye className="text-xl" />,
      description:
        "Clear metrics for measuring impact and regular reporting to stakeholders",
    },
    {
      title: "Ethical Operations",
      icon: <FaBalanceScale className="text-xl" />,
      description:
        "Adherence to the highest ethical standards in all activities",
    },
    {
      title: "Stakeholder Inclusion",
      icon: <FaUsers className="text-xl" />,
      description: "Engaging community voices in decision-making processes",
    },
  ];

  // Financial accountability
  const financialAccountability = [
    {
      percentage: 85,
      label: "Program Expenses",
      description: "Directly allocated to initiatives and services",
    },
    {
      percentage: 10,
      label: "Administrative Costs",
      description: "Essential operational expenses",
    },
    {
      percentage: 5,
      label: "Fundraising",
      description: "Costs associated with resource mobilization",
    },
  ];

  return (
    <section
      id="values-governance"
      ref={ref}
      className="px-4 py-8 lg:px-24 lg:py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader
          title="Our Values & Governance"
          subtitle="Guided by our core principles and committed to transparency,
            accountability, and ethical excellence in all we do."
        />

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-montserrat font-bold text-oghosa-green text-center mb-10">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-oghosa-green text-center"
              >
                <div
                  className={`${value.color} ${value.textColor} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {value.icon}
                </div>
                <h4 className="font-montserrat font-bold text-oghosa-green mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Governance & Accountability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-montserrat font-bold text-oghosa-green text-center mb-10">
              Governance & Accountability
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-montserrat font-bold text-xl text-oghosa-green mb-4">
                  Our Commitment
                </h4>
                <p className="text-gray-700 mb-6">
                  The Oghosa Godson Foundation operates with the highest
                  standards of governance, ensuring that every resource
                  entrusted to us is used efficiently and effectively to
                  maximize impact.
                </p>

                <div className="space-y-4">
                  {governancePrinciples.map((principle, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-oghosa-green text-white rounded-full p-2 mr-4 flex-shrink-0">
                        {principle.icon}
                      </div>
                      <div>
                        <h5 className="font-montserrat font-bold text-oghosa-green">
                          {principle.title}
                        </h5>
                        <p className="text-gray-600 text-sm">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-xl text-oghosa-green mb-4">
                  Financial Accountability
                </h4>
                <p className="text-gray-700 mb-6">
                  We maintain transparent financial practices to ensure donor
                  confidence and maximize the impact of every contribution.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-montserrat font-bold text-oghosa-green">
                      Expense Allocation
                    </h5>
                    <FaLock className="text-oghosa-green" />
                  </div>

                  <div className="space-y-4">
                    {financialAccountability.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">
                            {item.label}
                          </span>
                          <span className="text-sm font-bold text-oghosa-green">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-oghosa-gold/30 rounded-full h-2.5">
                          <div
                            className="bg-oghosa-green h-2.5 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 flex items-center">
                    <FaCheckCircle className="text-oghosa-green mr-2" />
                    <span className="text-sm text-gray-600">
                      Annual independent audit conducted
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to={"/about/reports"}
                className="bg-oghosa-green hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center"
              >
                <FaAward className="mr-2" /> View Our Annual Reports
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Ethical Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-oghosa-green rounded-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-montserrat font-bold text-white text-center mb-10">
            Ethical Guidelines
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-montserrat font-bold text-xl text-oghosa-gold mb-4">
                Code of Conduct
              </h4>
              <p className="text-white mb-6">
                All staff, volunteers, and partners of the Oghosa Godson
                Foundation adhere to a strict code of conduct that ensures
                ethical behavior in all operations.
              </p>

              <ul className="space-y-3">
                {[
                  "Zero tolerance for corruption or misuse of resources",
                  "Respect for all individuals and communities we serve",
                  "Confidentiality of sensitive information",
                  "Non-discrimination in hiring and service provision",
                  "Conflict of interest disclosure and management",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-white">
                    <div className="bg-oghosa-gold rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-oghosa-green rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-bold text-xl text-white mb-4">
                Impact Measurement
              </h4>
              <p className="text-white mb-6">
                We rigorously measure and evaluate our programs to ensure they
                deliver meaningful, sustainable change.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { value: "95%", label: "Program Satisfaction" },
                    { value: "12K+", label: "Beneficiaries Tracked" },
                    { value: "87%", label: "Long-term Impact" },
                    { value: "100%", label: "Transparency Rating" },
                  ].map((metric, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-montserrat font-bold text-oghosa-green">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="text-oghosa-green font-medium text-sm inline-flex items-center group">
                    See our impact metrics methodology
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesGovernanceSection;
