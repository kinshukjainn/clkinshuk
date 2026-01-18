"use client";

import React from "react";

import { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaShieldAlt,
  FaMobileAlt,
  FaClock,
  FaBolt,
  FaArrowUp,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaFilter,
  FaTimes,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";

const AUDIT_DATA = {
  auditMeta: {
    capturedAt: "2026-01-13T10:20:00+05:30",
    environment: {
      device: "Moto G Power (Emulated)",
      network: "Slow 4G",
      lighthouseVersion: "13.0.1",
      browser: "HeadlessChromium 137.0.7151.119",
      sessionType: "Single Page",
      loadType: "Initial Page Load",
    },
  },
  scores: {
    performance: 86,
    accessibility: 100,
    bestPractices: 100,
    seo: 66,
  },
  coreWebVitals: {
    fcp: {
      value: "4.1 s",
      scoreImpact: "+2",
      label: "First Contentful Paint",
      status: "good",
    },
    lcp: {
      value: "7.0 s",
      scoreImpact: "+2",
      label: "Largest Contentful Paint",
      status: "poor",
    },
    tbt: {
      value: "40 ms",
      scoreImpact: "+30",
      label: "Total Blocking Time",
      status: "good",
    },
    cls: {
      value: "0",
      scoreImpact: "+25",
      label: "Cumulative Layout Shift",
      status: "good",
    },
    speedIndex: {
      value: "4.3 s",
      scoreImpact: "+8",
      label: "Speed Index",
      status: "good",
    },
  },
  insights: {
    performanceImprovements: [
      {
        title: "Render Blocking Requests",
        estimatedSavingsMs: 2100,
        priority: "high",
        description: "Eliminate render-blocking resources to improve load time",
      },
      {
        title: "Document Request Latency",
        estimatedSavingsMs: 270,
        priority: "medium",
        description: "Reduce server response time",
      },
      {
        title: "Improve Image Delivery",
        estimatedSavingsKiB: 1083,
        priority: "high",
        description: "Serve images in modern formats and proper sizes",
      },
    ],
    diagnostics: [
      {
        issue: "Reduce unused JavaScript",
        estimatedSavingsKiB: 262,
        priority: "medium",
      },
      {
        issue: "Avoid long main-thread tasks",
        count: 5,
        priority: "high",
      },
      {
        issue: "Avoid non-composited animations",
        count: 5,
        priority: "low",
      },
    ],
  },
  accessibility: {
    score: 100,
    issues: {
      namesAndLabels: [
        "Buttons do not have an accessible name",
        "Links do not have a discernible name",
      ],
      navigation: [
        "Heading elements are not in a sequentially-descending order",
      ],
      bestPractices: [
        "Document does not have a main landmark",
        "Identical links have the same purpose",
      ],
    },
    passedAudits: 18,
    manualChecksRequired: 10,
  },
  bestPractices: {
    score: 100,
    security: [
      "Effective Content Security Policy (CSP)",
      "Strong HSTS policy",
      "Proper COOP origin isolation",
      "Clickjacking protection (XFO or CSP)",
      "Trusted Types against DOM XSS",
    ],
    notes: ["Missing source maps for large first-party JavaScript"],
  },
  seo: {
    score: 66,
    passedAudits: 8,
    structuredData: "Valid",
    manualChecksRequired: 1,
  },
};

const ScoreCircle = ({ score, label }: { score: number; label: string }) => {
  const getColor = (score: number) => {
    if (score >= 90) return "text-emerald-600";
    if (score >= 50) return "text-amber-600";
    return "text-red-600";
  };

  const getStrokeColor = (score: number) => {
    if (score >= 90) return "#059669";
    if (score >= 50) return "#b45309";
    return "#dc2626";
  };

  const getStatus = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Good";
    if (score >= 50) return "Needs Work";
    return "Poor";
  };

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
        <svg
          className="transform -rotate-90 w-full h-full"
          viewBox="0 0 112 112"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx="56"
            cy="56"
            r="45"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="56"
            cy="56"
            r="45"
            stroke={getStrokeColor(score)}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-2xl sm:text-3xl md:text-4xl font-bold ${getColor(
              score,
            )}`}
          >
            {score}
          </span>
        </div>
      </div>
      <div className="text-center mt-3">
        <span className="text-sm md:text-base text-foreground font-medium block">
          {label}
        </span>
        <span className={`text-xs ${getColor(score)} block mt-1`}>
          {getStatus(score)}
        </span>
      </div>
    </div>
  );
};

const CollapsibleSection = ({
  title,
  isExpanded,
  onToggle,
  badge,
  children,
}: {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  badge?: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-4 pb-6 sm:pb-8 ">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between group hover:opacity-70 transition-opacity"
    >
      <div className="flex items-center gap-3">
        <h2 className="text-xs sm:text-sm uppercase tracking-widest text-accent font-semibold">
          {title}
        </h2>
        {badge && (
          <span className="px-2 py-1 text-xs bg-secondary text-accent rounded-full">
            {badge}
          </span>
        )}
      </div>
      {isExpanded ? (
        <FaChevronUp className="text-muted-foreground w-4 h-4" />
      ) : (
        <FaChevronDown className="text-muted-foreground w-4 h-4" />
      )}
    </button>
    {isExpanded && <div className="space-y-4 sm:space-y-5">{children}</div>}
  </section>
);

export default function SeoInsights() {
  const [expandedSections, setExpandedSections] = useState({
    environment: true,
    scores: true,
    vitals: true,
    opportunities: true,
    diagnostics: true,
    accessibility: false,
    security: false,
    seo: true,
  });

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priorityFilter: "all",
    showOnlyIssues: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const exportReport = () => {
    const reportData = JSON.stringify(AUDIT_DATA, null, 2);
    const blob = new Blob([reportData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lighthouse-report-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "medium":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "low":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  const filteredOpportunities =
    AUDIT_DATA.insights.performanceImprovements.filter(
      (item) =>
        filters.priorityFilter === "all" ||
        item.priority === filters.priorityFilter,
    );

  const filteredDiagnostics = AUDIT_DATA.insights.diagnostics.filter(
    (item) =>
      filters.priorityFilter === "all" ||
      item.priority === filters.priorityFilter,
  );

  return (
    <div className="min-h-screen pt-20 bg-white text-foreground px-4 py-6 sm:px-6 md:px-8 lg:px-10">
      <main className="w-full max-w-7xl mx-auto space-y-8">
        {/* Header with Actions */}
        <header className="space-y-4  pb-6 pt-6 sm:pt-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground leading-tight mb-2">
                SEO & Performance Insights
              </h1>
              <p className="text-sm text-muted-foreground font-light">
                Lighthouse Audit Report •{" "}
                {formatDate(AUDIT_DATA.auditMeta.capturedAt)}
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-secondary hover:bg-muted border border-border rounded-lg text-foreground text-sm transition-colors font-light whitespace-nowrap"
              >
                <FaFilter className="w-4 h-4" />
                Filters
              </button>
              <button
                onClick={exportReport}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-accent hover:bg-accent/90 rounded-lg text-white text-sm transition-colors font-light whitespace-nowrap"
              >
                <FaDownload className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-secondary border border-border rounded-lg p-4 space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  Filter Options
                </span>
                <button
                  title="Close Filters"
                  onClick={() => setShowFilters(false)}
                  className="text-foreground p-2 bg-muted cursor-pointer rounded-lg hover:opacity-80"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                <select
                  title="Priority Filter"
                  value={filters.priorityFilter}
                  onChange={(e) =>
                    setFilters({ ...filters, priorityFilter: e.target.value })
                  }
                  className="px-4 py-3 bg-white border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent font-light"
                >
                  <option value="all">All Priorities</option>
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
              </div>
            </div>
          )}
        </header>

        {/* Quick Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 sm:p-5 hover:bg-secondary transition-colors">
            <FaChartLine className="text-accent w-6 h-6 mb-3" />
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              {Math.round(
                (AUDIT_DATA.scores.performance +
                  AUDIT_DATA.scores.accessibility +
                  AUDIT_DATA.scores.bestPractices +
                  AUDIT_DATA.scores.seo) /
                  4,
              )}
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-light uppercase tracking-wide">
              Average Score
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-5 hover:bg-secondary transition-colors">
            <FaCheckCircle className="text-emerald-600 w-6 h-6 mb-3" />
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              {Object.values(AUDIT_DATA.scores).filter((s) => s >= 90).length}
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-light uppercase tracking-wide">
              Perfect Scores
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-5 hover:bg-secondary transition-colors">
            <FaExclamationTriangle className="text-amber-600 w-6 h-6 mb-3" />
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              {AUDIT_DATA.insights.performanceImprovements.length +
                AUDIT_DATA.insights.diagnostics.length}
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-light uppercase tracking-wide">
              Issues Found
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-5 hover:bg-secondary transition-colors">
            <FaLightbulb className="text-accent w-6 h-6 mb-3" />
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              {
                AUDIT_DATA.insights.performanceImprovements.filter(
                  (i) => i.priority === "high",
                ).length
              }
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-light uppercase tracking-wide">
              High Priority
            </p>
          </div>
        </div>

        {/* Test Environment */}
        <CollapsibleSection
          title="Test Environment"
          isExpanded={expandedSections.environment}
          onToggle={() => toggleSection("environment")}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 hover:bg-secondary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <FaMobileAlt className="text-accent w-5 h-5" />
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  Device
                </span>
              </div>
              <p className="text-foreground font-medium">
                {AUDIT_DATA.auditMeta.environment.device}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 hover:bg-secondary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <FaBolt className="text-amber-600 w-5 h-5" />
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  Network
                </span>
              </div>
              <p className="text-foreground font-medium">
                {AUDIT_DATA.auditMeta.environment.network}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 hover:bg-secondary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <FaInfoCircle className="text-accent w-5 h-5" />
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  Version
                </span>
              </div>
              <p className="text-foreground font-medium">
                v{AUDIT_DATA.auditMeta.environment.lighthouseVersion}
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Overall Scores */}
        <CollapsibleSection
          title="Overall Scores"
          isExpanded={expandedSections.scores}
          onToggle={() => toggleSection("scores")}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-4">
            <ScoreCircle
              score={AUDIT_DATA.scores.performance}
              label="Performance"
            />
            <ScoreCircle
              score={AUDIT_DATA.scores.accessibility}
              label="Accessibility"
            />
            <ScoreCircle
              score={AUDIT_DATA.scores.bestPractices}
              label="Best Practices"
            />
            <ScoreCircle score={AUDIT_DATA.scores.seo} label="SEO" />
          </div>
        </CollapsibleSection>

        {/* Core Web Vitals */}
        <CollapsibleSection
          title="Core Web Vitals"
          isExpanded={expandedSections.vitals}
          onToggle={() => toggleSection("vitals")}
          badge="Critical"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(AUDIT_DATA.coreWebVitals).map(([key, vital]) => (
              <div
                key={key}
                className={`rounded-lg p-5 hover:scale-105 transition-transform ${
                  vital.status === "good"
                    ? "bg-emerald-50"
                    : vital.status === "needs-improvement"
                      ? "bg-amber-50"
                      : vital.status === "poor"
                        ? "bg-red-50"
                        : "bg-secondary"
                }`}
              >
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-medium">
                  {vital.label}
                </p>
                <p className="text-3xl font-bold text-foreground mb-4">
                  {vital.value}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-lg">
                  <FaArrowUp className="text-emerald-600 w-3 h-3" />
                  <span className="text-emerald-600 text-xs font-medium">
                    {vital.scoreImpact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Performance Opportunities */}
        <CollapsibleSection
          title="Performance Opportunities"
          isExpanded={expandedSections.opportunities}
          onToggle={() => toggleSection("opportunities")}
          badge={`${filteredOpportunities.length} items`}
        >
          <div className="space-y-4">
            {filteredOpportunities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 hover:bg-secondary transition-colors"
              >
                <div className="flex items-start gap-4">
                  <FaClock className="text-amber-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="text-foreground font-medium">
                        {item.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-lg ${
                          getPriorityColor(item.priority).split(" border ")[0]
                        } uppercase tracking-wider whitespace-nowrap text-center flex-shrink-0 font-medium`}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      {item.estimatedSavingsMs && (
                        <span className="font-medium">
                          Potential savings: {item.estimatedSavingsMs}ms
                        </span>
                      )}
                      {item.estimatedSavingsKiB && (
                        <span className="font-medium">
                          Potential savings: {item.estimatedSavingsKiB}KiB
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Diagnostics */}
        <CollapsibleSection
          title="Diagnostics"
          isExpanded={expandedSections.diagnostics}
          onToggle={() => toggleSection("diagnostics")}
          badge={`${filteredDiagnostics.length} items`}
        >
          <div className="space-y-4">
            {filteredDiagnostics.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 hover:bg-secondary transition-colors"
              >
                <div className="flex items-start gap-4">
                  <FaExclamationTriangle className="text-amber-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                      <h3 className="text-foreground font-medium">
                        {item.issue}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-lg whitespace-nowrap flex-shrink-0 font-medium ${
                          getPriorityColor(item.priority).split(" border ")[0]
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-light">
                      {("estimatedSavingsKiB" in item &&
                        `Potential savings: ${item.estimatedSavingsKiB}KiB`) ||
                        ("count" in item && `Instances found: ${item.count}`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Accessibility */}
        <CollapsibleSection
          title="Accessibility"
          isExpanded={expandedSections.accessibility}
          onToggle={() => toggleSection("accessibility")}
          badge={`${AUDIT_DATA.accessibility.passedAudits} passed`}
        >
          <div className="space-y-5">
            <div className="bg-white rounded-lg p-5">
              <h3 className="text-foreground font-medium mb-3">Issues Found</h3>
              <div className="space-y-4">
                {Object.entries(AUDIT_DATA.accessibility.issues).map(
                  ([category, issues]) => (
                    <div key={category}>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-2">
                        {category}
                      </p>
                      <ul className="space-y-2">
                        {issues.map((issue, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2 font-light"
                          >
                            <span className="text-red-600 mt-0.5 flex-shrink-0">
                              •
                            </span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-2">
                  Passed Audits
                </p>
                <p className="text-3xl font-bold text-emerald-600">
                  {AUDIT_DATA.accessibility.passedAudits}
                </p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-2">
                  Manual Checks
                </p>
                <p className="text-3xl font-bold text-accent">
                  {AUDIT_DATA.accessibility.manualChecksRequired}
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Security & Best Practices */}
        <CollapsibleSection
          title="Security & Best Practices"
          isExpanded={expandedSections.security}
          onToggle={() => toggleSection("security")}
          badge={`${AUDIT_DATA.bestPractices.score}`}
        >
          <div className="space-y-5">
            <div className="bg-white rounded-lg p-5">
              <h3 className="text-foreground font-medium mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-emerald-600 w-5 h-5" />
                Security Features
              </h3>
              <ul className="space-y-3">
                {AUDIT_DATA.bestPractices.security.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-3 font-light"
                  >
                    <FaCheckCircle className="text-emerald-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-5">
              <h3 className="text-foreground font-medium mb-4">Notes</h3>
              <ul className="space-y-2">
                {AUDIT_DATA.bestPractices.notes.map((note, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2 font-light"
                  >
                    <span className="text-amber-600 mt-0.5 flex-shrink-0">
                      ⚠
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        {/* SEO */}
        <CollapsibleSection
          title="SEO"
          isExpanded={expandedSections.seo}
          onToggle={() => toggleSection("seo")}
          badge={`${AUDIT_DATA.seo.score}`}
        >
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div className="bg-white rounded-lg p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-2">
                Score
              </p>
              <p className="text-3xl font-bold text-accent">
                {AUDIT_DATA.seo.score}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-2">
                Passed Audits
              </p>
              <p className="text-3xl font-bold text-emerald-600">
                {AUDIT_DATA.seo.passedAudits}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-2">
                Structured Data
              </p>
              <p className="text-lg font-bold text-foreground">
                {AUDIT_DATA.seo.structuredData}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-3">
              Manual Checks Required: {AUDIT_DATA.seo.manualChecksRequired}
            </p>
            <p className="text-sm text-muted-foreground font-light">
              Review additional manual checks to ensure SEO optimization is
              complete.
            </p>
          </div>
        </CollapsibleSection>

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground font-light">
            Report generated using Lighthouse v
            {AUDIT_DATA.auditMeta.environment.lighthouseVersion}
          </p>
        </footer>
      </main>
    </div>
  );
}
