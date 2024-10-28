'use client'

import Container from '@/components/products/container';
import ProductJson from '@/lib/Product.json';
import clsx from 'clsx';
import { notFound, usePathname } from 'next/navigation';


interface ProductPageProps {
  params: { id: number }
}

export default function Page({ params }: ProductPageProps) {
  const pathName = usePathname();
  const paramsCategory = pathName.slice(10, -2);
  const paramId = pathName.slice(-1);
  // const indexProduct = ProductJson.filter(
  //   (product: { id: number; }) => (
  //     product.id == params.id
  //   ),
  // );



  const filterCategory = ProductJson.filter(
    product => product.category === paramsCategory
  );



  const categoryIDs = filterCategory.map(catId => catId.id);
  const checkId = categoryIDs.some((catId) => catId === +paramId);

  if (!checkId) {
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
