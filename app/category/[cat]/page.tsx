import ProductJson from '@/lib/Product.json';
import clsx from 'clsx';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
    params: { cat: string }
}

export default function Page({ params }: CategoryPageProps) {

    const indexCategory = ProductJson.filter(
        cat => cat.category === params.cat
    );

    const currentUrl = indexCategory.some(testCat => testCat.category);

    if (!currentUrl) {
        notFound();
    }

    return (
        <div className={clsx(
            'flex justify-center',
        )}
        >
            {params.cat}
        </div>
    );
}
