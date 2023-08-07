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