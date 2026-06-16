export function ServiceCards() {
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
              {services.map((service) => (
                <div key={`${service.title}-${group}`} className="service-card bg-white p-8 rounded-lg min-h-96 flex flex-col justify-between">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}