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

        <div className="relative min-w-0 md:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-(--bg) to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-(--bg) to-transparent" />
          <div className="credentials-scroll">
            <div className="credentials-scroll-track">
              {[0, 1].map((group) => (
                <div className="credentials-scroll-group" key={group} aria-hidden={group === 1}>
                  {logos.map((logo) => (
                    <div
                      key={`${logo.alt}-${group}`}
                      className="credentials-scroll-item"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                      className="credentials-logo h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden min-w-0 grid-cols-3 gap-4 md:grid lg:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-14 min-w-0 items-center justify-center"
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