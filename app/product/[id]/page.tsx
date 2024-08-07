import Container from '@/components/products/container';
import ProductJson from '@/lib/Product.json';
import clsx from 'clsx';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: { id: number }
}

export default function Page({ params }: ProductPageProps) {
  const mainProduct = ProductJson.filter(
    (product: { id: number; }) => (
      product.id
    ),
  );

  const indexProduct = mainProduct.filter((index) => index.id === params.id);

  const currentUrl = indexProduct.some((testId) => testId.id);

  if (!currentUrl) {
    notFound();
  }

  return (
    <div className={clsx(
      'flex justify-center',
    )}
    >
      <Container params={params} />
    </div>
  );
}
