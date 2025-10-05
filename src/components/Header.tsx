"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import { UserButton, useUser, SignOutButton } from "@clerk/clerk-react"

interface NavItem {
  path: string
  label: string
}

interface NavLinkProps {
  to: string
  isActive: boolean
  label: string
  onClick?: () => void
}

const NavLink = ({ to, isActive, label, onClick }: NavLinkProps) => (
  <Link to={to} onClick={onClick}>
    <motion.div
      className={`relative px-3 py-2 transition-all duration-200 ${
        isActive
          ? "text-gray-900 rounded-md font-semibold hover:text-black bg-green-600"
          : "text-white hover:bg-green-400 hover:text-black rounded-md  font-semibold"
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
      <span className="relative z-10 font-medium text-lg">{label}</span>
    </motion.div>
  </Link>
)

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { isSignedIn } = useUser()

  const protectedRoutes: string[] = ["/blogs", "/sources"]

  const isProtectedRoute: boolean = protectedRoutes.some((route: string) => location.pathname.startsWith(route))

  const getPathText = (): string => {
    const { pathname } = location
    if (pathname.startsWith("/gears")) return "DevTools"
    if (pathname.startsWith("/blogs")) return "Blogs"
    if (pathname.startsWith("/sign-in")) return "Verify"
    return "Home"
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
    { path: "/blogs", label: "Blogs" },
    { path: "/gears", label: "Dev Setup" },
  ]

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-[9999]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div className="relative backdrop-blur-xl bg-[#121212] ">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <Link to="/" onClick={closeMenu}>
                  <motion.h1
                    className="text-2xl sm:text-2xl lg:text-3xl font-medium text-white"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    CloudKinshuk <span className="text-zinc-500">/</span>{" "}
                    <span className=" text-green-400 text-md">{getPathText()}</span>
                  </motion.h1>
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
                    <NavLink to={item.path} isActive={isActiveRoute(item.path)} label={item.label} />
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
                            className="px-2 py-2 text-black text-lg bg-green-500 transition-all cursor-pointer rounded-md duration-200 font-semibold hover:bg-green-400"
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
                          className="px-5 py-2.5 bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-all duration-200"
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
                  className="relative p-3 bg-[#212121] text-white border-2 border-[#444444] outline-none transition-all cursor-pointer rounded-md duration-200 hover:bg-[#242424]"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
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
          className="absolute top-16 sm:top-20 left-0 right-0 bg-[#222222] text-white "
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: isMenuOpen ? 0 : -50,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="px-4 sm:px-6 py-6 space-y-2">
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
                <NavLink to={item.path} isActive={isActiveRoute(item.path)} label={item.label} onClick={closeMenu} />
              </motion.div>
            ))}

            {/* Mobile Auth Section - Only on Protected Routes */}
            {isProtectedRoute && (
              <motion.div
                className="pt-4 mt-4 border-t border-zinc-800 space-y-3"
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
                            avatarBox: "w-10 h-10 ring-1 ring-zinc-800",
                          },
                        }}
                      />
                      <span className="text-zinc-100 text-md font-semibold">Signed in</span>
                    </div>
                    <SignOutButton>
                      <motion.button
                        className="w-full px-3 py-3 text-black text-md font-semibold bg-green-500 hover:bg-green-400 transition-all cursor-pointer rounded-md duration-200"
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
                      className="w-full px-6 py-3 bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-all duration-300 text-center"
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

export default Header
