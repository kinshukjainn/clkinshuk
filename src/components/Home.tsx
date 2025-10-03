"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiTerraform,
  SiKubernetes,
  SiVite,
  SiTypescript,
  SiAwslambda,
  SiAmazonec2,
  SiAwsamplify,
  SiAmazoniam,
  SiAmazonroute53,
  SiAmazons3,
  SiTailwindcss,
  SiGmail,
  SiClerk,
  SiX,
  SiInstagram,
} from "react-icons/si"
import {
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGlobe,
  FaExternalLinkAlt,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaGit,
  FaDocker,
  FaAws,
  FaCopy,
  FaCheck,
} from "react-icons/fa"
import { VscVscodeInsiders } from "react-icons/vsc"

// --- CONFIGURATION DATA ---
const CONFIG = {
  personal: {
    name: " Kinshuk Jain",
    title: "Just a curious person, building and learning  ",
    email: "kinshuk25jan04@gmail.com",
    whatsappNumber: "919172702501",
    location: "Ghaziabad, UP, India",
    bio: [
      "I'm a passionate Cloud-Native Solutions Engineer with a strong focus on AWS technologies, React development, and DevOps practices.",
      "Currently pursuing my Bachelor's in Electrical Engineering while actively learning and building cloud solutions.",
      "Always open to connecting with fellow developers, engineers, and anyone curious about technology and cloud computing.",
    ],
    availability: "Available for opportunities",
    status: "Currently Intern at UPPCL (Uttar Pradesh Power Corporation Limited)",
  },
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/kinshukjainn",
      icon: FaGithub,
      handle: "@kinshukjainn",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/kinshukjainn/",
      icon: FaLinkedin,
      handle: "@kinshukjainn",
    },
    {
      platform: "Gmail",
      url: "mailto:kinshuk25jan04@gmail.com",
      icon: SiGmail,
      handle: "kinshuk25jan04@gmail.com",
    },
    {
      platform: "X",
      url: "http://x.com/realkinshuk004",
      icon: SiX,
      handle: "@realkinshuk004",
    },
    {
      platform: "Instagram",
      url: "http://instagram.com/kinshuk.0",
      icon: SiInstagram,
      handle: "@kinshuk.0",
    },
    {
      platform: "Credly",
      url: "https://www.credly.com/users/kinshuk004",
      icon: FaAward,
      handle: "@kinshuk004",
      action: "Credly",
    },
  ],
  certifications: [
    {
      title: "AWS Getting started with storage services",
      organization: "AWS",
      status: "Completed",
      year: "2025 July",
      url: "https://www.credly.com/badges/a4406a81-77da-4003-b153-9e36582f7877/public_url",
      description: "Digital badge covering storage services concepts and AWS storage solutions",
      skills: ["Amazon S3", "Amazon EBS", "Amazon EFS", "AWS Storage Gateway"],
    },
    {
      title: "AWS Solutions Architect - Associate",
      organization: "AWS",
      status: "Preparing",
      year: "2025",
      progress: "Not yet Attempted",
      description: "Comprehensive certification covering AWS architecture best practices and services",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing Models"],
    },
    {
      title: "AWS Serverless Badge",
      organization: "AWS",
      status: "Completed",
      year: "2024",
      url: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
      description: "Digital badge demonstrating serverless architecture knowledge and implementation",
      skills: ["Amazon Lambda", "API Gateway", "DynamoDB", "Serverless Framework"],
    },
    {
      title: "AWS Machine Learning Badge",
      organization: "AWS",
      status: "Completed",
      year: "2025",
      url: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
      description: "Digital badge covering machine learning concepts and AWS ML services",
      skills: ["Amazon SageMaker", "ML Algorithms", "Data Processing", "Model Deployment"],
    },
  ],
  skills: {
    "Cloud & DevOps": [
      { name: "AWS", icon: FaAws },
      { name: "Amplify", icon: SiAwsamplify },
      { name: "Amazon EC2", icon: SiAmazonec2 },
      { name: "Amazon S3", icon: SiAmazons3 },
      { name: "Lambda", icon: SiAwslambda },
      { name: "Route 53", icon: SiAmazonroute53 },
      { name: "IAM", icon: SiAmazoniam },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
    ],
    "Frontend & Build": [
      { name: "Vite", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    "Version Control": [
      { name: "Git", icon: FaGit },
      { name: "GitHub Actions", icon: FaGithub },
    ],
    "Developer Tools": [
      { name: "VS Code", icon: VscVscodeInsiders },
      { name: "Clerk Auth", icon: SiClerk },
    ],
  },
  projects: [
    {
      title: "Zeroleaks",
      year: "2024",
      status: "Live",
      type: "Security Tool",
      description: [
        "A modern, secure password generation tool built with React and TypeScript, focusing on creating cryptographically secure passwords with customizable parameters.",
        "Features include multiple generation algorithms, strength analysis, and secure clipboard integration.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Web Crypto API"],
      links: {
        live: "https://zeroleaks.cloudkinshuk.in",
        repo: "https://github.com/kinshukjainn/zeroleaks",
      },
      dockerCommand: "docker pull kinshukdev/zeroleaksproduct:latest",
    },
    {
      title: "Comming Soon",
      year: "2025",
      status: "Development Stage",
      type: "Not known",
      description: ["A modern AI Based Platform"],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Open AI API", "AWS Lambda", "AWS Amplify"],
      links: {
        live: null,
        repo: null,
      },
      dockerCommand: "Image is not available",
    },
  ],
  education: {
    degree: "Bachelor of Technology",
    field: "Electrical Engineering",
    institution: "JSS Academy of Technical Education",
    location: "Noida, Uttar Pradesh",
    period: "2022 - 2026",
    status: "Active",
    description:
      "Pursuing electrical engineering while self-learning cloud technologies and software development. Focusing on the intersection of traditional engineering and modern cloud computing.",
  },
}

interface SocialConfig {
  platform: string
  url: string
  icon: React.ElementType
  handle: string
  action?: string
}

// Animated section component with framer-motion
const AnimatedSection: React.FC<{
  children: React.ReactNode
  className?: string
  delay?: number
}> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// Copy Button Component
const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold cursor-pointer  bg-[#10b981] text-black border border-[#27272a] hover:bg-[#059669] transition-colors"
      title="Copy Docker command"
    >
      {copied ? (
        <>
          <FaCheck className="w-3 h-3" />
          Copied!
        </>
      ) : (
        <>
          <FaCopy className="w-3 h-3" />
          Copy
        </>
      )}
    </motion.button>
  )
}

