const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 bg-[#395B50] text-white">
      <div className="container mx-auto motion-reveal px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4 motion-reveal">
            <p className="cabinet text-sm tracking-[0.2em] text-white/60 uppercase">
              Compliance Hub
            </p>
            <h2 className="cabinet max-w-md text-3xl font-bold leading-tight md:text-4xl">
              Ready to get compliant?
            </h2>
            <p className="public-sans max-w-md text-sm text-white/70">
              Accounting, payroll and tax solutions designed to keep your records
              accurate and your deadlines stress-free.
            </p>
          </div>

          <div className="motion-reveal motion-delay-1">
            <h3 className="cabinet text-sm font-semibold tracking-wide text-white/90">
              Quick links
            </h3>
            <ul className="public-sans mt-4 space-y-2 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:translate-x-0.5 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="motion-reveal motion-delay-2">
            <h3 className="cabinet text-sm font-semibold tracking-wide text-white/90">
              Let&apos;s talk
            </h3>
            <a
              href="mailto:parthematurure@gmail.com"
              className="public-sans mt-4 inline-block text-sm text-white/70 transition hover:text-white"
            >
              Mail us
            </a>
            <p className="public-sans mt-4 text-sm text-white/70">
              Mon - Fri, 08:00 - 17:00
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5">
          <p className="public-sans text-xs text-white/55">
          © {year} compliance hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
