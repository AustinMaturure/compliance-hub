import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

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
          <a href="#home" className="flex items-center ">
            <img src={logo} alt="Compliance Hub logo" className="h-18 w-18 object-contain" />
            <span className="text-xl font-bold">compliance hub</span>
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
              className={`block h-0.5 w-5 bg-(--icon) transition ${
                isMenuOpen ? 'translate-y-[3px] rotate-45' : '-translate-y-1'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-(--icon) transition ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-(--icon) transition ${
                isMenuOpen ? 'translate-y-[-3px] -rotate-45' : 'translate-y-1'
              }`}
            />
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="cabinet fixed inset-0 z-50 flex min-h-screen flex-col bg-(--menu-bg) px-6 py-8 md:hidden">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center" onClick={closeMenu}>
              <img src={logo} alt="Compliance Hub logo" className="h-12 w-12 object-contain" />
              <span className="text-xl font-bold">compliance hub</span>
            </a>
            <button
              type="button"
              aria-label="Close menu"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-(--btn-solid-bg) text-(--btn-solid-text)"
              onClick={closeMenu}
            >
              <span className="absolute h-0.5 w-5 rotate-45 bg-(--btn-solid-text)" />
              <span className="absolute h-0.5 w-5 -rotate-45 bg-(--btn-solid-text)" />
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