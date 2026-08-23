import { motion } from "framer-motion";

export default function SocialIcon({ href, label, icon: Icon }) {
  if (!href) return null;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -3, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink-dim transition-colors duration-300 hover:border-amber/40 hover:text-amber-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
    >
      <Icon size={18} />
    </motion.a>
  );
}
