import more from '../assets/contact.webp';
import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function MoreSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
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
            className="min-h-full w-full rounded-lg object-cover md:h-[680px]"
          />
        </div>
        <div className="motion-reveal motion-delay-1 flex flex-1 flex-col items-center justify-center gap-6 rounded-lg border border-black/10 p-6 md:p-10">
          <h1 className="cabinet text-center text-4xl font-bold md:text-6xl">
          Need assistance with your compliance obligations?
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
              className="rounded-xl border border-black/20 px-4 py-3 text-[16px] outline-none transition focus:border-black"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-xl border border-black/20 px-4 py-3 text-[16px] outline-none transition focus:border-black"
            />
            <textarea
              placeholder="How can we help?"
              required
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="resize-none rounded-xl border border-black/20 px-4 py-3 text-[16px] outline-none transition focus:border-black"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="apple-button rounded-2xl bg-black px-6 py-4 font-bold text-white hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Contact us'}
            </button>

            {status === 'success' && (
              <p className="text-center text-sm font-medium text-green-600">
                Message sent! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm font-medium text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}