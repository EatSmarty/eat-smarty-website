import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/navigation'
import varient from '@/utilise/varient'


const DmSans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: `${varient.title}`,
    template: `%s | ${varient.title}`
  },
  description: 'ensuring your dietary preferences are met' +
    'with absolute ease and confidence',
  keywords: `${varient.keywords}`,
  openGraph: {
    title: `${varient.title}`,
    description: 'We specialize in seamlessly identifying halal food for you' +
      'by simply scanning the products barcode',
    url: 'https://eatsmarty.com/',
    siteName: `${varient.brandName}`,
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
  themeColor: [
    { media: '(default-color-scheme: light)', color: 'white' }
  ],
  icons: {
    icon: '/icon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    }
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={DmSans.className}>
        {children}
        <Navigation />
      </body>
    </html>
  )
}