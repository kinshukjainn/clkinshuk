"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiHome, FiFileText, FiSettings } from "react-icons/fi";
import { MdSafetyCheck } from "react-icons/md";

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

interface NavLinkProps {
  to: string;
  isActive: boolean;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, isActive, label, icon, onClick }: NavLinkProps) => (
  <Link to={to} onClick={onClick}>
    <motion.div
      className={`relative px-2 py-2 transition-all duration-200 flex items-center gap-4 ${
        isActive
          ? "text-black text-lg rounded-md font-semibold underline"
          : "text-black text-lg hover:underline hover:font-bold font-semibold"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0"
          layoutId="activeBackground"
          transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
        />
      )}
      <span className="relative z-10 text-lg">{icon}</span>
      <span className="relative z-10 font-medium text-base">{label}</span>
    </motion.div>
  </Link>
);

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const getPathInfo = (): { text: string; icon: React.ReactNode } => {
    const { pathname } = location;
    if (pathname.startsWith("/gears"))
      return { text: "DevTools", icon: <FiSettings className="w-3.5 h-3.5" /> };
    if (pathname.startsWith("/blogs"))
      return { text: "Blogs", icon: <FiFileText className="w-3.5 h-3.5" /> };
    if (pathname.startsWith("/sign-in"))
      return {
        text: "Verify",
        icon: <MdSafetyCheck className="w-3.5 h-3.5" />,
      };
    return { text: "Home", icon: <FiHome className="w-3.5 h-3.5" /> };
  };

  const isActiveRoute = (path: string): boolean =>
    location.pathname.startsWith(path) || location.pathname === path;

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
  const closeMenu = (): void => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navItems: NavItem[] = [
    { path: "/blogs", label: "Blogs", icon: <FiFileText /> },
    { path: "/gears", label: "Devlopment Setup", icon: <FiSettings /> },
  ];

  const pathInfo = getPathInfo();

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[9999]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div className="relative backdrop-blur-xl bg-gray-100">
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center"
              >
                <Link to="/" onClick={closeMenu} className="flex items-center">
                  <motion.div
                    className="flex items-center gap-2 sm:gap-3 md:gap-4"
                    whileHover={{ scale: 1.01 }}
                  >
                    <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold  text-gray-900 leading-none whitespace-nowrap">
                      cloudkinshuk
                    </h1>

                    <motion.div className="flex items-center gap-1 px-3 py-2 border-l-2 border-black">
                      <span className="text-gray-900 flex items-center">
                        {pathInfo.icon}
                      </span>
                      <span className="text-md text-gray-900 font-normal whitespace-nowrap">
                        {pathInfo.text}
                      </span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      isActive={isActiveRoute(item.path)}
                      label={item.label}
                      icon={item.icon}
                    />
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  onClick={toggleMenu}
                  className="relative cursor-pointer p-3 bg-gray-300 text-black rounded-full"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden fixed inset-0 z-[9998]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMenu}
        />

        <motion.div
          className="absolute top-16 left-0 right-0 bg-gray-100 text-gray-200"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: isMenuOpen ? 0 : -50,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <NavLink
                  to={item.path}
                  isActive={isActiveRoute(item.path)}
                  label={item.label}
                  icon={item.icon}
                  onClick={closeMenu}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;
