import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import coffee from "@/assets/menu-coffee.jpg";
import breakfast from "@/assets/menu-breakfast.jpg";
import dessert from "@/assets/menu-dessert.jpg";
import signature from "@/assets/menu-signature.jpg";
import mocktail from "@/assets/menu-mocktail.jpg";
import rooftop from "@/assets/menu-rooftop.jpg";

type Item = { name: string; price: string; note: string; img: string };
type Cat = { id: string; title: string; items: Item[] };

const categories: Cat[] = [
  {
    id: "coffee",
    title: "Artisan Coffee",
    items: [
      { name: "Velora Reserve Espresso", price: "$9", note: "Single-origin Ethiopian, slow extracted.", img: coffee },
      { name: "Golden Honey Latte", price: "$11", note: "Manuka honey, oat milk, edible gold dust.", img: coffee },
      { name: "Smoked Maple Mocha", price: "$12", note: "Applewood-smoked chocolate, maple foam.", img: coffee },
    ],
  },
  {
    id: "breakfast",
    title: "Gourmet Breakfast",
    items: [
      { name: "Truffle Egg Toast", price: "$18", note: "Black truffle, poached eggs, sourdough.", img: breakfast },
      { name: "Avocado Saffron Bowl", price: "$16", note: "Saffron yogurt, pomegranate, micro-herbs.", img: breakfast },
      { name: "Wagyu Breakfast Sliders", price: "$24", note: "A5 wagyu, brioche, aged gruyère.", img: breakfast },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Molten Gold Fondant", price: "$15", note: "70% dark chocolate, 24k gold leaf.", img: dessert },
      { name: "Yuzu Crème Brûlée", price: "$14", note: "Japanese yuzu, vanilla bean caramel.", img: dessert },
      { name: "Hazelnut Praline Tart", price: "$13", note: "Piedmont hazelnuts, salted caramel.", img: dessert },
    ],
  },
  {
    id: "signature",
    title: "Signature Meals",
    items: [
      { name: "A5 Wagyu Ribeye", price: "$94", note: "48-hour aged, charcoal seared, gold dust.", img: signature },
      { name: "Miso Glazed Black Cod", price: "$52", note: "Three-day marinade, yuzu butter.", img: signature },
      { name: "Truffle Risotto Nero", price: "$46", note: "Squid ink, Périgord truffle, parmigiano.", img: signature },
    ],
  },
  {
    id: "mocktails",
    title: "Mocktails",
    items: [
      { name: "Velvet Saffron Sour", price: "$13", note: "Saffron, yuzu, smoked rosemary.", img: mocktail },
      { name: "Ember Glow Spritz", price: "$12", note: "Blood orange, ginger, sparkling tea.", img: mocktail },
      { name: "Midnight Botanical", price: "$13", note: "Activated charcoal, elderflower, lime.", img: mocktail },
    ],
  },
  {
    id: "rooftop",
    title: "Rooftop Specials",
    items: [
      { name: "Sunset Tasting Flight", price: "$68", note: "Five-course chef-curated journey.", img: rooftop },
      { name: "Smoke & Sky Platter", price: "$54", note: "Tableside smoke service, shared.", img: rooftop },
      { name: "Velora Caviar Service", price: "$120", note: "Imperial osetra, blini, crème fraîche.", img: rooftop },
    ],
  },
];

export function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative grain overflow-hidden py-32 lg:py-48">
      <div className="ambient-orb -left-40 top-1/3 h-[500px] w-[500px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">02 · The Menu</span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1] text-cream">
            Signature <span className="italic gradient-gold-text">Experience</span>
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Every plate is a quiet performance — sourced from artisans, finished at the pass,
            served only when the moment is right.
          </p>
        </div>

        {/* category tabs */}
        <div className="mt-16 flex flex-wrap gap-2 border-y border-border py-4">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`relative rounded-full px-5 py-2 text-xs uppercase tracking-[0.25em] transition-colors ${
                active === c.id ? "text-background" : "text-muted-foreground hover:text-cream"
              }`}
            >
              {active === c.id && (
                <motion.span
                  layoutId="menu-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{c.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {current.items.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function MenuCard({ item, index }: { item: Item; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group glass relative overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_oklch(0.78_0.13_75_/_0.3)]"
      style={{ transition: "transform 0.4s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.5s" }}
      data-cursor="hover"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
      </div>
      <div className="relative p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl text-cream">{item.name}</h3>
          <span className="font-serif text-xl gradient-gold-text">{item.price}</span>
        </div>
        <div className="mt-3 h-px w-full bg-gradient-to-r from-gold/40 to-transparent" />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px oklch(0.78 0.13 75 / 0.5)" }}
      />
    </motion.div>
  );
}
