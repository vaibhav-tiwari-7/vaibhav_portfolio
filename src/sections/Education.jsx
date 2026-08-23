import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Academics"
          title="Education"
          description="A timeline of the schools and institutions that built the foundation of my technical and personal growth."
        />

        <div className="relative ml-3 border-l border-line pl-8 sm:ml-6 sm:pl-10">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[2.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-amber bg-void sm:-left-[3.15rem]" />

              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
  <div className="flex items-start gap-4">
    <img
      src={item.logo}
      alt={item.institution}
      className="h-14 w-14 rounded-xl bg-white object-contain p-2"
    />

    <div>
      <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
        {item.institution}
      </h3>
      <p className="mt-1 text-ink-dim">{item.degree}</p>
      <p className="mt-1 text-sm text-ink-faint">{item.location}</p>
    </div>
  </div>

  <span className="font-mono text-xs uppercase tracking-widest text-amber whitespace-nowrap">
    {item.duration}
  </span>
</div>
               

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-indigo/15 px-3 py-1 text-xs font-medium text-indigo-soft">
                    {item.cgpa}
                  </span>
                </div>

                {item.coursework?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.coursework.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-line px-3 py-1 text-xs text-ink-dim"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
