"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";

const styles = `
  .noise-bg {
    background: #000000;
    background-image:
      radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0);
    background-size: 20px 20px, 30px 30px, 25px 25px;
    background-position: 0 0, 10px 10px, 15px 5px;
  }
`;

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
    status:
      "Currently Intern at UPPCL (Uttar Pradesh Power Corporation Limited)",
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
      description:
        "Digital badge covering storage services concepts and AWS storage solutions",
      skills: ["Amazon S3", "Amazon EBS", "Amazon EFS", "AWS Storage Gateway"],
    },
    {
      title: "AWS Solutions Architect - Associate",
      organization: "AWS",
      status: "Preparing",
      year: "2025",
      progress: "Not yet Attempted",
      description:
        "Comprehensive certification covering AWS architecture best practices and services",
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
      title: "Comming Soon",
      year: "2025",
      status: "Development Stage",
      type: "Not known",
      description: ["A modern AI Based Platform"],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Open AI API",
        "AWS Lambda",
        "AWS Amplify",
      ],
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
};

interface SocialConfig {
  platform: string;
  url: string;
  icon: React.ElementType;
  handle: string;
  action?: string;
}

// Animated section component with framer-motion
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
  );
};

// Copy Button Component
const CopyButton: React.FC<{ text: string }> = ({ text }) => {
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
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold cursor-pointer bg-blue-700 text-white hover:bg-blue-600 transition-colors rounded-full"
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
  );
};

// Section Header Component
const SectionHeader: React.FC<{ icon: React.ElementType; title: string }> = ({
  icon: Icon,
  title,
}) => (
  <div className="flex items-center gap-4 mb-8 pb-6 rounded-md">
    <Icon className="w-8 h-8 text-white" />
    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white ">
      {title}
    </h3>
  </div>
);

// Tech Tag Component
const TechTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block py-1 px-2 bg-neutral-900 text-white text-md  rounded-full">
    {children}
  </span>
);

