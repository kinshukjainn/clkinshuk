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
      icon: FaAws,
      status: "Completed",
      year: "2025 July",
      url: "https://www.credly.com/badges/a4406a81-77da-4003-b153-9e36582f7877/public_url",
      description:
        "Digital badge covering storage services concepts and AWS storage solutions",
      skills: ["Amazon S3", "Amazon EBS", "Amazon EFS", "AWS Storage Gateway"],
    },
    {
      title: "AWS Cloud Practitioner Exam - CLF-02",
      organization: "AWS",
      icon: FaAws,
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
      icon: FaAws,
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
      icon: FaAws,
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
      className="p-1 hover:text-blue-600 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <FaCheck className="w-4 h-4 text-green-600" />
      ) : (
        <FaCopy className="w-4 h-4 text-gray-600" />
      )}
    </button>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen pt-30 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex gap-6 mb-6">
            <div className="flex-shrink-0">
              <img
                src={CONFIG.personal.photoUrl || "/placeholder.svg"}
                alt="Kinshuk Jain"
                className="w-32 h-32 rounded-full border-2 border-gray-300"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Kinshuk Jain
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Student first. Builder always.
              </p>

              {/* Social Media Icons Row */}
              <div className="flex gap-3 mb-4">
                {CONFIG.social.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center bg-gray-900 hover:bg-blue-600 text-white rounded-full transition-colors"
                      title={social.handle}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>{CONFIG.personal.location}</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-1.5 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-3 max-w-2xl">
            <p>
              I am currently pursuing my Bachelor's in Electrical Engineering
              learning how systems work, how they fail, and how they evolve.
              Alongside that, I am exploring the cloud, building small things
              that might someday scale, experimenting with infrastructure, and
              understanding how technology connects people.
            </p>
          </div>
        </header>

        {/* Contact Links */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Contact
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CONFIG.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors border-b-2 border-transparent hover:border-blue-600"
                >
                  <Icon className="w-4 h-4" />
                  <span>{social.platform}</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Resume Download */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Resume
          </h2>
          <div className="flex items-center justify-between p-4 border-b-2 border-gray-200">
            <div>
              <h3 className="font-semibold text-gray-900 text-base">
                My Resume
              </h3>
              <p className="text-sm text-gray-600">PDF Format</p>
            </div>
            <a
              href="/kinshukfinalresume.pdf"
              download="kinshukfinalresume.pdf"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              <FaFileDownload className="w-4 h-4" />
              Download
            </a>
          </div>
        </section>

        {/* Publications/Blog */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Publications
          </h2>
          <div className="p-4 border-b-2 border-gray-200">
            <h3 className="font-semibold text-gray-900 text-base mb-2">
              Technical Blog
            </h3>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Research notes, security findings, and technical deep-dives on
              cloud infrastructure and systems architecture.
            </p>
            <a
              href="https://blog.cloudkinshuk.in/newsletter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              Subscribe to Newsletter
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Experience
          </h2>
          <div className="p-4 border-b-2 border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-lg">UPPTCL</h3>
              <span className="text-sm text-gray-600">
                July 2025 - Aug 2025
              </span>
            </div>
            <p className="text-base text-gray-700 mb-4 font-semibold">
              Uttar Pradesh Power Transmission Corporation Limited
            </p>
            <div className="space-y-3 text-base text-gray-700 leading-relaxed">
              <p>
                Worked with the transmission division to understand the
                operation, protection, and maintenance of 132kV and 220kV
                substations. Studied working principles of power transformers,
                circuit breakers, busbars, and protection relays.
              </p>
              <p>
                Observed real-time SCADA dashboards for grid monitoring, load
                management, and outage reporting. Assisted engineers during
                shutdown procedures, equipment inspections, and testing of CTs,
                PTs, and relays.
              </p>
              <p>
                Prepared technical documentation and maintained logs on
                equipment performance and safety checks. Improved technical
                workflows by creating well-organized digital reports using cloud
                and web tools.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Selected Projects
          </h2>
          <div className="space-y-6">
            {CONFIG.projects.map((project) => (
              <div
                key={project.title}
                className="p-4 border-b-2 border-gray-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4 text-base text-gray-700 leading-relaxed">
                  {project.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-600 uppercase">
                    Technologies:{" "}
                  </span>
                  <span className="text-base text-gray-700">
                    {project.technologies.join(", ")}
                  </span>
                </div>

                {project.dockerCommand !== "Image is not available" && (
                  <div className="bg-gray-50 rounded p-3 mb-4 font-mono text-sm border border-gray-200">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-gray-800 break-all">
                        {project.dockerCommand}
                      </code>
                      <CopyButton text={project.dockerCommand} />
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      View Project <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      <FaGithub className="w-4 h-4" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Technical Proficiencies
          </h2>
          <div className="space-y-5">
            {Object.entries(CONFIG.skills).map(([category, skills]) => (
              <div key={category} className="p-4 border-b-2 border-gray-200">
                <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-700 font-medium"
                      >
                        <Icon className="w-4 h-4 text-gray-600" />
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
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Certifications
          </h2>
          <div className="space-y-5">
            {CONFIG.certifications.map((cert) => (
              <div key={cert.title} className="p-4 border-b-2 border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-base">
                    {cert.title}
                  </h3>
                  <span className="text-sm text-gray-600">{cert.year}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-2 py-1 text-sm mb-3">
                  {cert.icon && <cert.icon className="w-4 h-4 text-gray-700" />}
                  <span className="font-semibold text-gray-800">
                    {cert.organization}
                  </span>
                </div>
                <p className="text-base text-gray-700 mb-3 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm text-gray-700 font-medium"
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
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    View Credential <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Education
          </h2>
          <div className="p-4 border-b-2 border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-base">
                {CONFIG.education.degree}
              </h3>
              <span className="text-sm text-gray-600">
                {CONFIG.education.period}
              </span>
            </div>
            <p className="text-base font-semibold text-gray-800 mb-1">
              {CONFIG.education.field}
            </p>
            <p className="text-base text-gray-700 mb-3">
              {CONFIG.education.institution}, {CONFIG.education.location}
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              {CONFIG.education.description}
            </p>
          </div>
        </section>

        {/* CLI Tool */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
            CLI Tool
          </h2>
          <div className="bg-gray-900 p-4 border border-gray-700">
            <p className="text-base text-gray-300 mb-4">
              Interactive command-line portfolio viewer built with Node.js
            </p>
            <div className="space-y-2 font-mono text-sm">
              <div className="bg-gray-800 p-2">
                <span className="text-green-400">$</span>{" "}
                <span className="text-gray-200">
                  npm install -g hackkinshuk
                </span>
              </div>
              <div className="bg-gray-800 p-2">
                <span className="text-green-400">$</span>{" "}
                <span className="text-gray-200">cloudkinshuk</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
