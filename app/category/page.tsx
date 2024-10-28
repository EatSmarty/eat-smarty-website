'use client';

import Category from "@/components/home/category";
import clsx from 'clsx';

export default function Page() {
    return (
        <main className={clsx(
            'flex flex-col items-center',
        )}>
            <Category />
        </main>
    );
}