// --- MAIN PORTFOLIO COMPONENT ---
export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "$ whoami";

  useEffect(() => {
    let i = 0;
    const typingTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingTimer);
      }
    }, 120);

    return () => clearInterval(typingTimer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Kinshuk, I saw your portfolio and wanted to connect."
    );
    window.open(
      `https://wa.me/${CONFIG.personal.whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  const handleSocialClick = (social: SocialConfig) => {
    if (social.action === "whatsapp") {
      handleWhatsAppClick();
    } else {
      window.open(social.url, "_blank");
    }
  };

  return (
    <>
      <style>{styles}</style>

      <div className="min-h-screen w-full bg-[#1e1e1e] relative">
        <div className="absolute inset-0 z-0 noise-bg" />

        {/* Grid overlay for visual interest */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
          <div className="absolute inset-0" />
        </div>

        <main className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10">
          <div className="space-y-20 pt-20 md:space-y-32 py-12 md:py-20">
            {/* --- Hero Section --- */}
            <AnimatedSection className="min-h-[80vh] flex flex-col justify-center pb-20 md:pb-32 rounded-md p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="text-base md:text-lg font-mono text-[#d4d4d4] mb-6 md:mb-8">
                  {typedText}
                  <span className="animate-pulse-glow">_</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl special-font font-bold tracking-tighter text-blue-500 leading-none">
                  {CONFIG.personal.name}
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-[#a1a1aa] max-w-3xl font-light leading-relaxed">
                  {CONFIG.personal.title}
                </h2>

                <div className="flex items-center gap-3 text-base md:text-lg text-[#d4d4d4] pt-4">
                  <FaMapMarkerAlt className="text-[#d4d4d4]" />
                  <span>{CONFIG.personal.location}</span>
                </div>
              </motion.div>

              <div className="mt-3 md:mt-4 space-y-2 md:space-y-1 text-xl md:text-lg text-gray-200 max-w-4xl pl-6 md:pl-8">
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
  <div className="grid grid-cols-1 gap-3 md:gap-4">
    {CONFIG.social.map((social, index) => {
      const Icon = social.icon;
      return (
        <motion.button
          key={social.platform}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ x: 4, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSocialClick(social)}
          className="group flex items-center justify-between p-4 md:p-5 transition-all duration-300 cursor-pointer rounded-full bg-neutral-900/40 hover:bg-neutral-900/70 border border-neutral-800/50 hover:border-blue-500/30 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10"
        >
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center justify-center p-3 md:p-4 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full shadow-inner group-hover:shadow-blue-500/20 transition-all duration-300 group-hover:scale-110">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400 group-hover:text-blue-500 transition-colors duration-300" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {social.platform}
              </span>
              <span className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {social.handle}
              </span>
            </div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.button>
      );
    })}
  </div>
</AnimatedSection>

          <AnimatedSection delay={0.3}>
  <SectionHeader icon={FaAward} title="Certifications & Badges" />
  <div className="space-y-6 md:space-y-7">
    {CONFIG.certifications.map((cert, index) => (
      <motion.div
        key={cert.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group p-6 md:p-8 transition-all duration-300 hover:bg-[#151515] bg-[#0e0e0e] rounded-4xl border border-[#1a1a1a] hover:border-[#2a2a2a]"
      >
        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6">
          <div className="flex-1 space-y-5">
            {/* Title and Status Badge */}
            <div className="flex items-start gap-3 flex-wrap">
              <h4 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h4>
              <span
                className={`px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide rounded-full transition-all ${
                  cert.status === "Completed"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}
              >
                {cert.status}
              </span>
            </div>

            {/* Organization and Year */}
            <div className="flex items-center gap-2 text-sm md:text-base">
              <span className="font-semibold text-[#ff9100]">
                {cert.organization}
              </span>
              <span className="text-gray-600">•</span>
              <span className="font-medium text-gray-400">{cert.year}</span>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {cert.description}
            </p>

            {/* Progress */}
            {cert.progress && (
              <div className="flex items-center gap-2 pt-1">
                <div className="h-1.5 flex-1 bg-[#1a1a1a] rounded-full overflow-hidden max-w-xs">
                  <div 
                    className="h-full bg-gradient-to-r from-[#ff9100] to-[#ffb347] rounded-full"
                  />
                </div>
                <span className="text-sm font-bold text-[#ff9100] min-w-fit">
                  {cert.progress}
                </span>
              </div>
            )}

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {cert.skills.map((skill) => (
                <TechTag key={skill}>{skill}</TechTag>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {cert.url && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 px-5 md:px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm md:text-base font-bold tracking-wide shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 rounded-full w-max"
            >
              View Credential
              <FaExternalLinkAlt className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </motion.a>
          )}
        </div>
      </motion.div>
    ))}
  </div>
