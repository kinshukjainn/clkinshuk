"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiFileText,
  FiSettings,
  FiGithub,
} from "react-icons/fi";
import { MdTipsAndUpdates } from "react-icons/md";
import { TbSeo } from "react-icons/tb";

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
      className={`relative px-4 py-2.5 transition-all duration-300 flex items-center gap-2 rounded-full ${
        isActive
          ? "bg-black/5 text-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
          : "text-gray-600 hover:text-black hover:bg-black/[0.03]"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-base">{icon}</span>
      <span className="font-medium text-sm whitespace-nowrap tracking-tight">
        {label}
      </span>
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
    if (pathname.startsWith("/seo-insights"))
      return {
        text: "SEO Insights",
        icon: <TbSeo className="w-3.5 h-3.5" />,
      };
    if (pathname.startsWith("/latest"))
      return {
        text: "Current Workings",
        icon: <MdTipsAndUpdates className="w-3.5 h-3.5" />,
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
    { path: "/latest", label: "Current", icon: <MdTipsAndUpdates /> },
    { path: "/seo-insights", label: "SEO Insights", icon: <TbSeo /> },
  ];

  const pathInfo = getPathInfo();

  return (
    <>
      <motion.header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-5xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div className="relative backdrop-blur-2xl bg-white/70 rounded-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06),inset_0_0_0_1px_rgba(255,255,255,0.5)] border border-black/[0.08] overflow-hidden">
          {/* Liquid gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 pointer-events-none" />

          {/* Subtle top shine */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

          <div className="relative px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-18">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center"
              >
                <Link to="/" onClick={closeMenu} className="flex items-center">
                  <motion.div
                    className="flex items-center gap-3 sm:gap-4"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h1 className="text-2xl heading-font bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent font-semibold tracking-tight">
                      CLOUDKINSHUK<span className="text-gray-500">.in</span>
                    </h1>

                    <motion.div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-b from-gray-50 to-gray-100/80 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] border border-black/[0.06]">
                      <span className="text-gray-700 flex items-center">
                        {pathInfo.icon}
                      </span>
                      <span className="text-sm text-gray-800 font-medium whitespace-nowrap tracking-tight">
                        {pathInfo.text}
                      </span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-3">
                <nav className="flex items-center gap-1.5 bg-white/40 backdrop-blur-xl rounded-full px-2 py-2 shadow-[0_2px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] border border-black/[0.06]">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
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

                {/* Desktop GitHub Button */}
                <motion.a
                  href="https://github.com/kinshukjainn/clkinshuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 rounded-full bg-gradient-to-b from-gray-900 to-black backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/10 overflow-hidden group"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <FiGithub
                    size={20}
                    className="relative z-10 text-white transition-transform group-hover:rotate-12"
                  />
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center gap-2">
                {/* Mobile GitHub Button */}
                <motion.a
                  href="https://github.com/kinshukjainn/clkinshuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-2.5 rounded-full bg-gradient-to-b from-gray-900 to-black backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/10 overflow-hidden"
                  whileHover={{ y: -1, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <FiGithub size={18} className="text-white" />
                </motion.a>

                <motion.button
                  onClick={toggleMenu}
                  className="relative cursor-pointer p-3 bg-white/50 hover:bg-white/70 text-gray-900 rounded-full border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        <motion.div
          className="absolute inset-0 bg-black/20 backdrop-blur-md"
          onClick={closeMenu}
        />

        <motion.div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/70 backdrop-blur-2xl border border-black/[0.08] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)] overflow-hidden"
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{
            y: isMenuOpen ? 0 : -50,
            opacity: isMenuOpen ? 1 : 0,
            scale: isMenuOpen ? 1 : 0.95,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Liquid gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 pointer-events-none" />

          <div className="relative p-6 space-y-2">
            {/* Current Path Indicator */}
            <motion.div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-b from-blue-50 to-blue-100/50 shadow-[0_2px_8px_rgba(59,130,246,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] border border-blue-200/50 rounded-full mb-4">
              <span className="text-blue-600 flex items-center">
                {pathInfo.icon}
              </span>
              <span className="text-sm text-blue-900 font-medium tracking-tight">
                {pathInfo.text}
              </span>
            </motion.div>

            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
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
