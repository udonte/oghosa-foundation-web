import { Link } from "react-router-dom";
import Logo from "@/assets/nav/logo.png";
import {
  FaArrowAltCircleUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

// Mock data for navigation items
const footerLinks = {
  about: [
    { name: "Our Profile", path: "/about/profile" },
    { name: "Our Leadership", path: "/leadership" },
    { name: "Reports", path: "/about/leadership" },
    { name: "Our Partners", path: "/partners" },
    { name: "FAQs", path: "/faq" },
  ],
  work: [
    { name: "Education", path: "/child-sponsorship" },
    { name: "Sickle Cell Support", path: "/global-campaign" },
    { name: "Food Security", path: "/global-strategy" },
    { name: "Skills Training", path: "/role-of-faith" },
  ],
  workWithUs: [
    { name: "Our Communities", path: "/culture" },
    { name: "Impact Areas", path: "/open-positions" },
    { name: "Partnerships", path: "/tenders" },
    { name: "Careers & Internships", path: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Report a Concern", path: "/report" },
  ],
  social: [
    { icon: <FaFacebook size={20} />, label: "Facebook", url: "#" },
    { icon: <FaXTwitter size={20} />, label: "Twitter", url: "#" },
    { icon: <FaInstagram size={20} />, label: "Instagram", url: "#" },
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", url: "#" },
    { icon: <FaYoutube size={20} />, label: "YouTube", url: "#" },
  ],
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="pt-16 pb-8 border-t border-oghosa-gold bg-oghosa-green/5"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div className="space-y-4">
            <h3 className="text-xl font-bold text-oghosa-green ">About Us</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.path}
                    className="hover:text-oghosa-green/80 transition flex items-center"
                  >
                    <span className="w-2 h-2 bg-oghosa-gold rounded-full mr-2"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Work Section */}
          <motion.div className="space-y-4">
            <h3 className="text-xl font-bold text-oghosa-green">
              Our Programs
            </h3>
            <ul className="space-y-2">
              {footerLinks.work.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.path}
                    className="hover:text-oghosa-green/80 transition flex items-center"
                  >
                    <span className="w-2 h-2 bg-oghosa-gold rounded-full mr-2"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Careers Section */}
          <motion.div className="space-y-4">
            <h3 className="text-xl font-bold text-oghosa-green">
              Work With Us
            </h3>
            <ul className="space-y-2">
              {footerLinks.workWithUs.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.path}
                    className="hover:text-oghosa-green/80 transition flex items-center"
                  >
                    <span className="w-2 h-2 bg-oghosa-gold rounded-full mr-2"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter Section */}
          <motion.div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-oghosa-green mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4 pt-2">
                {footerLinks.social.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    aria-label={item.label}
                    className="bg-oghosa-gold/70 text-oghosa-green/80 rounded-full p-2 transition hover:bg-oghosa-gold hover:text-white"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-oghosa-green mb-2">
                Get Our Newsletter
              </h3>
              <motion.div
                className="flex"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 w-full border border-oghosa-gold rounded-l focus:outline-none text-gray-900"
                />
                <motion.button
                  className="bg-oghosa-gold/70 hover:bg-oghosa-gold/90 px-4 py-2 rounded-r transition text-oghosa-green cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div className="border-t border-oghosa-gold pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div className="mb-4 md:mb-0" whileHover={{ scale: 1.05 }}>
              <img
                src={Logo}
                alt="Oghosa Godson Foundation Logo"
                className="h-12"
              />
            </motion.div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              {footerLinks.legal.map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }}>
                  <Link
                    to={item.path}
                    className="text-oghosa-green hover:text-oghosa-green/80 transition"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                to={"/"}
                className="text-oghosa-gold/50 hover:text-oghosa-gold/70 inline-flex items-center gap-1 transition w-fit"
              >
                Back to Home <FaArrowAltCircleUp />
              </Link>
            </div>
          </div>
          <motion.div
            className="mt-6 text-center text-sm text-gray-300"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Oghosa Godson Foundation. All rights
            reserved.
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
