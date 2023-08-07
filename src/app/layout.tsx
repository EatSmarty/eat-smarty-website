import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Header from './header'
import Navigation from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Halalvar',
    template: "%s | Halalvar"
  },
  description: 'ensuring your dietary preferences are met with absolute ease and confidence',
  keywords: ['halal',
    'haram',
    'mushbooh',
    'detect halal food',
    'additives list',
    'scan',
    'scan halal',
    'scan halal food'
  ],
  openGraph: {
    title: 'Halalvar',
    description: 'We specialize in seamlessly identifying halal food for you by simply scanning the products barcode',
    url: 'https://halalvar.com/',
    siteName: 'halalvar',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: 'halalvar banner'
      },
      {
        url: '',
        width: 1800,
        height: 1600,
        alt: 'halalvar banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    }
  },
  themeColor: [
    { media: '(default-color-scheme: light)', color: 'white' }
  ]
}

interface Props {
  title: string | undefined | null;
  // backLink?: string;
  // halalStatus: "halal" | "mushbooh" | "haram"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
  title: Props,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>
          <Navigation></Navigation>
        </footer>
      </body>
    </html>
  )
}