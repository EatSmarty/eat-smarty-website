'use client';

import About from '@/components/setting/about';
import clsx from 'clsx';

export default function Page() {
  return (
    <div className="">
      <main className={clsx(
        'main-content',
        'flex flex-col items-center justify-center',
      )}
      >
        <div>
          <About />
        </div>
      </main>
    </div>
  );
}
