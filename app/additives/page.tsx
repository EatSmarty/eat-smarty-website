'use client';

import clsx from 'clsx';
import AdditiveList from './additivesList';

export default function Page() {
  return (
    <main className={clsx(
      'main-content',
    )}
    >
      <AdditiveList />
    </main>
  );
}
