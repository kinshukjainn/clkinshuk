"use client";

import { FaCode, FaAws, FaRocket, FaCalendar } from "react-icons/fa";

// ============================================
// CONFIGURATION - Edit this section to update your Now page
// ============================================
const NOW_CONFIG = {
  lastUpdated: "January 2026", // Update this when you change content

  intro: {
    title: "What I'm Focused On Right Now",
    description:
      "A snapshot of my current activities, projects, and learning journey. This page follows the /now movement started by Derek Sivers—a simple way to share what I'm actively working on today, not my full biography.",
  },

  // Current Projects - Add/remove/edit as needed
  projects: [
    {
      title: "AI-Powered Fault Detection System",
      status: "In Development",
      description:
        "Building an intelligent system to identify and analyze faults in power transmission infrastructure using AWS Bedrock and Nova Pro models.",
      technologies: ["Next.js 16", "AWS Bedrock", "TypeScript"],
      icon: FaRocket,
      progress: "70%",
    },
    {
      title: "Automation Tools for Cloud Infrastructure",
      status: "Learning",
      description:
        "Deepening my understanding of Terraform and Kubernetes for scalable cloud infrastructure deployment and management.",
      technologies: ["Terraform", "Kubernetes"],
      icon: FaCode,
      progress: "Completing",
    },
  ],

  // Current Learning - What you're studying
  learning: [
    {
      topic: "AWS Cloud Practitioner Certification",
      description:
        "Re-attempting the CLF-02 exam. Focused on mastering core AWS services, pricing models, and cloud architecture best practices.",
      resource: "AWS official documentation & practice exams",
      icon: FaAws,
    },
    {
      topic: "AWS Cloud Developer Associate Certification",
      description:
        "Preparing for the DVA-C02 exam. Concentrating on developing, deploying, and debugging cloud-based applications using AWS services.",
      resource: "AWS official study guides & hands-on labs",
      icon: FaAws,
    },
  ],

  // Current Interests - What excites you
  interests: [
    "Cloud security and IAM best practices",
    "Serverless Infrastructure and architecture",
    "DevOps automation and CI/CD pipelines",
    "Technical writing and knowledge sharing",
  ],

  // Current Reading/Consuming
  consuming: [
    {
      type: "Reading",
      title: "Related to AWS Certifications",
      author: "AWS",
    },
    {
      type: "Following",
      title: "Currently Nothing Specific",
      author: "Just focusing on hands-on learning",
    },
  ],

  // Current Goals - Short-term objectives
  goals: [
    "Complete AWS Cloud Practitioner certification by Q1 2026",
    "Launch the Fault Detection System MVP",
    "Contribute to open-source infrastructure tools",
    "Write 2 technical blog posts per month",
  ],

  // Not Doing - Optional: What you've decided to pause or avoid
  notDoing: [
    "Taking on freelance projects (focusing on learning/building/certifications)",
    "Learning new programming languages outside my current stack",
    "Attending non-essential meetups or conferences",
  ],
};

// ============================================
// COMPONENT - UI Logic (No need to edit below unless changing design)
// ============================================

export default function CurrentWorkings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-950 to-black pt-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        {/* Header */}
        <header className="mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Now
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaCalendar className="w-3.5 h-3.5" />
              <span>Updated {NOW_CONFIG.lastUpdated}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl text-gray-300 font-medium">
              {NOW_CONFIG.intro.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {NOW_CONFIG.intro.description}
            </p>
          </div>
        </header>

        {/* Current Projects */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-emerald-400 mb-6 font-semibold">
            Current Projects
          </h2>
          <div className="space-y-6">
            {NOW_CONFIG.projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-4xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>
                        <span className="text-xs text-emerald-400 font-medium px-2 py-1 bg-emerald-500/10 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.progress && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-500">
                              Progress
                            </span>
                            <span className="text-xs text-gray-400">
                              {project.progress}
                            </span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-1.5">
                            <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Learning */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-emerald-400 mb-6 font-semibold">
            Currently Learning
          </h2>
          <div className="space-y-6">
            {NOW_CONFIG.learning.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-4xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.topic}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="text-gray-400">Resource:</span>{" "}
                        {item.resource}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Interests */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-emerald-400 mb-6 font-semibold">
            Current Interests
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-4xl p-6">
            <ul className="space-y-3">
              {NOW_CONFIG.interests.map((interest, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-emerald-400 mt-1">→</span>
                  <span className="text-sm">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Currently Consuming */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-emerald-400 mb-6 font-semibold">
            Currently Reading/Following
          </h2>
          <div className="space-y-4">
            {NOW_CONFIG.consuming.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-4xl p-4"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-emerald-400 font-semibold px-2 py-1 bg-emerald-500/10 rounded-lg">
                    {item.type}
                  </span>
                  <div>
                    <p className="text-sm text-white font-medium">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Goals */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-emerald-400 mb-6 font-semibold">
            Current Goals
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-4xl p-6">
            <ul className="space-y-3">
              {NOW_CONFIG.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span className="text-sm text-gray-300">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Not Doing (Optional) */}
        {NOW_CONFIG.notDoing && NOW_CONFIG.notDoing.length > 0 && (
          <section className="mb-16">
            <h2 className="text-md uppercase tracking-widest text-gray-500 mb-6 font-semibold">
              Not Doing Right Now
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-4xl p-6">
              <p className="text-xs text-gray-500 mb-4">
                Being intentional about what to focus on also means being clear
                about what to avoid.
              </p>
              <ul className="space-y-3">
                {NOW_CONFIG.notDoing.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="mt-1">✗</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Footer Note */}
        <footer className="text-center py-8">
          <p className="text-sm text-gray-500 leading-relaxed">
            This page is inspired by the{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors underline"
            >
              /now movement
            </a>
            . It's a living document that changes as my focus shifts.
            <br />
            Last updated: {NOW_CONFIG.lastUpdated}
          </p>
        </footer>
      </div>
    </div>
  );
}
