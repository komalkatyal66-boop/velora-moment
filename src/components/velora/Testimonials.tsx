import { motion } from "motion/react";

const reviews = [
  { quote: "A cinematic dinner. The rooftop felt suspended above the city — the cod was a memory.", name: "Aria Whitmore", role: "The Independent" },
  { quote: "Velora is what fine dining wants to be: quiet, daring, generous. The pacing is choreography.", name: "Marcus Hale", role: "Hospitality Quarterly" },
  { quote: "We celebrated our anniversary here. They wrote her name in gold leaf. We will never forget.", name: "Sienna & Joaquín", role: "Guests, est. 2024" },
  { quote: "The mocktail list belongs in a museum. The saffron sour rearranged my expectations.", name: "Devon Park", role: "Forbes Lifestyle" },
];

export function Testimonials() {
  return (
    <section className="relative grain overflow-hidden py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">06 · Praise</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light text-cream">
            Whispered, then <span className="italic gradient-gold-text">written.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass relative overflow-hidden rounded-2xl p-10"
            >
              <div className="absolute -top-12 -left-6 font-serif text-[10rem] leading-none text-gold/10">"</div>
              <blockquote className="relative font-serif text-2xl italic leading-snug text-cream">
                {r.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="h-px w-8 bg-gold" />
                <div>
                  <p className="text-sm text-cream">{r.name}</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{r.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
