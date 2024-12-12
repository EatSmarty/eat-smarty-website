import Header from '@/components/header/header';
import Navigation from '@/components/navigation/navigation';
import Wrapper from '@/components/wrapper';
import Varient from '@/utilise/varient';
// import { GoogleAnalytics } from '@next/third-parties/google'
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
    default: `${Varient.myVarient.title}`,
    template: `%s | ${Varient.myVarient.title}`,
  },
  description: 'ensuring your dietary preferences are met'
    + 'with absolute ease and confidence',
  keywords: `${Varient.myVarient.keywords}`,
  openGraph: {
    title: `${Varient.myVarient.title}`,
    description: 'We specialize in seamlessly identifying halal food for you'
      + 'by simply scanning the products barcode',
    url: 'https://eatsmarty.com/',
    siteName: `${Varient.myVarient.brandName}`,
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
      {/* <GoogleAnalytics gaId={'G-42FHPSWW8S'} /> */}
      <body className={clsx(
        `${mulish.className}`,
        'bg-[#eee]'
      )}>
        <Wrapper className={clsx(
          'bg-[#FFF]',
          'relative',
          'overflow-hidden',
          'max-w-[1280px]'
        )}>
          <span className={clsx(
            'w-60 h-60 rounded-full',
            'bg-[#E2F6F1]',
            'absolute',
            'z-0',
            '-right-10 top-24',
            'blur-3xl'
          )}></span>
          <div className={clsx(
            'z-10'
          )}>
            <Header />
            {children}
            <Navigation />
          </div>
        </Wrapper>
      </body>
    </html>
  );
}
