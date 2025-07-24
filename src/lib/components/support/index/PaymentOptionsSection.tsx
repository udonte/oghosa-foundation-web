import { motion } from "framer-motion";
import {
  FaUniversity,
  FaCreditCard,
  FaBitcoin,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";

export const PaymentOptionsSection = () => {
  const paymentMethods = [
    {
      id: 1,
      icon: <FaUniversity className="text-4xl text-oghosa-green" />,
      title: "Bank Transfer",
      details: [
        "Bank Name: Zenith Bank",
        "Account Name: Oghosa Godson Foundation",
        "Account Number: 1012345678",
        "Sort Code: 057000000",
      ],
      action: "Download Bank Details",
    },
    {
      id: 2,
      icon: <FaCreditCard className="text-4xl text-oghosa-green" />,
      title: "Credit/Debit Cards",
      details: [
        "Visa, Mastercard & Verve accepted",
        "Secure 256-bit SSL encryption",
        "3D Secure authentication",
        "Recurring donations available",
      ],
      action: "Donate Now",
    },

    {
      id: 3,
      icon: <FaBitcoin className="text-4xl text-oghosa-green" />,
      title: "Cryptocurrency",
      details: [
        "Bitcoin: bc1qxy2kgdygjrsq...",
        "Ethereum: 0x71C7656EC7ab...",
        "USDT (TRC20): TAbnSTngdD3g...",
        "Tax receipt available",
      ],
      action: "View Wallet Addresses",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 102, 51, 0.1)",
    },
  };

  return (
    <section className="px-4 py-12 sm:py-16 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeader
          title="Secure Payment Options"
          subtitle="Multiple ways to support our cause"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paymentMethods.map((method) => (
            <motion.div
              key={method.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-oghosa-green/20 transition-all"
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {method.title}
                </h3>

                <ul className="space-y-2 mb-6 text-left">
                  {method.details.map((detail, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      {detail.includes(":") ? (
                        <>
                          <span className="font-medium">
                            {detail.split(":")[0]}:
                          </span>
                          {detail.split(":")[1]}
                        </>
                      ) : (
                        detail
                      )}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-oghosa-green text-white py-2 px-4 rounded-lg font-medium hover:bg-oghosa-gold transition-colors"
                >
                  {method.action}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-xl p-6 border border-oghosa-green/20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <FaClock className="text-oghosa-green" />
                Processing Times
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Bank Transfers:</strong> 1-2 business days
                </li>
                <li>
                  <strong>Card Payments:</strong> Instant
                </li>

                <li>
                  <strong>Crypto:</strong> 3 network confirmations
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <FaShieldAlt className="text-oghosa-green" />
                Security Guarantee
              </h4>
              <p className="text-gray-600">
                All transactions are secured with 256-bit encryption. We never
                store your full card details. For cryptocurrency donations, we
                provide transaction verification receipts.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
