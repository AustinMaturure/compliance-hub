import React from 'react';

export function PracticeSection() {
    const services = [
        {
        title: "Financial Statements",
        description:
        "Preparation of annual financial statements that provide a clear and accurate view of your business performance.",
        },
        {
        title: "Management Reporting",
        description:
        "Monthly and management accounts that help you track cash flow, profitability, and key financial metrics.",
        },
        {
        title: "Bookkeeping",
        description:
        "Accurate recording and maintenance of financial transactions to keep your business compliant and organized.",
        },
        {
        title: "Tax Compliance",
        description:
        "Company and individual tax returns, provisional tax, VAT submissions, and ongoing tax compliance support.",
        },
        {
        title: "SARS Services",
        description:
        "SARS registrations, audit assistance, correspondence, and liaison to help resolve tax matters efficiently.",
        },
        {
        title: "Payroll Services",
        description:
        "Payroll processing, EMP201 submissions, EMP501 reconciliations, IRP5 certificates, and UIF compliance.",
        },
        {
        title: "Company Registration",
        description:
        "New company registrations and business setup services through CIPC with professional guidance.",
        },
        {
        title: "CIPC Compliance",
        description:
        "Annual returns, beneficial ownership updates, company reinstatements, and ongoing statutory compliance.",
        },
        ];

    return (
        <section id="services" className="container mx-auto bg-[#395b50]/10 p-5 md:rounded-xl md:p-8">
            <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
            <h1 className="cabinet motion-reveal w-full text-left text-4xl font-bold sm:text-6xl md:w-[58%] md:text-5xl lg:text-6xl">Our Practice Areas <br /> & Services</h1>
            <p className="motion-reveal motion-delay-1 w-full text-left text-sm font-light leading-relaxed text-gray-700 sm:text-base md:w-[42%]">
  Comprehensive accounting, tax, payroll, and compliance solutions designed to help individuals and businesses stay financially organized and compliant.
</p>
            </div>
          
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
  {services.map((service, i) => (
    <div
      key={service.title}
      className="motion-reveal motion-reveal-card lift-card flex h-full flex-col rounded-xl bg-[#fefefe] p-6"
      style={{ '--motion-delay': `${i * 60}ms` } as React.CSSProperties}
    >
      <h2 className="cabinet text-2xl font-bold mb-2 leading-tight md:mb-3 md:min-h-[64px]">
        {service.title}
      </h2>
      <p className="flex-1 text-sm leading-relaxed text-gray-600">
        {service.description}
      </p>
    </div>
  ))}
</div>
        </section>
    )
}