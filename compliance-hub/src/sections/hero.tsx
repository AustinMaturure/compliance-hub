import { useEffect, useState } from 'react';
import heroImg from '../assets/hero.webp';

export function Hero() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowBanner(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="cabinet relative h-[calc(100vh-2rem)]">
      <div
        className={`absolute inset-x-0 top-0 z-20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showBanner
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="public-sans bg-[#395B50]/95 px-4 py-2.5 text-white backdrop-blur-sm">
          <div className="container mx-auto flex flex-col gap-1 text-xs sm:text-sm md:flex-row md:items-center md:justify-between md:gap-4">
            <p className="font-semibold">Tax Season Opens 01 July 2026</p>
            <p className="text-white/90">
              Need assistance with your Individual Income Tax Return? contact compliance Hub for professional assistance with your SARS submission.
            </p>
            <a
              href="#contact"
              className="inline-flex w-fit font-semibold text-white underline decoration-white/60 underline-offset-2 hover:decoration-white"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-10">
        <div className="mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-12 text-white sm:px-10 sm:pb-16 lg:px-16 lg:pb-24">
          <div className="flex w-full flex-col gap-5 lg:gap-6">
            <div className="motion-reveal flex-1">
              <h2 className="text-4xl leading-[0.95] font-bold sm:text-6xl lg:text-8xl">
                Compliance <br /> Made Simple.
              </h2>
            </div>
            <div className="public-sans motion-reveal w-full max-w-xl flex-1 pb-6 text-base sm:pb-0 sm:text-lg lg:w-[55%]">
              <p>
              Accounting, tax, payroll and compliance services for individuals and small businesses.
              </p>
            </div>
            <div className="motion-reveal motion-delay-2 hidden pb-3 sm:block sm:pb-4">
              <button className="public-sans apple-button rounded-2xl bg-[#395B50] px-5 py-3 text-sm font-medium text-white hover:-translate-y-0.5 hover:bg-[#2f4f45] sm:px-6 sm:py-4 sm:text-base">
                Get Compliant
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-full px-0 pb-12 pt-0 sm:px-4">
        <div className="motion-reveal relative h-full overflow-hidden rounded-none sm:rounded-lg">
          <img
            src={heroImg}
            alt="Hero"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="hero-media h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/70 via-black/25 to-transparent" />
        </div>
      </div>
 
    </section>
  )
}