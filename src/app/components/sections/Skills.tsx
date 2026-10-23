"use client";

import { useState } from "react";

interface Skill {
    name: string;
    category: "Frontend" | "Backend" | "Database" | "DevOps & Tools";
    level: "Advanced" | "Proficient" | "Expert";
    icon: (className?: string) => React.JSX.Element;
    description: string;
}

// Crisp, accurate vector SVGs for official tech logos
const icons = {
    react: (className = "w-8 h-8") => (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    ),
    nextjs: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 180 180" fill="none">
            <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
                <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#next-mask)">
                <circle cx="90" cy="90" r="90" fill="#000000" stroke="#F5F5F0" strokeWidth="6" />
                <path
                    d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                    fill="url(#next-grad-1)"
                />
                <rect x="115" y="54" width="12" height="72" fill="url(#next-grad-2)" />
            </g>
            <defs>
                <linearGradient id="next-grad-1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="next-grad-2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    ),
    typescript: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path
                d="M11.666 12.355H9.664v7.057H7.72V12.355H5.726V10.74h5.94v1.615zm2.464 7.185c-1.378 0-2.32-.71-2.434-1.854l1.644-.343c.105.57.545.908 1.157.908.643 0 1.055-.333 1.055-.8 0-.48-.363-.715-1.282-1.077-1.428-.567-2.094-1.264-2.094-2.38 0-1.342 1.076-2.312 2.652-2.312 1.487 0 2.378.784 2.502 1.882l-1.664.304c-.089-.52-.45-.804-.979-.804-.559 0-.93.284-.93.686 0 .421.343.647 1.253.999 1.46.568 2.124 1.245 2.124 2.45 0 1.391-1.076 2.34-2.648 2.34z"
                fill="#FFFFFF"
            />
        </svg>
    ),
    javascript: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path
                d="M6 18.5l1.6-.98c.32.58.62 1.06 1.28 1.06.66 0 1.08-.26 1.08-1.26v-6.32h1.92v6.34c0 1.96-1.14 2.84-2.92 2.84-1.58 0-2.48-.82-2.96-1.68zm8.12-1.04l1.6-.94c.42.72.98 1.26 1.94 1.26.82 0 1.34-.4 1.34-1 0-.66-.54-.92-1.78-1.46-1.42-.6-2.34-1.38-2.34-2.9 0-1.62 1.24-2.86 3.16-2.86 1.38 0 2.38.5 3.02 1.66l-1.54.98c-.34-.6-.72-.86-1.48-.86-.7 0-1.16.4-1.16.92 0 .62.46.88 1.64 1.38 1.62.7 2.5 1.48 2.5 3.04 0 1.84-1.44 2.92-3.46 2.92-1.94 0-3.14-.94-3.44-2.14z"
                fill="#000000"
            />
        </svg>
    ),
    nodejs: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
                d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
                fill="#339933"
            />
            <path
                d="M12 4.2L5.2 8.1v7.8L12 19.8l6.8-3.9V8.1L12 4.2z"
                fill="#215732"
            />
            <path
                d="M12 7.5c1.9 0 3.3.9 3.3 2.5v4c0 1.6-1.4 2.5-3.3 2.5s-3.3-.9-3.3-2.5v-4c0-1.6 1.4-2.5 3.3-2.5zm0 1.5c-1 0-1.6.5-1.6 1.2v3.6c0 .7.6 1.2 1.6 1.2s1.6-.5 1.6-1.2v-3.6c0-.7-.6-1.2-1.6-1.2z"
                fill="#FFFFFF"
            />
        </svg>
    ),
    express: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#181A1F" stroke="#F5F5F0" strokeWidth="1" />
            <text
                x="50%"
                y="58%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#F5F5F0"
                fontFamily="sans-serif"
                fontSize="10"
                fontWeight="bold"
            >
                ex
            </text>
        </svg>
    ),
    nestjs: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
                d="M21.5 5.5c-.8-1.5-2.2-2.7-3.8-3.3-1.6-.7-3.4-.6-4.9.2l-6.6 3.6c-.8.4-1.5 1-2 1.7-.5.7-.8 1.6-.8 2.5v7.2c0 .9.3 1.8.8 2.5.5.7 1.2 1.3 2 1.7l6.6 3.6c.7.4 1.5.6 2.4.6.9 0 1.7-.2 2.5-.6 1.6-.9 2.7-2.3 3.2-4 .5-1.7.3-3.5-.6-5l-4.5-8.2c-.3-.5-.7-.9-1.2-1.2-.5-.3-1.1-.4-1.7-.3-.6.1-1.1.4-1.5.8-.4.4-.7 1-.7 1.6v8.4"
                stroke="#E0234E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="2" fill="#E0234E" />
        </svg>
    ),
    postgresql: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-2.8 0-4.5-1.5-4.5-3.5 0-1.2.6-2.2 1.8-2.8-.5-.8-.8-1.7-.8-2.7 0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.2-.5 2.3-1.4 3 .8.6 1.4 1.5 1.4 2.5 0 2-2.2 3.5-5 3.5z"
                fill="#336791"
            />
            <path
                d="M14 9.5c0-.8-.7-1.5-1.5-1.5S11 8.7 11 9.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5z"
                fill="#FFFFFF"
            />
        </svg>
    ),
    mongodb: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
                d="M12 2.5c-.2 0-.4.1-.5.3-1.4 2.2-4.5 7.6-4.5 11.2 0 3.7 2.6 6.8 6 7.5.3.1.6.1.9 0 3.4-.7 6-3.8 6-7.5 0-3.6-3.1-9-4.5-11.2-.1-.2-.3-.3-.5-.3h-1.4zm.5 1.8c.8 1.4 4 6.7 4 9.7 0 2.8-2 5.2-4.5 5.9V4.3z"
                fill="#47A248"
            />
        </svg>
    ),
    mysql: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="5" fill="#00758F" />
            <path
                d="M4.5 16.5c2.5-3 5.5-5 9-5 2 0 3.5.5 4.5 1.5-1-2.5-3.5-4.5-7-4.5-3.5 0-6 2-7.5 5.5l1 2.5z"
                fill="#F29111"
            />
            <circle cx="14.5" cy="11.5" r="1.5" fill="#FFFFFF" />
            <path
                d="M6 18c3-1 7-1 10 1"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    ),
    tailwindcss: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
                d="M12 6c-3.6 0-5.4 1.8-5.4 5.4 0 2.2 1.1 3.4 2.4 4.1.9.5 1.6.9 1.6 2.3 0 1.2-.8 2.2-2.2 2.2-1.5 0-2.3-.9-2.3-2H4c0 2.4 1.8 4 4.4 4 2.6 0 4.4-1.6 4.4-4.2 0-2.4-1.2-3.4-2.5-4.2-.8-.5-1.5-.9-1.5-2.2 0-1.8 1.4-3.2 3.2-3.2 1.5 0 2.6.9 2.8 2.1h2.1C16.6 7.8 14.6 6 12 6zm5.8 4c-1.5 0-2.6.9-2.8 2.1h2.1c.1-.5.5-.8 1-.8.7 0 1.2.5 1.2 1.2 0 .5-.3.8-.9 1.2-.9.5-2.2 1.3-2.2 3.1 0 2.2 1.6 3.4 3.6 3.4 2.2 0 3.6-1.5 3.6-3.6 0-2.4-1.4-3.2-2.4-3.8-.8-.5-1.3-.8-1.3-1.6 0-.8.6-1.2 1.3-1.2.6 0 1 .3 1.1.8h2.1c-.2-1.6-1.6-2.6-3.2-2.6z"
                fill="#06B6D4"
            />
        </svg>
    ),
    // docker: (className = "w-8 h-8") => (
    //     <svg className={className} viewBox="0 0 24 24" fill="none">
    //         <path
    //             d="M21.9 10.5c-.3-.2-1.3-.7-2.7-.2-.2-.8-.7-1.4-1.4-1.8l-.6-.3-.3.6c-.4.8-.4 1.7-.1 2.5-.7.4-1.7.5-2.8.5H2.2c-.3 1.4-.2 3.8 1.4 5.7 1.5 1.8 3.8 2.7 6.9 2.7 5.7 0 9.8-3.2 11.2-8.3.8-.1 1.6-.5 2.1-1.1l.4-.5-.3-.1zM7.5 7.5h2.2v2.2H7.5V7.5zm-3 0h2.2v2.2H4.5V7.5zm6 0h2.2v2.2h-2.2V7.5zm3 0h2.2v2.2h-2.2V7.5zm-9 3h2.2v2.2H4.5v-2.2zm3 0h2.2v2.2H7.5v-2.2zm3 0h2.2v2.2h-2.2v-2.2zm3 0h2.2v2.2h-2.2v-2.2z"
    //             fill="#2496ED"
    //         />
    //     </svg>
    // ),
    git: (className = "w-8 h-8") => (
        <svg className={className} viewBox="0 0 24 24" fill="none">
            <path
                d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.8 4.6l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.7 1.2.5 1.9l2.6 2.6c.7-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.1.4.3.5.5.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.7-.7-.7-1.9 0-2.7.2-.2.4-.4.6-.5V8.9c-.2-.1-.4-.3-.6-.5-.6-.6-.7-1.4-.4-2.1L7.9 3.7 2.4 9.2c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.5c.6-.6.6-1.6 0-2.2"
                fill="#F05032"
            />
        </svg>
    ),
    //   redis: (className = "w-8 h-8") => (
    //     <svg className={className} viewBox="0 0 24 24" fill="none">
    //       <path
    //         d="M21.5 8.7L12.7 3.6c-.4-.2-1-.2-1.4 0L2.5 8.7c-.5.3-.5.9 0 1.2l8.8 5.1c.4.2 1 .2 1.4 0l8.8-5.1c.5-.3.5-.9 0-1.2z"
    //         fill="#DC382D"
    //       />
    //       <path
    //         d="M2.5 13.5l8.8 5.1c.4.2 1 .2 1.4 0l8.8-5.1c.5-.3.5-.9 0-1.2l-1.3-.8-7.8 4.5c-.3.2-.8.2-1.1 0L3.5 11.5l-1 0.8c-.5.3-.5.9 0 1.2z"
    //         fill="#A3241C"
    //       />
    //       <path
    //         d="M2.5 17.5l8.8 5.1c.4.2 1 .2 1.4 0l8.8-5.1c.5-.3.5-.9 0-1.2l-1.3-.8-7.8 4.5c-.3.2-.8.2-1.1 0L3.5 15.5l-1 0.8c-.5.3-.5.9 0 1.2z"
    //         fill="#7A1B15"
    //       />
    //     </svg>
    //   ),
};

