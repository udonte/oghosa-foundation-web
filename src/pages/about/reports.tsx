import { motion } from "framer-motion";
import {
  FiDownload,
  FiPieChart,
  FiDollarSign,
  FiBarChart2,
} from "react-icons/fi";
import AnnualReport2022 from "@/assets/images/annual-report-2022.jpg";
import FinancialChart from "@/assets/images/financial-chart.jpg";
import FinancialChart2 from "@/assets/images/financial-chart2.jpg";
import Team from "@/assets/images/team.jpg";
import AnnualReportDoc from "@/assets/docs/annual-report-ogf.pdf";
import EventBg from "@/assets/images/vision.jpg";
import SubHeroSection from "@/lib/components/common/SubHeroSection";

const Reports = () => {
  const annualReports = [
    {
      year: "2022",
      title: "Annual Impact Report",
      highlights: [
        "5,200+ lives directly impacted",
        "12 new communities served",
        "83% program efficiency ratio",
      ],
      download: AnnualReportDoc,
      preview: AnnualReport2022,
      pages: 42,
    },
    {
      year: "2021",
      title: "Year in Review",
      highlights: [
        "3,800+ beneficiaries served",
        "Launched 2 new programs",
        "89% donor retention rate",
      ],
      download: AnnualReportDoc,
      preview: FinancialChart2,
      pages: 36,
    },
    // Add more years...
  ];

  const financialStatements = [
    {
      year: "2022",
      type: "Audited Financial Statement",
      auditor: "Deloitte Nigeria",
      download: AnnualReportDoc,
    },
    {
      year: "2024",
      type: "Audited Financial Statement",
      auditor: "Schneider & Co.",
      download: AnnualReportDoc,
    },
    // Add previous years...
  ];

  const impactMetrics = [
    {
      category: "Education",
      value: "1,240",
      description: "Scholarships awarded",
    },
    {
      category: "Health",
      value: "3,750",
      description: "Medical screenings conducted",
    },
    {
      category: "Food Security",
      value: "18,200",
      description: "Meals distributed",
    },
    {
      category: "Vocational Training",
      value: "480",
      description: "Graduates empowered",
    },
  ];

  const financialAllocation = {
    programExpenses: 82,
    administrative: 12,
    fundraising: 6,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <SubHeroSection
        image={Team}
        title="Reports"
        subtitle="Measuring our impact, sharing our results, and maintaining
            accountability"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Are", href: "/about" },
          { label: "Annual Report & Financials", href: "/reports" },
        ]}
      />
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Annual Reports */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-12 text-center">
            Annual Reports
          </h2>

          <div className="space-y-8">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {report.preview && (
                    <div className="md:w-1/3">
                      <img
                        src={report.preview}
                        alt={`${report.year} Report Cover`}
                        className="w-full h-full object-cover max-h-72"
                      />
                    </div>
                  )}
                  <div
                    className={`p-6 ${report.preview ? "md:w-2/3" : "w-full"}`}
                  >
                    <div className="flex flex-col md:flex-row gap-2 justify-between items-start mb-4">
                      <h3 className="font-montserrat text-2xl font-bold text-oghosa-green">
                        {report.year} {report.title}
                      </h3>
                      <span className="font-dmsans text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {report.pages} pages
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-montserrat font-medium text-oghosa-gold mb-2 flex items-center">
                        <FiBarChart2 className="mr-2" />
                        Key Highlights
                      </h4>
                      <ul className="font-dmsans text-gray-700 space-y-2 list-disc list-inside">
                        {report.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={report.download}
                      className="inline-flex items-center bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors"
                      download={`Oghosa-Foundation-${report.year}-Annual-Report.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download ${report.year} Annual Report`}
                      aria-describedby={`Download ${report.year} Annual Report`}
                    >
                      <FiDownload className="mr-2" />
                      Download Full Report
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Financial Transparency */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-12 text-center">
            Financial Statements
          </h2>

          <div className="bg-white rounded-xl shadow-md p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="font-montserrat text-xl font-bold text-oghosa-green mb-4 flex items-center">
                  <FiPieChart className="mr-2 text-oghosa-gold" />
                  Funds Allocation
                </h3>
                <div className="relative h-64">
                  <img
                    src={FinancialChart}
                    alt="Financial Allocation Chart"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-4 rounded-b-lg">
                    <div className="flex flex-wrap justify-center gap-4">
                      {[
                        {
                          label: "Programs",
                          value: `${financialAllocation.programExpenses}%`,
                          color: "bg-oghosa-green",
                        },
                        {
                          label: "Admin",
                          value: `${financialAllocation.administrative}%`,
                          color: "bg-oghosa-gold",
                        },
                        {
                          label: "Fundraising",
                          value: `${financialAllocation.fundraising}%`,
                          color: "bg-gray-400",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div
                            className={`w-3 h-3 ${item.color} rounded-full mr-2`}
                          ></div>
                          <span className="font-dmsans text-sm">
                            {item.label}: {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h3 className="font-montserrat text-xl font-bold text-oghosa-green mb-4 flex items-center">
                  <FiDollarSign className="mr-2 text-oghosa-gold" />
                  Audited Statements
                </h3>
                <div className="space-y-4">
                  {financialStatements.map((statement, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-oghosa-gold/70 pb-4"
                    >
                      <div>
                        <h4 className="font-montserrat font-medium text-gray-800">
                          {statement.year} {statement.type}
                        </h4>
                        <p className="font-dmsans text-sm text-gray-500">
                          Audited by {statement.auditor}
                        </p>
                      </div>
                      <a
                        href={statement.download}
                        className="flex items-center text-oghosa-green hover:text-oghosa-gold font-medium"
                      >
                        <FiDownload className="mr-2" />
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-oghosa-green/5 p-6 rounded-xl">
            <h3 className="font-montserrat text-xl font-bold text-oghosa-green mb-4">
              Our Financial Philosophy
            </h3>
            <div className="font-dmsans text-gray-700 space-y-4">
              <p>
                We maintain the highest standards of financial transparency and
                accountability. Our commitment ensures that donor funds are used
                effectively to maximize impact.
              </p>
              <p>
                <strong>Program Efficiency Ratio:</strong> 82% of every dollar
                goes directly to programs, exceeding industry standards for
                nonprofit organizations.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Impact Metrics */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-12 text-center">
            By The Numbers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-montserrat font-bold text-oghosa-green mb-2">
                  {metric.value}
                </div>
                <h3 className="font-montserrat font-medium text-gray-800 mb-1">
                  {metric.category}
                </h3>
                <p className="font-dmsans text-sm text-oghosa-gold/70">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="px-4 lg:px-0 py-16 ">
            <img
              src={EventBg}
              alt="Featured Event"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-6">
            Need More Information?
          </h2>
          <p className="font-dmsans text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Contact our finance team for additional reports or clarification
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Request Documentation
            </a>
            <a
              href="/donate"
              className="border-2 border-oghosa-green text-oghosa-green hover:bg-white font-montserrat font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Support Our Work
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Reports;
