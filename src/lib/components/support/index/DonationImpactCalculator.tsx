import { useState, useEffect, useMemo, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaGraduationCap,
  FaHeartbeat,
  FaTools,
  FaPen,
  FaStore,
  FaBaby,
  FaUserTie,
  FaWater,
  FaHome,
} from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

interface Impact {
  amount: number;
  result: string;
  icon: ReactNode;
  breakdown: string[];
}

const DonationImpactCalculator = () => {
  const [donationAmount, setDonationAmount] = useState<number>(15000);
  const [currentImpact, setCurrentImpact] = useState<Impact | null>(null);
  const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);

  const impacts: Impact[] = useMemo(
    () => [
      {
        amount: 5000,
        result: "Provides basic school supplies for one child",
        icon: <FaPen className="text-2xl text-oghosa-green" />,
        breakdown: [
          "4 notebooks",
          "A set of pens & pencils",
          "A basic school bag",
        ],
      },
      {
        amount: 15000,
        result: "Provides startup items for a small vendor",
        icon: <FaStore className="text-2xl text-oghosa-green" />,
        breakdown: [
          "Starter items for a street food stall",
          "Small-scale hawker resale goods",
          "Basic marketing materials",
        ],
      },
      {
        amount: 30000,
        result: "Offers a month of nutritious meals for a child",
        icon: <FaBaby className="text-2xl text-oghosa-green" />,
        breakdown: [
          "Balanced meals & snacks",
          "Vitamins & supplements",
          "Routine health checkups",
        ],
      },
      {
        amount: 50000,
        result: "Sponsors a child's education for one term",
        icon: <FaGraduationCap className="text-2xl text-oghosa-green" />,
        breakdown: [
          "School fees for 1 term (low-cost private school)",
          "Uniform & shoes",
          "Books & supplies",
        ],
      },
      {
        amount: 100000,
        result: "Provides vocational skills training for a youth",
        icon: <FaUserTie className="text-2xl text-oghosa-green" />,
        breakdown: [
          "Training fees for 3 months",
          "Practical materials & tools",
          "Mentorship and job placement support",
        ],
      },
      {
        amount: 400000,
        result: "Feeds a family for 3 months",
        icon: <FaUtensils className="text-2xl text-oghosa-green" />,
        breakdown: [
          "100kg of rice (two 50kg bags)",
          "30L of cooking oil",
          "Protein supplements & other staples",
        ],
      },
      {
        amount: 600000,
        result: "Funds a small-scale medical outreach",
        icon: <FaHeartbeat className="text-2xl text-oghosa-green" />,
        breakdown: [
          "50 sickle cell tests",
          "200 malaria treatments",
          "Health education services",
        ],
      },
      {
        amount: 800000,
        result: "Provides clean water for a small community",
        icon: <FaWater className="text-2xl text-oghosa-green" />,
        breakdown: [
          "Installation of a borehole",
          "Water treatment and purification kits",
          "Community hygiene training",
        ],
      },
      {
        amount: 1200000,
        result: "Equips a vocational center",
        icon: <FaTools className="text-2xl text-oghosa-green" />,
        breakdown: [
          "5 industrial sewing machines",
          "Carpentry tools",
          "Startup materials",
        ],
      },
      {
        amount: 2500000,
        result: "Builds a shelter for the homeless",
        icon: <FaHome className="text-2xl text-oghosa-green" />,
        breakdown: [
          "Construction materials",
          "Furniture and bedding",
          "Utilities for 6 months",
        ],
      },
    ],
    []
  );
  // Update impact when amount changes
  useEffect(() => {
    const closestImpact = impacts.reduce((prev, curr) =>
      Math.abs(curr.amount - donationAmount) <
      Math.abs(prev.amount - donationAmount)
        ? curr
        : prev
    );
    setCurrentImpact(closestImpact);
  }, [donationAmount, impacts]);

  const handlePresetSelect = (amount: number): void => {
    setDonationAmount(amount);
    setIsCustomAmount(false);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value) || 0;
    setDonationAmount(Math.min(Math.max(value, 1000), 1000000)); // Limit between ₦1000 and ₦1M
    setIsCustomAmount(true);
  };

  // Calculate how many "units" of impact the donation can make
  const calculateImpactMultiples = () => {
    if (!currentImpact) return { fullUnits: 0, partialUnit: 0 };

    const multiples = donationAmount / currentImpact.amount;
    return {
      fullUnits: Math.floor(multiples),
      partialUnit: multiples % 1,
      totalImpact: currentImpact.result.replace(
        /\ba\b/g,
        multiples >= 1 ? Math.floor(multiples).toString() : ""
      ),
    };
  };

  const { fullUnits, partialUnit } = calculateImpactMultiples();

  if (!currentImpact) return null; // Handle initial loading state

  return (
    <section className="px-4 py-12 sm:py-16 bg-oghosa-green/5">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          title=" See Your Impact"
          subtitle="Every contribution makes a difference. See what your donation can
            achieve."
        />

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            {/* Amount Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select your donation amount (₦)
              </label>

              {/* Preset Buttons */}
              <div className="flex justify-center flex-wrap gap-3 mb-6">
                {impacts.map((impact) => (
                  <motion.button
                    key={impact.amount}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePresetSelect(impact.amount)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      donationAmount === impact.amount && !isCustomAmount
                        ? "bg-oghosa-green text-white"
                        : "bg-oghosa-green/10 text-gray-700 hover:bg-oghosa-gold/20"
                    }`}
                  >
                    ₦{impact.amount.toLocaleString()}
                  </motion.button>
                ))}
              </div>

              {/* Slider */}
              <div className="mb-2">
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={donationAmount}
                  onChange={(e) => {
                    setDonationAmount(parseInt(e.target.value));
                    setIsCustomAmount(true);
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg outline-0 appearance-none cursor-pointer accent-oghosa-green"
                />
              </div>

              {/* Custom Amount Input */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">₦1,000</span>
                <div className="relative flex-1 mx-4">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    ₦
                  </span>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={handleCustomAmount}
                    min="1000"
                    max="1000000"
                    className="w-full pl-8 pr-4 py-2 border outline-0 border-gray-300 rounded-lg text-center font-medium focus:ring focus:ring-oghosa-green focus:border-oghosa-green"
                  />
                </div>
                <span className="text-sm text-gray-500">₦100,000+</span>
              </div>
            </div>

            {/* Impact Visualization */}
            <motion.div
              key={currentImpact.amount}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-oghosa-green/5 rounded-lg p-6 border border-oghosa-green/20"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                  {currentImpact.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  ₦{donationAmount.toLocaleString()}{" "}
                  {fullUnits > 0 ? `can provide:` : "can help:"}
                </h3>
              </div>

              {/* Impact Breakdown */}
              <div className="space-y-3">
                {fullUnits > 0 && (
                  <p className="text-lg font-medium">
                    {fullUnits}{" "}
                    {fullUnits === 1
                      ? currentImpact.result
                      : currentImpact.result.replace(
                          /\b(a|an)\b/,
                          fullUnits.toString()
                        )}
                  </p>
                )}

                {partialUnit > 0.2 && fullUnits === 0 && (
                  <p className="text-lg font-medium">
                    Partial funding towards{" "}
                    {currentImpact.result.replace("a ", "")}
                  </p>
                )}

                {partialUnit > 0.2 && fullUnits > 0 && (
                  <p className="text-lg font-medium">
                    Plus partial funding for another{" "}
                    {currentImpact.result.replace("a ", "")}
                  </p>
                )}

                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {currentImpact.breakdown.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-center"
            >
              <Link
                to={`support/donate`}
                className="inline-block bg-oghosa-green hover:bg-oghosa-gold text-white font-medium px-8 py-3 rounded-full transition-colors"
              >
                Donate ₦{donationAmount.toLocaleString()}
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                Secure payment processing via Flutterwave
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationImpactCalculator;
