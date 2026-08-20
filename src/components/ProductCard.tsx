'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import type { Product } from '@/data/products';

const formatPkr = (value: number) =>
  new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
  }).format(value);

const whatsappUrl = (product: Product) => {
  const message = encodeURIComponent(
    `Hi, I want to order ${product.name} in ${product.sizes?.[0] || 'my size'} for ${product.category}. Price: ${formatPkr(product.price)}.`
  );
  return `https://wa.me/923345728257?text=${message}`;
};

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface shadow-soft"
    >
      <div className="relative h-64 overflow-hidden bg-surface-container-lowest p-6">
        {product.badge ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold text-on-secondary">
            {product.badge}
          </span>
        ) : null}
        {discountPercent > 0 ? (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-primary-container px-2.5 py-1 text-[10px] font-bold text-on-primary-container">
            SAVE {discountPercent}%
          </span>
        ) : null}
        <div className="relative h-full w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-headline-md text-headline-md text-on-surface">{product.name}</h3>
          <div className="text-right">
            {product.originalPrice && product.originalPrice > product.price ? (
              <span className="block text-[12px] text-on-surface-variant line-through">{formatPkr(product.originalPrice)}</span>
            ) : null}
            <span className="block text-[20px] font-bold text-on-surface">{formatPkr(product.price)}</span>
          </div>
        </div>
        <p className="mb-4 text-sm text-on-surface-variant">{product.subtitle}</p>

        <div className="mb-6 mt-auto flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={index < Math.floor(product.rating) ? 'text-primary' : 'text-outline-variant'}>
              <Icon name="star" className="h-[14px] w-[14px]" />
            </span>
          ))}
          <span className="ml-2 text-[12px] text-on-surface-variant">({product.reviews})</span>
        </div>

        <a
          href={whatsappUrl(product)}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 font-label-caps text-label-caps text-on-primary transition-colors hover:bg-primary"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          ORDER ON WHATSAPP
        </a>
      </div>
    </motion.article>
  );
}
