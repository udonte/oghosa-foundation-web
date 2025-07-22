import { useState } from "react";
import {
  FaCreditCard,
  FaBitcoin,
  FaUniversity,
  FaExchangeAlt,
  FaMoneyCheckAlt,
  FaCopy,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";
import flutterwaveLogo from "@/assets/images/support/donation/Flutterwave_Logo.png";
import paystackLogo from "@/assets/images/support/donation/Paystack_Logo.png";

const DonationMethods = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Ways to Give"
          subtitle="  Your support makes a difference in the lives of those we serve"
        />

        {/* 1. Online Donations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <FaCreditCard className="text-oghosa-green text-2xl mr-3" />
            <h3 className="text-2xl font-bold font-montserrat text-oghosa-green">
              Online Donations
            </h3>
          </div>

          <p className="font-dm-sans text-gray-700 mb-6">
            Make instant donations using your debit/credit cards or
            cryptocurrency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="https://flutterwave.com/donate/oghosa"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md hover:bg-oghosa-gold/5 transition-shadow flex justify-center items-center"
            >
              <img
                src={flutterwaveLogo}
                alt="Flutterwave"
                className="h-16 object-contain"
              />
            </a>
            <a
              href="https://paystack.com/pay/oghosa"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md hover:bg-oghosa-gold/5 transition-shadow flex justify-center items-center"
            >
              <img
                src={paystackLogo}
                alt="Paystack"
                className="h-8 object-contain"
              />
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-3">
              <FaBitcoin className="text-oghosa-gold mr-2" />
              <h4 className="font-montserrat font-bold">
                Donate Using Bitcoin
              </h4>
            </div>
            <div className="flex items-center">
              <code className="font-mono bg-gray-100 p-3 rounded-md text-base overflow-x-auto flex-1">
                1NBfQ5gMdGi3kivAkBDHDaECsY4N39rYty
              </code>
              <button
                onClick={() =>
                  copyToClipboard("1NBfQ5gMdGi3kivAkBDHDaECsY4N39rYty")
                }
                className="ml-2 p-2 text-oghosa-green hover:text-oghosa-gold transition-colors"
                aria-label="Copy Bitcoin address"
              >
                <FaCopy />
              </button>
            </div>
            {copied && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-oghosa-green mt-2"
              >
                Copied to clipboard!
              </motion.p>
            )}
          </div>

          <div className="mt-6 bg-oghosa-green/5 hover:bg-oghosa-gold/5 p-6 rounded-lg border border-oghosa-green/20">
            <h4 className="font-montserrat font-bold mb-3">
              US Dollar Donation
            </h4>
            <ul className="font-dm-sans space-y-2">
              <li>
                <span className="font-medium">Account Name:</span> Oghosa
                Foundation
              </li>
              <li>
                <span className="font-medium">USD Account Number:</span>{" "}
                0547556328
              </li>
              <li>
                <span className="font-medium">SWIFT Code:</span> GTBINGLA
              </li>
              <li>
                <span className="font-medium">Sort Code:</span> 058-152366
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 2. Local Bank Transfers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <FaUniversity className="text-oghosa-green text-2xl mr-3" />
            <h3 className="text-2xl font-bold font-montserrat text-oghosa-green">
              Local Bank Transfers
            </h3>
          </div>

          <p className="font-dm-sans text-gray-700 mb-6">
            Direct transfers to any of our Nigerian Naira accounts:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { bank: "Guaranty Trust Bank", number: "0123456789" },
              { bank: "Access Bank", number: "1023456789" },
              { bank: "Zenith Bank", number: "1012345678" },
              { bank: "First Bank", number: "2001234567" },
            ].map((account, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md hover:bg-oghosa-green/5 transition-shadow"
              >
                <h4 className="font-montserrat font-bold mb-2">
                  {account.bank}
                </h4>
                <div className="font-dm-sans">
                  <p>
                    <span className="font-medium">Account Name:</span> Oghosa
                    Foundation
                  </p>
                  <p>
                    <span className="font-medium">Account Number:</span>{" "}
                    {account.number}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3. Foreign Transfers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <FaExchangeAlt className="text-oghosa-green text-2xl mr-3" />
            <h3 className="text-2xl font-bold font-montserrat text-oghosa-green">
              Foreign Transfers
            </h3>
          </div>

          <div className="bg-oghosa-green/5 hover:bg-oghosa-gold/5 p-6 rounded-lg border border-oghosa-green/20">
            <p className="font-dm-sans text-gray-700 mb-4">
              Remitters of funds abroad should inform their bankers with these
              details:
            </p>
            <ul className="font-dm-sans space-y-2">
              <li>
                <span className="font-medium">Account Name:</span> Oghosa
                Foundation
              </li>
              <li>
                <span className="font-medium">Bank Name:</span> Guaranty Trust
                Bank
              </li>
              <li>
                <span className="font-medium">USD Account Number:</span>{" "}
                0547556328
              </li>
              <li>
                <span className="font-medium">SWIFT Code:</span> GTBINGLA
              </li>
              <li>
                <span className="font-medium">Sort Code:</span> 058-152366
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 4. Cheques */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <FaMoneyCheckAlt className="text-oghosa-green text-2xl mr-3" />
            <h3 className="text-2xl font-bold font-montserrat text-gray-900">
              Cheques
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg hover:bg-oghosa-green/5 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h4 className="font-montserrat font-bold mb-3">Bank Deposit</h4>
              <ul className="font-dm-sans space-y-2">
                <li>
                  <span className="font-medium">Payable to:</span> Oghosa
                  Foundation
                </li>
                <li>
                  <span className="font-medium">Account Number:</span>{" "}
                  1020057249
                </li>
                <li>
                  <span className="font-medium">Bank:</span> United Bank for
                  Africa
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg border hover:bg-oghosa-green/5 border-gray-200 hover:shadow-md transition-shadow"
            >
              <h4 className="font-montserrat font-bold mb-3">
                Physical Delivery
              </h4>
              <ul className="font-dm-sans space-y-2">
                <li>
                  Make cheques payable to{" "}
                  <span className="font-medium">Oghosa Foundation</span>
                </li>
                <li>Deliver to:</li>
                <li className="pl-4">12 Charity Way, Victoria Island</li>
                <li className="pl-4">Lagos, Nigeria</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationMethods;
