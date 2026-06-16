import { ServiceCards } from "../components/service-cards";

export function Hero() {
  return (
    <section className="">
      <div className="container mx-auto px-4 py-12 flex gap-4 ">
        <div className="flex-1">

            <h2 className="text-8xl font-bold">Compliance, <br /> Made Simple.</h2>
        </div>
        <div className="text-lg flex-1 self-baseline-last">
            <p>Supporting individuals and small businesses with accounting, tax, payroll and compliance services that keep you organised, compliant and on time.</p>
        </div>
      </div>
      <ServiceCards />  
    </section>
  )
}