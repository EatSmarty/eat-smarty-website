'use client';

import About from '@/components/setting/about';
import clsx from 'clsx';
import Script from 'next/script';

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
          <iframe data-tally-src="https://tally.so/embed/wzWQEa?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="463" title="Feedback form"></iframe>
          <Script
            id="tally-js"
            src="https://tally.so/widgets/embed.js"
            onLoad={() => {
              // @ts-expect-error
              Tally.loadEmbeds();
            }}
          />
        </div>
      </main>
    </div>
  );
}
