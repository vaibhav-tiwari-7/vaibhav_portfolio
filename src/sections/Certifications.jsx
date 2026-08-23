import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { certifications } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
  eyebrow="CREDENTIALS"
  title="Certifications"
  description="Industry-recognized certifications validating my expertise."
/>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="h-44 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-amber-soft">
                  <FiAward size={15} />
                  <span className="text-xs font-medium">{cert.year}</span>
                </div>

                <h3 className="line-clamp-2 font-semibold text-ink">
                  {cert.name}
                </h3>

                <p className="mt-1 text-sm text-ink-dim">{cert.issuer}</p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-soft hover:underline"
                  >
                    View Certificate <FiExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}