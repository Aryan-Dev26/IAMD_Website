import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import WhatIsMD from '@/components/home/WhatIsMD';
import ServicesGrid from '@/components/home/ServicesGrid';
import FacilityShowcase from '@/components/home/FacilityShowcase';
import PicnicGallery from '@/components/home/PicnicGallery';
import SuccessStories from '@/components/home/SuccessStories';
import Testimonials from '@/components/home/Testimonials';
import OurTeam from '@/components/home/OurTeam';
import Awards from '@/components/home/Awards';
import LatestNews from '@/components/home/LatestNews';
import HowToHelp from '@/components/home/HowToHelp';
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
        <section id="what-is-md">
          <WhatIsMD />
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
        <section id="gallery">
          <PicnicGallery />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="fadeInUp" delay={100}>
        <section id="success-stories">
          <SuccessStories />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="fadeInUp" delay={100}>
        <section id="warriors">
          <Testimonials />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="fadeInUp" delay={100}>
        <section id="team">
          <OurTeam />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="fadeInUp" delay={100}>
        <section id="awards">
          <Awards />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="fadeInUp" delay={100}>
        <section id="news">
          <LatestNews />
        </section>
      </ScrollReveal>
      
      <ScrollReveal animation="fadeInUp" delay={100}>
        <section id="help">
          <HowToHelp />
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