import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiHome,
  FiInfo,
  FiUser,
  FiSettings,
  FiMail,
  FiHelpCircle,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "@/assets/nav/logo.png";
import TopHeader from "./TopHeader";

const items = [
  {
    label: "Who we are",
    page: "/about",
    subItems: [
      {
        label: "About Us",
        page: "/about/profile",
      },
      {
        label: "The Founder - Oghosa Godson",
        page: "/about/founder",
      },
      {
        label: "Our Leadership",
        page: "/about/leadership",
      },
      {
        label: "Annual Reports / Financials",
        page: "/about/reports",
      },
    ],
  },
  {
    label: "What we do",
    page: "/work",
    subItems: [
      {
        label: "Programs & Initiatives",
        page: "/work/programs",
      },
      {
        label: "Education Programs",
        page: "/work/education",
      },
      {
        label: "Health Initiatives",
        page: "/work/health",
      },
      {
        label: "Sickle Cell Support",
        page: "/work/sickle-cell",
      },
      {
        label: "Food Security",
        page: "/work/food-security",
      },
      {
        label: "Skills Training",
        page: "/work/skills-training",
      },
      {
        label: "Charitable Outreach",
        page: "/work/outreach",
      },
    ],
  },
  {
    label: "Where We Work",
    page: "/locations",
    subItems: [
      {
        label: "Our Communities",
        page: "/locations/communities",
      },
      {
        label: "Impact Areas",
        page: "/locations/impact",
      },
      {
        label: "Partnerships",
        page: "/locations/partnerships",
      },
    ],
  },
  {
    label: "Support us",
    page: "/support",
    subItems: [
      {
        label: "Donate",
        page: "/support/donate",
      },
      {
        label: "Volunteer",
        page: "/support/volunteer",
      },
      {
        label: "Partner With Us",
        page: "/support/partner",
      },
      {
        label: "Advocate",
        page: "/support/advocate",
      },
    ],
  },
  {
    label: "Contact",
    page: "/contact",
    subItems: [
      {
        label: "FAQ",
        page: "/contact/faq",
      },
      {
        label: "Media Inquiries",
        page: "/contact/media",
      },
    ],
  },
];

type NavItem = {
  label: string;
  page?: string;
  subItems?: NavItem[];
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path ? "border-b-2 border-oghosa-gold" : "";
  };
  const isSubItemActive = (subItems: NavItem[], path: string) => {
    return subItems.some((subItem) => subItem.page === path)
      ? "border-b-2 border-oghosa-gold"
      : "";
  };
  const isSubItemHovered = (subItems: NavItem[], label: string) => {
    return subItems.some((subItem) => subItem.label === label)
      ? "border-b-2 border-oghosa-gold"
      : "";
  };
  const isSubItemExpanded = (subItems: NavItem[], label: string) => {
    return subItems.some((subItem) => subItem.label === label)
      ? "border-b-2 border-oghosa-gold"
      : "";
  };

  const toggleSubMenu = (label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  const subMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Top Header with Donate and Get Involved buttons */}
      <TopHeader />
      {/* Main Navigation */}
      <nav className="bg-white py-4 md:py-8  w-full drop-shadow font-montserrat">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo with animation */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="oghosa logo"
                  className="w-[150px] md:w-[250px]"
                />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {items.map((item: NavItem, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  onHoverStart={() => setHoveredItem(item.label)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.div
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    {item.subItems ? (
                      <div
                        className={`relative ${
                          hoveredItem === item.label ||
                          expandedItems[item.label] ||
                          item.subItems
                            ? "hover:border-b-2 hover:border-oghosa-gold"
                            : ""
                        }`}
                      >
                        <NavLink
                          to={`${item.page}`}
                          className={`px-1 py-1 text-sm uppercase font-bold flex items-center text-oghosa-green `}
                          // onClick={() =>
                          //   item.subItems && toggleSubMenu(item.label)
                          // }
                        >
                          <span>{item.label}</span>
                          {item.subItems && (
                            <FiChevronDown
                              className={`ml-1 transition-transform ${
                                expandedItems[item.label] ||
                                hoveredItem === item.label
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </NavLink>
                      </div>
                    ) : (
                      <NavLink
                        to={item.page || "#"}
                        className={`px-1 text-sm py-1 uppercase font-bold flex items-center text-oghosa-green ${
                          hoveredItem === item.label
                            ? "hover:border-b-2 hover:border-oghosa-gold"
                            : ""
                        } `}
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </motion.div>

                  {item.subItems && (
                    <AnimatePresence>
                      {(expandedItems[item.label] ||
                        hoveredItem === item.label) && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={subMenuVariants}
                          transition={{ duration: 0.2 }}
                          className={`absolute left-0 mt-1 border-oghosa-gold/20 border-[1px] min-w-64 rounded-md shadow-lg bg-white z-10 overflow-hidden `}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <NavLink
                              to={subItem.page || "#"}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-oghosa-gold/20 hover:text-oghosa-green font-medium hover:border-r-4 border-oghosa-gold"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <motion.div
                                key={subIndex}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {subItem.label}
                              </motion.div>
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button with animation */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="md:hidden flex items-center"
            >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-1 rounded-full text-gray-700 hover:text-oghosa-green hover:bg-oghosa-gold/10 focus:outline-none"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation with animations */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-8 pt-2 pb-4 space-y-2 sm:px-3 bg-white mt-4">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <NavLink
                        to={item.page || "#"}
                        className="block py-2 text-lg font-bold uppercase text-gray-700 hover:text-oghosa-green hover:border-b hover:border-oghosa-gold w-full"
                        onClick={() =>
                          !item.subItems && setIsMobileMenuOpen(false)
                        }
                      >
                        <div className="flex items-center">{item.label}</div>
                      </NavLink>
                      {item.subItems && (
                        <button
                          onClick={() => toggleSubMenu(item.label)}
                          className="p-1 rounded-full hover:text-oghosa-green hover:bg-oghosa-gold/20"
                        >
                          {expandedItems[item.label] ? (
                            <FiChevronDown />
                          ) : (
                            <FiChevronRight />
                          )}
                        </button>
                      )}
                    </div>
                    {item.subItems && (
                      <AnimatePresence>
                        {expandedItems[item.label] && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={subMenuVariants}
                            className="pl-4"
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                whileHover={{
                                  backgroundColor: "rgba(212, 175, 55, 0.1)",
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <NavLink
                                  to={subItem.page || "#"}
                                  className="block px-2 py-2 rounded-md text-base font-medium text-gray-600 hover:text-oghosa-green"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="flex items-center">
                                    {subItem.label}
                                  </div>
                                </NavLink>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
