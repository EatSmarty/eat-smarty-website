'use client';

import Banner from '@/components/home/banner';
import Features from '@/components/home/features';
import Slogan from '@/components/home/slogan';
import clsx from 'clsx';

export default function Page() {
  return (
    <main className={clsx(
      'flex flex-col items-center',
    )}
    >
      <Banner />
      <Slogan />
      <Features />
    </main>
  );
}