const skillsData: Skill[] = [
    // Frontend
    {
        name: "React.js",
        category: "Frontend",
        level: "Expert",
        icon: icons.react,
        description: "Component-driven architecture, custom hooks, and state management",
    },
    {
        name: "Next.js",
        category: "Frontend",
        level: "Expert",
        icon: icons.nextjs,
        description: "App Router, SSR, SSG, Server Actions, and performance optimization",
    },
    {
        name: "TypeScript",
        category: "Frontend",
        level: "Advanced",
        icon: icons.typescript,
        description: "Strict static typing, complex interfaces, and generics",
    },
    {
        name: "JavaScript (ES6+)",
        category: "Frontend",
        level: "Expert",
        icon: icons.javascript,
        description: "Modern asynchronous workflows, closures, and DOM optimization",
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        level: "Expert",
        icon: icons.tailwindcss,
        description: "Responsive layouts, utility tokens, and modern micro-animations",
    },

    // Backend
    {
        name: "Node.js",
        category: "Backend",
        level: "Expert",
        icon: icons.nodejs,
        description: "Event-driven runtime, streams, worker threads, and microservices",
    },
    {
        name: "Express.js",
        category: "Backend",
        level: "Expert",
        icon: icons.express,
        description: "Lightweight REST API routers, auth middleware, and API design",
    },
    {
        name: "Nest.js",
        category: "Backend",
        level: "Advanced",
        icon: icons.nestjs,
        description: "Modular enterprise architecture, dependency injection, and decorators",
    },

    // Database
    {
        name: "PostgreSQL",
        category: "Database",
        level: "Advanced",
        icon: icons.postgresql,
        description: "Complex joins, indexing, query analysis, and schema migrations",
    },
    {
        name: "MongoDB",
        category: "Database",
        level: "Advanced",
        icon: icons.mongodb,
        description: "Document models, aggregation pipelines, and sharding strategies",
    },
    {
        name: "MySQL",
        category: "Database",
        level: "Proficient",
        icon: icons.mysql,
        description: "Relational database modeling, transactions, and foreign keys",
    },
    // {
    //     name: "Redis",
    //     category: "Database",
    //     level: "Proficient",
    //     icon: icons.redis,
    //     description: "In-memory caching, pub/sub queues, and session storage",
    // },

    // DevOps & Tools
    // {
    //     name: "Docker",
    //     category: "DevOps & Tools",
    //     level: "Proficient",
    //     icon: icons.docker,
    //     description: "Containerization, multi-stage builds, and Docker Compose environments",
    // },
    {
        name: "Git & GitHub",
        category: "DevOps & Tools",
        level: "Expert",
        icon: icons.git,
        description: "Version control, branching strategies, and CI/CD pipelines",
    },
];

