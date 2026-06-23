import more from '../assets/sub-1.webp';


export function MetricsSection() {
  return (
    <section className="container mx-auto px-2 py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-stretch">

        {/* Mobile: image with text overlaid at the bottom */}
        <div className="motion-reveal relative flex-1 md:hidden">
          <img
            src={more}
            alt="Metrics"
            loading="lazy"
            decoding="async"
            className="h-[420px] w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="cabinet text-3xl font-bold text-white">
              Accurate Reporting. Timely Submissions.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Helping businesses and individuals manage their finances with confidence through accurate, reliable accounting services.
            </p>
          </div>
        </div>

        {/* Desktop: side-by-side */}
        <div className="motion-reveal hidden flex-1 md:block">
          <img
            src={more}
            alt="Metrics"
            loading="lazy"
            decoding="async"
            className="md:hero-media h-full w-full rounded-lg object-cover md:h-[680px]"
          />
        </div>
        <div className="motion-reveal motion-delay-1 hidden min-w-0 flex-1 flex-col justify-between md:flex">
          <div className="sticky top-[4rem] min-w-0 p-4">
            <h2 className="cabinet text-4xl font-bold md:text-5xl lg:text-6xl">
              Accurate Reporting. Timely Submissions.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-gray-600">
              Helping businesses and individuals manage their finances with confidence through accurate, reliable accounting services.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}