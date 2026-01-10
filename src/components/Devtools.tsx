"use client";

import type React from "react";
import { Laptop, Code, Palette, Type, Monitor } from "lucide-react";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

// --- TYPE DEFINITIONS ---
interface SetupItem {
  name: string;
  description: string;
  category?: string;
}

interface SetupSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: SetupItem[];
}

// --- DATA SOURCE ---
const setupData: SetupSection[] = [
  {
    title: "Hardware",
    icon: Laptop,
    items: [
      {
        name: "Acer Swift 3",
        description: "Intel i5 EVO • 8GB RAM • 512GB SSD ",
        category: "Primary Machine",
      },
      {
        name: "Windows 11 Home",
        description: " Windows OS",
        category: "Primary Operating System",
      },
      {
        name: "Back-Lit Keyboard",
        description: "Standard laptop keyboard for comfortable typing sessions",
        category: "Input Device",
      },
      {
        name: "HP Wired Mouse",
        description: "Simple mouse for simple usage",
        category: "Input Device",
      },
    ],
  },
  {
    title: "Development",
    icon: Code,
    items: [
      {
        name: "VS Code",
        description:
          "Primary code editor with an extensive extension ecosystem.",
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
      {
        name: "AWS (Amazon Web Services)",
        description: "Comprehensive cloud computing platform.",
        category: "Primary Cloud Platform",
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
        description:
          "Graphic design platform for quick visual content creation.",
        category: "Graphics",
      },
      {
        name: "Google Fonts",
        description: "Library of free and open-source fonts.",
        category: "Typography",
      },
    ],
  },
  {
    title: "Typography",
    icon: Type,
    items: [
      {
        name: "JetBrains Mono",
        description: "Monospace fonts with programming ligature support.",
        category: "Code Font",
      },
      {
        name: "IBM Plex Sans",
        description: "Modern sans-serif fonts optimized for UI readability.",
        category: "UI/Project Fonts",
      },
      {
        name: "Fira Code",
        description: "Modern monospaced font which i used for my portfolio",
        category: "Portfolio Font",
      },
      {
        name: "Github Dark / Monokai Theme",
        description: "A clean, default theme for VS Code by Microsoft.",
        category: "VS Code Theme",
      },
    ],
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

// --- REUSABLE AnimatedCard COMPONENT ---
const AnimatedCard: React.FC<{ section: SetupSection; index: number }> = ({
  section,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
        {/* Icon with gradient background */}
        <div className="mb-6 inline-flex">
          <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-2xl border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors duration-300">
            <section.icon className="w-7 h-7 text-emerald-400" />
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {section.title}
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" />
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
              {section.items.length} item{section.items.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-6 flex-grow">
          {section.items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
              className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/50 before:via-emerald-500/20 before:to-transparent hover:before:from-emerald-500 hover:before:via-emerald-500/50 before:transition-all before:duration-300"
            >
              {item.category && (
                <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1.5">
                  {item.category}
                </div>
              )}
              <h3 className="font-semibold text-white text-base mb-1.5">
                {item.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export default function Devtools() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-950 to-black text-white relative overflow-hidden">
        {/* Animated background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Monitor className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-gray-300 tracking-wide">
                My Digital Workspace
              </span>
            </motion.div>

            {/* Title with gradient */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              DevSetup
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
              The tools, software, and hardware I use daily to code and design.
            </p>
          </motion.div>

          {/* Setup Grid - Staggered layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20"
          >
            {setupData.map((section, index) => (
              <AnimatedCard
                key={section.title}
                section={section}
                index={index}
              />
            ))}
          </motion.div>

          {/* Footer Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="mt-24 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {setupData.reduce(
                    (acc, section) => acc + section.items.length,
                    0
                  )}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Total Items
                </div>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {setupData.length}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Categories
                </div>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 col-span-2"
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                  2025
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Last Updated
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
