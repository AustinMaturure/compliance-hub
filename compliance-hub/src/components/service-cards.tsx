export function ServiceCards() {
  const cardBgClasses = [
    "service-card-tint-1",
    "service-card-tint-2",
    "service-card-tint-3",
    "service-card-tint-4",
    "service-card-tint-5",
    "service-card-tint-6",
  ];

  const services = [
    {
      title: "Accounting & Financial Reporting",
      description:
        "Accurate bookkeeping and financial reporting to keep your business organized and informed.",
    },
    {
      title: "Tax & SARS Compliance",
      description:
        "Professional tax preparation and compliance services to help you meet all SARS requirements.",
    },
    {
      title: "Payroll Management",
      description:
        "Reliable payroll processing and employee compliance support delivered on time.",
    },
    {
      title: "CIPC Services",
      description:
        "Comprehensive company registration and compliance services for South African businesses.",
    },
    {
      title: "Business Compliance Support",
      description:
        "Practical guidance to help your business remain compliant with statutory obligations.",
    },
    {
      title: "SARS Audit Assistance",
      description:
        "Dedicated support and representation when responding to SARS audits and enquiries.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="autoscroll">
        <div className="autoscroll-track">
          {[0, 1].map((group) => (
            <div className="autoscroll-group" key={group} aria-hidden={group === 1}>
              {services.map((service, index) => (
                <div
                  key={`${service.title}-${group}`}
                  className={`service-card motion-reveal lift-card border border-(--border) ${cardBgClasses[index % cardBgClasses.length]} min-h-96 rounded-lg p-8 flex flex-col justify-between`}
                >
                  <h3 className="text-2xl font-bold text-(--text-h)">{service.title}</h3>
                  <p className="text-(--text-muted)">{service.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}