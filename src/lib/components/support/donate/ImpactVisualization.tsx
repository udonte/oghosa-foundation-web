import {
  FaBook,
  FaUtensils,
  FaClinicMedical,
  FaUserGraduate,
  FaWater,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

const ImpactVisualization = () => {
  const impactItems = [
    {
      id: 1,
      amount: "₦5,000",
      icon: <FaBook className="w-8 h-8" />,
      title: "Educational Support",
      description: "Provides basic school supplies for 1 child",
      color: "bg-oghosa-green/10 text-oghosa-green",
    },
    {
      id: 2,
      amount: "₦10,000",
      icon: <FaUtensils className="w-8 h-8" />,
      title: "Nutrition Package",
      description: "Feeds a child for 2 months",
      color: "bg-oghosa-gold/10 text-oghosa-gold",
    },
    {
      id: 3,
      amount: "₦25,000",
      icon: <FaClinicMedical className="w-8 h-8" />,
      title: "Healthcare Access",
      description: "Covers medical checkups for 5 children",
      color: "bg-oghosa-green/10 text-oghosa-green",
    },
    {
      id: 4,
      amount: "₦50,000",
      icon: <FaUserGraduate className="w-8 h-8" />,
      title: "Vocational Training",
      description: "Supports skills development for 2 youths",
      color: "bg-oghosa-gold/10 text-oghosa-gold",
    },
    {
      id: 5,
      amount: "₦100,000",
      icon: <FaWater className="w-8 h-8" />,
      title: "Clean Water Project",
      description: "Provides water filters for 10 families",
      color: "bg-oghosa-green/10 text-oghosa-green",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-oghosa-green/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Your Donation's Impact"
          subtitle="  See how different amounts create meaningful change in communities"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className={`${item.color} p-4 rounded-t-xl text-center`}>
                <div className="flex justify-center mb-2">{item.icon}</div>
                <h3 className="text-2xl font-bold font-montserrat">
                  {item.amount}
                </h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-b-xl border border-t-0 border-gray-200 flex-1 text-center">
                <h4 className="font-bold font-montserrat text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="font-dm-sans text-gray-700 ">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-dm-sans text-gray-600 mb-6">
            *Based on actual program costs from our 2023 Annual Report
          </p>
          <Link
            to="/about/reports"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-oghosa-green hover:bg-oghosa-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oghosa-gold transition-all"
          >
            View Detailed Financials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactVisualization;
