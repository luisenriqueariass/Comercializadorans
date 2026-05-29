import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import OurStory from '@/components/OurStory';
import Materials from '@/components/Materials';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <OurStory />
      <Materials />
      <Testimonials />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
