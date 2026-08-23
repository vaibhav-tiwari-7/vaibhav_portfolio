import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import techfestLogo from "../assets/techfest.png";
import blackPearlLogo from "../assets/blackpearl.png";
import byteLogo from "../assets/byte.png";

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
       <SectionHeading
  eyebrow="MILESTONES"
  title="Achievements"
  description="A collection of milestones, leadership experiences, technical accomplishments, and competitive recognition."
/>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass relative overflow-hidden rounded-2xl p-7"
            >
         
            <div className="mb-4 h-12">
  <img
    src={
      item.id === "ach-1"
        ? techfestLogo
        : item.id === "ach-2"
        ? blackPearlLogo
        : byteLogo
    }
    alt={item.title}
    className={`h-full object-contain ${
      item.id === "ach-1"
        ? "w-36"
        : item.id === "ach-2"
        ? "w-18"
        : "w-20"
    }`}
  />
</div>
              <h3 className="font-display relative text-xl font-medium text-ink">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-ink-dim">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
