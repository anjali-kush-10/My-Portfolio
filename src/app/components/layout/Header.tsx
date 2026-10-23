"use client";

import { useState, useEffect } from "react";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("about");

    // Track scroll state for glassmorphism styling and active section detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Section spy to highlight current menu item
            const sections = navItems.map((item) => item.href.replace("#", ""));
            const scrollPosition = window.scrollY + 120;

            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            setActiveSection(targetId);
            window.history.pushState(null, "", href);
        } else {
            window.location.hash = href;
        }
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-[#BF4F51]/95 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/15 py-3"
                : "bg-[#BF4F51] border-b border-white/15 py-4 md:py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo / Brand */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            setActiveSection("");
                        }}
                        className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F0] rounded-lg"
                    >
                        {/* Monogram Badge */}
                        <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-[#F5F5F0] font-bold text-lg tracking-wider shadow-inner group-hover:bg-white/25 group-hover:border-white/40 transition-all duration-300">
                            J
                        </div>

                        {/* Brand Title & Status Tag */}
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tight text-[#F5F5F0] group-hover:text-white transition-colors">
                                John<span className="text-white/60">...</span>
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav
                        aria-label="Main Navigation"
                        className="hidden md:flex items-center gap-1 bg-black/20 p-1.5 rounded-full border border-white/15 backdrop-blur-sm"
                    >
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace("#", "");
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 select-none ${isActive
                                        ? "text-[#171A21] bg-[#F5F5F0] font-semibold shadow-sm"
                                        : "text-[#F5F5F0]/85 hover:text-white hover:bg-white/15"
                                        }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Desktop Right Action: Off-White Button with Dark Text */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#contact"
                            onClick={(e) => handleLinkClick(e, "#contact")}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F5F5F0] text-[#171A21] hover:bg-white hover:text-black hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] active:scale-95 transition-all duration-200"
                        >
                            <span>Let&apos;s Talk</span>
                            <svg
                                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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

                    {/* Mobile Menu Hamburger Button */}
                    <div className="flex md:hidden items-center">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2.5 rounded-xl bg-white/15 text-[#F5F5F0] border border-white/25 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-[#F5F5F0]/60 transition-colors"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
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
                                        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/20 bg-[#A93E40]/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
                    <nav
                        aria-label="Mobile Navigation"
                        className="flex flex-col gap-1.5 pt-2"
                    >
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace("#", "");
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                                        ? "bg-[#F5F5F0] text-[#171A21] font-semibold"
                                        : "text-[#F5F5F0]/90 hover:text-white hover:bg-white/15"
                                        }`}
                                >
                                    <span>{item.label}</span>
                                    <span className="text-xs opacity-60">&rarr;</span>
                                </a>
                            );
                        })}

                        <div className="pt-3 mt-2 border-t border-white/15">
                            <a
                                href="#contact"
                                onClick={(e) => handleLinkClick(e, "#contact")}
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F5F5F0] text-[#171A21] font-bold text-center hover:bg-white active:scale-98 transition-all shadow-md"
                            >
                                <span>Get in Touch</span>
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
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;