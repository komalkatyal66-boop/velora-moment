import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 grain" />
          <div className="ambient-orb h-[500px] w-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-12 bg-gold/60" />
              <span className="font-serif text-2xl tracking-[0.4em] text-cream">VELORA</span>
              <div className="h-px w-12 bg-gold/60" />
            </motion.div>
            <motion.div className="h-px w-48 overflow-hidden bg-border">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6 }}
              className="text-[0.65rem] uppercase tracking-[0.5em] text-muted-foreground"
            >
              Brewing your experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
