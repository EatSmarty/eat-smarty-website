'use client';

import additives from '@/lib/additives.json';
import FilterdSearch from './filterdSearch';

export default function Page({ param }) {
  return (
    <main>
      <FilterdSearch additives={additives} />
    </main>
  );
}
