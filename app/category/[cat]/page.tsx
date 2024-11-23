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
    const listOfProduct = indexCategory.map(name => name.title);

    if (!currentUrl) {
        notFound();
    }

    return (
        <div className={clsx(
            'flex justify-center items-center flex-col',
            'mx-5 gap-5',
        )}
        >
            {listOfProduct.map((title, index) =>
                <Producttitle name={title} key={index} />

            )}
        </div>
    );
}
