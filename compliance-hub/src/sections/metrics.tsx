import more from '../assets/more-left.webp';


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
        <div className="motion-reveal motion-delay-1 flex flex-1 flex-col justify-between ">
        <div className="p-4 sticky top-[4rem]">
  <h2 className="text-6xl font-bold cabinet">
  Accurate Reporting. Timely Submissions.
  </h2>

  <p className="mt-3 text-lg text-gray-600 leading-relaxed">
    Helping businesses and individuals manage their finances with confidence through accurate, reliable accounting services.
  </p>
</div>
        
        </div>
        
      </div>
    </section>
  );
}