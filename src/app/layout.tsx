import type { Metadata } from 'next';
import './globals.css';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageLoader } from '@/components/PageLoader';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'KICKPICK.PK',
  description: 'KICKPICK.PK pre-owned football footwear for men and kids.',
  icons: [
    {
      rel: 'icon',
      url: '/LOGO.jpeg',
    },
    {
      rel: 'apple-touch-icon',
      url: '/LOGO.jpeg',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <PageLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
