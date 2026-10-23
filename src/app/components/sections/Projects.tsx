"use client";

import { useState } from "react";

interface Project {
    title: string;
    category: "Full Stack" | "Backend" | "Frontend";
    badge: string;
    description: string;
    tech: string[];
    metrics: string[];
    liveUrl: string;
    githubUrl: string;
}

const projectsData: Project[] = [
    {
        title: "VIP Formalwear - E-Commerce Platform",
        category: "Full Stack",
        badge: "Production Ready",
        description:
            "A real-time collaborative workspace with task management, live document editing, and role-based access control.",
        tech: ["Next.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL"],
        metrics: ["⚡ Sub-50ms latency", "🔒 Enterprise RBAC"],
        liveUrl: "https://dev.vipformalwear.com/",
        githubUrl: "https://github.com",
    },
    {
        title: "Crowntux - E-Commerce Platform",
        category: "Full Stack",
        badge: "Featured SaaS",
        description:
            "Scalable multi-vendor marketplace featuring instant inventory sync, Stripe payments, and live product search.",
        tech: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
        metrics: ["🛒 99.98% Uptime", "💳 Stripe Payments"],
        liveUrl: "https://github.com",
        githubUrl: "https://github.com",
    },
    {
        title: "HRMS/CRM - Organization Management",
        category: "Full Stack",
        badge: "API Architecture",
        description:
            "A real-time collaborative workspace with task management, live document editing, and role-based access control.",
        tech: ["Node.js", "Express.js", "React.js", "MongoDB"],
        metrics: ["📊 1M+ Records/min", "⏱️ Latency < 120ms"],
        liveUrl: "https://crm.walit.in/",
        githubUrl: "https://github.com",
    },
    //   {
    //     title: "DevSprint - Agile Workflow Suite",
    //     category: "Frontend",
    //     badge: "Developer Tool",
    //     description:
    //       "Modern agile dashboard featuring interactive Kanban boards, GitHub issue sync, and client-side persistence.",
    //     tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    //     metrics: ["🎨 100/100 Lighthouse", "📱 Fully Responsive"],
    //     liveUrl: "https://github.com",
    //     githubUrl: "https://github.com",
    //   },
    //   {
    //     title: "ChatSync - Real-Time AI Assistant",
    //     category: "Full Stack",
    //     badge: "AI Integration",
    //     description:
    //       "Streaming conversational AI engine featuring contextual conversation memory, vector embeddings, and live typing.",
    //     tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    //     metrics: ["⚡ Token Streaming", "🧠 RAG Knowledge"],
    //     liveUrl: "https://github.com",
    //     githubUrl: "https://github.com",
    //   },
    //   {
    //     title: "AuthSentinel - Identity Gateway",
    //     category: "Backend",
    //     badge: "Security Core",
    //     description:
    //       "Centralized authentication microservice with OAuth2/OIDC, hardware 2FA tokens, and automated rate limiting.",
    //     tech: ["Nest.js", "Express.js", "Redis", "PostgreSQL", "JWT"],
    //     metrics: ["🛡️ Zero Breach Record", "⚡ <15ms Verification"],
    //     liveUrl: "https://github.com",
    //     githubUrl: "https://github.com",
    //   },
];

const categories = ["All", "Full Stack", "Backend", "Frontend"] as const;
type CategoryType = (typeof categories)[number];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

    const filteredProjects =
        activeCategory === "All"
            ? projectsData
            : projectsData.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
            {/* Decorative ambient background glow */}
            <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/15 border border-white/20 text-[#F5F5F0] text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Featured Case Studies</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F0] mb-6">
                        Recent Projects
                    </h2>

                    <p className="text-base sm:text-lg text-[#F5F5F0]/85 leading-relaxed">
                        Real-world full-stack applications, scalable APIs, and production systems
                        crafted with a focus on code quality, performance, and clean UX.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${isActive
                                    ? "bg-[#F5F5F0] text-[#171A21] shadow-lg scale-105"
                                    : "bg-black/20 hover:bg-black/30 text-[#F5F5F0]/90 border border-white/15 hover:border-white/30"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid: 3 Columns on Large Screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.title}
                            className="group rounded-3xl bg-black/20 hover:bg-black/30 border border-white/15 hover:border-white/35 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl hover:shadow-2xl"
                        >
                            <div>
                                {/* Header Row: Badge & Category */}
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-[#F5F5F0] border border-white/20">
                                        {project.badge}
                                    </span>
                                    <span className="text-[11px] font-medium text-[#F5F5F0]/70 uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Project Title */}
                                <h3 className="text-xl font-bold text-[#F5F5F0] group-hover:text-white transition-colors mb-2.5 leading-snug">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-[#F5F5F0]/85 leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Metrics / Highlights */}
                                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                                    {project.metrics.map((metric) => (
                                        <span
                                            key={metric}
                                            className="px-2 py-0.5 rounded-md bg-black/20 border border-white/10 text-[10px] sm:text-[11px] font-medium text-[#F5F5F0]/90"
                                        >
                                            {metric}
                                        </span>
                                    ))}
                                </div>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-semibold text-[#F5F5F0] border border-white/15"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Action Buttons: Off-white CTA + Glass Source Link */}
                            <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-2">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#F5F5F0] text-[#171A21] hover:bg-white active:scale-95 shadow-md transition-all duration-200"
                                >
                                    <span>Live Demo</span>
                                    <svg
                                        className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-[#F5F5F0] border border-white/20 transition-all duration-200"
                                >
                                    <svg
                                        className="w-3.5 h-3.5 fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    <span>Code</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects on GitHub Callout */}
                <div className="mt-14 text-center">
                    <a
                        href="https://github.com/anjali-kush-10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold bg-[#F5F5F0] text-[#171A21] hover:bg-white hover:shadow-xl active:scale-95 transition-all duration-200"
                    >
                        <span>Explore More on GitHub</span>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
