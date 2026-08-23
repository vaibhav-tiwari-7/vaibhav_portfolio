import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display mt-3 text-3xl font-medium text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base text-ink-dim md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
