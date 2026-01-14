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
      className={`relative px-4 py-2.5 transition-all duration-200 flex items-center gap-2 rounded-md ${
        isActive
          ? "bg-white/20 text-white backdrop-blur-sm"
          : "text-gray-300 hover:text-white hover:bg-white/10"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-base">{icon}</span>
      <span className="font-medium text-sm whitespace-nowrap">{label}</span>
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-md shadow-2xl">
          <div className="relative px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-18">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center"
              >
                <Link to="/" onClick={closeMenu} className="flex items-center">
                  <motion.div
                    className="flex items-center gap-3 sm:gap-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h1 className="brand-glow text-2xl heading-font">
                      CLOUDKINSHUK<span>.in</span>
                    </h1>

                    <motion.div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-md border border-white/10">
                      <span className="text-emerald-400 flex items-center">
                        {pathInfo.icon}
                      </span>
                      <span className="text-sm text-gray-300 font-medium whitespace-nowrap">
                        {pathInfo.text}
                      </span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-3">
                <nav className="flex items-center gap-2 bg-white/5 rounded-md px-2 py-2">
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

                {/* Desktop GitHub Button */}
                <motion.a
                  href="https://github.com/kinshukjainn/clkinshuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    relative p-3 rounded-md
    bg-neutral-950/80
    border border-white/10
    backdrop-blur-xl
    shadow-[inset_0_0_0.5px_rgba(255,255,255,0.12),0_8px_20px_rgba(0,0,0,0.6)]
    overflow-hidden
  "
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  {/* subtle top highlight */}
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* icon */}
                  <FiGithub
                    size={20}
                    className="relative z-10 text-gray-300 group-hover:text-white transition-colors"
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
                  className="
    relative p-2.5 rounded-md
    bg-neutral-950/80
    border border-white/10
    backdrop-blur-xl
    shadow-[inset_0_0_0.5px_rgba(255,255,255,0.12),0_6px_16px_rgba(0,0,0,0.6)]
    overflow-hidden
  "
                  whileHover={{ y: -1, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <FiGithub size={18} className="text-gray-300" />
                </motion.a>

                <motion.button
                  onClick={toggleMenu}
                  className="relative cursor-pointer p-3 bg-white/10 hover:bg-white/20 text-white rounded-md border border-white/10"
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
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={closeMenu}
        />

        <motion.div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-md shadow-2xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: isMenuOpen ? 0 : -50,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="p-6 space-y-2">
            {/* Current Path Indicator */}
            <motion.div className="flex items-center gap-2 px-4 py-3 bg-blue-500/10 shadow-sm border-3 border-blue-500/10 shadow-blue-500/10 rounded-md mb-4">
              <span className="text-white flex items-center">
                {pathInfo.icon}
              </span>
              <span className="text-sm text-white font-medium">
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
