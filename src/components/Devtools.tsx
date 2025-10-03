"use client"

import type React from "react"
import { Laptop, Code, Palette, Type, Monitor } from "lucide-react"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

// --- TYPE DEFINITIONS ---
interface SetupItem {
  name: string
  description: string
  category?: string
}

interface SetupSection {
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: SetupItem[]
}

// --- DATA SOURCE ---
const setupData: SetupSection[] = [
  {
    title: "Hardware",
    icon: Laptop,
    items: [
      {
        name: "Acer Swift 3",
        description: "Intel i5 EVO • 8GB RAM • 512GB SSD • Windows 11 Home",
        category: "Primary Machine",
      },
      {
        name: "Back-Lit Keyboard",
        description: "Standard laptop keyboard for comfortable typing sessions",
        category: "Input Device",
      },
      {
        name: "RedGear Mouse Turbo Fire",
        description: "Ergonomic gaming mouse for precise navigation",
        category: "Input Device",
      },
    ],
  },
  {
    title: "Development",
    icon: Code,
    items: [
      {
        name: "Visual Studio Code",
        description: "Primary code editor with an extensive extension ecosystem.",
        category: "Editor",
      },
      {
        name: "Git & GitHub",
        description: "Version control system with web interface and CLI tools.",
        category: "VCS",
      },
      {
        name: "WSL2 Ubuntu",
        description: "Windows Subsystem for Linux with Ubuntu distribution.",
        category: "Terminal",
      },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    items: [
      {
        name: "Figma",
        description: "Collaborative interface design and prototyping platform.",
        category: "UI/UX",
      },
      {
        name: "Canva",
        description: "Graphic design platform for quick visual content creation.",
        category: "Graphics",
      },
    ],
  },
  {
    title: "Typography",
    icon: Type,
    items: [
      {
        name: "Menlo & Monaco",
        description: "Monospace fonts with programming ligature support.",
        category: "Code Font",
      },
      {
        name: "Rubik | IBM Plex Sans",
        description: "Modern sans-serif fonts optimized for UI readability.",
        category: "UI Font",
      },
      {
        name: "Dark Modern",
        description: "A clean, default theme for VS Code by Microsoft.",
        category: "VS Code Theme",
      },
    ],
  },
]

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

// --- REUSABLE AnimatedCard COMPONENT ---
const AnimatedCard: React.FC<{ section: SetupSection }> = ({ section }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-zinc-950 border border-zinc-800 p-6 h-full flex flex-col cursor-pointer transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-cyan-500 border border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-300">
          <section.icon className="w-6 h-6 text-black" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold headline-kinshuk text-white">{section.title}</h2>
          <p className="text-sm text-zinc-400 uppercase tracking-wider">
            {section.items.length} item{section.items.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-6 flex-grow">
        {section.items.map((item) => (
          <div
            key={item.name}
            className="border-l-2 border-zinc-800 pl-4 group-hover:border-cyan-500 transition-colors duration-300"
          >
            {item.category && (
              <div className="text-xs text-cyan-500 font-semibold uppercase tracking-wider mb-1">{item.category}</div>
            )}
            <h3 className="font-semibold text-white text-lg mb-1">{item.name}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// --- MAIN COMPONENT ---
export default function Devtools() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-zinc-950 border border-zinc-800 px-4 py-2 gap-2 mb-6">
            <Monitor className="w-5 h-5 text-cyan-500" />
            <span className="text-sm font-semibold font-mono text-cyan-500 uppercase tracking-wider">My Digital Workspace</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl headline-kinshuk font-bold text-white mb-4">Development Setup</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">
            The tools, software, and hardware I use daily to code and design.
          </p>
        </motion.div>

        {/* Setup Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-20"
        >
          {setupData.map((section) => (
            <AnimatedCard key={section.title} section={section} />
          ))}
        </motion.div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="mt-20 pt-10 border-t border-zinc-800"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-zinc-950 border border-zinc-800 p-6 text-center hover:border-cyan-500 transition-colors duration-300">
              <div className="text-3xl font-bold text-cyan-500">
                {setupData.reduce((acc, section) => acc + section.items.length, 0)}
              </div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider mt-2">Total Items</div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-6 text-center hover:border-cyan-500 transition-colors duration-300">
              <div className="text-3xl font-bold text-cyan-500">{setupData.length}</div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider mt-2">Categories</div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-6 text-center col-span-2 hover:border-cyan-500 transition-colors duration-300">
              <div className="text-3xl font-bold text-cyan-500">2025</div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider mt-2">Last Updated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
