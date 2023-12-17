'use client';

import Faq from '@/components/setting/faq';
import clsx from 'clsx';

export default function Page() {
  return (
    <div className={clsx(
      'md:w-full md:px-40',
      'w-full',
      'mb-14 mt-5',
    )}
    >
      <Faq />
    </div>
  );
}
