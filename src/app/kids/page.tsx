'use client';

import { ProductCard } from '@/components/ProductCard';
import { kidsProducts } from '@/data/products';
import { useMemo, useState } from 'react';

const formatPkr = (value: number) =>
  new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
  }).format(value);

export default function KidsPage() {
  const [search, setSearch] = useState('');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState(Math.max(...kidsProducts.map((product) => product.price)));

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return kidsProducts.filter((product) => {
      const matchesQuery =
        !query ||
        [product.name, product.subtitle, product.category, product.badge ?? '', product.color ?? '']
          .join(' ')
          .toLowerCase()
          .includes(query);

      const matchesSize = !selectedSize || (product.sizes ?? []).includes(selectedSize);
      const matchesPrice = product.price <= maxPrice;

      return matchesQuery && matchesSize && matchesPrice;
    });
  }, [search, selectedSize, maxPrice]);

  return (
    <main className="page-fade mx-auto w-full max-w-container-max flex-1 px-margin-mobile py-stack-lg md:px-margin-desktop">
      <header className="section-reveal mb-stack-lg flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-display-lg text-[2.25rem] uppercase tracking-tight text-on-background sm:text-5xl md:text-[4rem] lg:text-[4.5rem]">
            FUTURE STARS: KIDS
            <span className="mt-stack-sm block h-2 w-24 bg-primary-container" />
          </h1>
          <p className="mt-stack-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Engineered for the next generation of playmakers. Lightweight, durable, and designed for explosive speed on any pitch.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="5.5" />
              <path d="M16 16l4.5 4.5" />
            </svg>
          </span>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search kids boots..."
            aria-label="Search kids products"
            className="w-full rounded-default border-none bg-surface-container py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary"
          />
        </div>
      </header>

      <div className="section-reveal grid grid-cols-1 gap-gutter md:grid-cols-4">
        <aside className="hidden h-fit space-y-stack-lg border-r border-outline-variant pr-gutter md:col-span-1 md:block">

          <div>
            <h3 className="mb-stack-sm font-label-caps text-label-caps text-on-surface">SIZE (UK KIDS)</h3>
            <div className="flex flex-wrap gap-2">
              {['1', '2', '3', '4', '5', '6'].map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(isSelected ? null : size)}
                    className={`flex h-10 w-10 items-center justify-center rounded-sm border text-body-md ${
                      isSelected ? 'border-primary-container bg-primary-container text-on-primary-container' : 'border-outline hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-stack-sm font-label-caps text-label-caps text-on-surface">PRICE</h3>
            <input
              type="range"
              min={Math.min(...kidsProducts.map((p) => p.price))}
              max={Math.max(...kidsProducts.map((p) => p.price))}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="w-full accent-primary-container"
            />
            <div className="mt-2 flex justify-between font-label-caps text-label-caps text-on-surface-variant">
              <span>{formatPkr(Math.min(...kidsProducts.map((p) => p.price)))}</span>
              <span>{formatPkr(maxPrice)}</span>
            </div>
          </div>
        </aside>

        <div className="section-reveal grid grid-cols-1 gap-gutter sm:grid-cols-2 md:col-span-3 lg:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} delay={index * 0.08} />
            ))
          ) : (
            <div className="col-span-full rounded-default border border-dashed border-outline-variant bg-surface-container-lowest p-8 text-center">
              <p className="font-headline-md text-headline-md text-on-surface">No matching products found.</p>
              <p className="mt-2 font-body-md text-body-md text-on-surface-variant">Try a different keyword like “junior”, “speed”, or “ground”.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
