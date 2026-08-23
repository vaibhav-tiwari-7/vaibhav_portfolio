import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills"
          description="The technologies, frameworks, and tools I use to design, build, and deploy modern software."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
                {category}
              </h3>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-3">
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      skill.level === "Advanced"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300 hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                        : skill.level === "Intermediate"
                        ? "border-sky-400/30 bg-sky-400/10 text-sky-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)]"
                        : "border-zinc-500/30 bg-zinc-500/10 text-zinc-300 hover:shadow-[0_0_14px_rgba(161,161,170,0.25)]"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        skill.level === "Advanced"
                          ? "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                          : skill.level === "Intermediate"
                          ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                          : "bg-zinc-400"
                      }`}
                    />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4 border-t border-white/5 pt-4 text-[11px] font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span>Advanced</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  <span>Intermediate</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-400" />
                  <span>Familiar</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}