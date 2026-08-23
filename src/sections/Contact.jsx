import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { profile } from "../data/portfolio";
import MagneticButton from "../components/MagneticButton";
import SocialIcon from "../components/SocialIcon";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass mx-auto max-w-4xl rounded-[2rem] px-8 py-16 text-center sm:px-16"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
          Let's Connect
        </span>
        <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
          Ready to learn, build, and contribute.
          <br className="hidden sm:block" /> Feel free to reach out:)
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={`mailto:${profile.email}`} variant="primary">
            <FiMail /> {profile.email}
          </MagneticButton>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <SocialIcon href={profile.links.linkedin} label="LinkedIn" icon={FaLinkedin} />
          <SocialIcon href={profile.links.github} label="GitHub" icon={FaGithub} />
          <SocialIcon href={profile.links.instagram} label="Instagram" icon={FaInstagram} />
        </div>
      </motion.div>
    </section>
  );
}
