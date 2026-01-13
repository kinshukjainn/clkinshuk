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
    },
    lcp: {
      value: "7.0 s",
      scoreImpact: "+2",
      label: "Largest Contentful Paint",
    },
    tbt: {
      value: "40 ms",
      scoreImpact: "+30",
      label: "Total Blocking Time",
    },
    cls: {
      value: "0",
      scoreImpact: "+25",
      label: "Cumulative Layout Shift",
    },
    speedIndex: {
      value: "4.3 s",
      scoreImpact: "+8",
      label: "Speed Index",
    },
  },
  insights: {
    performanceImprovements: [
      {
        title: "Render Blocking Requests",
        estimatedSavingsMs: 2100,
      },
      {
        title: "Document Request Latency",
        estimatedSavingsMs: 270,
      },
      {
        title: "Improve Image Delivery",
        estimatedSavingsKiB: 1083,
      },
    ],
    diagnostics: [
      {
        issue: "Reduce unused JavaScript",
        estimatedSavingsKiB: 262,
      },
      {
        issue: "Avoid long main-thread tasks",
        count: 5,
      },
      {
        issue: "Avoid non-composited animations",
        count: 5,
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

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="transform -rotate-90 w-28 h-28">
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
          <span className={`text-2xl font-bold ${getColor(score)}`}>
            {score}
          </span>
        </div>
      </div>
      <span className="text-sm text-gray-400 mt-3">{label}</span>
    </div>
  );
};

export default function SeoInsights() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-white/10">
          <h1 className="text-4xl sm:text-5xl heading-font brand-glow font-bold tracking-tight text-white mb-4">
            SEO & Performance Insights
          </h1>
          <p className="text-gray-400 text-sm">
            Lighthouse Audit Report •{" "}
            {formatDate(AUDIT_DATA.auditMeta.capturedAt)}
          </p>
        </header>

        {/* Environment Info */}
        <section className="mb-12 pb-8 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Test Environment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaMobileAlt className="text-blue-400 w-4 h-4" />
                <span className="text-xs text-gray-400 uppercase">Device</span>
              </div>
              <p className="text-white font-medium">
                {AUDIT_DATA.auditMeta.environment.device}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaBolt className="text-yellow-400 w-4 h-4" />
                <span className="text-xs text-gray-400 uppercase">Network</span>
              </div>
              <p className="text-white font-medium">
                {AUDIT_DATA.auditMeta.environment.network}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaInfoCircle className="text-purple-400 w-4 h-4" />
                <span className="text-xs text-gray-400 uppercase">Version</span>
              </div>
              <p className="text-white font-medium">
                Lighthouse {AUDIT_DATA.auditMeta.environment.lighthouseVersion}
              </p>
            </div>
          </div>
        </section>

        {/* Overall Scores */}
        <section className="mb-12 pb-8 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Overall Scores
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
        </section>

        {/* Core Web Vitals */}
        <section className="mb-12 pb-8 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Core Web Vitals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(AUDIT_DATA.coreWebVitals).map(([key, vital]) => (
              <div
                key={key}
                className="bg-white/5 border border-white/10 rounded-3xl p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs text-gray-400 uppercase mb-1">
                      {vital.label}
                    </p>
                    <p className="text-2xl font-bold text-white">
                      {vital.value}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                    <FaArrowUp className="text-emerald-400 w-3 h-3" />
                    <span className="text-emerald-400 text-sm font-medium">
                      {vital.scoreImpact}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 uppercase">
                  Score Impact
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Improvements */}
        <section className="mb-12 pb-8 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Performance Opportunities
          </h2>
          <div className="space-y-3">
            {AUDIT_DATA.insights.performanceImprovements.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <FaClock className="text-orange-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        {item.title}
                      </h3>
                      {item.estimatedSavingsMs && (
                        <p className="text-sm text-gray-400">
                          Potential savings: {item.estimatedSavingsMs}ms
                        </p>
                      )}
                      {item.estimatedSavingsKiB && (
                        <p className="text-sm text-gray-400">
                          Potential savings: {item.estimatedSavingsKiB}KiB
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnostics */}
        <section className="mb-12 pb-8 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Diagnostics
          </h2>
          <div className="space-y-3">
            {AUDIT_DATA.insights.diagnostics.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <FaExclamationTriangle className="text-yellow-400 w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium mb-2">
                      {item.issue}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      {item.estimatedSavingsKiB && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded-2xl">
                          <FaArrowDown className="w-3 h-3" />
                          Savings: {item.estimatedSavingsKiB}KiB
                        </span>
                      )}
                      {item.count && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded-2xl">
                          Count: {item.count}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-12 pb-8 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Accessibility Details
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-emerald-400 text-3xl font-bold">
                {AUDIT_DATA.accessibility.score}
              </div>
              <div>
                <p className="text-white font-medium">Perfect Score!</p>
                <p className="text-sm text-gray-400">
                  {AUDIT_DATA.accessibility.passedAudits} audits passed
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
                  <h3 className="text-white font-medium mb-3 capitalize">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <ul className="space-y-2">
                    {issues.map((issue, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </section>

        {/* Best Practices & Security */}
        <section className="mb-12 pb-8 border-b border-white/10">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            Security & Best Practices
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-4">
            <div className="flex items-center gap-4 mb-4">
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
                className="bg-white/5 border border-white/10 rounded-3xl p-4 flex items-center gap-3"
              >
                <FaCheckCircle className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          {AUDIT_DATA.bestPractices.notes.length > 0 && (
            <div className="mt-4 bg-yellow-500/5 border border-yellow-500/20 rounded-3xl p-4">
              <div className="flex items-start gap-3">
                <FaInfoCircle className="text-yellow-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-yellow-400 font-medium mb-2">Notes</h4>
                  <ul className="space-y-1">
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
        </section>

        {/* SEO */}
        <section className="mb-12">
          <h2 className="text-md uppercase tracking-widest text-blue-500 mb-6 font-semibold">
            SEO Analysis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <FaSearch className="text-blue-400 w-5 h-5" />
                <h3 className="text-white font-medium">SEO Score</h3>
              </div>
              <p className="text-3xl font-bold text-yellow-400 mb-2">
                {AUDIT_DATA.seo.score}/100
              </p>
              <p className="text-sm text-gray-400">
                {AUDIT_DATA.seo.passedAudits} audits passed
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <FaEye className="text-purple-400 w-5 h-5" />
                <h3 className="text-white font-medium">Structured Data</h3>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 w-5 h-5" />
                <p className="text-gray-300">{AUDIT_DATA.seo.structuredData}</p>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {AUDIT_DATA.seo.manualChecksRequired} manual check required
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
