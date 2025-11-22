import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesGrid from '@/components/home/ServicesGrid';
import FacilityShowcase from '@/components/home/FacilityShowcase';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      
      <ScrollReveal animation="fadeInUp">
        <section id="about">
          <AboutPreview />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="fadeInUp" delay={100}>
        <section id="services">
          <ServicesGrid />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="fadeInUp" delay={100}>
        <section id="facility">
          <FacilityShowcase />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="fadeInUp" delay={100}>
        <section id="warriors">
          <Testimonials />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="scaleIn" delay={100}>
        <section id="contact">
          <CTASection />
        </section>
      </ScrollReveal>
    </main>
  );
}