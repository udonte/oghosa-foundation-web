import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router";

const TopHeader = () => {
  const socials = [
    {
      icon: <FaFacebook size={10} />,
      label: "Facebook",
      url: "https://www.linkedin.com/company/oghosa-godson-foundation",
    },
    { icon: <FaXTwitter size={10} />, label: "Twitter", url: "#" },
    { icon: <FaInstagram size={10} />, label: "Instagram", url: "#" },
    {
      icon: <FaLinkedin size={10} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/oghosa-godson-foundation",
    },
    { icon: <FaYoutube size={10} />, label: "YouTube", url: "#" },
  ];
  return (
    <nav className="hidden md:block">
      <motion.div
        className="bg-oghosa-green text-white py-2 px-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center space-x-4">
          <div className="flex items-center gap-2 text-xs text-white">
            <div className="flex items-center gap-1">
              <BiSupport className="text-oghosa-gold" />
              <Link to={"tel:08105895842"}>08105895842</Link>
            </div>
            <div className="border-l border-oghosa-gold h-4" />
            <div className="flex items-center gap-1">
              <LuMail className="text-oghosa-gold" />
              <Link to={"mailto:oghosagodsonfoundation@gmail.com"}>
                oghosagodsonfoundation@gmail.com
              </Link>
            </div>
            <div className="border-l border-oghosa-gold h-4" />
            <div className="flex space-x-2">
              {socials.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  aria-label={item.label}
                  className="bg-oghosa-gold/70 text-oghosa-green/80 rounded-full p-1 transition hover:bg-oghosa-gold hover:text-white"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to={"/support/donate"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-oghosa-gold hover:bg-oghosa-gold/90 text-oghosa-green font-bold py-2 px-4 rounded cursor-pointer"
              >
                Donate Now
              </motion.button>
            </Link>
            <Link to={"/support"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white/10 text-white font-bold py-2 px-4 rounded cursor-pointer"
              >
                Get Involved
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default TopHeader;
