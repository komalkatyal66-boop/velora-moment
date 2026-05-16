import { motion } from "motion/react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/menu-rooftop.jpg";
import g6 from "@/assets/menu-signature.jpg";

const imgs = [g1, g2, g3, g4, g5, g6, g1, g2];

export function Gallery() {
  return (
    <section id="gallery" className="relative grain overflow-hidden py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">04 · Gallery</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light text-cream">
            Moments, <span className="italic gradient-gold-text">unrepeatable.</span>
          </h2>
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        >
          {[...imgs, ...imgs].map((src, i) => (
            <div
              key={i}
              className="group relative h-[420px] w-[320px] shrink-0 overflow-hidden rounded-2xl"
              data-cursor="hover"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              <div className="absolute inset-0 ring-0 ring-gold/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-gold/40" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
