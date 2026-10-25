"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  showLabels = false,
}) => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering a stable placeholder before mount
  if (!mounted) {
    return (
      <div
        className={`h-9 w-[72px] rounded-full bg-black/20 border border-white/15 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        onClick={toggleTheme}
        title={
          isDark
            ? "Switch to Warm Crimson Theme"
            : "Switch to Royal Navy Dark Theme"
        }
        aria-label={
          isDark
            ? "Currently in Royal Navy Dark mode. Click to switch to Warm Crimson mode"
            : "Currently in Warm Crimson mode. Click to switch to Royal Navy Dark mode"
        }
        className="relative inline-flex items-center h-9 w-[72px] rounded-full p-1 bg-black/25 hover:bg-black/35 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95 group cursor-pointer shadow-inner select-none"
      >
        {/* Animated Sliding Pill Capsule */}
        <span
          className={`absolute top-1 bottom-1 w-7 rounded-full transition-all duration-300 ease-out shadow-md flex items-center justify-center ${
            isDark
              ? "left-[37px] bg-[#001B4E] border border-white/20 shadow-blue-950/50"
              : "left-1 bg-[#F5F5F0] border border-black/10 shadow-black/20"
          }`}
        />

        {/* Sun Icon (Left) */}
        <span
          onClick={(e) => {
            e.stopPropagation();
            setTheme("crimson");
          }}
          className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
            !isDark
              ? "text-amber-500 scale-105"
              : "text-white/40 hover:text-white/80"
          }`}
          title="Warm Crimson"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            {/* Sun Center */}
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity={!isDark ? "0.2" : "0"} />
            {/* Sun Rays */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25v2.25m0 15v2.25M4.929 4.929l1.591 1.591m10.96 10.96l1.591 1.591M2.25 12h2.25m15 0h2.25M4.929 19.071l1.591-1.591m10.96-10.96l1.591-1.591"
            />
          </svg>
        </span>

        {/* Moon Icon (Right) */}
        <span
          onClick={(e) => {
            e.stopPropagation();
            setTheme("dark");
          }}
          className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
            isDark
              ? "text-indigo-200 scale-105 drop-shadow-[0_0_6px_rgba(199,210,254,0.5)]"
              : "text-white/40 hover:text-white/80"
          }`}
          title="Royal Navy Dark"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
              fillOpacity={isDark ? "0.25" : "0"}
              d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </span>
      </button>

      {showLabels && (
        <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F0]/80">
          {isDark ? "Dark" : "Crimson"}
        </span>
      )}
    </div>
  );
};

export default ThemeToggle;
