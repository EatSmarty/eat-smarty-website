import Header from '@/components/header/header';
import Navigation from '@/components/navigation/navigation';
import varient from '@/utilise/varient';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';

const mulish = Mulish({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: `${varient.title}`,
    template: `%s | ${varient.title}`,
  },
  description: 'ensuring your dietary preferences are met'
    + 'with absolute ease and confidence',
  keywords: `${varient.keywords}`,
  openGraph: {
    title: `${varient.title}`,
    description: 'We specialize in seamlessly identifying halal food for you'
      + 'by simply scanning the products barcode',
    url: 'https://eatsmarty.com/',
    siteName: `${varient.brandName}`,
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: 'Eatsmarty banner',
      },
      {
        url: '',
        width: 1800,
        height: 1600,
        alt: 'Eatsmarty banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={clsx(
        'flex items-center justify-center',
      )}
      >
        <div className={clsx(
          `${mulish.className}`,
          'w-full',
        )}
        >
          <Header />
          {children}
          <Navigation />
        </div>
      </body>
    </html>
  );
}