// Section Header Component
const SectionHeader: React.FC<{ icon: React.ElementType; title: string }> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-4 mb-12 pb-6 border-b border-[#27272a]">
    <Icon className="w-8 h-8 text-[#06b6d4]" />
    <h3 className="text-3xl headline-kinshuk sm:text-4xl font-bold tracking-tight text-white uppercase">{title}</h3>
  </div>
)

// Tech Tag Component
const TechTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block py-2 px-4 bg-[#18181b] border border-[#27272a] text-white text-sm font-mono">
    {children}
  </span>
)

// --- MAIN PORTFOLIO COMPONENT ---
export default function Home() {
  const [typedText, setTypedText] = useState("")
  const fullText = "$ whoami"

  useEffect(() => {
    let i = 0
    const typingTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingTimer)
      }
    }, 120)

    return () => clearInterval(typingTimer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Kinshuk, I saw your portfolio and wanted to connect.")
    window.open(`https://wa.me/${CONFIG.personal.whatsappNumber}?text=${message}`, "_blank")
  }

  const handleSocialClick = (social: SocialConfig) => {
    if (social.action === "whatsapp") {
      handleWhatsAppClick()
    } else {
      window.open(social.url, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Grid overlay for visual interest */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <div
          className="absolute inset-0"
        />
      </div>

      <main className="relative max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="space-y-32 py-20">
          {/* --- Hero Section --- */}
          <AnimatedSection className="min-h-[80vh] flex flex-col justify-center border-b border-[#27272a] pb-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="text-lg font-mono text-[#06b6d4] mb-8">
                {typedText}
                <span className="animate-pulse-glow">_</span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter headline-kinshuk text-white leading-none">
                {CONFIG.personal.name}
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono text-[#a1a1aa] max-w-3xl font-light leading-relaxed">
                {CONFIG.personal.title}
              </h2>

              <div className="flex items-center gap-3 text-lg  text-blue-300 headline-kinshuk  pt-4">
                <FaMapMarkerAlt className="text-[#06b6d4]" />
                <span>{CONFIG.personal.location}</span>
              </div>
            </motion.div>

            <div className="mt-16 space-y-6 text-lg text-[#a1a1aa] max-w-4xl border-l-2 border-[#27272a] pl-8">
              {CONFIG.personal.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
                  className="leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </AnimatedSection>

          {/* --- Social Links Section --- */}
          <AnimatedSection delay={0.2}>
            <SectionHeader icon={FaGlobe} title="Digital Presence" />
            <div className="grid grid-cols-1 gap-px bg-[#27272a]">
              {CONFIG.social.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.button
                    key={social.platform}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    onClick={() => handleSocialClick(social)}
                    className="group flex items-center justify-between bg-[#09090b] p-6 transition-colors hover:bg-[#18181b]"
                  >
                    <div className="flex items-center gap-6">
                      <Icon className="w-6 h-6 text-blue-400 group-hover:text-[#06b6d4] transition-colors" />
                      <span className="text-xl font-medium text-white group-hover:text-[#06b6d4] transition-colors">
                        {social.platform}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-grey-200">{social.handle}</span>
                  </motion.button>
                )
              })}
            </div>
          </AnimatedSection>

          {/* --- Certifications Section --- */}
          <AnimatedSection delay={0.3}>
            <SectionHeader icon={FaAward} title="Certifications & Badges" />
            <div className="space-y-px bg-[#27272a]">
              {CONFIG.certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#09090b] p-8 hover:bg-[#18181b] transition-colors"
                >
                  <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <h4 className="text-2xl font-bold text-white">{cert.title}</h4>
                        <span
                          className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border ${
                            cert.status === "Completed"
                              ? "bg-[#10b981] text-black border-[#10b981]"
                              : "bg-transparent text-[#ef4444] border-[#ef4444]"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-base text-[#71717a] font-mono">
                        {cert.organization} • {cert.year}
                      </p>
                      <p className="text-[#a1a1aa] leading-relaxed">{cert.description}</p>
                      {cert.progress && <p className="text-sm text-[#71717a] font-mono">Progress: {cert.progress}</p>}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {cert.skills.map((skill) => (
                          <TechTag key={skill}>{skill}</TechTag>
                        ))}
                      </div>
                    </div>
                    {cert.url && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-3 px-6 py-3 bg-green-400 text-black text-sm font-bold uppercase tracking-wider cursor-pointer hover:bg-green-500 transition-colors"
                      >
                        View Credential
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* --- Skills Section --- */}
          <AnimatedSection delay={0.4}>
            <SectionHeader icon={FaCode} title="Technologies" />
            <div className="space-y-12">
              {Object.entries(CONFIG.skills).map(([category, skills], catIndex) => (
                <div key={category}>
                  <h4 className="text-xl font-bold text-[#06b6d4] mb-6 uppercase tracking-wider border-b border-[#27272a] pb-3">
                    {category}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-[#27272a]">
                    {skills.map((skill, index) => {
                      const Icon = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-4 bg-[#09090b] p-6 hover:bg-[#18181b] transition-colors"
                        >
                          <Icon className="w-6 h-6 text-[#06b6d4] flex-shrink-0" />
                          <span className="text-base font-medium text-white truncate">{skill.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* --- Projects Section --- */}
          <AnimatedSection delay={0.5}>
            <SectionHeader icon={FaCode} title="Featured Projects" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#27272a]">
              {CONFIG.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col bg-[#09090b] p-8 hover:bg-[#18181b] transition-colors"
                >
                  <div className="flex-grow space-y-6">
                    <div className="flex justify-between items-start border-b border-[#27272a] pb-4">
                      <h4 className="text-3xl font-bold text-white">{project.title}</h4>
                      <span
                        className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                          project.status === "Live"
                            ? "text-[#10b981] border border-[#10b981]"
                            : "text-[#ef4444] border border-[#ef4444]"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-sm font-mono text-[#71717a]">
                      {project.type} • {project.year}
                    </p>

                    <div className="space-y-4 text-base text-[#a1a1aa] leading-relaxed">
                      {project.description.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.technologies.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </div>

                    {/* Docker Command Section */}
                    <div className="mt-6 p-4 bg-[#18181b] border border-[#27272a]">
                      <div className="flex items-center gap-3 mb-3">
                        <FaDocker className="w-5 h-5 text-[#06b6d4]" />
                        <span className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                          Docker Command
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="text-sm text-[#a1a1aa] font-mono bg-black px-4 py-3 flex-1 overflow-x-auto border border-[#27272a]">
                          {project.dockerCommand}
                        </code>
                        <CopyButton text={project.dockerCommand} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#27272a]">
                    {project.links.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-[#10b981] text-black cursor-pointer text-sm font-bold uppercase tracking-wider hover:bg-[#059669] transition-colors"
                      >
                        <FaGlobe /> Live Demo
                      </motion.a>
                    )}
                    {project.links.repo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-[#27272a] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#18181b] transition-colors"
                      >
                        <FaGithub /> Source Code
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* --- Education Section --- */}
          <AnimatedSection delay={0.6} className="pb-32">
            <SectionHeader icon={FaGraduationCap} title="Education" />
            <div className="bg-[#09090b] p-8 border border-[#27272a]">
              <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-8">
                <div className="space-y-3">
                  <h4 className="text-3xl font-bold text-white">
                    {CONFIG.education.degree} in {CONFIG.education.field}
                  </h4>
                  <p className="text-lg text-[#a1a1aa] font-medium">{CONFIG.education.institution}</p>
                  <p className="text-base text-[#71717a] font-mono">{CONFIG.education.location}</p>
                </div>
                <div className="text-left lg:text-right space-y-3 flex-shrink-0">
                  <p className="text-base font-mono text-[#71717a]">{CONFIG.education.period}</p>
                  <p className="inline-block px-4 py-2 text-sm font-bold uppercase tracking-wider bg-[#06b6d4] text-black">
                    {CONFIG.education.status}
                  </p>
                </div>
              </div>
              <p className="mt-8 pt-8 border-t border-[#27272a] text-lg text-[#a1a1aa] leading-relaxed">
                {CONFIG.education.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </div>
  )
}
