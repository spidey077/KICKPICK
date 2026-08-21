'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '@/components/Icon';
import { ProductCard } from '@/components/ProductCard';
import ScrollExpand from '@/components/ScrollExpand';
import { kidsProducts, menProducts, reviews } from '@/data/products';

const featuredMen = menProducts.slice(0, 2);
const featuredKids = kidsProducts.slice(0, 2);

export default function HomePage() {
  const reviewsRef = useRef<HTMLDivElement | null>(null);

  const showNextReview = () => {
    const reviewsContainer = reviewsRef.current;
    const firstCard = reviewsContainer?.querySelector<HTMLElement>('[data-review-card]');
    if (!reviewsContainer || !firstCard) return;

    const cardStep = firstCard.offsetWidth + 24;
    const isAtEnd = reviewsContainer.scrollLeft + reviewsContainer.clientWidth >= reviewsContainer.scrollWidth - 8;
    reviewsContainer.scrollTo({
      left: isAtEnd ? 0 : reviewsContainer.scrollLeft + cardStep,
      behavior: 'smooth',
    });
  };

  return (
    <main className="page-fade flex w-full flex-1 flex-col">
      <section className="relative w-full">
        <ScrollExpand
          src="/Hero%201.webp"
          alt="Hero background"
          title="PRE OWNED KICKS"
          scrollHint="Scroll to explore"
          desktopOnly
          useWindowScroll
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <h1 className="mb-stack-md font-display-lg text-5xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[6.5rem]">
              PRE OWNED KICKS
            </h1>
            <p className="mb-stack-lg max-w-3xl font-body-lg text-body-lg text-white/90 md:text-xl lg:text-2xl">
              Take your game to the next level with our footwear
            </p>
            <Link
              href="#collections"
              className="inline-block rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-fixed"
            >
              Shop Collections
            </Link>
          </div>
        </ScrollExpand>
      </section>

      <motion.section
        id="collections"
        initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-container-max px-margin-mobile py-24 md:px-margin-desktop"
      >
        <div className="mb-stack-lg flex items-end justify-between">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">OUR COLLECTION</h2>
        </div>

        <div className="space-y-10">
          <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-soft md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="font-headline-md text-headline-md text-on-surface">Men</h3>
              <Link
                href="/men"
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary-container px-5 py-3 text-sm font-semibold uppercase text-black shadow-sm transition-all duration-200 hover:bg-primary/90 hover:text-black"
              >
                Show More <Icon name="arrow-forward" className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              {featuredMen.map((product, index) => (
                <ProductCard key={product.id} product={product} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-soft md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="font-headline-md text-headline-md text-on-surface">Kids</h3>
              <Link
                href="/kids"
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary-container px-5 py-3 text-sm font-semibold uppercase text-black shadow-sm transition-all duration-200 hover:bg-primary/90 hover:text-black"
              >
                Show More <Icon name="arrow-forward" className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              {featuredKids.map((product, index) => (
                <ProductCard key={product.id} product={product} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="reviews"
        initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-hidden bg-surface py-24"
      >
        <div className="mx-auto mb-stack-lg flex max-w-container-max items-center justify-between gap-4 px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">WHAT OUR CUSTOMERS SAY</h2>
        </div>
        <div ref={reviewsRef} className="hide-scrollbar mx-auto flex max-w-container-max gap-gutter overflow-x-auto scroll-smooth pb-8 pl-margin-mobile md:pl-0">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              data-review-card
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-[300px] rounded-xl border border-black/30 bg-surface-container-lowest p-8 shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] md:min-w-[400px]"
            >
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex} className={starIndex < 4 ? 'text-primary' : 'text-outline-variant'}>
                    <Icon name="star" className="h-5 w-5" />
                  </span>
                ))}
              </div>
              <p className="mb-6 font-body-lg text-body-lg text-on-surface italic">"{review.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-variant font-label-caps text-on-surface">
                  {review.name.slice(0, 2)}
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface">{review.name}</p>
                  <p className="text-sm text-on-surface-variant">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="min-w-[24px]" />
        </div>
        <div className="mx-auto flex max-w-container-max justify-end px-margin-mobile md:hidden">
          <button
            type="button"
            aria-label="Show next customer review"
            onClick={showNextReview}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black bg-surface-container-lowest text-black shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white"
          >
            <Icon name="arrow-forward" className="h-5 w-5" />
          </button>
        </div>
      </motion.section>
    </main>
  );
}
