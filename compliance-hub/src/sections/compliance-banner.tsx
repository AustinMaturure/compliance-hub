const taxConsequences = [
  'Tax Administration penalties',
  'Interest on outstanding taxes',
  'SARS collection action',
  'Delays in obtaining Tax Clearance',
];

const cipcConsequences = [
  'Penalties for outstanding annual returns',
  'Loss of company good standing',
  'Automatic deregistration by CIPC',
  'Additional costs to reinstate a deregistered company',
];

export function ComplianceBanner() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="motion-reveal rounded-2xl bg-(--banner-dark) px-6 py-10 text-white md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_1.35fr]">
          <div className="motion-reveal">
            <p className="public-sans text-xs tracking-[0.2em] text-white/60 uppercase">
              Why get compliant
            </p>
            <h2 className="cabinet mt-3 text-3xl font-bold leading-tight md:text-5xl">
              Consequences of Non-Compliance
            </h2>
            <p className="public-sans mt-4 max-w-sm text-sm text-white/70">
              Staying compliant protects your business from avoidable penalties,
              admin stress and preventable disruptions.
            </p>
          </div>

          <div className="motion-reveal motion-delay-1 grid gap-4 md:grid-cols-1 lg:grid-cols-2">
            <article className="lift-card rounded-xl border border-white/20 bg-white/8 p-5">
              <h3 className="cabinet text-xl font-semibold">Tax Non Compliance</h3>
              <p className="public-sans mt-1 text-sm text-white/65">
                Potential Consequences
              </p>
              <ul className="public-sans mt-4 space-y-2 text-sm text-white/85">
                {taxConsequences.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="lift-card rounded-xl border border-white/20 bg-white/8 p-5">
              <h3 className="cabinet text-xl font-semibold">CIPC Non Compliance</h3>
              <p className="public-sans mt-1 text-sm text-white/65">
                Potential Consequences
              </p>
              <ul className="public-sans mt-4 space-y-2 text-sm text-white/85">
                {cipcConsequences.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
