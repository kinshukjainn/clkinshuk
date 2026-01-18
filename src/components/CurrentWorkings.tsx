"use client";

import { FaCode, FaAws, FaRocket, FaCalendar } from "react-icons/fa6";
import { HiSparkles, HiBookOpen, HiLightBulb } from "react-icons/hi2";

const NOW_CONFIG = {
  lastUpdated: "January 2026",

  intro: {
    title: "What I'm Focused On Right Now",
    description:
      "A snapshot of my current activities, projects, and learning journey. This page follows the /now movement started by Derek Sivers—a simple way to share what I'm actively working on today, not my full biography.",
  },

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

  interests: [
    "Cloud security and IAM best practices",
    "Serverless Infrastructure and architecture",
    "DevOps automation and CI/CD pipelines",
    "Technical writing and knowledge sharing",
  ],

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

  goals: [
    "Complete AWS Cloud Practitioner certification by Q1 2026",
    "Launch the Fault Detection System MVP",
    "Contribute to open-source infrastructure tools",
    "Write 2 technical blog posts per month",
  ],

  notDoing: [
    "Taking on freelance projects (focusing on learning/building/certifications)",
    "Learning new programming languages outside my current stack",
    "Attending non-essential meetups or conferences",
  ],
};

export default function CurrentWorkings() {
  return (
    <div className="min-h-screen pt-10 bg-white text-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <header className="mb-12 sm:mb-16 lg:mb-20 pb-8 sm:pb-10 lg:pb-12 border-b border-muted">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-tight mb-2">
                Current Workings
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground font-light">
                My focus and progress in real-time
              </p>
            </div>
            <div className="flex items-center px-4 py-2 rounded-full w-max border border-border bg-secondary gap-2 text-xs sm:text-sm text-foreground flex-shrink-0 whitespace-nowrap">
              <FaCalendar className="w-3.5 h-3.5 text-muted-foreground" />
              <span>{NOW_CONFIG.lastUpdated}</span>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground">
              {NOW_CONFIG.intro.title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl font-light">
              {NOW_CONFIG.intro.description}
            </p>
          </div>
        </header>

        {/* Current Projects */}
        <section className="mb-12 sm:mb-16 lg:mb-20 pb-8 sm:pb-10 lg:pb-12 border-b border-muted">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <HiSparkles className="w-5 h-5 text-foreground" />
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-foreground font-semibold">
              Current Projects
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {NOW_CONFIG.projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-border rounded-lg p-5 sm:p-6 lg:p-7 hover:border-muted-foreground/30 hover:bg-secondary/40 transition-all duration-300"
                >
                  <div className="flex gap-4 sm:gap-5">
                    <div className="p-3 bg-secondary rounded-lg w-fit h-fit flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                        <h3 className="text-base sm:text-lg font-medium text-foreground break-words">
                          {project.title}
                        </h3>
                        <span className="text-xs font-medium px-3 py-1 bg-secondary text-foreground rounded-full w-fit flex-shrink-0 whitespace-nowrap">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed font-light">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 bg-muted/40 border border-border rounded-full text-foreground whitespace-nowrap font-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.progress && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                              Progress
                            </span>
                            <span className="text-xs font-medium text-foreground">
                              {project.progress}
                            </span>
                          </div>
                          <div className="w-full bg-muted/30 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-foreground h-1.5 rounded-full transition-all duration-500" />
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
        <section className="mb-12 sm:mb-16 lg:mb-20 pb-8 sm:pb-10 lg:pb-12 border-b border-muted">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <HiBookOpen className="w-5 h-5 text-foreground" />
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-foreground font-semibold">
              Currently Learning
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {NOW_CONFIG.learning.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-lg p-5 sm:p-6 lg:p-7 hover:border-muted-foreground/30 hover:bg-secondary/40 transition-all duration-300"
                >
                  <div className="flex gap-4 sm:gap-5">
                    <div className="p-3 bg-secondary rounded-lg w-fit h-fit flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 break-words">
                        {item.topic}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed font-light">
                        {item.description}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light break-words">
                        <span className="font-medium text-foreground">
                          Resource:
                        </span>{" "}
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
        <section className="mb-12 sm:mb-16 lg:mb-20 pb-8 sm:pb-10 lg:pb-12 border-b border-muted">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <HiLightBulb className="w-5 h-5 text-foreground" />
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-foreground font-semibold">
              Current Interests
            </h2>
          </div>
          <div className="bg-white border border-border rounded-lg p-5 sm:p-6 lg:p-7">
            <ul className="space-y-3 sm:space-y-4">
              {NOW_CONFIG.interests.map((interest, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <span className="text-foreground font-light mt-0.5 flex-shrink-0">
                    →
                  </span>
                  <span className="text-sm sm:text-base text-muted-foreground break-words font-light">
                    {interest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Currently Consuming */}
        <section className="mb-12 sm:mb-16 lg:mb-20 pb-8 sm:pb-10 lg:pb-12 border-b border-muted">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <HiBookOpen className="w-5 h-5 text-foreground" />
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-foreground font-semibold">
              Reading & Following
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {NOW_CONFIG.consuming.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-4 sm:p-5 lg:p-6 hover:border-muted-foreground/30 hover:bg-secondary/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-4">
                  <span className="text-xs font-medium px-3 py-1 bg-secondary text-foreground rounded-full w-fit whitespace-nowrap flex-shrink-0 uppercase tracking-wide">
                    {item.type}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm sm:text-base text-foreground font-medium break-words mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground break-words font-light">
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Goals */}
        <section className="mb-12 sm:mb-16 lg:mb-20 pb-8 sm:pb-10 lg:pb-12 border-b border-muted">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-foreground font-semibold">
              Current Goals
            </h2>
          </div>
          <div className="bg-white border border-border rounded-lg p-5 sm:p-6 lg:p-7">
            <ul className="space-y-3 sm:space-y-4">
              {NOW_CONFIG.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <span className="text-sm sm:text-base text-muted-foreground break-words font-light">
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Not Doing */}
        {NOW_CONFIG.notDoing && NOW_CONFIG.notDoing.length > 0 && (
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <h2 className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-semibold">
                Not Doing Right Now
              </h2>
            </div>
            <div className="bg-white border border-border rounded-lg p-5 sm:p-6 lg:p-7">
              <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed font-light">
                Being intentional about what to focus on also means being clear
                about what to avoid.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {NOW_CONFIG.notDoing.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 text-muted-foreground"
                  >
                    <span className="font-light mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-sm sm:text-base break-words font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Footer Note */}
        <footer className="text-center py-8 sm:py-12 border-t border-muted">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-4 font-light">
            This page is inspired by the{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground font-medium transition-colors underline decoration-border underline-offset-2"
            >
              /now movement
            </a>
            . It's a living document that changes as my focus shifts.
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">
              Last updated: {NOW_CONFIG.lastUpdated}
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
