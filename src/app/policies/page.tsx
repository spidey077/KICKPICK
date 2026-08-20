'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { Icon } from '@/components/Icon';

const faqs = [
  {
    question: 'How do I return an item?',
    answer:
      'Contact us on WhatsApp with your order number and the product you want to return. We will guide you through the quick return process and confirm the next steps.',
  },
  {
    question: 'When will I receive my refund?',
    answer:
      'Once your return is received and approved, refunds are processed through the agreed payment method.',
  },
  {
    question: 'Do I pay for return shipping?',
    answer:
      'Return shipping charges are the customer\'s responsibility unless the wrong or defective item was sent.',
  },
  {
    question: 'Are all products eligible for return?',
    answer:
      'The shoes must be unused, unworn, and returned in the same condition as received. Worn, damaged, or used-after-delivery products are not eligible for a refund.',
  },
];

export default function PoliciesPage() {
  const reduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="page-fade mx-auto w-full max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-24">
      <section className="section-reveal rounded-[32px] border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-soft md:p-12">
        <div className="mb-10 max-w-3xl">
          <span className="mb-4 block font-label-caps text-label-caps uppercase tracking-[0.18em] text-on-surface">
            Customer Care
          </span>
          <h1 className="font-display-lg text-[2.25rem] text-on-surface sm:text-5xl md:text-[4rem] lg:text-[4.5rem]">
            7-Day Refund &amp; Return Policy
          </h1>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-outline-variant/50 bg-surface-container-low p-6">
              <h2 className="mb-4 text-2xl font-bold text-on-surface sm:text-3xl md:text-headline-md">Overview</h2>
              <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-body-md">
                We offer a 7-day refund and return policy from the date you receive your order.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-label-caps text-label-caps uppercase tracking-[0.14em] text-on-surface">Eligibility</h3>
              <ul className="space-y-3 text-base text-on-surface-variant sm:text-lg md:text-body-md">
                <li className="flex gap-3"><Icon name="check" className="h-5 w-5 text-primary" /> The shoes must be unused and unworn.</li>
                <li className="flex gap-3"><Icon name="check" className="h-5 w-5 text-primary" /> The shoes must be returned in the same condition as received..</li>
                <li className="flex gap-3"><Icon name="check" className="h-5 w-5 text-primary" /> You must contact us within 7 days of receiving your order.</li>
                <li className="flex gap-3"><Icon name="check" className="h-5 w-5 text-primary" /> Return shipping charges are the customer&apos;s responsibility unless the wrong or defective item was sent.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-outline-variant/50 bg-surface-container-low p-6">
              <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-body-md">
                Once we receive and inspect the returned shoes, we will notify you about the approval of your refund.
              </p>
              <p className="mt-4 text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-body-md">
                If approved, your refund will be processed through the agreed payment method.
              </p>
              <p className="mt-4 text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-body-md">
                Note: Due to the nature of thrift/pre-owned products, minor signs of previous use may be present. Products that have been worn after delivery or damaged by the customer are not eligible for a refund.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-primary/20 bg-primary-container/50 p-6">
            <h3 className="mb-4 text-2xl font-bold text-on-surface sm:text-3xl md:text-headline-md">Need help?</h3>
            <p className="mb-6 text-base text-on-surface-variant sm:text-lg md:text-body-md">
              Reach out to our team on WhatsApp with your order details and we’ll help with a return or exchange quickly.
            </p>
            <a
              href="https://wa.me/923345728257?text=Hi%20KickPick%2C%20I%20want%20to%20request%20a%20return%20or%20exchange%20for%20my%20order."
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-on-primary-container px-5 py-3 font-label-caps text-label-caps text-primary-container transition-transform duration-200 hover:scale-[1.01]"
              style={{ backgroundColor: '#191c1e', color: '#DEFE00' }}
            >
              <Icon name="chat" className="h-4 w-4" />
              REQUEST RETURN
            </a>
          </aside>
        </div>
      </section>

      <section className="section-reveal mt-12 rounded-[32px] border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-soft md:p-10">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-on-surface sm:text-4xl md:text-headline-lg">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface-container-low">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span className="font-label-caps text-label-caps tracking-[0.12em] text-on-surface">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.2 }}
                    className="text-primary"
                  >
                    <Icon name="add" className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={reduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={reduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                    >
                      <p className="px-5 pb-5 text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-body-md">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
