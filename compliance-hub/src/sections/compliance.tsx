import { ComplianceCards } from '../components/compliance-cards';

export function ComplianceSection() {
  return (
    <section id="compliance" className="py-8 text-neutral-900 md:py-24">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[minmax(260px,360px)_1fr] lg:items-start lg:gap-20">
        <div className="motion-reveal max-w-[320px]">
          <h1 className="text-6xl font-medium leading-[0.9] tracking-tight md:text-7xl">
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