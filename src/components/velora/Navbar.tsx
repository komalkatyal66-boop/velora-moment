import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Reserve", href: "#reserve" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.8 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass-strong" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-gold animate-pulse-glow" />
          <span className="font-serif text-xl tracking-[0.35em] text-cream">VELORA</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-cream"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#reserve"
          className="magnetic-btn glass-strong relative rounded-full border border-gold/40 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cream"
        >
          <span className="relative z-10">Reserve</span>
        </a>
      </div>
    </motion.header>
  );
}
