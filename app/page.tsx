'use client';

import Banner from '@/components/home/banner';
import Features from '@/components/home/features';
import Searchbarcode from '@/components/home/searchbarcode';
import Slogan from '@/components/home/slogan';
import clsx from 'clsx';

export default function Page() {
  return (
    <main className={clsx(
      // 'min-h-screen',
      'flex flex-col items-center justify-between',
      'p-5'
    )}
    >
      <Banner />
      <Slogan />
      <Searchbarcode />
      <Features />
    </main>
  );
}
