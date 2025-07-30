import {
  FaChartPie,
  FaFileAlt,
  FaBalanceScale,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

const TransparencyFinancials = () => {
  // Financial allocation data
  const financialAllocation = [
    { name: "Programs", value: 87, color: "bg-oghosa-green" },
    { name: "Administration", value: 10, color: "bg-oghosa-gold" },
    { name: "Fundraising", value: 3, color: "bg-gray-300" },
  ];

  // Key financial metrics
  const financialMetrics = [
    {
      icon: <FaHandHoldingHeart className="w-6 h-6" />,
      value: "₦248M",
      label: "Total 2023 Contributions",
    },
    {
      icon: <FaBalanceScale className="w-6 h-6" />,
      value: "4-Star",
      label: "Charity Rating",
    },
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      value: "12",
      label: "Annual Reports Published",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Financial Transparency "
          subtitle="  We believe in complete openness about how funds are used"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Financial Allocation Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center mb-6">
              <FaChartPie className="w-8 h-8 text-oghosa-green mr-3" />
              <h3 className="text-2xl font-bold font-montserrat text-gray-900">
                2023 Fund Allocation
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="w-64 h-64 relative mb-8 md:mb-0 md:mr-8">
                {/* Pie Chart Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full relative overflow-hidden">
                    {financialAllocation.map((item, index) => {
                      const prevPercent = financialAllocation
                        .slice(0, index)
                        .reduce((acc, curr) => acc + curr.value, 0);
                      return (
                        <div
                          key={item.name}
                          className={`absolute top-0 left-0 w-full h-full ${item.color}`}
                          style={{
                            clipPath: `conic-gradient(from ${
                              prevPercent * 3.6
                            }deg, ${item.color} ${
                              item.value * 3.6
                            }deg, transparent 0)`,
                            mixBlendMode: "multiply",
                          }}
                          aria-hidden="true"
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-2xl font-bold font-montserrat text-oghosa-green">
                      100%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {financialAllocation.map((item) => (
                  <div key={item.name} className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${item.color} mr-3`}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between font-dm-sans">
                        <span className="font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span className="text-gray-700">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Financial Highlights */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-6">
                Financial Highlights
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {financialMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg text-center"
                  >
                    <div className="flex justify-center text-oghosa-green mb-2">
                      {metric.icon}
                    </div>
                    <p className="text-2xl font-bold font-montserrat text-gray-900">
                      {metric.value}
                    </p>
                    <p className="font-dm-sans text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 font-dm-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-oghosa-green mr-2">•</span>
                  <span>Annual financial audits conducted by KPMG</span>
                </li>
                <li className="flex items-start">
                  <span className="text-oghosa-green mr-2">•</span>
                  <span>
                    Recognized by Nigeria's Federal Ministry of Finance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-oghosa-green mr-2">•</span>
                  <span>
                    Signatory to International Aid Transparency Initiative
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Document Downloads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-6">
                Official Documents
              </h3>

              <div className="space-y-4">
                <a
                  href="/documents/oghosa-2023-annual-report.pdf"
                  download
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <FaFileAlt className="text-oghosa-green mr-3" />
                    <span className="font-dm-sans font-medium">
                      2023 Annual Report
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">PDF • 4.2MB</span>
                </a>

                <a
                  href="/documents/oghosa-financial-statements-2023.pdf"
                  download
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <FaBalanceScale className="text-oghosa-green mr-3" />
                    <span className="font-dm-sans font-medium">
                      Audited Financial Statements
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">PDF • 2.8MB</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about/reports"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-oghosa-green hover:bg-oghosa-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oghosa-gold transition-all"
          >
            Explore Full Financial Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransparencyFinancials;
