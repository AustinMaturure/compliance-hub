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
    <section className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="public-sans motion-reveal text-2xl text-center font-bold sm:text-3xl lg:shrink-0 lg:text-4xl">
          Aligned With Industry Standards
        </h2>

        <div className="credentials-scroll motion-reveal motion-delay-1 md:hidden">
          <div className="credentials-scroll-track">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="credentials-scroll-item"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="credentials-logo h-full w-full object-contain grayscale brightness-0"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="motion-reveal motion-delay-1 hidden w-full grid-cols-3 gap-6 md:grid lg:w-auto lg:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-16 items-center justify-center md:w-36"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="credentials-logo h-full w-full object-contain grayscale brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}