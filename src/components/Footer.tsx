'use client';

import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import { Icon } from '@/components/Icon';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-auto w-full bg-on-surface text-white"
    >
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-margin-mobile py-16 md:grid-cols-[1.5fr_0.8fr_0.8fr_1.4fr] md:gap-10 md:px-margin-desktop md:py-20">
        <div>
          <a href="/" className="mb-6 flex items-center text-white">
            <BrandLogo compact className="text-white" />
          </a>
          <p className="max-w-sm text-lg font-semibold leading-relaxed text-white/70">
            Precision footwear for players who demand speed, control, and confidence on every touch.
          </p>
          <span className="mt-8 inline-block rounded-full border border-primary/50 px-4 py-2 font-label-caps text-label-caps font-bold tracking-[0.14em] text-primary">
            PRE-OWNED. GAME-READY.
          </span>
        </div>

        <div>
          <h4 className="mb-5 font-label-caps text-label-caps font-bold tracking-[0.16em] text-primary">SHOP</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="text-lg font-bold text-white/75 transition-colors hover:text-primary">Home</Link></li>
            <li><Link href="/men" className="text-lg font-bold text-white/75 transition-colors hover:text-primary">Men&apos;s</Link></li>
            <li><Link href="/kids" className="text-lg font-bold text-white/75 transition-colors hover:text-primary">Kids</Link></li>
            <li><Link href="/about" className="text-lg font-bold text-white/75 transition-colors hover:text-primary">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-label-caps text-label-caps font-bold tracking-[0.16em] text-primary">INFO</h4>
          <ul className="space-y-4">
            <li><Link href="/policies" className="text-lg font-bold text-white/75 transition-colors hover:text-primary">Policies</Link></li>
            <li>
              <a
                href="https://wa.me/923345728257?text=Hi%20KickPick%2C%20I%20want%20to%20ask%20a%20question."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-lg font-bold text-white/75 transition-colors hover:text-primary"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-primary" />
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-label-caps text-label-caps font-bold tracking-[0.16em] text-primary">REACH US</h4>
          <ul className="space-y-5">
            <li>
              <a
                href="https://wa.me/923345728257?text=Hi%20KICKPICK.PK%20I%20need%20help"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-bold text-white transition-colors hover:text-primary"
              >
                <Icon name="whatsapp" className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">03345728257</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/kickpick.pk"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-bold text-white transition-colors hover:text-primary"
              >
                <Icon name="instagram" className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">@kickpick.pk</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15 px-margin-mobile py-6 text-center md:flex md:items-center md:justify-between md:px-margin-desktop">
        <p className="mb-2 text-sm font-semibold text-white/50 md:mb-0">
          Designed with premium materials, expert craftsmanship, and customer-first support.
        </p>
        <p className="text-sm font-semibold text-white/50">
          © 2026 KICKPICK PK. Built and maintained by{' '}
          <a
            href="https://imdadullah.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary underline decoration-current underline-offset-4 transition-opacity hover:opacity-80"
          >
            Imdadullah
          </a>
          .
        </p>
      </div>
    </motion.footer>
  );
}
