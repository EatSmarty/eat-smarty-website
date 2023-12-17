'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdArrowBackIos } from 'react-icons/md';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = usePathname();
  return (
    <>
      {router === '/setting/faq'
            || router === '/setting/contactus' ? (
              <Link href="/setting" className="fixed -left-7 top-3 z-20">
                <MdArrowBackIos size={25} className={clsx('mx-10')} />
              </Link>
        ) : <></>}
      {children}
    </>
  );
}
