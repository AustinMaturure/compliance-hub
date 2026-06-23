import { useEffect } from 'react'
import './App.css'
import { Navbar } from './sections/navbar'
import { Hero } from './sections/hero'
import { ComplianceSection } from './sections/compliance'
import { Credentials } from './components/credentials'
import { MetricsSection } from './sections/metrics'
import { PracticeSection } from './sections/practice'
import { WhyChooseSection } from './sections/why-choose'
import { MoreSection } from './sections/more'
import { ComplianceBanner } from './sections/compliance-banner'
import { Footer } from './sections/footer'
import whatsappIcon from './assets/computer-icons-whatsapp-whatsapp.png'
function App() {
  useEffect(() => {
    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>('.motion-reveal')
    );

    if (!animatedElements.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      animatedElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <section className="cabinet">
        <Navbar />
        <Hero />

        <Credentials />
     
    <MetricsSection />
 
    <ComplianceSection /> 
    <PracticeSection />
    <WhyChooseSection />
    <MoreSection />
    <ComplianceBanner />
    <Footer />
    <a
      href="https://wa.me/27766010169"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Compliance Hub on WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white p-2 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.45)] transition hover:scale-105"
    >
      <img
        src={whatsappIcon}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain"
      />
    </a>
      </section>

    
    </>
  )
}

export default App
