export function ComplianceCards() {
  const complianceCards = [
    {
      title: "Tax Compliance",
      items: [
        "Company Income Tax Returns",
        "Individual Income Tax Returns",
        "Provisional Tax",
      ],
    },
    {
      title: "Monthly Compliance",
      items: [
        "VAT Returns",
        "EMP201 Submissions",
        "Payroll Processing",
      ],
    },
    {
      title: "Annual Compliance",
      items: [
        "Annual Financial Statements",
        "EMP501 Reconciliation",
        "IRP5 Certificates",
      ],
    },
    {
      title: "CIPC Compliance",
      items: [
        "Annual Returns",
        "Beneficial Ownership",
        "Company Reinstatements",
      ],
    },
  ];

  return (
    <section className="w-full">
      <div className="w-full border-y border-(--border-strong) cabinet">
        {complianceCards.map((card, index) => (
          <article
            key={card.title}
            className={`motion-reveal grid gap-4 border-b border-(--border-strong) py-9 last:border-b-0 md:grid-cols-[32px_minmax(220px,1fr)_minmax(300px,360px)] md:items-start md:gap-12 ${
              index === 1 ? 'motion-delay-1' : index >= 2 ? 'motion-delay-2' : ''
            }`}
          >
            <p className="pt-1 text-base font-medium hidden md:block">{index + 1}</p>
            <h3 className="text-[2rem] font-medium leading-[1.05] tracking-tight text-(--text-h)">{card.title}</h3>
            <p className="max-w-[360px] text-sm leading-snug text-(--text-muted) md:justify-self-end">
              {card.items.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}