import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import chef from "@/assets/chef-portrait.jpg";

const stats = [
  { value: "24", label: "Floors Above" },
  { value: "12", label: "Year Vintage" },
  { value: "48h", label: "Wagyu Aging" },
  { value: "1", label: "Michelin Star" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative grain overflow-hidden py-32 lg:py-48">
      <div className="ambient-orb right-0 top-0 h-[500px] w-[500px]" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div style={{ y }} className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={chef}
              alt="Executive chef portrait"
              loading="lazy"
              width={1080}
              height={1600}
              className="h-[680px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-6">
            <p className="font-serif text-sm italic text-muted-foreground">"Flavor is memory."</p>
            <p className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-gold">— Chef Renato Velora</p>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">03 · The Experience</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-cream"
          >
            A quiet rebellion <br />
            against <span className="italic gradient-gold-text">ordinary nights.</span>
          </motion.h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Velora began as a hush — a question of whether dinner could be more than dinner.
            What unfolds across our rooftop is a layered, twenty-four-floor composition of light,
            sound, and slow craft. Every reservation is a story we write together.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/40">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-7"
              >
                <p className="font-serif text-4xl text-gold">{s.value}</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
