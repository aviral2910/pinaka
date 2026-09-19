import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Schemes from '@/components/Schemes';
import Process from '@/components/Process';
import About from '@/components/About';
import GovImpact from '@/components/GovImpact';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EligibilityPopup from '@/components/EligibilityPopup';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D18]">
      <EligibilityPopup />
      <Navbar />
      <Hero />
      <Services />
      <Schemes />
      <Process />
      <About />
      <GovImpact />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
