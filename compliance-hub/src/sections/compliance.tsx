import { ComplianceCards } from '../components/compliance-cards';

export function ComplianceSection() {
  return (
    <section id="compliance" className="py-8 text-neutral-900 md:py-24">
      <div className="container mx-auto grid gap-12 px-4 md:gap-16 lg:grid-cols-[minmax(260px,360px)_1fr] lg:items-start lg:gap-24">
        <div className="motion-reveal max-w-[320px]">
          <h1 className="cabinet text-4xl font-medium leading-[0.9] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Compliance Checklist
          </h1>
        </div>
        <div className="motion-reveal motion-delay-1 w-full">
          <ComplianceCards />
        </div>
      </div>
    </section>
  );
}