import { motion } from "motion/react";

const events = [
  { date: "Jun 14", name: "Midnight Jazz on the Rooftop", time: "21:00 – 01:00", tag: "Live Quintet" },
  { date: "Jun 22", name: "Six-Hands Chef Collaboration", time: "19:00 – 23:00", tag: "Tasting Menu" },
  { date: "Jul 03", name: "Velora Caviar & Champagne", time: "20:00 – 23:30", tag: "Sommelier Night" },
  { date: "Jul 19", name: "Sunset Vinyl Sessions", time: "18:00 – 22:00", tag: "Analog Selectors" },
];

export function Events() {
  return (
    <section id="events" className="relative grain overflow-hidden py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">07 · Events</span>
            </div>
            <h2 className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light text-cream">
              Nights worth <span className="italic gradient-gold-text">marking.</span>
            </h2>
          </div>
          <a href="#reserve" className="text-xs uppercase tracking-[0.3em] text-gold underline-offset-8 hover:underline">
            Reserve a seat →
          </a>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border">
          {events.map((ev, i) => (
            <motion.div
              key={ev.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative grid grid-cols-12 items-center gap-4 border-b border-border bg-card px-6 py-7 transition-colors last:border-0 hover:bg-secondary/40 sm:px-10"
              data-cursor="hover"
            >
              <div className="col-span-3 sm:col-span-2">
                <p className="font-serif text-2xl text-gold">{ev.date}</p>
              </div>
              <div className="col-span-9 sm:col-span-6">
                <p className="font-serif text-xl text-cream sm:text-2xl">{ev.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">{ev.time}</p>
              </div>
              <div className="col-span-12 sm:col-span-3 sm:text-right">
                <span className="inline-block rounded-full border border-gold/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                  {ev.tag}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-1 sm:text-right">
                <span className="text-xl text-cream/40 transition-all group-hover:translate-x-2 group-hover:text-gold">→</span>
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gold opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
