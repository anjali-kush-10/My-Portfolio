"use client";

interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  tech: string[];
}

const experiences: WorkExperience[] = [
  {
    role: "Full Stack Developer (MERN)",
    company: "SMT Labs",
    location: "Indore, M.P.",
    period: "Sep 2024 - Present",
    type: "Full-Time",
    description: [
      "Develop and maintain scalable web applications for real-world client projects using React.js, Next.js, Node.js, and NestJS.",
      "Design, develop, and integrate RESTful APIs, implementing authentication, authorization, and business logic to meet client requirements.",
      "Work with MongoDB, PostgreSQL, and MySQL to design database schemas, manage application data, and optimize queries.",
      "Contribute to end-to-end application development, from building responsive user interfaces to implementing backend services and database integrations.",
      "Collaborate with cross-functional teams to deliver features, troubleshoot production issues, resolve bugs, and improve application performance.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Git",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "SMT Labs",
    location: "Indore, M.P.",
    period: "May 2024 - Sep 2024",
    type: "Internship",
    description: [
      "Worked on real-world client projects, gaining practical experience in developing and maintaining production-oriented web applications.",
      "Contributed to frontend development, backend API integration, and database operations while working with established project requirements.",
      "Gained insights into how web applications function in real-world environments, including business workflows, data flow, client requirements, and application architecture.",
      "Collaborated with developers to troubleshoot issues, implement features, test functionality, and improve application reliability.",
      "Developed a stronger understanding of professional software development practices, teamwork, version control, and project delivery, leading to a full-time placement offer.",
    ],
    tech: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git",
      "GitLab",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Ypsilon IT Solutions",
    location: "Indore, M.P.",
    period: "Jul 2023 - May 2024",
    type: "Internship",
    description: [
      "Built a strong foundation in full-stack web development, learning core concepts of JavaScript, React.js, Node.js, Express.js, and database management.",
      "Developed interactive and reusable UI components using React.js and JavaScript (ES6+), focusing on component-based architecture and responsive design.",
      "Learned backend development fundamentals, including REST API creation, request handling, server-side logic, and frontend-backend integration.",
      "Practiced database design, CRUD operations, and SQL queries using MySQL to manage and retrieve application data.",
      "Gained practical experience with debugging, Git, GitHub, and collaborative development workflows while strengthening problem-solving skills.",
    ],
    tech: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "REST APIs",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/15 border border-white/20 text-[#F5F5F0] text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Career Journey &amp; Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F0] mb-6">
            Work Experience
          </h2>

          <p className="text-base sm:text-lg text-[#F5F5F0]/85 leading-relaxed">
            A chronological timeline of impactful engineering roles, technical leadership,
            and successful product deliveries.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-white/40 via-white/20 to-transparent pointer-events-none" />

          {/* Experience Cards */}
          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={exp.role + exp.company}
                className="relative flex flex-col md:flex-row items-start gap-6 group"
              >
                {/* Timeline Dot on Desktop */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-black/30 border border-white/20 items-center justify-center text-[#F5F5F0] font-bold text-sm shadow-xl group-hover:scale-105 group-hover:border-white/40 group-hover:bg-black/40 transition-all z-10">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#F5F5F0] shadow-[0_0_12px_rgba(245,245,240,0.8)]" />
                </div>

                {/* Main Card Content */}
                <div className="w-full rounded-3xl bg-black/20 hover:bg-black/30 border border-white/15 hover:border-white/35 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                  {/* Top Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
                    <div>
                      <h3 className="text-2xl font-bold text-[#F5F5F0] group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-base font-semibold text-[#F5F5F0]/90">
                          {exp.company}
                        </span>
                        <span className="text-xs text-[#F5F5F0]/50">•</span>
                        <span className="text-xs text-[#F5F5F0]/75">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-[#F5F5F0] border border-white/20 shadow-sm">
                        {exp.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/20 text-[#F5F5F0]/80 border border-white/10">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-[#F5F5F0]/85 leading-relaxed">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F5F5F0] mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-[#F5F5F0]/60 mr-1 uppercase tracking-wider">
                      Tech:
                    </span>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/10 text-xs font-medium text-[#F5F5F0] border border-white/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Resume Download & Contact Callout */}
          {/* <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-black/25 border border-white/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-xl font-bold text-[#F5F5F0]">
                Looking for a comprehensive overview?
              </h4>
              <p className="text-sm text-[#F5F5F0]/80 mt-1">
                Download my complete resume with project histories, references, and education.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#F5F5F0] text-[#171A21] hover:bg-white active:scale-95 shadow-md transition-all duration-200"
              >
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-[#F5F5F0] border border-white/20 transition-all duration-200"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
