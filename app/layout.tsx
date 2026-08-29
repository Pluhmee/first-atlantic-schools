import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SiteFooter from '@/components/site-footer';
import WhatsAppFloat from '@/components/whatsapp-float';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'First Atlantic Schools | Explore, Expand, Excel',
    template: '%s | First Atlantic Schools',
  },
  description:
    'First Atlantic Schools integrated learning tracks spanning preschool, nursery, primary, and college education in Ikorodu, Lagos, Nigeria.',
  keywords: [
    'First Atlantic Schools',
    'Schools in Ikorodu',
    'Lagos schools',
    'Private primary school Lagos',
    'High school Ikorodu',
  ],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-slate-50/50 font-sans text-slate-800 antialiased">
        <div className="flex-grow">{children}</div>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
