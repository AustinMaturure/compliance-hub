import more from '../assets/more.webp';
import { useState } from 'react';
import type { FormEvent } from 'react';

export function MoreSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Tax enquiry from ${name || 'Website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:parthematurure@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="container mx-auto px-4 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
        <div className="motion-reveal flex-1">
          <img
            src={more}
            alt="More"
            loading="lazy"
            decoding="async"
            className="h-[420px] w-full rounded-lg object-cover md:h-[680px]"
          />
        </div>
        <div className="motion-reveal motion-delay-1 flex flex-1 flex-col items-center justify-center gap-6 rounded-lg border border-black/10 p-6 md:p-10">
          <h1 className="cabinet text-center text-4xl font-bold md:text-6xl">
            Don&apos;t be shy to talk tax with us
          </h1>
          <form
            className="flex w-full max-w-md flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="rounded-xl border border-black/20 px-4 py-3 text-sm outline-none transition focus:border-black"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-xl border border-black/20 px-4 py-3 text-sm outline-none transition focus:border-black"
            />
            <textarea
              placeholder="How can we help?"
              required
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="resize-none rounded-xl border border-black/20 px-4 py-3 text-sm outline-none transition focus:border-black"
            />
            <button
              type="submit"
              className="apple-button rounded-2xl bg-black px-6 py-4 font-bold text-white hover:-translate-y-0.5"
            >
              Contact us
            </button>
         
          </form>
        </div>
      </div>
    </section>
  );
}