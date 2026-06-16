import compliance from '../assets/compliance.jpeg';
import { ComplianceCards } from '../components/compliance-cards';

export function ComplianceSection() {
  return (
    <section className="container mx-auto px-4 py-12">
     <div className='flex relative items-center'>
        <div className='flex-1'> 
            <h1 className=' absolute top-[10px] left-[40%] text-2xl font-bold bg-black text-white px-4 py-2 rounded-2xl w-fit'>Compliance Checklist</h1>
            <ComplianceCards />
        </div>
        <div className='flex-1'> 
            <img src={compliance} alt="Compliance" className='object-cover w-full h-full rounded-lg' />
        </div>
     </div>
    </section>
  )
}