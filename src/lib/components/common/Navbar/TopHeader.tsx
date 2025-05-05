import { motion } from "framer-motion";
import { Link } from "react-router";

const TopHeader = () => {
  return (
    <div>
      {/* Top Header with Donate and Get Involved buttons */}
      <motion.div
        className="bg-oghosa-green text-white py-2 px-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4">
          <Link to={"#"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-oghosa-gold hover:bg-oghosa-gold/90 text-oghosa-green font-bold py-2 px-4 rounded cursor-pointer"
            >
              Donate Now
            </motion.button>
          </Link>
          <Link to={"#"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white hover:bg-white/10 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Get Involved
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default TopHeader;
