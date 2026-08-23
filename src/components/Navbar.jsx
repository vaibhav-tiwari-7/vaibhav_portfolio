import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState(navLinks[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : ""
        } sm:px-6`}
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
      >
        <motion.button
  onClick={() => scrollTo("hero")}
  className="relative font-serif text-2xl italic tracking-wide text-white"
  whileHover={{ scale: 1.05 }}
>
  VT
  <motion.span
    className="absolute -bottom-1 left-0 h-[2px] bg-amber"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ delay: 0.5, duration: 0.6 }}
  />
</motion.button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="relative px-3 py-2 text-sm text-ink-dim transition-colors duration-300 hover:text-ink"
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-amber"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-amber px-4 py-2 text-sm font-medium text-void transition-colors duration-300 hover:bg-amber-soft sm:inline-flex"
          >
            Resume
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-xl px-4 py-3 text-left text-sm transition-colors duration-300 ${
                active === link.id ? "bg-amber/10 text-amber-soft" : "text-ink-dim hover:text-ink"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 rounded-xl bg-amber px-4 py-3 text-center text-sm font-medium text-void"
          >
            Resume
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
