import Producttitle from '@/components/products/productListItem';
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
    // console.log(indexCategory);

    if (!currentUrl) {
        notFound();
    }

    return (
        <div className={clsx(
            'flex justify-center',
        )}
        >
            <Producttitle name={indexCategory[0].title} />
        </div>
    );
}
