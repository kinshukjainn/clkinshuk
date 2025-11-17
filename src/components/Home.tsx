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
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiHashnode } from "react-icons/si";

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
      "Completed an internship at UPPTCL (Uttar Pradesh Power Transmission Corporation Limited), where I gained hands-on experience in power systems and transmission network operations.)",
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
        "Open AI API",
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
      className="p-2 sm:p-2.5  border border-[#FFB86C] bg-[#FFB86C] text-black transition-colors cursor-pointer"
      title="Copy Docker command"
    >
      {copied ? (
        <FaCheck className="w-3 h-3 sm:w-4 sm:h-4" />
      ) : (
        <FaCopy className="w-3 h-3 sm:w-4 sm:h-4" />
      )}
    </button>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#18181b] text-gray-200  pt-12 sm:pt-16 md:pt-20">
      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <header className="mb-10 sm:mb-12 md:mb-16 border-b-2 border-[#FFB86C] pb-8">
          <div className="mb-6 sm:mb-8">
            <div className="text-md font-bold sm:text-base text-red-500">
              $ whoami
            </div>
            <h1 className="text-5xl sm:text-6xl text-[#ffb86c] md:text-6xl font-bold mb-2">
              KINSHUK JAIN
            </h1>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-6">
            {CONFIG.personal.bio.map((p, i) => (
              <p key={i} className="text-sm sm:text-base leading-relaxed">
                <span className="text-gray-500">&gt; </span>
                {p}
              </p>
            ))}
          </div>

          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>{CONFIG.personal.location}</span>
            </div>
            <div className="border border-[#FFB86C] px-3 py-1 inline-block">
              [AVAILABLE FOR OPPORTUNITIES]
            </div>
          </div>
        </header>

        {/* Connect */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl text-[#ffb86c] md:text-3xl font-bold mb-4 sm:mb-6 border-b-2 border-[#FFB86C] pb-2">
            $ ls -la ~/connect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {CONFIG.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-md bg-[#222223] border-2 border-[#FFB86C]  transition-colors"
                >
                  <div className="bg-[#181818] p-2 text-[#ffb86c] rounded-sm">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm text-[#ffb86c] sm:text-md font-bold truncate">
                      {social.platform}
                    </span>
                    <span className="text-sm sm:text-md truncate">
                      {social.handle}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl text-[#ffb86c] sm:text-2xl md:text-3xl  font-bold mb-4 sm:mb-6 border-b-2 border-[#FFB86C] pb-2">
            $ cat ~/Subscribe to my Blogs /*
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="border-2 bg-[#222223] rounded-lg border-[#FFB86C] p-4 sm:p-6">
              <h3 className="text-lg text-[#ffb86c] sm:text-xl font-bold mb-2">
                Subscribe to my blogs on hashnode
              </h3>

              <button
                onClick={() =>
                  window.open(
                    "https://blog.cloudkinshuk.in/newsletter",
                    "_blank"
                  )
                }
                title="Subscribe to my Hashnode Blog"
                className="
    mt-4 mb-2 
    bg-[#ffb86c] text-black 
    font-semibold 
    px-4 py-3 
    cursor-pointer 
    flex items-center gap-2 
     
    transition 
    w-full sm:w-auto 
    justify-center
  "
              >
                <SiHashnode className="text-xl" />
                <span className="text-base sm:text-lg">Subscribe</span>
              </button>
            </div>
          </div>
        </section>

        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl text-[#ffb86c] sm:text-2xl md:text-3xl  font-bold mb-4 sm:mb-6 border-b-2 border-[#FFB86C] pb-2">
            $ cat ~/Internships
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="border-2 bg-[#222223] rounded-lg border-[#FFB86C] p-4 sm:p-6">
              <h3 className="text-lg text-[#ffb86c] sm:text-xl font-bold mb-2">
                {
                  "[ UPPCTL : (Uttar Pradesh Power Transmission Corporation Limited) ]"
                }
              </h3>
              <span className="text-gray-400 font-semibold text-lg">
                Expierience :{" "}
              </span>
              <p className="mt-2">
                Worked with the transmission division to understand the
                operation, protection, and maintenance of 132kV and 220kV
                substations. Studied working principles of power transformers,
                circuit breakers, busbars, and protection relays.
              </p>
              <div className="h-0.5 mt-2 w-full bg-white"></div>
              <p className="mt-2">
                Observed real-time SCADA dashboards for grid monitoring, load
                management, and outage reporting. Assisted engineers during
                shutdown procedures, equipment inspections, and testing of CTs,
                PTs, and relays.
              </p>

              <div className="h-0.5 mt-2 w-full bg-white"></div>
              <p className="mt-2">
                Prepared technical documentation and maintained logs on
                equipment performance and safety checks. Improved technical
                workflows by creating well-organized digital reports using cloud
                and web tools.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl text-[#ffb86c] sm:text-2xl md:text-3xl  font-bold mb-4 sm:mb-6 border-b-2 border-[#FFB86C] pb-2">
            $ cat ~/projects/*
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {CONFIG.projects.map((project) => (
              <div
                key={project.title}
                className="border-2 bg-[#222223] rounded-lg border-[#FFB86C] p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-lg text-[#ffb86c] sm:text-xl font-bold mb-2">
                      [ {project.title} ]
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span>{project.type}</span>
                      <span>|</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <span className="bg-[#FFB86C] px-3 py-1 text-black text-xs w-max">
                    {project.status}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {project.description.map((p, i) => (
                    <p key={i} className="text-xs sm:text-sm leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="text-xs sm:text-sm mb-2 text-gray-400">
                    TECH_STACK:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[#FFB86C] rounded-md px-2 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.dockerCommand !== "Image is not available" && (
                  <div className="bg-[#181818] border-2 border-[#FFB86C] p-3 mb-4 overflow-x-auto">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-xs sm:text-sm whitespace-nowrap">
                        {project.dockerCommand}
                      </code>
                      <CopyButton text={project.dockerCommand} />
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFB86C] text-black text-xs sm:text-sm font-bold  border-2 border-[#FFB86C] transition-colors"
                    >
                      VISIT_SITE <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#FFB86C] text-xs sm:text-sm font-bold hover:bg-[#FFB86C] hover:text-black transition-colors"
                    >
                      <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" /> VIEW_CODE
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl text-[#ffb86c] sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 border-b-2 border-[#FFB86C] pb-2">
            $ grep -r skills ~/
          </h2>
          <div className="space-y-6 border-2 border-[#ffb86c] rounded-lg bg-[#222223] sm:space-y-8">
            {Object.entries(CONFIG.skills).map(([category, skills]) => (
              <div key={category} className=" rounded-md  p-4 sm:p-5">
                <h3 className="text-sm text-[#ffb86c] sm:text-base font-bold mb-3 sm:mb-4">
                  [ {category.toUpperCase()} ]
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-md border-2 border-[#FFB86C] text-sm sm:text-md"
                      >
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl  text-[#ffb86c] sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 border-b-2 border-[#FFB86C] pb-2">
            $ find ~/certifications -type f
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {CONFIG.certifications.map((cert) => (
              <div
                key={cert.title}
                className="border-2 bg-[#222223] rounded-lg border-[#FFB86C] p-4 sm:p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base text-[#ffb86c] sm:text-lg font-bold mb-2">
                      [ {cert.title} ]
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
                      <span>{cert.organization}</span>
                      <span>|</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  <span className="bg-[#FFB86C] px-3 py-1 text-md  text-black w-max">
                    {cert.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm mb-3">{cert.description}</p>

                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-2">SKILLS:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[#FFB86C] rounded-sm px-2 py-1 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm px-4 py-2 bg-[#FFB86C] text-black font-bold border-2 border-[#FFB86C] transition-colors"
                  >
                    VIEW_CREDENTIAL <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl text-[#ffb86c] sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 border-b-2 border-[#FFB86C] pb-2">
            $ more ~/education
          </h2>
          <div className="border-2 rounded-lg bg-[#222223] border-[#FFB86C] p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl text-[#ffb86c] font-bold mb-2">
                  [ {CONFIG.education.degree} ]
                </h3>
                <p className="text-base sm:text-lg mb-3">
                  {CONFIG.education.field}
                </p>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p>{CONFIG.education.institution}</p>
                  <p className="text-gray-400">{CONFIG.education.location}</p>
                  <p className="text-gray-400">{CONFIG.education.period}</p>
                </div>
              </div>
              <span className="bg-[#FFB86C] px-3 py-1 text-sm text-black w-max">
                {CONFIG.education.status}
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              {CONFIG.education.description}
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-[#FFB86C] pt-6 text-center">
          <div className="text-xs sm:text-sm text-gray-400">
            $ echo "EOF" && exit
          </div>
        </footer>
      </div>
    </div>
  );
}
