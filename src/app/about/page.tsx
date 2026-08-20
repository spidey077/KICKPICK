'use client';

import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';

const orderingSteps = [
  {
    number: '01',
    title: 'Pick your pair',
    copy: 'Every listing shows the exact UK size we hold and its condition grade.',
  },
  {
    number: '02',
    title: 'Message on WhatsApp',
    copy: 'Tap the order bar or message 03345728257 with the ref code.',
  },
  {
    number: '03',
    title: 'Confirm & dispatch',
    copy: 'We confirm availability, share delivery cost, and ship next day.',
  },
];

export default function AboutPage() {
  return (
    <main className="page-fade mx-auto w-full max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-24">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-[540px] overflow-hidden rounded-[32px] bg-on-surface px-6 py-12 text-white shadow-soft md:px-12 md:py-20"
      >
        <img src="/Hero%201.webp" alt="Football boots on the pitch" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative flex min-h-[436px] max-w-3xl flex-col justify-end">
          <span className="mb-5 block font-label-caps text-label-caps uppercase tracking-[0.18em] text-primary-fixed">
            The KICKPICK story
          </span>
          <h1 className="font-display-lg text-[2.8rem] leading-[0.98] sm:text-6xl md:text-[5.5rem] md:leading-[0.92]">
            Quality kicks,
            <br />
            fair prices.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-xl sm:leading-relaxed">
            KickPick started on Instagram with one simple idea: good football boots cost too much in Pakistan, and plenty of great pairs get worn twice and shelved. We source those pairs, inspect and clean them, then list them at a price a student baller can actually pay.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="py-20 md:py-28"
      >
        <div className="mb-10 max-w-xl">
          <span className="mb-3 block font-label-caps text-label-caps uppercase tracking-[0.18em] text-on-surface">Simple by design</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">How ordering works</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {orderingSteps.map((step) => (
            <article key={step.number} className="border-t-2 border-primary bg-surface-container-low p-6 md:p-8">
              <span className="font-label-caps text-label-caps text-on-surface">{step.number}</span>
              <h3 className="mt-12 text-2xl font-bold text-on-surface">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-on-surface-variant">{step.copy}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="mt-16 grid gap-8 rounded-[32px] bg-primary-container p-7 md:mt-20 md:grid-cols-[1fr_auto] md:items-end md:p-12"
      >
        <div>
          <span className="mb-3 block font-label-caps text-label-caps uppercase tracking-[0.18em] text-primary-fixed">Reach us</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Ready to find your pair?</h2>
          <div className="mt-7 space-y-3 text-base text-on-primary-container">
            <p><strong>WhatsApp</strong> - 03345728257</p>
            <p><strong>Instagram</strong> - <a href="https://instagram.com/kickpick.pk" target="_blank" rel="noreferrer" className="underline underline-offset-4">@kickpick.pk</a></p>
            <p><strong>Delivery</strong> - nationwide, Pakistan</p>
          </div>
        </div>
        <a
          href="https://wa.me/923345728257?text=Hi%20KICKPICK.PK%20I%20want%20to%20find%20a%20pair"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-on-surface px-6 py-4 font-label-caps text-label-caps text-primary transition-transform duration-200 hover:-translate-y-0.5"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          MESSAGE US
        </a>
      </motion.section>
    </main>
  );
}