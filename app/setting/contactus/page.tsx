'use client';

import Contactus from '@/components/setting/contactus';

export default function Page() {
  return (
    <div data-test="home-screen">
      <main className="flex items-center justify-center">
        <div>
          <Contactus />
        </div>
      </main>
    </div>
  );
}
