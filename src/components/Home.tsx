"use client"

import { useState } from "react"
import firstname from "../assets/firstname.png"
import secondname from "../assets/secondname.png"
import {
  SiTerraform,
  SiKubernetes,
  SiVite,
  SiReact,
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
  FaExternalLinkAlt,
  FaAward,
  FaGit,
  FaDocker,
  FaAws,
  FaCopy,
  FaCheck,
} from "react-icons/fa"
import { VscVscodeInsiders } from "react-icons/vsc"

const CONFIG = {
  personal: {
    email: "kinshuk25jan04@gmail.com",
    whatsappNumber: "919172702501",
    location: "Ghaziabad, UP, India",
    bio: [
      "Student first. Builder always.",
      "I am currently pursuing my Bachelor's in Electrical Engineering learning how systems work, how they fail, and how they evolve. Alongside that, I am exploring the cloud, building small things that might someday scale, experimenting with infrastructure, and understanding how technology connects people.",
    ],
    availability: "Available for opportunities",
    status: "Completed an internship at UPPTCL (Uttar Pradesh Power Transmission Corporation Limited), where I gained hands-on experience in power systems and transmission network operations.)",
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
      title: "AWS Cloud Practioner Exam - CLF-02",
      organization: "AWS",
      status: "Preparing",
      year: "2025",
      progress: "Re-Attempting",
      description: "Comprehensive certification covering AWS top 40 best core services of aws",
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
      { name: "EC2", icon: SiAmazonec2 },
      { name: "Amazon S3", icon: SiAmazons3 },
      { name: "Lambda", icon: SiAwslambda },
      { name: "Route 53", icon: SiAmazonroute53 },
      { name: "AWS IAM", icon: SiAmazoniam },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
    ],
    "Frontend & Build": [
      { name: "Vite / React", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React icons", icon: SiReact },
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
      title: "Coming Soon",
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

const CopyButton = ({ text }: { text: string }) => {
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
    <button
      onClick={handleCopy}
      className="p-2 sm:p-2.5 bg-black rounded transition-colors"
      title="Copy Docker command"
    >
      {copied ? (
        <FaCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff9100]" />
      ) : (
        <FaCopy className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff9100]" />
      )}
    </button>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090B] text-gray-300 pt-12 sm:pt-16 md:pt-20">
      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Header with Images */}
        <header className="mb-10 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <img src={firstname} alt="Firstname" className="h-20 sm:h-28 md:h-32 lg:h-36 w-auto" />
            <img src={secondname} alt="Secondname" className="h-20 sm:h-28 md:h-32 lg:h-36 w-auto" />
          </div>

          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            {CONFIG.personal.bio.map((p, i) => (
              <p key={i} className="text-sm sm:text-base md:text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>{CONFIG.personal.location}</span>
          </div>

          <div className="inline-block px-2 sm:px-3 py-1  bg-red-500/20 text-green-400 text-xs sm:text-sm rounded">
            {CONFIG.personal.status}
          </div>
        </header>

        {/* Connect */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl font-mono sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="text-gray-600 font-mono ">#</span> Connect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
            {CONFIG.social.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3   rounded transition-colors min-h-[50px] sm:min-h-[56px]"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-sm text-white truncate">{social.platform}</span>
                    <span className="text-sm font-mono text-yellow-200 truncate">{social.handle}</span>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-mono mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="text-gray-600">#</span> Projects
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {CONFIG.projects.map((project) => (
              <div key={project.title} className=" p-4 sm:p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                      <span className="text-gray-400">{project.type}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">{project.year}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded w-max ${
                      project.status === "Live" ? "bg-green-900 text-green-400" : "bg-yellow-900  text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-4">
                  {project.description.map((p, i) => (
                    <p key={i} className="text-xs sm:text-sm leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-zinc-800 text-white text-sm rounded-md ">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.dockerCommand !== "Image is not available" && (
                  <div className="bg-zinc-800 rounded p-2 sm:p-3 mb-4 overflow-x-auto">
                    <div className="flex items-center justify-between gap-2 whitespace-nowrap">
                      <code className="text-xs text-green-400 font-mono">{project.dockerCommand}</code>
                      <CopyButton text={project.dockerCommand} />
                    </div>
                  </div>
                )}

                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-max sm:justify-start gap-2 px-3 sm:px-4 py-2 bg-yellow-200 text-black text-xs sm:text-sm font-medium rounded-md transition-colors"
                    >
                      Visit <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-max sm:justify-start gap-2 px-3 sm:px-4 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded  transition-colors"
                    >
                      <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-mono mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="text-gray-600">#</span> Skills
          </h2>
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            {Object.entries(CONFIG.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm sm:text-md font-semibold text-white  uppercase tracking-wider mb-2 sm:mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-zinc-900 rounded text-xs sm:text-sm"
                      >
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 font-mono  sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="text-gray-600">#</span> Certifications
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {CONFIG.certifications.map((cert) => (
              <div key={cert.title} className=" p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{cert.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
                      <span>{cert.organization}</span>
                      <span className="text-gray-600">•</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded w-max whitespace-nowrap ${
                      cert.status === "Completed" ? "bg-yellow-200 text-black" : "bg-yellow-500 text-black"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm mb-2 sm:mb-3">{cert.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-zinc-800 text-white text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm p-2 bg-yellow-200 text-black rounded-md"
                  >
                    View Credential <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl font-mono sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="text-gray-600">#</span> Education
          </h2>
          <div className="  p-4 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{CONFIG.education.degree}</h3>
                <p className="text-base sm:text-lg text-gray-400 mb-2">{CONFIG.education.field}</p>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="text-gray-300">{CONFIG.education.institution}</p>
                  <p className="text-gray-400">{CONFIG.education.location}</p>
                  <p className="text-gray-400">{CONFIG.education.period}</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-900 text-green-400 text-xs rounded w-max whitespace-nowrap">
                {CONFIG.education.status}
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">{CONFIG.education.description}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
