"use client";

import { useState } from "react";
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
} from "react-icons/si";
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
  FaFileDownload,
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { RiNextjsLine } from "react-icons/ri";
import { RecommendedRoutes } from "./RecommendedRoutes";
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
    status:
      "Completed an internship at UPPTCL (Uttar Pradesh Power Transmission Corporation Limited), where I gained hands-on experience in power systems and transmission network operations.",
    photoUrl: "/profile.jpg",
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
      description:
        "Digital badge covering storage services concepts and AWS storage solutions",
      skills: ["Amazon S3", "Amazon EBS", "Amazon EFS", "AWS Storage Gateway"],
    },
    {
      title: "AWS Cloud Practioner Exam - CLF-02",
      organization: "AWS",
      status: "Preparing",
      year: "2025",
      progress: "Re-Attempting",
      description:
        "Comprehensive certification covering AWS top 40 best core services of aws",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing Models"],
    },
    {
      title: "AWS Serverless Badge",
      organization: "AWS",
      status: "Completed",
      year: "2024",
      url: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
      description:
        "Digital badge demonstrating serverless architecture knowledge and implementation",
      skills: [
        "Amazon Lambda",
        "API Gateway",
        "DynamoDB",
        "Serverless Framework",
      ],
    },
    {
      title: "AWS Machine Learning Badge",
      organization: "AWS",
      status: "Completed",
      year: "2025",
      url: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
      description:
        "Digital badge covering machine learning concepts and AWS ML services",
      skills: [
        "Amazon SageMaker",
        "ML Algorithms",
        "Data Processing",
        "Model Deployment",
      ],
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
      { name: "Nextjs", icon: RiNextjsLine },
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
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Web Crypto API",
      ],
      links: {
        live: "https://zeroleaks.cloudkinshuk.in",
        repo: "https://github.com/kinshukjainn/zeroleaks",
      },
      dockerCommand: "docker pull kinshukdev/zeroleaksproduct:latest",
    },
    {
      title: "AI Based FDS (Fault Detection System)",
      year: "2025",
      status: "Development Stage",
      type: "Ai Tool",
      description: [
        "An AI-powered Fault Detection System built using modern web technologies. This project is primarily designed to identify and analyze faults that commonly occur in power transmission lines and transformers, enhancing reliability and efficiency in power system monitoring.",
      ],
      technologies: [
        "Nextjs16",
        "TypeScript",
        "Tailwind CSS",
        "React Icons",
        "Shadcn UI",
        "Lucide React",
        "Amazon Bedrock",
        "Amazon Nova Pro Model",
        "AWS Lambda",
        "AWS Amplify",
        "Aws Route53",
      ],
      links: {
        live: null,
        repo: "https://github.com/kinshukjainn/fds-project",
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
};

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-3 bg-blue-700 cursor-pointer rounded-md transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <FaCheck className="w-4 h-4 text-white" />
      ) : (
        <FaCopy className="w-4 h-4 text-white" />
      )}
    </button>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-zinc-950 via-neutral-950 to-black pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        {/* Header */}
        <header className="mb-20 pb-12 border-b border-white/10">
          <RecommendedRoutes />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-8">
            <div className="w-32 h-32 rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src={CONFIG.personal.photoUrl}
                alt="Kinshuk Jain"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl heading-font sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Kinshuk Jain
            </h1>
          </div>

          <div className="space-y-4 mb-8 text-gray-300 leading-relaxed">
            {CONFIG.personal.bio.map((p, i) => (
              <p key={i} className="text-base">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-3.5 h-3.5" />
              <span>{CONFIG.personal.location}</span>
            </div>
            <span className="hidden sm:inline text-gray-700">|</span>
            <span className="text-emerald-400 font-medium">
              Available for opportunities
            </span>
          </div>
        </header>

        {/* Contact Links */}
        <section className="mb-20 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Contact
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CONFIG.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-white text-gray-200 transition-colors group bg-white/5 hover:bg-white/10 rounded-md p-3 border border-white/10"
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{social.platform}</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Resume Download */}
        <section className="mb-20 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Resume
          </h2>
          <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-md p-5">
            <div>
              <h3 className="font-medium text-white mb-1">My Resume</h3>
              <p className="text-sm text-gray-400">PDF Format</p>
            </div>
            <a
              href="/kinshukfinalresume.pdf"
              download="kinshukfinalresume.pdf"
              className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <FaFileDownload className="w-4 h-4" />
              Download
            </a>
          </div>
        </section>

        {/* Publications/Blog */}
        <section className="mb-20 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Publications
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-md p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-white mb-2">Technical Blog</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Research notes, security findings, and technical deep-dives on
                  cloud infrastructure and systems architecture.
                </p>
                <a
                  href="https://blog.cloudkinshuk.in/newsletter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-cta"
                >
                  <span>Subscribe to Newsletter</span>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-md p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                <h3 className="font-semibold text-white text-lg">UPPTCL</h3>
                <span className="text-sm text-gray-400">
                  July 2025 - Aug 2025
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Uttar Pradesh Power Transmission Corporation Limited
              </p>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Worked with the transmission division to understand the
                  operation, protection, and maintenance of 132kV and 220kV
                  substations. Studied working principles of power transformers,
                  circuit breakers, busbars, and protection relays.
                </p>
                <p>
                  Observed real-time SCADA dashboards for grid monitoring, load
                  management, and outage reporting. Assisted engineers during
                  shutdown procedures, equipment inspections, and testing of
                  CTs, PTs, and relays.
                </p>
                <p>
                  Prepared technical documentation and maintained logs on
                  equipment performance and safety checks. Improved technical
                  workflows by creating well-organized digital reports using
                  cloud and web tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Selected Projects
          </h2>
          <div className="space-y-6">
            {CONFIG.projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-md p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                  <h3 className="font-semibold text-white text-lg">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4 text-sm text-gray-300 leading-relaxed">
                  {project.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-md font-semibold text-blue-200 tracking-wider">
                    Technologies:{" "}
                  </span>
                  <span className="text-sm   text-gray-400">
                    {project.technologies.join(", ")}
                  </span>
                </div>

                {project.dockerCommand !== "Image is not available" && (
                  <div className="bg-black/40 border border-white/10 rounded-md p-4 mb-4 font-mono text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <code className="text-emerald-400 break-all">
                        {project.dockerCommand}
                      </code>
                      <CopyButton text={project.dockerCommand} />
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 text-sm">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 text-black bg-[#ff9100] rounded-md text-md transition-colors font-medium"
                    >
                      View Project <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-2 py-2 text-white bg-black  rounded-md text-md transition-colors font-medium"
                    >
                      <FaGithub className="w-3.5 h-3.5" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-20 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Technical Proficiencies
          </h2>
          <div className="space-y-6">
            {Object.entries(CONFIG.skills).map(([category, skills]) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-md p-6"
              >
                <h3 className="text-sm font-semibold text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-100"
                      >
                        <div className="flex items-center justify-center p-2 bg-white/10 rounded-md">
                          <Icon className="w-5 h-5" />
                        </div>
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Certifications
          </h2>
          <div className="space-y-4">
            {CONFIG.certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white/5 border border-white/10 rounded-md p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="font-semibold text-white">{cert.title}</h3>
                  <span className="text-sm text-gray-400">{cert.year}</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  {cert.organization}
                </p>
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-md text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-700  rounded-md text-md transition-colors font-medium"
                  >
                    View Credential <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20 pb-12 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Education
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="font-semibold text-white text-lg">
                {CONFIG.education.degree}
              </h3>
              <span className="text-sm text-gray-400">
                {CONFIG.education.period}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              {CONFIG.education.field}
            </p>
            <p className="text-sm text-gray-400 mb-3">
              {CONFIG.education.institution}, {CONFIG.education.location}
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {CONFIG.education.description}
            </p>
          </div>
        </section>

        {/* CLI Tool */}
        <section className="mb-20">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            CLI Tool
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-md p-6">
            <p className="text-sm text-gray-300 mb-4">
              Interactive command-line portfolio viewer built with Node.js
            </p>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-black/40 border border-white/10 rounded-md p-3">
                <span className="text-emerald-400">$</span>{" "}
                <span className="text-gray-300">
                  npm install -g hackkinshuk
                </span>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-md p-3">
                <span className="text-emerald-400">$</span>{" "}
                <span className="text-gray-300">cloudkinshuk</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
