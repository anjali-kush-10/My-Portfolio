import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#BF4F51] text-[#F5F5F0]">
      <Header />
      <main>
        <Hero />
        {/* White Horizontal Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-t border-white/30" />
        </div>

        <Skills />
        {/* White Horizontal Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-t border-white/30" />
        </div>

        <Projects />
        {/* White Horizontal Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-t border-white/30" />
        </div>

        <Experience />
        {/* White Horizontal Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-t border-white/30" />
        </div>

        <Contact />
      </main>
    </div>
  );
}
