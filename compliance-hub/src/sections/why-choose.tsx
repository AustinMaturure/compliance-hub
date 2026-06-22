export function WhyChooseSection() {
  const reasons = [
    "Accurate & Timely Submissions",
    "Support for Individuals & Small Businesses",
    "Timely and Accurate Filing",
    "Personal Service",
    "Custom-Tailored Services",
    "Continuous Client Support",
  ];

  return (
    <section className="container mx-auto px-4 py-10 md:py-14">
      <div className="motion-reveal flex flex-col gap-6 border-y border-neutral-300 py-6 md:flex-row md:items-center">
        <div className="motion-reveal md:w-[320px] md:flex-none">
          <p className="public-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#395b50]">
            Why Choose
          </p>
          <h2 className="cabinet mt-2 text-3xl font-bold leading-tight md:text-5xl">
            Compliance Hub
          </h2>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-(--bg) to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-(--bg) to-transparent md:w-16" />
          <div className="why-autoscroll">
            <div className="why-autoscroll-track">
              {[0, 1].map((group) => (
                <div className="why-autoscroll-group" key={group} aria-hidden={group === 1}>
                  {reasons.map((reason) => (
                    <p key={`${reason}-${group}`} className="why-text-item public-sans font-bold text-6xl">
                      {reason}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
