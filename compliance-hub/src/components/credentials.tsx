import React from 'react';
import draftworkxLogo from '../assets/draftworx.png';
import saipaLogo from '../assets/saipa.png';
import sarsLogo from '../assets/sars-logo.png';

const logos = [
  { src: saipaLogo, alt: 'Saipa' },
  { src: draftworkxLogo, alt: 'Draftworkx' },
  { src: sarsLogo, alt: 'SARS' },
];

export function Credentials() {
  return (
    <section className="container mx-auto px-4 md:py-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="public-sans motion-reveal text-3xl text-center font-bold sm:text-3xl lg:shrink-0 lg:text-4xl">
          Aligned With Industry Standards
        </h2>

        <div className="grid min-w-0 grid-cols-1 gap-10 md:grid-cols-3 md:gap-4 lg:gap-6">
          {logos.map((logo, i) => (
            <div
              key={logo.alt}
              className="motion-reveal flex h-16 min-w-0 items-center justify-center"
              style={{ '--motion-delay': `${i * 120}ms` } as React.CSSProperties}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="credentials-logo max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}