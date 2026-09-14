import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Schemes from '@/components/Schemes';
import Process from '@/components/Process';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D18]">
      <Navbar />
      <Hero />
      <Services />
      <Schemes />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
