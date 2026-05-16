import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-cafe.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current, g = glow.current;
    if (!el || !g) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      g.style.background = `radial-gradient(600px circle at ${x}% ${y}%, oklch(0.78 0.17 60 / 0.22), transparent 60%)`;
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" ref={ref} className="relative grain min-h-screen w-full overflow-hidden">
      {/* background image with cinematic vignette */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cinematic luxury café"
          width={1920}
          height={1080}
          className="h-full w-full object-cover scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
      </div>

      {/* mouse-reactive glow */}
      <div ref={glow} className="pointer-events-none absolute inset-0" />

      {/* ambient orbs */}
      <div className="ambient-orb -left-32 top-20 h-[400px] w-[400px] animate-pulse-glow" />
      <div className="ambient-orb right-0 bottom-0 h-[500px] w-[500px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* steam particles */}
      <div className="pointer-events-none absolute right-[20%] bottom-[28%] hidden h-40 w-20 lg:block">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="steam-particle"
            style={{
              left: `${i * 6}px`,
              animationDelay: `${i * 0.7}s`,
              ["--drift" as string]: `${(i % 2 ? -1 : 1) * 30}px`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex items-center gap-3"
        >
          <div className="h-px w-10 bg-gold" />
          <span className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">Rooftop · Est. 2024</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-8 font-serif text-[clamp(3.5rem,9vw,9rem)] font-light leading-[0.95] tracking-[-0.03em] text-cream"
        >
          Crafted Moments.
          <br />
          <span className="italic gradient-gold-text">Brewed Luxury.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 1 }}
          className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          An immersive rooftop café and fine-dining experience where flavor, design,
          and atmosphere become one — sculpted nightly, twenty-four floors above the city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 1 }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <a
            href="#reserve"
            className="magnetic-btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-background"
          >
            <span className="relative z-10">Reserve Experience</span>
            <span className="relative z-10 text-base">→</span>
          </a>
          <a
            href="#menu"
            className="magnetic-btn glass relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs uppercase tracking-[0.3em] text-cream"
          >
            <span className="relative z-10">Explore Signature Menu</span>
          </a>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[0.6rem] uppercase tracking-[0.5em] text-muted-foreground">Scroll</span>
            <div className="relative h-12 w-px overflow-hidden bg-border">
              <motion.div
                className="absolute inset-x-0 top-0 h-4 bg-gold"
                animate={{ y: [0, 48, 0] }}
                transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
