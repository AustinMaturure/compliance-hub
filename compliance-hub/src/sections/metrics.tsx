import more from '../assets/sub-1.webp';


export function MetricsSection() {
  return (
    <section className="container mx-auto px-2 py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
        <div className="motion-reveal flex-1">
          <img
            src={more}
            alt="Metrics"
            loading="lazy"
            decoding="async"
            className="md:hero-media h-[420px] w-full rounded-lg object-cover md:h-[680px]"
          />
        </div>
        <div className="motion-reveal motion-delay-1 flex min-w-0 flex-1 flex-col justify-between">
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