import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesGrid from '@/components/home/ServicesGrid';
import FacilityShowcase from '@/components/home/FacilityShowcase';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <AboutPreview />
      </section>
      
      <section id="services">
        <ServicesGrid />
      </section>
      
      <section id="facility">
        <FacilityShowcase />
      </section>
      
      <section id="warriors">
        <Testimonials />
      </section>
      
      <section id="contact">
        <CTASection />
      </section>
    </main>
  );
}