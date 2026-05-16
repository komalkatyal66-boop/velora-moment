import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const occasions = ["Date Night", "Anniversary", "Birthday", "Business", "Just Because"];

export function Reservation() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    reservation_date: "", reservation_time: "19:00",
    guests: 2, occasion: "Date Night", notes: "",
  });

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.reservation_date) {
      toast.error("Please complete name, email, and date.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("reservations").insert(form);
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setSuccess(true);
    toast.success("Table reserved.");
  };

  return (
    <section id="reserve" className="relative grain overflow-hidden py-32 lg:py-48">
      <div className="ambient-orb left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2" />
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">05 · Reserve</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-cream">
            Hold your <span className="italic gradient-gold-text">table</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">Twenty-four floors. One unforgettable evening.</p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
          <div className="ambient-orb -top-32 -right-32 h-72 w-72" />
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={onSubmit}
                className="relative grid gap-6 sm:grid-cols-2"
              >
                <Field label="Name">
                  <input value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} required />
                </Field>
                <Field label="Email">
                  <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} required />
                </Field>
                <Field label="Phone">
                  <input value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} />
                </Field>
                <Field label="Date">
                  <input type="date" value={form.reservation_date} onChange={(e) => set("reservation_date", e.target.value)} className={inputCls} required />
                </Field>
                <Field label="Time">
                  <div className="flex flex-wrap gap-2">
                    {times.map((t) => (
                      <button type="button" key={t} onClick={() => set("reservation_time", t)}
                        className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                          form.reservation_time === t
                            ? "border-gold bg-gold text-background"
                            : "border-border text-muted-foreground hover:border-gold/60 hover:text-cream"
                        }`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="Guests">
                  <div className="flex items-center gap-4 rounded-full border border-border bg-input/30 px-4 py-3">
                    <button type="button" onClick={() => set("guests", Math.max(1, form.guests - 1))} className="text-gold">−</button>
                    <span className="flex-1 text-center font-serif text-xl text-cream">{form.guests}</span>
                    <button type="button" onClick={() => set("guests", Math.min(12, form.guests + 1))} className="text-gold">+</button>
                  </div>
                </Field>
                <Field label="Occasion" full>
                  <div className="flex flex-wrap gap-2">
                    {occasions.map((o) => (
                      <button type="button" key={o} onClick={() => set("occasion", o)}
                        className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                          form.occasion === o
                            ? "border-gold bg-gold text-background"
                            : "border-border text-muted-foreground hover:border-gold/60 hover:text-cream"
                        }`}>
                        {o}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="Notes for the team" full>
                  <textarea rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} className={inputCls} />
                </Field>
                <div className="sm:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="magnetic-btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-10 py-4 text-xs uppercase tracking-[0.3em] text-background disabled:opacity-60"
                  >
                    <span className="relative z-10">{loading ? "Securing…" : "Confirm Reservation"}</span>
                    <span className="relative z-10">→</span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative flex flex-col items-center gap-6 py-12 text-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gold/30 blur-2xl" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold text-background">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-serif text-4xl text-cream">Your table awaits.</h3>
                <p className="max-w-md text-muted-foreground">
                  A confirmation will arrive shortly at <span className="text-gold">{form.email}</span>.
                  We can't wait to welcome you to Velora.
                </p>
                <button onClick={() => { setSuccess(false); setForm({ ...form, name: "", email: "", notes: "" }); }}
                  className="text-xs uppercase tracking-[0.3em] text-gold underline-offset-8 hover:underline">
                  Make another reservation
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-input/30 px-4 py-3 font-sans text-sm text-cream outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20 [color-scheme:dark]";

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
