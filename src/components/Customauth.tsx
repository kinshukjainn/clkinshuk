"use client"

import type React from "react"
import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { FaGithub, FaSignOutAlt, FaUser, FaSpinner, FaLinkedin } from "react-icons/fa"
import { SiHuggingface } from "react-icons/si"
import { useAuth, useSignIn, useUser } from "@clerk/clerk-react"

interface AuthComponentProps {
  className?: string
  redirectTo?: string
}

const Customauth: React.FC<AuthComponentProps> = ({ className = "", redirectTo = "/" }) => {
  const { isSignedIn, signOut } = useAuth()
  const { signIn, isLoaded } = useSignIn()
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSSOSignIn = async (
    provider: "oauth_github" | "oauth_gitlab" | "oauth_huggingface" | "oauth_linkedin",
  ) => {
    if (!isLoaded) return
    setIsLoading(provider)
    try {
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: redirectTo,
      })
    } catch (error) {
      console.error("Sign in error:", error)
      setIsLoading(null)
    }
  }

  const handleSignOut = async () => {
    setIsLoading("signout")
    try {
      await signOut()
    } catch (error) {
      console.error("Sign out error:", error)
    } finally {
      setIsLoading(null)
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const buttonVariants: Variants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  }

  if (isSignedIn && user) {
    return (
      <motion.div
        className={`w-full max-w-md mx-auto p-8 bg-black border-2 border-zinc-800 shadow-2xl ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="w-20 h-20 mx-auto mb-6 bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center">
            {user.imageUrl ? (
              <img src={user.imageUrl || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <FaUser className="text-cyan-400 text-3xl" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Welcome back!</h2>
          <p className="text-zinc-400 text-sm font-mono">
            {user.emailAddresses[0]?.emailAddress || user.username || "User"}
          </p>
        </motion.div>

        <motion.button
          onClick={handleSignOut}
          disabled={isLoading === "signout"}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-4 px-6 border-2 border-zinc-700 hover:border-red-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "signout" ? (
            <FaSpinner className="animate-spin text-lg text-cyan-400" />
          ) : (
            <FaSignOutAlt className="text-lg text-red-400 group-hover:text-red-300 transition-colors" />
          )}
          <span className="tracking-wide">{isLoading === "signout" ? "Signing out..." : "Sign Out"}</span>
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`w-full max-w-md mx-auto p-8 bg-[#141414] rounded-md  border-2 border-[#444444] shadow-2xl ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex mb-8 bg-zinc-950 border-2 border-zinc-800 p-2 rounded-md" variants={itemVariants}>
        <button
          onClick={() => setIsSignUp(false)}
          className={`flex-1 py-2 px-2 text-sm font-bold tracking-wide transition-all duration-300 ${
            !isSignUp ? "bg-green-500 rounded-md text-black" : "text-gray-300 hover:text-white rounded-md hover:bg-zinc-900"
          }`}
        >
          LOG IN
        </button>
        <button
          onClick={() => setIsSignUp(true)}
          className={`flex-1 py-2 px-2 text-sm font-bold tracking-wide transition-all duration-300 ${
            isSignUp ? "bg-green-500 rounded-md text-black" : "text-gray-300 hover:text-white rounded-md hover:bg-zinc-900"
          }`}
        >
          SIGN UP
        </button>
      </motion.div>

      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="text-zinc-400 text-sm">
          {isSignUp ? "Sign up to get started" : "Login to continue with your account"}
        </p>
      </motion.div>

      <motion.div className="space-y-4" variants={itemVariants}>
        <motion.button
          onClick={() => handleSSOSignIn("oauth_github")}
          disabled={isLoading === "oauth_github" || !isLoaded}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-4 px-6 rounded-md  border-2 border-zinc-700 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "oauth_github" ? (
            <FaSpinner className="animate-spin text-lg text-cyan-400" />
          ) : (
            <FaGithub className="text-white text-xl group-hover:text-cyan-400 transition-colors" />
          )}
          <span className="tracking-wide">
            {isLoading === "oauth_github" ? "Connecting..." : `${isSignUp ? "Sign up" : "Login"} via GitHub`}
          </span>
        </motion.button>

        <motion.button
          onClick={() => handleSSOSignIn("oauth_linkedin")}
          disabled={isLoading === "oauth_linkedin" || !isLoaded}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-4 px-6 border-2 border-zinc-700 rounded-md  hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "oauth_linkedin" ? (
            <FaSpinner className="animate-spin text-lg text-cyan-400" />
          ) : (
            <FaLinkedin className="text-blue-400 text-xl group-hover:text-blue-300 transition-colors" />
          )}
          <span className="tracking-wide">
            {isLoading === "oauth_linkedin" ? "Connecting..." : `${isSignUp ? "Sign up" : "Login"} via LinkedIn`}
          </span>
        </motion.button>

        <motion.button
          onClick={() => handleSSOSignIn("oauth_huggingface")}
          disabled={isLoading === "oauth_huggingface" || !isLoaded}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-4 px-6 border-2 border-zinc-700 rounded-md  hover:border-yellow-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {isLoading === "oauth_huggingface" ? (
            <FaSpinner className="animate-spin text-lg text-cyan-400" />
          ) : (
            <SiHuggingface className="text-yellow-400 text-xl group-hover:text-yellow-300 transition-colors" />
          )}
          <span className="tracking-wide">
            {isLoading === "oauth_huggingface" ? "Connecting..." : `${isSignUp ? "Sign up" : "Login"} via Hugging Face`}
          </span>
        </motion.button>
      </motion.div>

      <motion.div className="mt-8 pt-6 border-t border-zinc-800 text-center" variants={itemVariants}>
        <p className="text-zinc-500 text-xs leading-relaxed">
          By {isSignUp ? "signing up" : "signing in"}, you agree to our{" "}
          <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors">Terms of Service</span>{" "}
          and <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors">Privacy Policy</span>
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Customauth
