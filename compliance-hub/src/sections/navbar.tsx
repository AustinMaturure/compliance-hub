import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="cabinet nav-shell motion-reveal is-visible">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#home" className="text-xl font-bold hover:opacity-75">
            compliance hub
          </a>
          <ul className="hidden gap-4 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:-translate-y-0.5 hover:opacity-70">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full  md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`block h-0.5 w-5 bg-black transition ${
                isMenuOpen ? 'translate-y-[3px] rotate-45' : '-translate-y-1'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-black transition ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-black transition ${
                isMenuOpen ? 'translate-y-[-3px] -rotate-45' : 'translate-y-1'
              }`}
            />
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="cabinet fixed inset-0 z-50 flex min-h-screen flex-col bg-[#f5f5f3] px-6 py-8 md:hidden">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold" onClick={closeMenu}>
              compliance hub
            </a>
            <button
              type="button"
              aria-label="Close menu"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black text-white"
              onClick={closeMenu}
            >
              <span className="absolute h-0.5 w-5 rotate-45 bg-white" />
              <span className="absolute h-0.5 w-5 -rotate-45 bg-white" />
            </button>
          </div>

          <ul className="mt-12 flex flex-1 flex-col justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-5xl font-semibold leading-none tracking-tight sm:text-6xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}