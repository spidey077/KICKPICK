'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { Icon } from '@/components/Icon';
import { MobileMenu } from '@/components/MobileMenu';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'MEN', href: '/men' },
  { label: 'KIDS', href: '/kids' },
  { label: 'ABOUT', href: '/about' },
  { label: 'POLICIES', href: '/policies' },
  {
    label: 'CONTACT',
    href: 'https://wa.me/923345728257?text=Hi%20KICKPICK.PK%20I%20need%20help',
    external: true,
  },
];

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <nav
        className={`${pathname === '/' ? 'absolute left-0 top-0 md:sticky md:top-0' : 'sticky top-0'} z-50 w-full border-b border-white/20 bg-surface-container-lowest/40 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}
      >
        <div className="relative mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-stack-md md:px-margin-desktop">
          <div className="hidden md:flex items-center justify-start">
            <Link href="/" aria-label="KICKPICK.PK home" className="flex items-center text-on-surface">
              <BrandLogo compact hideImageOnDesktop className="text-on-surface" />
            </Link>
          </div>

          <div className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-7 md:flex">
            {navItems.map((item) => {
              const active = item.external ? false : isActiveLink(item.href);
              const linkClasses = `relative pb-1 uppercase font-label-caps text-[0.78rem] font-bold tracking-[0.18em] transition-colors duration-200 md:text-[0.92rem] ${
                active ? 'border-b-2 border-primary text-black' : 'text-black hover:text-black'
              }`;

              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClasses}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={linkClasses}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex w-full items-center justify-between gap-3 md:hidden">
            <button
              type="button"
              className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-surface-container-lowest"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="relative flex h-4 w-5 items-center justify-center">
                <motion.span
                  className="absolute h-0.5 w-5 rounded-full bg-on-surface"
                  animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22 }}
                />
                <motion.span
                  className="absolute h-0.5 w-5 rounded-full bg-on-surface"
                  animate={menuOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.15 }}
                />
                <motion.span
                  className="absolute h-0.5 w-5 rounded-full bg-on-surface"
                  animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22 }}
                />
              </span>
            </button>

            <div className="flex flex-1 flex-col items-center justify-center">
              <Link href="/" aria-label="KICKPICK.PK home" className="flex items-center text-on-surface">
                <BrandLogo compact hideLabel className="text-on-surface" />
              </Link>
              <span className="mt-1 text-center text-[0.68rem] uppercase tracking-[0.28em] text-on-surface-variant">
                KICKPICK.PK
              </span>
            </div>

            <div className="h-10 w-10" />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/#collections"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold uppercase text-black shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-fixed"
            >
              SHOP NOW <Icon name="arrow-forward" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>



      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <a
        href="https://wa.me/923345728257?text=Hi%20KICKPICK.PK%20I%20need%20help"
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
        className="fixed bottom-10 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
      >
        <Icon name="whatsapp" className="h-6 w-6" />
      </a>
    </>
  );
}