</AnimatedSection>

            <AnimatedSection delay={0.4}>
  <SectionHeader icon={FaCode} title="Technologies" />
  <div className="space-y-10 md:space-y-14">
    {Object.entries(CONFIG.skills).map(
      ([category, skills], catIndex) => (
        <div key={category} className="relative">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
            <h4 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 tracking-wide uppercase">
              {category}
            </h4>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: catIndex * 0.1 + index * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-3xl bg-gradient-to-br from-[#1e1e1e] to-[#171717] border border-neutral-800/50 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
                >
                  <div className="flex items-center justify-center p-2.5 md:p-3 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl group-hover:from-neutral-800 group-hover:to-neutral-700 transition-all duration-300">
                    <Icon className="w-6 h-6 md:w-6 md:h-6 text-blue-500 group-hover:text-blue-400 flex-shrink-0 transition-colors duration-300" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-neutral-200 group-hover:text-white truncate transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      )
    )}
  </div>
</AnimatedSection>
            {/* --- Projects Section --- */}
            <AnimatedSection delay={0.5}>
              <SectionHeader icon={FaCode} title="Featured Projects" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {CONFIG.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col p-6 md:p-8 transition-all duration-300 bg-[#1e1e1e] rounded-3xl border border-gray-800 hover:border-gray-700 hover:shadow-xl hover:shadow-gray-900/50"
                  >
                    <div className="flex-grow space-y-4 md:space-y-6">
                      {/* Header with Title and Status */}
                      <div className="flex justify-between items-start gap-4 pb-4 border-b border-gray-800">
                        <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                          {project.title}
                        </h4>
                        <span
                          className={`px-4 py-1.5 text-xs font-bold tracking-widest rounded-full whitespace-nowrap flex-shrink-0 ${
                            project.status === "Live"
                              ? "text-white bg-blue-700 shadow-lg shadow-red-500/30"
                              : "text-gray-400 bg-transparent border-2 border-gray-600"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Project Type and Year */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm md:text-md font-bold text-black bg-green-500 px-3 py-1 rounded-lg">
                          {project.type}
                        </span>
                        <span className="text-sm md:text-md font-semibold text-gray-400">
                          • {project.year}
                        </span>
                      </div>

                      {/* Description */}
                      <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                        {project.description.map((p, i) => (
                          <p key={i} className="text-gray-400 leading-7">
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                          <TechTag key={tech}>{tech}</TechTag>
                        ))}
                      </div>

                      {/* Docker Command Section */}
                      <div className="mt-6 p-5 rounded-xl bg-black/40 border border-gray-800">
                        <div className="flex items-center gap-3 mb-4">
                          <FaDocker className="w-5 h-5 text-blue-400" />
                          <span className="text-sm font-bold text-gray-300 tracking-wide uppercase">
                            Docker Command
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                          <code className="text-sm md:text-md font-semibold text-green-400 font-mono px-3 md:px-4 py-2 md:py-3 flex-1 overflow-x-auto bg-neutral-900 rounded-xl border border-gray-800">
                            {project.dockerCommand}
                          </code>
                          <CopyButton text={project.dockerCommand} />
                        </div>
                      </div>

                      {/* Project Links Section */}
                      <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-gray-800">
                        {project.links.live && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold tracking-wider cursor-pointer transition-all duration-300 rounded-full hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Live Project
                          </motion.a>
                        )}
                        {project.links.repo && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-bold tracking-wider cursor-pointer transition-all duration-300 rounded-full hover:bg-neutral-800 border-2 border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
                          >
                            <FaGithub className="w-4 h-4" />
                            View Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* --- Education Section --- */}
            <AnimatedSection delay={0.6}>
              <SectionHeader icon={FaGraduationCap} title="Education" />
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 md:p-8 transition-colors bg-[#1e1e1e] rounded-3xl"
                >
                  <div className="space-y-6">
                    {/* Top Section - Degree and Status */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-800">
                      <div className="space-y-2">
                        <h4 className="text-2xl md:text-3xl font-bold text-white">
                          {CONFIG.education.degree}
                        </h4>
                        <p className="text-lg md:text-xl font-medium text-blue-500">
                          {CONFIG.education.field}
                        </p>
                      </div>
                      <span className="text-sm md:text-base px-5 py-2.5 bg-blue-500 text-white font-bold tracking-wider rounded-full whitespace-nowrap">
                        {CONFIG.education.status}
                      </span>
                    </div>

                    {/* Middle Section - Institution and Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <FaGraduationCap className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <p className="text-lg md:text-xl text-white font-semibold">
                            {CONFIG.education.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 pl-8">
                          <FaMapMarkerAlt className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <p className="text-md md:text-base text-gray-300">
                            {CONFIG.education.location}
                          </p>
                        </div>
                        <div className="pl-8">
                          <p className="text-sm md:text-base text-[#ff9100] font-medium">
                            {CONFIG.education.period}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="flex items-center">
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                          {CONFIG.education.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </main>
      </div>
    </>
  );
}