const categories = ["All", "Frontend", "Backend", "Database", "DevOps & Tools"] as const;
type CategoryType = (typeof categories)[number];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

    const filteredSkills =
        activeCategory === "All"
            ? skillsData
            : skillsData.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
            {/* Decorative ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/15 border border-white/20 text-[#F5F5F0] text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Tech Stack &amp; Expertise</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F0] mb-6">
                        Technologies I Work With
                    </h2>

                    <p className="text-base sm:text-lg text-[#F5F5F0]/85 leading-relaxed">
                        A production-tested stack of modern frameworks, robust server runtimes,
                        and reliable database engines tailored for high performance and scalability.
                    </p>
                </div>

                {/* Category Filters (Off-white buttons with dark text when active) */}
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

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group relative p-6 rounded-2xl bg-black/20 hover:bg-black/30 border border-white/15 hover:border-white/35 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1.5 shadow-md hover:shadow-2xl flex flex-col justify-between"
                        >
                            <div>
                                {/* Top Row: Icon + Level Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 rounded-xl bg-white/10 border border-white/20 group-hover:scale-110 group-hover:bg-white/15 transition-transform duration-300">
                                        {skill.icon("w-8 h-8")}
                                    </div>

                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-[#F5F5F0] border border-white/20">
                                        {skill.level}
                                    </span>
                                </div>

                                {/* Skill Name */}
                                <h3 className="text-xl font-bold text-[#F5F5F0] group-hover:text-white mb-1">
                                    {skill.name}
                                </h3>

                                {/* Category Tag */}
                                <span className="inline-block text-xs font-medium text-[#F5F5F0]/70 mb-3">
                                    {skill.category}
                                </span>

                                {/* Description */}
                                <p className="text-xs text-[#F5F5F0]/80 leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>

                            {/* Bottom Subtle Indicator */}
                            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#F5F5F0]/60">
                                <span>Production Ready</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 group-hover:bg-emerald-300 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Highlights Row */}
                <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-black/20 border border-white/20 backdrop-blur-md grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] mb-1">
                            100%
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-[#F5F5F0]/80">
                            Modern TypeScript &amp; Next.js Standards
                        </div>
                    </div>

                    <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] mb-1">
                            Full-Stack
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-[#F5F5F0]/80">
                            End-to-End Architecture &amp; Database Design
                        </div>
                    </div>

                    <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] mb-1">
                            Scalable
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-[#F5F5F0]/80">
                            Clean APIs, Microservices &amp; Optimized Queries
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
