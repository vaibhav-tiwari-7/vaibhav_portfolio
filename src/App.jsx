import { useState } from "react";
import { motion } from "framer-motion";
import LaunchIntro from "./components/LaunchIntro";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Leadership from "./sections/Leadership";
import Contact from "./sections/Contact";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <LaunchIntro onComplete={() => setIntroDone(true)} />}

      <div
        className={`transition-opacity duration-700 ${
          introDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <ScrollProgress />
        <Navbar />
        {/* Global Floating Bubbles */}
<div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
  {Array.from({ length: 150 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-emerald-400"
      style={{
        width: 4 + Math.random() * 8,
        height: 4 + Math.random() * 8,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0.15,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.05, 0.2, 0.05],
      }}
      transition={{
        duration: 4 + (i % 6),
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}
</div>

        <main>
          <Hero />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
