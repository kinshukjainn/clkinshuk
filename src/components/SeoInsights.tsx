import { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaShieldAlt,
  FaSearch,
  FaMobileAlt,
  FaClock,
  FaBolt,
  FaEye,
  FaArrowUp,
  FaArrowDown,
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
    if (score >= 90) return "text-emerald-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getStrokeColor = (score: number) => {
    if (score >= 90) return "#34d399";
    if (score >= 50) return "#fbbf24";
    return "#f87171";
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
            stroke="rgba(255,255,255,0.1)"
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
        <span className="text-sm md:text-base text-white font-medium block">
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
  <section className="space-y-4 pb-6 sm:pb-8 border-b border-white/10">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between group hover:opacity-80 transition-opacity"
    >
      <div className="flex items-center gap-3">
        <h2 className="text-xs sm:text-sm uppercase tracking-widest text-blue-500 font-semibold">
          {title}
        </h2>
        {badge && (
          <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-3xl border border-blue-500/30">
            {badge}
          </span>
        )}
      </div>
      {isExpanded ? (
        <FaChevronUp className="text-gray-400 w-4 h-4" />
      ) : (
        <FaChevronDown className="text-gray-400 w-4 h-4" />
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
        return "text-red-400 bg-red-500/10 border-red-500/20";
      case "medium":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
      case "low":
        return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20";
    }
  };

  const getVitalStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "border-emerald-500/20 bg-emerald-500/10";
      case "needs-improvement":
        return "border-yellow-500/20 bg-yellow-500/10";
      case "poor":
        return "border-red-500/20 bg-red-500/10";
      default:
        return "border-white/10 bg-white/5";
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 px-4 py-6 pt-40 sm:px-6 md:px-8 lg:px-10">
      <main className="w-full max-w-7xl mx-auto space-y-8">
        {/* Header with Actions */}
        <header className="space-y-4 border-b border-white/10 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl heading-font brand-glow font-bold text-white leading-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                SEO & Performance Insights
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                Lighthouse Audit Report •{" "}
                {formatDate(AUDIT_DATA.auditMeta.capturedAt)}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl text-white text-sm transition-colors"
              >
                <FaFilter className="w-4 h-4" />
                Filters
              </button>
              <button
                onClick={exportReport}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-blue-500/20 hover:bg-blue-500/30  rounded-3xl text-blue-400 text-sm transition-colors"
              >
                <FaDownload className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4 space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                  Filter Options
                </span>
                <button
                  title="Close Filters"
                  onClick={() => setShowFilters(false)}
                  className="text-white p-2 bg-blue-500 cursor-pointer rounded-3xl hover:text-white"
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
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-3xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-4">
            <FaChartLine className="text-blue-400 w-6 h-6 mb-2" />
            <p className="text-2xl font-bold text-white">
              {Math.round(
                (AUDIT_DATA.scores.performance +
                  AUDIT_DATA.scores.accessibility +
                  AUDIT_DATA.scores.bestPractices +
                  AUDIT_DATA.scores.seo) /
                  4,
              )}
            </p>
            <p className="text-xs text-gray-400 mt-1">Average Score</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-3xl p-4">
            <FaCheckCircle className="text-emerald-400 w-6 h-6 mb-2" />
            <p className="text-2xl font-bold text-white">
              {Object.values(AUDIT_DATA.scores).filter((s) => s >= 90).length}
            </p>
            <p className="text-xs text-gray-400 mt-1">Perfect Scores</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-4">
            <FaExclamationTriangle className="text-yellow-400 w-6 h-6 mb-2" />
            <p className="text-2xl font-bold text-white">
              {AUDIT_DATA.insights.performanceImprovements.length +
                AUDIT_DATA.insights.diagnostics.length}
            </p>
            <p className="text-xs text-gray-400 mt-1">Issues Found</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-4">
            <FaLightbulb className="text-purple-400 w-6 h-6 mb-2" />
            <p className="text-2xl font-bold text-white">
              {
                AUDIT_DATA.insights.performanceImprovements.filter(
                  (i) => i.priority === "high",
                ).length
              }
            </p>
            <p className="text-xs text-gray-400 mt-1">High Priority</p>
          </div>
        </div>

        {/* Test Environment */}
        <CollapsibleSection
          title="Test Environment"
          isExpanded={expandedSections.environment}
          onToggle={() => toggleSection("environment")}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <FaMobileAlt className="text-blue-400 w-5 h-5" />
                <span className="text-xs text-gray-400 uppercase tracking-widest">
                  Device
                </span>
              </div>
              <p className="text-white font-medium">
                {AUDIT_DATA.auditMeta.environment.device}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <FaBolt className="text-yellow-400 w-5 h-5" />
                <span className="text-xs text-gray-400 uppercase tracking-widest">
                  Network
                </span>
              </div>
              <p className="text-white font-medium">
                {AUDIT_DATA.auditMeta.environment.network}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <FaInfoCircle className="text-purple-400 w-5 h-5" />
                <span className="text-xs text-gray-400 uppercase tracking-widest">
                  Version
                </span>
              </div>
              <p className="text-white font-medium">
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
                className={`border rounded-3xl p-5 hover:scale-105 transition-transform ${getVitalStatusColor(
                  vital.status,
                )}`}
              >
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                  {vital.label}
                </p>
                <p className="text-3xl font-bold text-white mb-4">
                  {vital.value}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
                  <FaArrowUp className="text-emerald-400 w-3 h-3" />
                  <span className="text-emerald-400 text-xs font-medium">
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
                className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <FaClock className="text-orange-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-3xl border ${getPriorityColor(
                          item.priority,
                        )} uppercase tracking-wider whitespace-nowrap`}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {item.estimatedSavingsMs && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-3xl text-xs text-gray-400">
                          <FaClock className="w-3 h-3" />
                          Saves {item.estimatedSavingsMs}ms
                        </span>
                      )}
                      {item.estimatedSavingsKiB && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-3xl text-xs text-gray-400">
                          <FaArrowDown className="w-3 h-3" />
                          Saves {item.estimatedSavingsKiB}KiB
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
                className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-3xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <FaExclamationTriangle className="text-yellow-400 w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-white font-medium">{item.issue}</h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-3xl border ${getPriorityColor(
                          item.priority,
                        )} uppercase tracking-wider whitespace-nowrap`}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {item.estimatedSavingsKiB && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-3xl text-xs text-gray-400">
                          <FaArrowDown className="w-3 h-3" />
                          Savings: {item.estimatedSavingsKiB}KiB
                        </span>
                      )}
                      {item.count && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-3xl text-xs text-gray-400">
                          Count: {item.count}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Accessibility Details */}
        <CollapsibleSection
          title="Accessibility Details"
          isExpanded={expandedSections.accessibility}
          onToggle={() => toggleSection("accessibility")}
        >
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-3xl p-5 mb-5">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-emerald-400">
                {AUDIT_DATA.accessibility.score}
              </div>
              <div>
                <p className="text-white font-medium text-lg">Perfect Score!</p>
                <p className="text-sm text-gray-400">
                  {AUDIT_DATA.accessibility.passedAudits} audits passed •{" "}
                  {AUDIT_DATA.accessibility.manualChecksRequired} manual checks
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {Object.entries(AUDIT_DATA.accessibility.issues).map(
              ([category, issues]) => (
                <div
                  key={category}
                  className="bg-white/5 border border-white/10 rounded-3xl p-5"
                >
                  <h3 className="text-white font-medium mb-4 capitalize">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <ul className="space-y-3">
                    {issues.map((issue, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <FaInfoCircle className="text-yellow-400 flex-shrink-0 mt-1 w-4 h-4" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </CollapsibleSection>

        {/* Security & Best Practices */}
        <CollapsibleSection
          title="Security & Best Practices"
          isExpanded={expandedSections.security}
          onToggle={() => toggleSection("security")}
        >
          <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-3xl p-5 mb-5">
            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-emerald-400 w-8 h-8" />
              <div>
                <p className="text-white font-medium text-lg">
                  Score: {AUDIT_DATA.bestPractices.score}/100
                </p>
                <p className="text-sm text-gray-400">
                  All security checks passed
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {AUDIT_DATA.bestPractices.security.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <FaCheckCircle className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          {AUDIT_DATA.bestPractices.notes.length > 0 && (
            <div className="mt-5 bg-yellow-500/5 border border-yellow-500/20 rounded-3xl p-5">
              <div className="flex items-start gap-4">
                <FaInfoCircle className="text-yellow-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-yellow-400 font-medium mb-3">Notes</h4>
                  <ul className="space-y-2">
                    {AUDIT_DATA.bestPractices.notes.map((note, index) => (
                      <li key={index} className="text-sm text-gray-300">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CollapsibleSection>

        {/* SEO Analysis */}
        <CollapsibleSection
          title="SEO Analysis"
          isExpanded={expandedSections.seo}
          onToggle={() => toggleSection("seo")}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-5 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <FaSearch className="text-yellow-400 w-6 h-6" />
                <h3 className="text-white font-medium">SEO Score</h3>
              </div>
              <p className="text-4xl font-bold text-yellow-400 mb-2">
                {AUDIT_DATA.seo.score}/100
              </p>
              <p className="text-sm text-gray-400">
                {AUDIT_DATA.seo.passedAudits} audits passed
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-5 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="text-purple-400 w-6 h-6" />
                <h3 className="text-white font-medium">Structured Data</h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaCheckCircle className="text-emerald-400 w-5 h-5" />
                <p className="text-sm text-gray-300">
                  {AUDIT_DATA.seo.structuredData}
                </p>
              </div>
              <p className="text-sm text-gray-400">
                {AUDIT_DATA.seo.manualChecksRequired} manual check required
              </p>
            </div>
          </div>
        </CollapsibleSection>

        {/* Footer */}
        <footer className="pt-8 pb-4 text-center">
          <p className="text-xs text-gray-500">
            Generated by Lighthouse v
            {AUDIT_DATA.auditMeta.environment.lighthouseVersion} • Report Date:{" "}
            {formatDate(AUDIT_DATA.auditMeta.capturedAt)}
          </p>
        </footer>
      </main>
    </div>
  );
}
