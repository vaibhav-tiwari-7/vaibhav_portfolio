import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { intro } from "../data/portfolio";

const TYPING_SPEED = 36; // ms per character
const LINE_PAUSE = 690; // pause after a line finishes typing
const LAST_LINE_HOLD = 1000; // extra hold before transitioning out

export default function LaunchIntro({ onComplete }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const timeoutRef = useRef(null);
  const skippedRef = useRef(false);

  const finish = () => {
    if (skippedRef.current) return;
    skippedRef.current = true;
    clearTimeout(timeoutRef.current);
    setExiting(true);
    setTimeout(onComplete, 700);
  };

  useEffect(() => {
    const currentLine = intro.lines[lineIndex] ?? "";

    if (charIndex < currentLine.length) {
      timeoutRef.current = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timeoutRef.current);
    }

    // finished typing this line
    const isLastLine = lineIndex === intro.lines.length - 1;
    timeoutRef.current = setTimeout(
      () => {
        if (isLastLine) {
          finish();
        } else {
          setLineIndex((l) => l + 1);
          setCharIndex(0);
        }
      },
      isLastLine ? LAST_LINE_HOLD : LINE_PAUSE
    );

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, lineIndex]);

  useEffect(() => {
    // allow Escape to skip
    const onKey = (e) => {
      if (e.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentLine = intro.lines[lineIndex] ?? "";
  const visibleText = currentLine.slice(0, charIndex);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void px-6"
        >
          <button
            onClick={finish}
            className="font-mono absolute right-6 top-6 rounded-full border border-line px-4 py-2 text-xs uppercase tracking-widest text-ink-faint transition-colors duration-300 hover:border-amber/40 hover:text-amber-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber md:right-10 md:top-10"
          >
            Skip
          </button>

          <div className="mx-auto max-w-3xl text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="font-display min-h-[3.5em] text-2xl font-light leading-snug text-ink sm:text-4xl md:text-5xl"
              >
                {visibleText}
                <span className="animate-blink ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.1em] bg-amber align-middle" />
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-ink-faint"
          >
            scroll to begin
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
