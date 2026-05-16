import { FaInstagram, FaTwitter, FaFacebookF, FaSpotify } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative grain overflow-hidden bg-card pt-24 pb-10">
      <div className="ambient-orb -bottom-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-gold animate-pulse-glow" />
              <span className="font-serif text-2xl tracking-[0.35em] text-cream">VELORA</span>
            </div>
            <p className="mt-6 max-w-md font-serif text-3xl italic leading-snug text-cream">
              "An evening here is never quite the same. Neither is the person who leaves."
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); if(email) { toast.success("You're on the list."); setEmail(""); }}}
              className="mt-10 flex max-w-md items-center gap-2 rounded-full border border-border bg-input/30 p-1.5"
            >
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-cream outline-none placeholder:text-muted-foreground"
              />
              <button className="magnetic-btn rounded-full bg-gold px-5 py-2 text-xs uppercase tracking-[0.3em] text-background">
                Join
              </button>
            </form>
          </div>

          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold">Hours</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Mon — Thu</span><span className="text-cream">17 — 23</span></li>
              <li className="flex justify-between"><span>Fri — Sat</span><span className="text-cream">17 — 02</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-cream">11 — 22</span></li>
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold">Visit</p>
            <address className="mt-6 not-italic text-sm text-muted-foreground">
              24th Floor, The Meridian Tower<br />
              1 Crescent Avenue<br />
              Metropolis 00120
            </address>
            <div className="mt-6 flex gap-3">
              {[FaInstagram, FaSpotify, FaTwitter, FaFacebookF].map((Icon, i) => (
                <a key={i} href="#" data-cursor="hover"
                  className="magnetic-btn flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-gold hover:text-gold">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider mt-20" />
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© 2026 Velora Café & Dining</span>
          <span>Crafted with light, sound & care.</span>
        </div>
      </div>
    </footer>
  );
}
