import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { profile } from "../data/portfolio";
import SocialIcon from "../components/SocialIcon";
import MagneticButton from "../components/MagneticButton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMapPin, FiMail, FiArrowDownRight, FiClock } from "react-icons/fi";



export default function Hero() {


  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);



  return (
    <section
      id="hero"
        onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16"
    >
      
 {/* TOP RIGHT CLOCK */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="absolute top-4 right-0 z-20 hidden w-[280px] rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.08)] xl:block"
>
  <div className="flex items-center gap-2 text-emerald-400">
    <FiClock size={16} />
    <span className="font-mono text-[11px] tracking-[0.3em]">
      LOCAL TIME
    </span>
  </div>

  <h2 className="mt-3 font-mono text-4xl font-bold tracking-[0.12em] text-white">
    {time.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })}
  </h2>

  <p className="mt-2 text-sm text-zinc-400">
    {time.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })}
  </p>

  <div className="mt-4 border-t border-white/10 pt-3 text-sm text-zinc-300">
    📍 Bengaluru · IST
  </div>
</motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: floating bubble portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[340px] sm:w-[340px]"
        >
         
          <div className="glass relative h-56 w-56 overflow-hidden rounded-full sm:h-72 sm:w-72">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover"
              loading="eager"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="font-display absolute inset-0 hidden items-center justify-center text-6xl text-ink-faint"
              style={{ display: "none" }}
            >
              VT
            </div>
          </div>
        </motion.div>

        {/* Right: details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            About Me
          </span>
          <h1 className="font-display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-ink-dim md:text-xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-dim md:text-lg">
            {profile.summary}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md font-mono text-sm">
            <div>
              <dt className="text-ink-faint">Location</dt>
              <dd className="mt-1 flex items-center gap-1.5 text-ink">
                <FiMapPin size={14} className="text-amber" /> {profile.location}
              </dd>
            </div>
            <div>
              <dt className="text-ink-faint">Experience</dt>
              <dd className="mt-1 text-ink">{profile.experience}</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Education</dt>
              <dd className="mt-1 text-ink">{profile.education}</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Email</dt>
              <dd className="mt-1 flex items-center gap-1.5 text-ink">
                <FiMail size={14} className="text-amber" />
                <a href={`mailto:${profile.email}`} className="hover:text-amber-soft">
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#contact" variant="primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Let's connect <FiArrowDownRight />
            </MagneticButton>
            <div className="flex items-center gap-3">
              <SocialIcon href={profile.links.linkedin} label="LinkedIn" icon={FaLinkedin} />
              <SocialIcon href={profile.links.github} label="GitHub" icon={FaGithub} />
              <SocialIcon href={profile.links.instagram} label="Instagram" icon={FaInstagram} />
            </div>
          </div>
        </motion.div>
       
    </div>  {/* mx-auto END */}
      
    </section>
  );
}
