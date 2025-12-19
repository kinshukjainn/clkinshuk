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
  FaFileDownload, // Added this import
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiHashnode } from "react-icons/si";
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
      className="p-2 sm:p-2.5   bg-blue-800 rounded-sm text-white transition-colors cursor-pointer"
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
    <div className="min-h-screen bg-white text-black  pt-12 sm:pt-16 md:pt-20">
      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <header className="mb-10 sm:mb-12 md:mb-16  pb-8">
          <div className="mb-6 sm:mb-8">
            <div className="text-md font-bold sm:text-base text-red-500">
              $ whoami
            </div>
            <h1 className="text-5xl sm:text-6xl web-headline text-black md:text-6xl font-bold mb-2">
              Hi , Im Kinshuk
            </h1>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-6">
            {CONFIG.personal.bio.map((p, i) => (
              <p
                key={i}
                className="text-md sm:text-lg font-semibold leading-relaxed"
              >
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
            <div className=" px-3 py-1 inline-block font-bold">
              AVAILABLE FOR OPPORTUNITIES
            </div>
          </div>
        </header>

        {/* Connect */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl text-black md:text-3xl font-bold mb-4 sm:mb-6  pb-2">
            Connect with me
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
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-md bg-gray-100 border-1 border-gray-400   transition-colors"
                >
                  <div className=" p-1 text-black rounded-sm">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm text-black sm:text-md font-bold truncate">
                      {social.platform}
                    </span>
                    <span className="text-sm sm:text-md  truncate">
                      {social.handle}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Resume Section - ADDED THIS SECTION */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl text-black sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6  pb-2">
            Resume
          </h2>

          <div className="border bg-gray-100 rounded-lg border-gray-400 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-lg text-black sm:text-xl font-bold mb-1">
                My Resume
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                Click the button to download my latest resume in PDF format.
              </p>
            </div>

            <a
              href="/kinshukfinalresume.pdf" /* <--- REPLACE THIS WITH YOUR ACTUAL RESUME PATH */
              download="kinshukfinalresume.pdf"
              className="
                mt-2 sm:mt-0
                bg-blue-800 text-white 
                font-medium rounded-lg 
                px-2 py-2 
                cursor-pointer 
                flex items-center gap-2 
                transition 
                w-full sm:w-auto 
                justify-center
                whitespace-nowrap
              "
            >
              <FaFileDownload className="text-md" />
              <span>Download</span>
            </a>
          </div>
        </section>

        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl text-black sm:text-2xl md:text-3xl  font-bold mb-4 sm:mb-6 pb-2">
            Subscribe to my Blogs
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="border bg-gray-100 rounded-lg border-gray-400 p-4 sm:p-6">
              <h3 className="text-lg text-black sm:text-xl font-bold mb-2">
                Hashnode || Blogs
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
    bg-blue-800 text-white 
    font-semibold 
    px-2 py-2 rounded-lg
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
          <h2 className="text-xl text-black sm:text-2xl md:text-3xl  font-bold mb-4 sm:mb-6  pb-2">
            Run this on your bash/zsh/cmd/pwsh
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="border bg-gray-100 rounded-lg border-gray-400 p-3 sm:p-6">
              <h3 className="text-md text-black sm:text-xl font-bold mb-2">
                Install Nodejs on your pc
              </h3>

              <h3 className="text-md text-gray-700 sm:text-xl font-bold mb-2">
                Install this package :
              </h3>

              <div className="p-3 rounded-md bg-blue-200 border-2 border-gray-400">
                <span className="text-md code-font text-black font-semibold">
                  npm install -g hackkinshuk
                </span>
              </div>

              <h3 className="text-md mt-3 text-gray-700 sm:text-xl font-bold mb-2">
                Run this command :
              </h3>

              <div className="p-3 rounded-md bg-blue-200 border-2 border-gray-400">
                <span className="text-md text-black code-font font-semibold">
                  cloudkinshuk
                </span>
              </div>

              <p className="text-md mt-4 ">
                After running this command you will the see the magic
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl ttext-black sm:text-2xl md:text-3xl  font-bold mb-4 sm:mb-6  pb-2">
            Internships
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="border bg-gray-100 rounded-lg border-gray-400 p-4 sm:p-6">
              <h3 className="text-lg ttext-black sm:text-xl font-bold mb-2">
                {
                  "UPPCTL : (Uttar Pradesh Power Transmission Corporation Limited)"
                }
              </h3>
              <div className="mt-2 font-semibold  mb-2 ">
                <span className="text-lg text-gray-800">Time : </span>
                <span className="text-lg text-gray-800">
                  {"[ July 2025 - Aug 2025  ] "}{" "}
                </span>
              </div>

              <span className="text-gray-black font-bold text-lg">
                Expierience :{" "}
              </span>
              <p className="mt-2">
                Worked with the transmission division to understand the
                operation, protection, and maintenance of 132kV and 220kV
                substations. Studied working principles of power transformers,
                circuit breakers, busbars, and protection relays.
              </p>
              <div className="h-0.5 mt-2 w-full bg-black rounded-lg"></div>
              <p className="mt-2">
                Observed real-time SCADA dashboards for grid monitoring, load
                management, and outage reporting. Assisted engineers during
                shutdown procedures, equipment inspections, and testing of CTs,
                PTs, and relays.
              </p>

              <div className="h-0.5 mt-2 w-full bg-black rounded-lg"></div>
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
          <h2 className="text-xl ttext-black sm:text-2xl md:text-3xl  font-bold mb-4 sm:mb-6  pb-2">
            Projects
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {CONFIG.projects.map((project) => (
              <div
                key={project.title}
                className="border bg-gray-100 rounded-lg border-gray-400 p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-lg ttext-black sm:text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span>{project.type}</span>
                      <span>|</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <span className="bg-green-500 px-3 py-1 font-semibold rounded-lg text-black text-sm w-max">
                    {project.status}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {project.description.map((p, i) => (
                    <p key={i} className="text-sm sm:text-sm leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="text-md font-semibold sm:text-sm mb-2 text-black">
                    TECH STACK:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className=" bg-gray-300 border-1 border-gray-500 rounded-md px-2 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.dockerCommand !== "Image is not available" && (
                  <div className="bg-blue-200 border-1 border-gray-400 rounded-md p-3 mb-4 overflow-x-auto">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-md sm:text-sm whitespace-nowrap">
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
                      className="inline-flex items-center gap-2 px-2  bg-blue-800 text-white text-md sm:text-sm rounded-lg font-bold   transition-colors"
                    >
                      Visit site <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-2 py-2 rounded-lg text-sm sm:text-sm font-bold bg-blue-800 text-white transition-colors"
                    >
                      <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" /> View code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl ttext-black sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6  pb-2">
            Skills
          </h2>
          <div className="space-y-6 border border-gray-400 rounded-lg bg-gray-100 sm:space-y-8">
            {Object.entries(CONFIG.skills).map(([category, skills]) => (
              <div key={category} className=" rounded-lg  p-4 sm:p-5">
                <h3 className="text-sm ttext-black sm:text-base font-bold mb-3 sm:mb-4">
                  {category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-300 text-sm sm:text-md"
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
          <h2 className="text-xl  ttext-black sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6  pb-2">
            Certifications
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {CONFIG.certifications.map((cert) => (
              <div
                key={cert.title}
                className="border bg-gray-100 rounded-lg border-gray-400 p-4 sm:p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base ttext-black sm:text-lg font-bold mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex flex-wrap font-semibold items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <span>{cert.organization}</span>
                      <span>|</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  <span className="bg-green-500 rounded-lg px-2 py-1 text-sm  text-black w-max">
                    {cert.status}
                  </span>
                </div>

                <p className="text-sm sm:text-sm mb-3">{cert.description}</p>

                <div className="mb-3">
                  <div className="text-xs text-gray-700 font-semibold mb-2">
                    SKILLS:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-300 border border-gray-400 rounded-sm px-2 py-1 text-xs"
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
                    className="inline-flex items-center gap-2 text-xs sm:text-sm px-2 py-2 rounded-lg bg-blue-800 text-white font-semibold transition-colors"
                  >
                    View Creds <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl text-black sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6  pb-2">
            Education
          </h2>
          <div className="border rounded-lg bg-gray-100 border-gray-400 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl ttext-black font-bold mb-2">
                  {CONFIG.education.degree}
                </h3>
                <p className="text-base sm:text-lg mb-3">
                  {CONFIG.education.field}
                </p>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p>{CONFIG.education.institution}</p>
                  <p className="text-gray-700">{CONFIG.education.location}</p>
                  <p className="text-gray-700">{CONFIG.education.period}</p>
                </div>
              </div>
              <span className="bg-green-500 px-3 py-1 font-semibold text-sm text-black rounded-lg w-max">
                {CONFIG.education.status}
              </span>
            </div>
            <p className="text-sm sm:text-sm leading-relaxed">
              {CONFIG.education.description}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
