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
    <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-4 items-center">
        {complianceCards.map((card) => (
          <div key={card.title} className="bg-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold">{card.title}</h3>
            <ul className=" list-inside">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}