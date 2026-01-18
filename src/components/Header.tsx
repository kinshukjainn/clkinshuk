"use client";

import React from "react";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
    <div
      className={`flex items-center gap-2 px-3 py-2 border-b-2 transition-colors ${
        isActive
          ? "text-blue-600 border-blue-600 font-semibold"
          : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="font-semibold text-base whitespace-nowrap">{label}</span>
    </div>
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
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <h1 className="text-2xl font-bold text-gray-900">
                CLOUDKINSHUK<span className="text-gray-600">.in</span>
              </h1>

              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 border-l border-gray-300 pl-4">
                <span className="text-gray-700 flex items-center text-lg">
                  {pathInfo.icon}
                </span>
                <span className="text-base text-gray-800 font-semibold whitespace-nowrap">
                  {pathInfo.text}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-4">
              {navItems.map((item) => (
                <div key={item.path}>
                  <NavLink
                    to={item.path}
                    isActive={isActiveRoute(item.path)}
                    label={item.label}
                    icon={item.icon}
                  />
                </div>
              ))}
            </nav>

            {/* Desktop GitHub Button */}
            <a
              title="GitHub Repository"
              href="https://github.com/kinshukjainn/clkinshuk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600 font-semibold flex items-center gap-2"
            >
              <FiGithub size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile GitHub Button */}
            <a
              title="GitHub Repository"
              href="https://github.com/kinshukjainn/clkinshuk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600"
            >
              <FiGithub size={20} />
            </a>

            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600"
            >
              <div>{isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}</div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden fixed inset-0 z-[9998]">
        <div className="absolute inset-0 bg-black/20" onClick={closeMenu} />

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white border border-gray-200">
          <div className="p-6 space-y-4">
            {/* Current Path Indicator */}
            <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-blue-600 mb-4">
              <span className="text-blue-600 flex items-center text-lg">
                {pathInfo.icon}
              </span>
              <span className="text-base text-blue-600 font-semibold">
                {pathInfo.text}
              </span>
            </div>

            {navItems.map((item) => (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  isActive={isActiveRoute(item.path)}
                  label={item.label}
                  icon={item.icon}
                  onClick={closeMenu}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
