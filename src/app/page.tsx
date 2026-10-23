import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#BF4F51] text-[#F5F5F0]">
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
    </div>
  );
}
