"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { motion, type Variants } from "framer-motion"
import { FaGithub, FaSignOutAlt, FaUser, FaSpinner,  FaExclamationTriangle } from "react-icons/fa"
import { SiHuggingface } from "react-icons/si"
import { useAuth, useSignIn, useUser, useClerk } from "@clerk/clerk-react"
import type { OAuthStrategy } from "@clerk/types"

interface AuthComponentProps {
  className?: string
  redirectTo?: string
  onSuccess?: () => void
  onError?: (error: Error) => void
}

type LoadingState = OAuthStrategy | "signout" | null

interface AuthError {
  message: string
  code?: string
}

const Customauth: React.FC<AuthComponentProps> = ({ 
  className = "", 
  redirectTo = "/",
  onSuccess,
  onError 
}) => {
  const { isSignedIn, isLoaded: authLoaded } = useAuth()
  const { signIn, isLoaded: signInLoaded } = useSignIn()
  const { user } = useUser()
  const { signOut } = useClerk()
  
  const [isLoading, setIsLoading] = useState<LoadingState>(null)
  const [isSignUp, setIsSignUp] = useState<boolean>(false)
  const [error, setError] = useState<AuthError | null>(null)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isComponentLoaded = authLoaded && signInLoaded && mounted

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const handleSSOSignIn = useCallback(async (
    provider: OAuthStrategy
  ): Promise<void> => {
    if (!signInLoaded || !signIn) {
      setError({ message: "Authentication service is not ready. Please try again." })
      return
    }

    setIsLoading(provider)
    clearError()

    try {
      const redirectUrl = `${window.location.origin}/sso-callback`
      const redirectUrlComplete = redirectTo.startsWith('http') 
        ? redirectTo 
        : `${window.location.origin}${redirectTo}`

      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl,
        redirectUrlComplete,
      })

      onSuccess?.()
    } catch (err) {
      const error = err as Error & { errors?: Array<{ code: string; message: string }> }
      const errorMessage = error.errors?.[0]?.message || error.message || "Authentication failed. Please try again."
      const errorCode = error.errors?.[0]?.code
      
      setError({ 
        message: errorMessage,
        code: errorCode 
      })
      
      onError?.(new Error(errorMessage))
      console.error(`SSO Sign in error (${provider}):`, error)
    } finally {
      setIsLoading(null)
    }
  }, [signInLoaded, signIn, redirectTo, onSuccess, onError, clearError])

  const handleSignOut = useCallback(async (): Promise<void> => {
    setIsLoading("signout")
    clearError()

    try {
      await signOut()
      onSuccess?.()
    } catch (err) {
      const error = err as Error
      const errorMessage = error.message || "Sign out failed. Please try again."
      
      setError({ message: errorMessage })
      onError?.(new Error(errorMessage))
      console.error("Sign out error:", error)
    } finally {
      setIsLoading(null)
    }
  }, [signOut, onSuccess, onError, clearError])

  const handleGitHubAuth = useCallback(() => handleSSOSignIn("oauth_github"), [handleSSOSignIn])
  const handleHuggingFaceAuth = useCallback(() => handleSSOSignIn("oauth_huggingface"), [handleSSOSignIn])

  const toggleAuthMode = useCallback(() => {
    setIsSignUp(prev => !prev)
    clearError()
  }, [clearError])

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

  if (!isComponentLoaded) {
    return (
      <div className={`w-full max-w-md mx-auto p-8 bg-black border-2 border-zinc-800 shadow-2xl ${className}`}>
        <div className="flex items-center justify-center py-12">
          <FaSpinner className="animate-spin text-4xl text-cyan-400" />
        </div>
      </div>
    )
  }

  if (isSignedIn && user) {
    const displayName = user.fullName || user.username || user.firstName || "User"
    const displayEmail = user.primaryEmailAddress?.emailAddress || 
                        user.emailAddresses[0]?.emailAddress || 
                        "No email available"

    return (
      <motion.div
        className={`w-full max-w-md mx-auto p-8 bg-black border-2 border-zinc-800 shadow-2xl ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="w-20 h-20 mx-auto mb-6 bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center overflow-hidden">
            {user.imageUrl ? (
              <img 
                src={user.imageUrl} 
                alt={`${displayName}'s profile`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = '<svg class="text-cyan-400 text-3xl w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>'
                  }
                }}
              />
            ) : (
              <FaUser className="text-cyan-400 text-3xl" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Welcome back!</h2>
          <p className="text-zinc-400 text-sm font-mono break-all px-2">
            {displayName}
          </p>
          <p className="text-zinc-500 text-xs font-mono mt-1 break-all px-2">
            {displayEmail}
          </p>
        </motion.div>

        {error && (
          <motion.div 
            className="mb-6 p-4 bg-red-950/50 border border-red-500/50 rounded text-sm text-red-300 flex items-start gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaExclamationTriangle className="text-red-400 mt-0.5 flex-shrink-0" />
            <span>{error.message}</span>
          </motion.div>
        )}

        <motion.button
          onClick={handleSignOut}
          disabled={isLoading === "signout"}
          className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-4 px-6 border-2 border-zinc-700 hover:border-red-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          variants={buttonVariants}
          whileHover={isLoading === "signout" ? undefined : "hover"}
          whileTap={isLoading === "signout" ? undefined : "tap"}
          aria-label="Sign out"
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
      className={`w-full max-w-md mx-auto p-8 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex mb-8 bg-zinc-950 p-2 rounded-md" variants={itemVariants}>
        <button
          aria-label="Switch to sign in"
          onClick={toggleAuthMode}
          disabled={!!isLoading}
          className={`flex-1 py-2 px-2 text-sm font-normal tracking-wide transition-all duration-300 ${
            !isSignUp 
              ? "border-b-4 border-white  cursor-pointer text-white" 
              : "text-gray-300 hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          }`}
        >
          Log in
        </button>
        <button
          onClick={toggleAuthMode}
          disabled={!!isLoading}
          className={`flex-1 py-2 px-2 text-sm font-normal tracking-wide transition-all duration-300 ${
            isSignUp 
              ? "border-b-4 border-white  cursor-pointer text-white" 
              : "text-gray-300 hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          }`}
          aria-label="Switch to sign up"
        >
          Sign Up
        </button>
      </motion.div>

      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h1 className="text-3xl font-bold text-green-500   mb-3 tracking-tight">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="text-white  text-md">
          {isSignUp ? "Sign up to get started" : "Login to continue with your account"}
        </p>
      </motion.div>

      {error && (
        <motion.div 
          className="mb-6 p-4 bg-red-950/50 border border-red-500/50 rounded text-sm text-red-300 flex items-start gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaExclamationTriangle className="text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <p>{error.message}</p>
            {error.code && <p className="text-xs text-red-400 mt-1">Error code: {error.code}</p>}
          </div>
        </motion.div>
      )}

      <motion.div className="space-y-4" variants={itemVariants}>
        <motion.button
          onClick={handleGitHubAuth}
          disabled={!!isLoading || !isComponentLoaded}
          className="w-full bg-[#252525] hover:bg-[#232323] text-white font-normal    py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
          variants={buttonVariants}
          whileHover={isLoading ? undefined : "hover"}
          whileTap={isLoading ? undefined : "tap"}
          aria-label={`${isSignUp ? "Sign up" : "Login"} with GitHub`}
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
          onClick={handleHuggingFaceAuth}
          disabled={!!isLoading || !isComponentLoaded}
          className="w-full bg-[#252525] hover:bg-[#232323] text-white font-normal    py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
          variants={buttonVariants}
          whileHover={isLoading ? undefined : "hover"}
          whileTap={isLoading ? undefined : "tap"}
          aria-label={`${isSignUp ? "Sign up" : "Login"} with Hugging Face`}
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
          <button 
            className="text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors underline"
            onClick={() => window.open('/terms', '_blank')}
            aria-label="View Terms of Service"
          >
            Terms of Service
          </button>{" "}
          and{" "}
          <button 
            className="text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors underline"
            onClick={() => window.open('/privacy', '_blank')}
            aria-label="View Privacy Policy"
          >
            Privacy Policy
          </button>
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Customauth