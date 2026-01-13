"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowBadgeUpFilled } from "react-icons/tb";

const RECOMMENDED_ROUTES = [
  {
    route: "/gears",
    label: "DevSetup",
    description: "Explore my tools and technologies and how I use them",
  },
  {
    route: "/blogs",
    label: "Technical Blogs",
    description: "Read my latest technical articles and blogs and thoughts",
  },
  {
    route: "/latest",
    label: "Latest Workings",
    description: "Check out my newest projects and current learnings",
  },
];

export function RecommendedRoutes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % RECOMMENDED_ROUTES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = RECOMMENDED_ROUTES[currentIndex];

  return (
    <div className="mb-8 bg-gradient-to-t from-transparent to-white/5 shadow-lg shadow-white/10 rounded-4xl p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="mb-4 flex items-center gap-2 text-lg font-bold heading-font text-orange-500 ">
            <div className="text-[#ff9100] border-2 border-[#ff9100]  p-2 bg-white/10 rounded-full flex items-center justify-center">
              <TbArrowBadgeUpFilled className=" h-6 w-6" />
            </div>
            <span>Suggested Pages</span>
          </p>

          <h3 className="text-lg font-semibold text-white ">{current.label}</h3>
          <p className="text-md text-gray-300 mt-1">{current.description}</p>
        </div>
        <button
          onClick={() => navigate(current.route)}
          className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/30 rounded-full cursor-pointer font-medium text-sm transition-colors flex-shrink-0"
        >
          {current.label}
        </button>
      </div>
      <div className="flex gap-1.5 mt-3">
        {RECOMMENDED_ROUTES.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all ${
              idx === currentIndex ? "bg-emerald-500 w-6" : "bg-white/10 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
