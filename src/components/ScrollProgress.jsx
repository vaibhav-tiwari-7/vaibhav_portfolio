import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Signature element: a thin vertical thread down the left edge of the page,
 * with a glowing dot that travels along it as the user scrolls — an echo of
 * the blinking cursor from the launch sequence, now marking your place in
 * the story instead of typing it out.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.3,
  });
  const top = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed left-4 md:left-6 top-24 bottom-24 z-40 hidden w-px sm:block transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 w-px bg-line" />
      <motion.div
        className="absolute left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber shadow-[0_0_12px_2px_rgba(232,163,61,0.55)]"
        style={{ top }}
      />
    </div>
  );
}
