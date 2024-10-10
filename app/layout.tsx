import Header from '@/components/header/header';
import Navigation from '@/components/navigation/navigation';
import Wrapper from '@/components/wrapper';
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
        `${mulish.className}`,

      )}>
        <Wrapper className={clsx(
          'bg-[#F3F0FF]',
          '-z-20',
          'relative',
          'overflow-hidden'
        )}>
          <span className={clsx(
            'w-60 h-60 rounded-full',
            'bg-[#FEEEB7]',
            'absolute',
            '-z-10',
            '-right-10 top-24',
            'blur-3xl'
          )}></span>
          <span className={clsx(
            'w-40 h-40 rounded-full',
            'bg-[#5f33e157]',
            'absolute',
            '-z-10',
            '-left-10 bottom-60',
            'blur-3xl'
          )}></span>
          <Header />
          {children}
          <Navigation />
        </Wrapper>
      </body>
    </html>
  );
}
