import React, { useState, useCallback, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "@/assets/nav/logo.png";
import TopHeader from "./TopHeader";
import { navItems } from "@/lib/constants/common/data";

const MOBILE_MENU_ANIMATION_DURATION = 0.3;

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const mobileMenuControls = useAnimationControls();

  // Close all menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedItem(null);
  }, [location.pathname]);

  // Handle mobile menu animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuControls.start({
        opacity: 1,
        height: "auto",
        transition: { duration: MOBILE_MENU_ANIMATION_DURATION },
      });
    } else {
      mobileMenuControls.start({
        opacity: 0,
        height: 0,
        transition: { duration: MOBILE_MENU_ANIMATION_DURATION },
      });
    }
  }, [isMobileMenuOpen, mobileMenuControls]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) {
      setExpandedItem(null);
    }
  }, [isMobileMenuOpen]);

  const handleSubMenuToggle = useCallback((label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  }, []);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  const subMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3 },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        opacity: { duration: 0.15 },
        height: { duration: 0.25 },
      },
    },
  };

  const mobileSubItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    hover: { backgroundColor: "rgba(207, 163, 58, 0.1)" },
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <TopHeader />

      <nav className="bg-white py-4 md:py-8 w-full drop-shadow font-montserrat">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/">
                <motion.img
                  src={Logo}
                  alt="Oghosa Foundation Logo"
                  className="w-[150px] md:w-[250px]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={`desktop-${item.label}-${index}`}
                  className="relative group"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={navItemVariants}
                  transition={{ delay: index * 0.05 }}
                  onHoverStart={() => setHoveredItem(item.label)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <div className="relative">
                    <NavLink
                      to={item.page || "#"}
                      className={`px-1 py-1 text-sm uppercase font-bold flex items-center text-oghosa-green ${
                        hoveredItem === item.label
                          ? "hover:border-b-2 hover:border-oghosa-gold"
                          : ""
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.subItems && (
                        <motion.span
                          animate={{
                            rotate: hoveredItem === item.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown className="ml-1" />
                        </motion.span>
                      )}
                    </NavLink>
                  </div>

                  {item.subItems && (
                    <AnimatePresence>
                      {hoveredItem === item.label && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={subMenuVariants}
                          className="absolute left-0 mt-1 border border-oghosa-gold/20 min-w-64 rounded-md shadow-lg bg-white z-10 overflow-hidden"
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <NavLink
                              key={`desktop-sub-${subItem.label}-${subIndex}`}
                              to={subItem.page || "#"}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-oghosa-gold/20 hover:text-oghosa-green font-medium hover:border-r-4 border-oghosa-gold"
                            >
                              <motion.div
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

            {/* Mobile menu button */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="md:hidden flex items-center"
            >
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-1 rounded-full text-gray-700 hover:text-oghosa-green hover:bg-oghosa-gold/10 focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={mobileMenuControls}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="px-8 pt-2 pb-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={`mobile-${item.label}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
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
                          onClick={() => handleSubMenuToggle(item.label)}
                          className="p-1 rounded-full hover:text-oghosa-green hover:bg-oghosa-gold/20"
                          aria-expanded={expandedItem === item.label}
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <motion.span
                            animate={{
                              rotate: expandedItem === item.label ? 90 : 0,
                            }}
                          >
                            <FiChevronRight />
                          </motion.span>
                        </button>
                      )}
                    </div>

                    {item.subItems && (
                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={subMenuVariants}
                            className="pl-4"
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <motion.div
                                key={`mobile-sub-${subItem.label}-${subIndex}`}
                                variants={mobileSubItemVariants}
                                whileHover="hover"
                                transition={{ duration: 0.2 }}
                              >
                                <NavLink
                                  to={subItem.page || "#"}
                                  className="block px-2 py-2 rounded-md text-base font-medium text-gray-600 hover:text-oghosa-green"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.label}
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
