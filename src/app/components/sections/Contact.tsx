"use client";

import { useState } from "react";

export const Contact = () => {
    const [copiedKey, setCopiedKey] = useState<string | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const contactInfo = [
        {
            key: "email",
            label: "Email Address",
            value: "anjalikushwah597@gmail.com",
            display: "anjalikushwah597@gmail.com",
            href: "mailto:anjalikushwah597@gmail.com",
            actionText: "Send Email",
            isCopyable: true,
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                </svg>
            ),
        },
        {
            key: "phone",
            label: "Contact Number",
            value: "+91 7617295294",
            display: "+91 7617295294",
            href: "tel:+917617295294",
            actionText: "Call Now",
            isCopyable: true,
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                </svg>
            ),
        },
        {
            key: "github",
            label: "GitHub ID",
            value: "github.com/anjali-kush-10",
            display: "@anjali-kush-10",
            href: "https://github.com/anjali-kush-10",
            actionText: "View Profile",
            isCopyable: false,
            icon: (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
        },
        {
            key: "linkedin",
            label: "LinkedIn ID",
            value: "linkedin.com/in/john-doe",
            display: "https://www.linkedin.com/in/anjali-kushwah-a585182ba/",
            href: "https://www.linkedin.com/in/anjali-kushwah-a585182ba/",
            actionText: "Connect",
            isCopyable: false,
            icon: (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
    ];

    const handleCopy = (text: string, key: string) => {
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 4000);
    };

    return (
        <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
            {/* Decorative ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/15 border border-white/20 text-[#F5F5F0] text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Let&apos;s Connect</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F0] mb-6">
                        Get In Touch
                    </h2>

                    <p className="text-base sm:text-lg text-[#F5F5F0]/85 leading-relaxed">
                        Have a project in mind, a freelance inquiry, or an engineering role you would like to discuss?
                        Reach out through any channel below or drop a direct message.
                    </p>
                </div>

                {/* 2-Column Layout: Left Contact Cards + Right Message Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                    {/* Left Column: 4 Contact Cards & Availability info */}
                    <div className="lg:col-span-5 space-y-4">
                        {contactInfo.map((item) => (
                            <div
                                key={item.key}
                                className="group p-5 rounded-2xl bg-black/20 hover:bg-black/30 border border-white/15 hover:border-white/35 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center justify-between gap-4"
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F5F5F0] flex-shrink-0 group-hover:scale-105 group-hover:bg-white/15 transition-all">
                                        {item.icon}
                                    </div>

                                    <div className="min-w-0">
                                        <span className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F0]/70">
                                            {item.label}
                                        </span>
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="block text-sm sm:text-base font-bold text-[#F5F5F0] hover:text-white truncate transition-colors"
                                        >
                                            {item.display}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 flex-shrink-0">
                                    {item.isCopyable && (
                                        <button
                                            type="button"
                                            onClick={() => handleCopy(item.value, item.key)}
                                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-[#F5F5F0] border border-white/20 transition-all cursor-pointer"
                                            title="Copy to clipboard"
                                        >
                                            {copiedKey === item.key ? "Copied!" : "Copy"}
                                        </button>
                                    )}

                                    <a
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#F5F5F0] text-[#171A21] hover:bg-white transition-all shadow-sm active:scale-95 flex items-center gap-1"
                                    >
                                        <span>{item.actionText}</span>
                                        <span className="text-[10px]">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        ))}

                        {/* Availability Status Card */}
                        <div className="p-5 rounded-2xl bg-black/25 border border-white/15 backdrop-blur-md flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                                </span>
                                <div>
                                    <span className="block text-xs font-bold text-[#F5F5F0] uppercase tracking-wider">
                                        Current Status
                                    </span>
                                    <span className="block text-xs text-[#F5F5F0]/75">
                                        Available for full-time roles &amp; select contracts
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Direct Message Form */}
                    <div className="lg:col-span-7 rounded-3xl bg-black/20 border border-white/15 backdrop-blur-md p-6 sm:p-8 shadow-xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] mb-2">
                            Send a Direct Message
                        </h3>
                        <p className="text-xs sm:text-sm text-[#F5F5F0]/80 mb-6">
                            Fill out this quick form and I will get back to you within 24 hours.
                        </p>

                        {formSubmitted ? (
                            <div className="p-6 rounded-2xl bg-white/15 border border-white/30 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-[#F5F5F0] mb-1">
                                    Message Sent Successfully!
                                </h4>
                                <p className="text-xs text-[#F5F5F0]/80">
                                    Thank you for reaching out. I will respond to your email shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#F5F5F0]/80 mb-1.5 uppercase tracking-wider">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Jane Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/20 text-[#F5F5F0] placeholder-white/40 focus:outline-none focus:border-[#F5F5F0] focus:ring-1 focus:ring-[#F5F5F0] text-sm transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-[#F5F5F0]/80 mb-1.5 uppercase tracking-wider">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="jane@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/20 text-[#F5F5F0] placeholder-white/40 focus:outline-none focus:border-[#F5F5F0] focus:ring-1 focus:ring-[#F5F5F0] text-sm transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#F5F5F0]/80 mb-1.5 uppercase tracking-wider">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Project Inquiry / Job Opportunity"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/20 text-[#F5F5F0] placeholder-white/40 focus:outline-none focus:border-[#F5F5F0] focus:ring-1 focus:ring-[#F5F5F0] text-sm transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-[#F5F5F0]/80 mb-1.5 uppercase tracking-wider">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        placeholder="Tell me about your project, timeline, or requirements..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/20 text-[#F5F5F0] placeholder-white/40 focus:outline-none focus:border-[#F5F5F0] focus:ring-1 focus:ring-[#F5F5F0] text-sm transition-all resize-none"
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-bold bg-[#F5F5F0] text-[#171A21] hover:bg-white active:scale-95 shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                                    >
                                        <span>Send Message</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
