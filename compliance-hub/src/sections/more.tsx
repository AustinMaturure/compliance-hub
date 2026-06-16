import more from '../assets/more-left.jpg';

export function MoreSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
        <div className="flex-1">
          <img
            src={more}
            alt="More"
            className="h-[420px] w-full rounded-lg object-cover md:h-[680px]"
          />
        </div>
        <div className="flex flex-1 items-center justify-center flex-col">
          <h1 className="p-4 text-5xl font-bold md:text-9xl text-center">
            Don't be shy to talk tax with us
          </h1>
          <button className="bg-black text-white px-6 py-4 rounded-2xl font-bold">
            Get in touch
          </button>
        </div>
        
      </div>
    </section>
  );
}