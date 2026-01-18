"use client";

import React from "react";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Monitor,
  Settings,
  Code2,
  FileCode,
  Palette,
  Zap,
  Shield,
  Server,
} from "lucide-react";
import {
  FaFigma,
  FaDocker,
  FaAws,
  FaWindows,
  FaLinux,
  FaGithub,
  FaKeyboard,
} from "react-icons/fa6";

interface ToolItem {
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

interface ToolSection {
  title: string;
  icon: React.ReactNode;
  items: ToolItem[];
  color: string;
}

const setupData: ToolSection[] = [
  {
    title: "Hardware",
    icon: <Monitor className="w-5 h-5" />,
    color: "text-slate-700",
    items: [
      {
        name: "Acer Swift 3",
        description: "Intel i5 EVO • 8GB RAM • 512GB SSD",
        category: "Primary Machine",
        icon: <Monitor className="w-4 h-4" />,
      },
      {
        name: "Windows 11 Home",
        description: "Windows OS",
        category: "Primary Operating System",
        icon: <FaWindows className="w-4 h-4" />,
      },
      {
        name: "Mechanical Keyboard",
        description: "Premium mechanical keyboard for extended coding sessions",
        category: "Input Device",
        icon: <FaKeyboard className="w-4 h-4" />,
      },
      {
        name: "Wired Mouse",
        description: "High-precision mouse for precise interactions",
        category: "Input Device",
        icon: <Settings className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Development",
    icon: <Code2 className="w-5 h-5" />,
    color: "text-slate-700",
    items: [
      {
        name: "VS Code",
        description:
          "Primary editor with an extensive ecosystem of extensions for productivity",
        category: "Code Editor",
        icon: <FileCode className="w-4 h-4" />,
      },
      {
        name: "Git & GitHub",
        description: "Version control system with distributed workflows",
        category: "Version Control",
        icon: <FaGithub className="w-4 h-4" />,
      },
      {
        name: "WSL2 Ubuntu",
        description: "Windows Subsystem for Linux with Ubuntu environment",
        category: "Development Shell",
        icon: <FaLinux className="w-4 h-4" />,
      },
      {
        name: "AWS (EC2, RDS)",
        description: "Cloud infrastructure for scalable applications",
        category: "Cloud Services",
        icon: <FaAws className="w-4 h-4" />,
      },
      {
        name: "Docker",
        description: "Containerization platform for consistent deployments",
        category: "DevOps",
        icon: <FaDocker className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Design & Prototyping",
    icon: <Palette className="w-5 h-5" />,
    color: "text-slate-700",
    items: [
      {
        name: "Figma",
        description: "Collaborative interface design and prototyping platform",
        category: "UI/UX Design",
        icon: <FaFigma className="w-4 h-4" />,
      },
      {
        name: "Google Fonts",
        description: "Open-source typography library for web projects",
        category: "Typography",
        icon: <FileCode className="w-4 h-4" />,
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
        category: "Styling",
        icon: <Zap className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Security & Monitoring",
    icon: <Shield className="w-5 h-5" />,
    color: "text-slate-700",
    items: [
      {
        name: "GitHub Security",
        description: "Dependabot and security scanning for vulnerabilities",
        category: "Code Security",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        name: "SSL/TLS Certificates",
        description: "End-to-end encryption for secure communications",
        category: "Network Security",
        icon: <Server className="w-4 h-4" />,
      },
    ],
  },
];

const AnimatedCard = ({ section }: { section: ToolSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      className={`group relative opacity-0 transition-opacity duration-700 ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Card */}
      <div className="relative p-6 sm:p-8 border border-slate-200 rounded-none hover:border-slate-300 transition-all duration-300 bg-white hover:bg-slate-50/50 group">
        {/* Icon header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className={`${section.color} opacity-80 group-hover:opacity-100 transition-opacity`}
            >
              {section.icon}
            </div>
            <h2 className="text-lg sm:text-xl font-medium text-slate-900">
              {section.title}
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {section.items.length} tools
          </span>
        </div>

        {/* Divider */}
        <div className="w-8 h-px bg-slate-200 mb-6 group-hover:w-12 transition-all duration-300" />

        {/* Items */}
        <div className="space-y-5">
          {section.items.map((item) => (
            <div
              key={item.name}
              className="group/item cursor-pointer transition-all duration-200 hover:translate-x-1"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 text-slate-400 group-hover/item:text-slate-600 transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="text-sm font-medium text-slate-900">
                      {item.name}
                    </h3>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function DevTools() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern" />

      <div className="relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto opacity-0 transition-opacity duration-700 ${
            isHeaderInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-block mb-6 text-xs font-medium text-slate-600 uppercase tracking-wider">
            Professional Development Environment
          </div>

          {/* Title */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium heading-font text-slate-900 leading-tight mb-4">
              My
              <br />
              Development Stack
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Here's what I use to build projects and collaborate with others.
              Always learning and exploring new tools.
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-slate-400 to-slate-100 mt-8" />
        </div>

        {/* Grid */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-24 sm:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {setupData.map((section) => (
              <div key={section.title} className="animation-delay">
                <AnimatedCard section={section} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="border-t border-slate-200 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              <div className="group cursor-pointer">
                <div className="text-3xl sm:text-4xl font-light text-slate-900 mb-2">
                  {setupData.reduce(
                    (acc, section) => acc + section.items.length,
                    0,
                  )}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Total Tools
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl sm:text-4xl font-light text-slate-900 mb-2">
                  {setupData.length}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Categories
                </div>
              </div>
              <div className="group cursor-pointer col-span-2 sm:col-span-2">
                <div className="text-3xl sm:text-4xl font-light text-slate-900 mb-2">
                  2025
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Last Updated
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </main>
  );
}
