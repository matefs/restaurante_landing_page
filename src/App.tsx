import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { BentoGrid } from './components/BentoGrid';
import { MasteryCarousel } from './components/MasteryCarousel';
import { Collections } from './components/Collections';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileDrawer } from './components/MobileDrawer';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let rafId: number;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="min-h-screen bg-[#131313] font-manrope text-[#e5e2e1] selection:bg-[#c9a96e]/20">
      <Header setIsDrawerOpen={setIsDrawerOpen} />

      <main>
        <Hero />
        <Ticker />
        <BentoGrid />
        <MasteryCarousel />
        <Collections />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
