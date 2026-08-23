import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

function ProjectImage({ image, name }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }}
      className="glass relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
       <SectionHeading
  eyebrow="FEATURED WORK"
  title="Projects"
  description="A selection of AI, cloud, and full-stack projects that reflect my approach to solving real-world problems."
/>

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
                  reversed ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={reversed ? "[direction:ltr]" : ""}>
                  <ProjectImage image={project.image} name={project.name} />
                </div>

                <div className={reversed ? "[direction:ltr]" : ""}>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-medium text-ink sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-ink-dim">{project.tagline}</p>
                  <p className="mt-4 leading-relaxed text-ink-dim">{project.description}</p>
                  <p className="mt-3 text-sm text-amber-soft">{project.impact}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-xs text-ink-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                   {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-ink transition-colors duration-300 hover:border-amber/40 hover:text-amber-soft"
  >
    <FiGithub size={16} /> Code
  </a>
)}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-void transition-colors duration-300 hover:bg-amber-soft"
                      >
                        <FiExternalLink size={16} /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
