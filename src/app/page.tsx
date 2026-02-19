import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/ui/GridBackground";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Architecture from "@/components/sections/Architecture";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Architecture />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
