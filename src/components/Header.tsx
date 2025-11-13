"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { FiMenu, FiX, FiHome, FiFileText, FiSettings } from "react-icons/fi"
import { UserButton, useUser, SignOutButton } from "@clerk/clerk-react"

interface NavItem {
  path: string
  label: string
  icon: React.ReactNode
}

interface NavLinkProps {
  to: string
  isActive: boolean
  label: string
  icon: React.ReactNode
  onClick?: () => void
}

const NavLink = ({ to, isActive, label, icon, onClick }: NavLinkProps) => (
  <Link to={to} onClick={onClick}>
    <motion.div
      className={`relative px-2 py-2 transition-all duration-200 flex items-center gap-4 ${
        isActive
          ? "text-white  rounded-md font-semibold hover:text-white  bg-[#303030]"
          : "text-white hover:bg-[#303030] hover:text-white rounded-md font-semibold"
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
)

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { isSignedIn } = useUser()

  const protectedRoutes: string[] = ["/blogs", "/sources"]

  const isProtectedRoute: boolean = protectedRoutes.some((route: string) => location.pathname.startsWith(route))

  const getPathInfo = (): { text: string; icon: React.ReactNode } => {
    const { pathname } = location
    if (pathname.startsWith("/gears")) return { text: "DevTools", icon: <FiSettings className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> }
    if (pathname.startsWith("/blogs")) return { text: "Blogs", icon: <FiFileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> }
    if (pathname.startsWith("/sign-in")) return { text: "Verify", icon: <FiHome className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> }
    return { text: "Home", icon: <FiHome className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> }
  }

  const isActiveRoute = (path: string): boolean => location.pathname.startsWith(path) || location.pathname === path

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen)
  const closeMenu = (): void => setIsMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const navItems: NavItem[] = [
    { path: "/blogs", label: "Blogs", icon: <FiFileText /> },
    { path: "/gears", label: "Dev Setup", icon: <FiSettings /> },
  ]

  const pathInfo = getPathInfo()

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-[9999]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div className="relative backdrop-blur-xl bg-black">
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
              {/* Logo Section - Enhanced Horizontal Layout */}
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
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Main Title - Bold and Large */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-none whitespace-nowrap">
                      cloudkinshuk
                    </h1>
                    
                    {/* Route Badge - Small with Icon */}
                    <motion.div
                      className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-2.5 md:px-3 py-2 sm:py-1.5 bg-[#303030] rounded-md  border border-black sm:rounded-lg shadow-lg"
                      whileHover={{ scale: 1.05, backgroundColor: "#323232" }}
                    >
                      <span className="text-white flex items-center">
                        {pathInfo.icon}
                      </span>
                      <span className="text-sm sm:text-sm md:text-md text-white font-normal whitespace-nowrap">
                        {pathInfo.text}
                      </span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item: NavItem, index: number) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    <NavLink to={item.path} isActive={isActiveRoute(item.path)} label={item.label} icon={item.icon} />
                  </motion.div>
                ))}

                {/* Auth Section - Only on Protected Routes */}
                {isProtectedRoute && (
                  <motion.div
                    className="flex items-center gap-4 ml-6 pl-6 border-l border-zinc-800"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {isSignedIn ? (
                      <>
                        <UserButton
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: "w-10 h-10 ring-1 ring-zinc-800",
                            },
                          }}
                        />
                        <SignOutButton>
                          <motion.button
                            className="px-3 py-1 text-white text-base bg-[#323232] transition-all cursor-pointer rounded-md duration-200 font-normal hover:bg-[#303030]"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Sign Out
                          </motion.button>
                        </SignOutButton>
                      </>
                    ) : (
                      <Link to="/sign-in">
                        <motion.div
                          className="px-5 py-2.5 bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-all duration-200 rounded-full"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Sign In
                        </motion.div>
                      </Link>
                    )}
                  </motion.div>
                )}
              </nav>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  onClick={toggleMenu}
                  className="relative p-2 sm:p-3 bg-[#303030] text-white outline-none transition-all cursor-pointer rounded-md duration-200"
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle menu"
                >
                  <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    {isMenuOpen ? <FiX size={20} className="sm:w-[22px] sm:h-[22px]" /> : <FiMenu size={20} className="sm:w-[22px] sm:h-[22px]" />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="lg:hidden fixed inset-0 z-[9998]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeMenu}
        />

        {/* Mobile Menu Content */}
        <motion.div
          className="absolute backdrop-blur-xl top-16 sm:top-20 md:top-24 left-0 right-0 bg-[#222222] text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: isMenuOpen ? 0 : -50,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-6 space-y-2">
            {navItems.map((item: NavItem, index: number) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{
                  duration: 0.2,
                  delay: isMenuOpen ? index * 0.05 : 0,
                }}
              >
                <NavLink to={item.path} isActive={isActiveRoute(item.path)} label={item.label} icon={item.icon} onClick={closeMenu} />
              </motion.div>
            ))}

            {/* Mobile Auth Section - Only on Protected Routes */}
            {isProtectedRoute && (
              <motion.div
                className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-zinc-800 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : 20,
                }}
                transition={{ duration: 0.25, delay: 0.15 }}
              >
                {isSignedIn ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8 sm:w-10 sm:h-10 ring-1 ring-zinc-800",
                          },
                        }}
                      />
                      <span className="text-zinc-100 text-sm sm:text-base font-semibold">Blogs</span>
                    </div>
                    <SignOutButton>
                      <motion.button
                        className="w-full px-3 py-2.5 sm:py-3 text-black text-sm sm:text-base font-semibold bg-green-500 hover:bg-green-400 transition-all cursor-pointer rounded-md duration-200"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={closeMenu}
                      >
                        Sign Out
                      </motion.button>
                    </SignOutButton>
                  </div>
                ) : (
                  <Link to="/sign-in" onClick={closeMenu} className="block">
                    <motion.div
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-cyan-400 text-black text-sm sm:text-base font-semibold hover:bg-cyan-300 transition-all duration-300 text-center rounded-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign In
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Header;