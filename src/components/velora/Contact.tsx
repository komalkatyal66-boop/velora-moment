import { motion } from "motion/react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaConciergeBell } from "react-icons/fa";

const channels = [
  {
    icon: FaPhoneAlt,
    label: "Direct Line",
    value: "+1 (415) 555-0199",
    sub: "Daily · 9am — 1am",
    href: "tel:+14155550199",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp Concierge",
    value: "Message us instantly",
    sub: "Replies within 5 minutes",
    href: "https://wa.me/14155550199",
  },
  {
    icon: FaEnvelope,
    label: "Private Reservations",
    value: "concierge@velora.cafe",
    sub: "For events & private dining",
    href: "mailto:concierge@velora.cafe",
  },
  {
    icon: FaMapMarkerAlt,
    label: "The Rooftop",
    value: "88 Skyline Avenue, Floor 42",
    sub: "Neo Tokyo · Metropolitan District",
    href: "https://maps.google.com/?q=88+Skyline+Avenue",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative grain overflow-hidden py-32 lg:py-48">
      <div className="ambient-orb -right-40 top-1/4 h-[600px] w-[600px]" />
      <div className="ambient-orb -left-40 bottom-0 h-[400px] w-[400px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">
              07 · Stay Close
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1] text-cream">
            A whisper <span className="italic gradient-gold-text">away</span>
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Our concierge is on standby — whether it&apos;s a quiet table, a private floor,
            or a single perfect coffee at sunrise. Choose the line that suits the moment.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              data-cursor="hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-7 transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_oklch(0.78_0.13_75_/_0.3)]"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/5 blur-2xl transition-all duration-700 group-hover:bg-gold/20" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-background">
                <c.icon className="text-base" />
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-2 font-serif text-xl text-cream">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.sub}</p>
              </div>
              <div className="mt-auto h-px w-full bg-gradient-to-r from-gold/40 to-transparent" />
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-gold transition-all duration-500 group-hover:tracking-[0.5em]">
                Connect →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Concierge strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="glass-strong mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold/20 p-8 md:flex-row md:items-center md:p-10"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
              <FaConcierge className="text-xl" />
            </div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">
                24/7 Velora Concierge
              </p>
              <p className="mt-1 font-serif text-2xl text-cream">
                Tell us the occasion. We&apos;ll script the evening.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/14155550199"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="magnetic-btn glass relative rounded-full border border-gold/40 px-6 py-3 text-xs uppercase tracking-[0.25em] text-cream"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaWhatsapp /> WhatsApp Us
              </span>
            </a>
            <a
              href="#reserve"
              data-cursor="hover"
              className="magnetic-btn relative rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-[0.25em] text-background"
            >
              <span className="relative z-10">Reserve a Table</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-cream transition-colors hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Hours */}
        <div className="mt-12 grid gap-6 border-t border-border pt-12 md:grid-cols-3">
          {[
            { day: "Café Hours", time: "Mon — Sun · 8am — 5pm" },
            { day: "Fine Dining", time: "Tue — Sun · 6pm — 12am" },
            { day: "Rooftop Lounge", time: "Thu — Sat · 7pm — 2am" },
          ].map((h) => (
            <div key={h.day} className="flex flex-col gap-2">
              <p className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">{h.day}</p>
              <p className="font-serif text-xl text-cream">{h.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
