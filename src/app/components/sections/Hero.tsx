"use client";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-3 pb-12 md:pt-12 md:pb-16">
            {/* Subtle decorative glow */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* 2-Column Layout: Left Content + Right Sidebar Vertically Centered */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* Left Column: Bio & Introduction Vertically Centered */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center text-left">
                        {/* Off-White Main Heading */}
                        <h3 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F0] leading-[1.1] mb-6">
                            Hi, I&apos;m Anjali Kushwah
                        </h3>

                        {/* Bio / Description */}
                        <p className="text-lg sm:text-xl text-[#F5F5F0]/90 font-normal leading-relaxed max-w-2xl">
                            Full Stack Developer building scalable, responsive, and production-ready web applications using React.js, Next.js, Node.js, Express.js, and Nest.js, with expertise in MySQL, PostgreSQL, and MongoDB. I specialize in end-to-end development, REST API design, and efficient database management.
                        </p>
                    </div>

                    {/* Right Sidebar: Dedicated Quick Actions Panel */}
                    <aside className="lg:col-span-5 xl:col-span-4 w-full">
                        <div className="sticky top-28 rounded-3xl bg-black/15 backdrop-blur-md border border-white/20 p-6 sm:p-7 shadow-2xl space-y-4">

                            {/* Sidebar Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-white/15">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#F5F5F0]" />
                                    <h2 className="text-base font-bold text-[#F5F5F0] uppercase tracking-wider">
                                        Discover More
                                    </h2>
                                </div>
                            </div>

                            {/* Option 1: View Projects */}
                            <a
                                href="#projects"
                                className="group w-full flex items-center justify-between gap-4 p-4 rounded-2xl bg-[#F5F5F0] hover:bg-white text-[#171A21] shadow-md hover:shadow-xl active:scale-[0.98] transition-all duration-200"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-11 h-11 rounded-xl bg-[#171A21]/10 flex items-center justify-center text-[#171A21] group-hover:scale-110 transition-transform">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-base font-bold text-[#171A21] leading-tight">
                                            View Projects
                                        </span>
                                        <span className="block text-xs text-[#4A4E58] font-medium">
                                            Explore case studies &amp; code
                                        </span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#171A21]/5 flex items-center justify-center text-[#171A21] group-hover:translate-x-1 group-hover:bg-[#171A21] group-hover:text-white transition-all">
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
                                </div>
                            </a>

                            {/* Option 2: Get in Touch */}
                            <a
                                href="#contact"
                                className="group w-full flex items-center justify-between gap-4 p-4 rounded-2xl bg-[#F5F5F0] hover:bg-white text-[#2B2F38] shadow-md hover:shadow-xl active:scale-[0.98] transition-all duration-200"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-11 h-11 rounded-xl bg-[#2B2F38]/10 flex items-center justify-center text-[#2B2F38] group-hover:scale-110 transition-transform">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-base font-bold text-[#171A21] leading-tight">
                                            Get in Touch
                                        </span>
                                        <span className="block text-xs text-[#4A4E58] font-medium">
                                            Discuss full-time &amp; contracts
                                        </span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#2B2F38]/5 flex items-center justify-center text-[#2B2F38] group-hover:translate-x-1 group-hover:bg-[#171A21] group-hover:text-white transition-all">
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
                                </div>
                            </a>

                            {/* Option 3: Download CV */}
                            <a
                                href="#resume"
                                className="group w-full flex items-center justify-between gap-4 p-4 rounded-2xl bg-[#F5F5F0] hover:bg-white text-[#3D4350] shadow-md hover:shadow-xl active:scale-[0.98] transition-all duration-200"
                            >
                                <div className="flex items-center gap-3.5">
                                    <div className="w-11 h-11 rounded-xl bg-[#3D4350]/10 flex items-center justify-center text-[#3D4350] group-hover:scale-110 transition-transform">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-base font-bold text-[#171A21] leading-tight">
                                            Download CV
                                        </span>
                                        <span className="block text-xs text-[#4A4E58] font-medium">
                                            PDF resume format
                                        </span>
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#3D4350]/5 flex items-center justify-center text-[#3D4350] group-hover:translate-y-0.5 group-hover:bg-[#171A21] group-hover:text-white transition-all">
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
                                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                                        />
                                    </svg>
                                </div>
                            </a>

                            {/* Sidebar Footer Info */}
                            {/* <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#F5F5F0]/75">
                                <span>Based in India</span>
                                <span className="inline-flex items-center gap-1.5 text-emerald-300 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Active Now
                                </span>
                            </div> */}


                            {/* Sidebar Footer Info */}
                            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                                <span className="inline-flex items-center gap-2 text-[#F5F5F0] font-medium">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20.25 14.25v4.5A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25v-4.5M16.5 7.5L12 3m0 0L7.5 7.5M12 3v12"
                                        />
                                    </svg>
                                    Open to Opportunities
                                </span>

                                <span className="inline-flex items-center gap-1.5 text-[#D6A680] font-medium">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <rect
                                            x="3"
                                            y="4"
                                            width="18"
                                            height="13"
                                            rx="2"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 21h8m-4-4v4"
                                        />
                                    </svg>
                                    Remote & On-Site
                                </span>
                            </div>


                        </div>
                    </aside>

                </div>
            </div>
        </section>
    );
};

export default Hero;
