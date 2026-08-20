'use client';

import { ProductCard } from '@/components/ProductCard';
import { menProducts } from '@/data/products';
import { useMemo, useState } from 'react';

const formatPkr = (value: number) =>
  new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
  }).format(value);

export default function MenPage() {
  const [search, setSearch] = useState('');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState(Math.max(...menProducts.map((product) => product.price)));

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return menProducts.filter((product) => {
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
      <div className="section-reveal mb-stack-lg flex flex-col items-end gap-stack-md md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-display-lg text-[2.25rem] uppercase tracking-tight text-on-surface sm:text-5xl md:text-[4rem] lg:text-[4.5rem]">
            MEN&apos;S PERFORMANCE
          </h1>
          <p className="mt-2 text-base text-on-surface-variant sm:text-lg md:text-body-lg">
            Engineered for speed, precision, and dominance on the pitch.
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
            placeholder="Search boots..."
            aria-label="Search men's products"
            className="w-full rounded-default border-none bg-surface-container py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="section-reveal flex flex-col gap-gutter md:flex-row">
        <aside className="h-fit w-full rounded-default border border-outline-variant/30 bg-surface-container-lowest p-stack-md md:sticky md:top-24 md:w-64">
          <h3 className="mb-stack-md font-headline-md text-headline-md">FILTERS</h3>

          <div className="mb-stack-md">
            <h4 className="mb-2 font-label-caps text-label-caps text-on-surface-variant">SIZE</h4>
            <div className="grid grid-cols-4 gap-2">
              {['7', '8', '9', '10', '11', '12', '13'].map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(isSelected ? null : size)}
                    className={`rounded-default border py-1 text-center text-sm ${
                      isSelected ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-stack-md">
            <h4 className="mb-2 font-label-caps text-label-caps text-on-surface-variant">PRICE</h4>
            <input
              type="range"
              min={Math.min(...menProducts.map((p) => p.price))}
              max={Math.max(...menProducts.map((p) => p.price))}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="w-full accent-primary"
            />
            <div className="mt-1 flex justify-between font-label-caps text-label-caps text-on-surface-variant">
              <span>PKR 6,999</span>
              <span>{formatPkr(maxPrice)}</span>
            </div>
          </div>
        </aside>

        <div className="section-reveal grid flex-1 grid-cols-1 gap-gutter sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} delay={index * 0.08} />
            ))
          ) : (
            <div className="col-span-full rounded-default border border-dashed border-outline-variant bg-surface-container-lowest p-8 text-center">
              <p className="font-headline-md text-headline-md text-on-surface">No matching products found.</p>
              <p className="mt-2 font-body-md text-body-md text-on-surface-variant">Try another keyword like “elite”, “speed”, or “firm ground”.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
