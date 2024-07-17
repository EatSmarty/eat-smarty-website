'use client';

import additives from '@/lib/additives.json';
import FilterdSearch from './filterd-search';

export default function Page() {
  return (
    <main>
      <FilterdSearch additives={additives} />
    </main>
  );
}
