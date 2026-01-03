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
      className="p-2 hover:bg-gray-100 rounded transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <FaCheck className="w-4 h-4 text-green-600" />
      ) : (
        <FaCopy className="w-4 h-4 text-gray-900" />
      )}
    </button>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-10 ">
      {/* Top accent line */}

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        {/* Header - Minimal & Professional */}
        <header className="mb-20 border-b border-gray-200 pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-8 leading-tight">
            Kinshuk Jain
          </h1>

          <div className="space-y-4 mb-8 text-gray-900 leading-relaxed">
            {CONFIG.personal.bio.map((p, i) => (
              <p key={i} className="text-base">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-900">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-3.5 h-3.5" />
              <span>{CONFIG.personal.location}</span>
            </div>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="font-medium text-black">
              Available for opportunities
            </span>
          </div>
        </header>

        {/* Contact Links - Minimal Grid */}
        <section className="mb-20 border-b border-gray-200 pb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-900 mb-6 font-medium">
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
                  className="flex items-center gap-3 text-sm hover:text-black text-gray-900 transition-colors group"
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="group-hover:underline underline-offset-4">
                    {social.platform}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Resume Download */}
        <section className="mb-20 border-b border-gray-200 pb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-900 mb-6 font-medium">
            Resume
          </h2>
          <div className="flex items-center justify-between bg-gray-50 border border-gray-200 p-5">
            <div>
              <h3 className="font-medium text-black mb-1">My Resume</h3>
              <p className="text-sm text-gray-900">PDF Format</p>
            </div>
            <a
              href="/kinshukfinalresume.pdf"
              download="kinshukfinalresume.pdf"
              className="flex items-center gap-2 text-sm font-medium text-black hover:text-gray-900 transition-colors"
            >
              <FaFileDownload className="w-4 h-4" />
              Download
            </a>
          </div>
        </section>

        {/* Publications/Blog */}
        <section className="mb-20 border-b border-gray-200 pb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-900 mb-6 font-medium">
            Publications
          </h2>
          <div className="bg-gray-50 border border-gray-200 p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-black mb-2">Technical Blog</h3>
                <p className="text-sm text-gray-900 mb-4">
                  Research notes, security findings, and technical deep-dives on
                  cloud infrastructure and systems architecture.
                </p>
                <a
                  href="https://blog.cloudkinshuk.in/newsletter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-900 transition-colors border-b border-black hover:border-gray-600"
                >
                  Subscribe to Newsletter
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20 border-b border-gray-200 pb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-900 mb-6 font-medium">
            Experience
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                <h3 className="font-medium text-black">UPPTCL</h3>
                <span className="text-sm text-gray-900">
                  July 2025 - Aug 2025
                </span>
              </div>
              <p className="text-sm text-gray-900 mb-4">
                Uttar Pradesh Power Transmission Corporation Limited
              </p>
              <div className="space-y-3 text-sm text-gray-900 leading-relaxed">
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
        <section className="mb-20 border-b border-gray-200 pb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-900 mb-6 font-medium">
            Selected Projects
          </h2>
          <div className="space-y-10">
            {CONFIG.projects.map((project) => (
              <div key={project.title}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                  <h3 className="font-medium text-black text-lg">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-900">
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4 text-sm text-gray-900 leading-relaxed">
                  {project.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-xs text-gray-900 uppercase tracking-wider">
                    Technologies:{" "}
                  </span>
                  <span className="text-sm text-gray-900">
                    {project.technologies.join(", ")}
                  </span>
                </div>

                {project.dockerCommand !== "Image is not available" && (
                  <div className="bg-gray-50 border border-gray-200 p-4 mb-4 font-mono text-xs">
                    <div className="flex items-center justify-between gap-4">
                      <code className="text-gray-900 break-all">
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
                      className="inline-flex items-center gap-2 text-black hover:text-gray-900 transition-colors border-b border-black hover:border-gray-600"
                    >
                      View Project <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black hover:text-gray-900 transition-colors border-b border-black hover:border-gray-600"
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
        <section className="mb-20 border-b border-gray-200 pb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-900 mb-6 font-medium">
            Technical Proficiencies
          </h2>
          <div className="space-y-6">
            {Object.entries(CONFIG.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-black mb-3">
                  {category}
                </h3>
                <div className="text-sm text-gray-900">
                  {skills.map((skill, i) => (
                    <span key={skill.name}>
                      {skill.name}
                      {i < skills.length - 1 ? " • " : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20 border-b border-gray-200 pb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-900 mb-6 font-medium">
            Certifications
          </h2>
          <div className="space-y-6">
            {CONFIG.certifications.map((cert) => (
              <div key={cert.title}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="font-medium text-black">{cert.title}</h3>
                  <span className="text-sm text-gray-900">{cert.year}</span>
                </div>
                <p className="text-sm text-gray-900 mb-2">
                  {cert.organization}
                </p>
                <p className="text-sm text-gray-900 mb-3 leading-relaxed">
                  {cert.description}
                </p>
                <div className="text-xs text-gray-900 mb-3">
                  {cert.skills.join(" • ")}
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-black hover:text-gray-900 transition-colors border-b border-black hover:border-gray-600"
                  >
                    View Credential <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-xs uppercase tracking-widest text-gray-900 mb-6 font-medium">
            Education
          </h2>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="font-medium text-black">
                {CONFIG.education.degree}
              </h3>
              <span className="text-sm text-gray-900">
                {CONFIG.education.period}
              </span>
            </div>
            <p className="text-sm text-gray-900 mb-2">
              {CONFIG.education.field}
            </p>
            <p className="text-sm text-gray-900 mb-3">
              {CONFIG.education.institution}, {CONFIG.education.location}
            </p>
            <p className="text-sm text-gray-900 leading-relaxed">
              {CONFIG.education.description}
            </p>
          </div>
        </section>

        {/* CLI Command - Minimal Version */}
        <section className="mb-20">
          <h2 className="text-xs uppercase tracking-widest text-gray-900 mb-6 font-medium">
            CLI Tool
          </h2>
          <div className="bg-gray-50 border border-gray-200 p-5">
            <p className="text-sm text-gray-900 mb-4">
              Interactive command-line portfolio viewer built with Node.js
            </p>
            <div className="space-y-3 font-mono text-xs">
              <div className="bg-white border border-gray-200 p-3">
                <span className="text-gray-900">$</span> npm install -g
                hackkinshuk
              </div>
              <div className="bg-white border border-gray-200 p-3">
                <span className="text-gray-900">$</span> cloudkinshuk
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer accent line */}
      <div className="h-0.5 bg-black"></div>
    </div>
  );
}
