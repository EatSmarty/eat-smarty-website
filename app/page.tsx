'use client';

import Banner from '@/components/home/banner';
import Features from '@/components/home/features';
import PaperBox from "@/components/home/paper-box";
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
      <PaperBox
        title='HEALTHY FOOD'
        link='https://www.healthyfood.com/' />
    </main>
  );
}
