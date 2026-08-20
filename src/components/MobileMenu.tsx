'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { BrandLogo } from '@/components/BrandLogo';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Men', href: '/men' },
  { label: 'Kids', href: '/kids' },
  { label: 'About', href: '/about' },
  { label: 'Policies', href: '/policies' },
  {
    label: 'Contact',
    href: 'https://wa.me/923345728257?text=Hi%20KICKPICK.PK%20I%20need%20help',
    external: true,
  },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/#reviews') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((element) => !element.hasAttribute('disabled'));

      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    };

    const timer = window.setTimeout(() => firstLinkRef.current?.focus(), 50);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[60] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-background/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          />

          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-surface-container-lowest p-5 shadow-[0_20px_80px_rgba(25,28,30,0.18)]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30, bounce: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" onClick={onClose} aria-label="KickPick home" className="flex items-center">
                <BrandLogo compact className="text-on-surface" />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-surface-container text-on-surface transition-transform duration-200 hover:scale-105"
                onClick={onClose}
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <motion.span
                    className="absolute h-0.5 w-5 rounded-full bg-on-surface"
                    animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                    transition={{ duration: reduceMotion ? 0 : 0.22 }}
                  />
                  <motion.span
                    className="absolute h-0.5 w-5 rounded-full bg-on-surface"
                    animate={isOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.18 }}
                  />
                  <motion.span
                    className="absolute h-0.5 w-5 rounded-full bg-on-surface"
                    animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                    transition={{ duration: reduceMotion ? 0 : 0.22 }}
                  />
                </span>
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isExternal = Boolean(item.external || item.href.startsWith('http'));
                const active = isExternal ? false : isActiveLink(item.href);
                const commonClasses = `flex items-center justify-between rounded-xl border px-4 py-3 text-left font-label-caps text-[0.78rem] tracking-[0.12em] transition-all duration-200 active:scale-[0.98] ${
                  active
                    ? 'border-primary bg-primary-container text-on-primary-container'
                    : 'border-transparent text-on-surface hover:border-outline-variant hover:bg-primary-container hover:text-on-primary-container'
                }`;

                return (
                  <motion.div
                    key={item.label}
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: reduceMotion ? 0 : 0.2 }}
                  >
                    {isExternal ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className={commonClasses}>
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <Link href={item.href} onClick={onClose} ref={index === 0 ? firstLinkRef : undefined} className={commonClasses}>
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-auto space-y-3 border-t border-outline-variant pt-5">
              <a
                href="https://wa.me/923345728257?text=Hi%20KICKPICK.PK%2C%20I%20have%20a%20question%20about%20your%20shoes."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-primary-container px-4 py-3 font-label-caps text-label-caps text-on-primary-container transition-transform duration-200 hover:scale-[1.01]"
              >
                CONTACT / WHATSAPP
              </a>

              <Link
                href="/policies"
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-full border border-outline-variant bg-surface px-4 py-3 font-label-caps text-label-caps text-on-surface transition-transform duration-200 hover:scale-[1.01]"
              >
                VIEW POLICIES
              </Link>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
