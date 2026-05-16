import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { CustomCursor } from "@/components/velora/CustomCursor";
import { Loader } from "@/components/velora/Loader";
import { Navbar } from "@/components/velora/Navbar";
import { Hero } from "@/components/velora/Hero";
import { Menu } from "@/components/velora/Menu";
import { About } from "@/components/velora/About";
import { Gallery } from "@/components/velora/Gallery";
import { Reservation } from "@/components/velora/Reservation";
import { Testimonials } from "@/components/velora/Testimonials";
import { Events } from "@/components/velora/Events";
import { Footer } from "@/components/velora/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VELORA Café & Dining — Crafted Moments. Brewed Luxury." },
      { name: "description", content: "An immersive rooftop café and fine-dining experience where flavor, design, and atmosphere become one. Reserve your evening at Velora." },
      { property: "og:title", content: "VELORA Café & Dining" },
      { property: "og:description", content: "Rooftop café and fine-dining experience — Crafted Moments. Brewed Luxury." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <div className="relative min-h-screen bg-background text-foreground dark">
      <Loader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Events />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}
