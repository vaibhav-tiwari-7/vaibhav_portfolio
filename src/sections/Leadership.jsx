import { motion } from "framer-motion";
import { leadership } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import blackPearlLogo from "../assets/blackpearl.png";
import quizLogo from "../assets/quizinc.png";

export default function Leadership() {
  return (
    <section id="leadership" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Beyond Academics"
          title="Leadership"
          description="Leading teams, organizing events, and creating impact beyond academics through collaboration and initiative."
        />

        <div className="flex flex-col gap-6">
          {leadership.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass rounded-3xl p-7 sm:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Club Logo */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-1">
                    <img
                      src={role.id === "lead-1" ? blackPearlLogo : quizLogo}
                      alt={role.organization}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                      {role.position}
                    </h3>
                    <p className="text-ink-dim">{role.organization}</p>
                  </div>
                </div>

                <span className="font-mono text-xs uppercase tracking-widest text-amber">
                  {role.duration}
                </span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {role.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-sm text-ink-dim"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {r}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-line pt-5 text-sm text-amber-soft">
                {role.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}