'use client'

/* eslint-disable max-len */
import Ishalal from '@/components/additives/ishalal';
import ProductJson from '@/lib/Product.json';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaAllergies } from 'react-icons/fa';
import { LuVegan } from 'react-icons/lu';
import { MdPregnantWoman } from 'react-icons/md';
import { TbMoodSick } from 'react-icons/tb';
import coc from '../../../public/products/cocacola.jpg';
import Badgecheck from './badgecheck';
import Nutrition from './nutrition';
import Productdecscription from './productdecscription';

interface ContainerInterface {
  // code: number | null;
  // enumber: string;
  // name: string;
  // isHalal: boolean | null;
  // source: string;
  // danger: string | number
  params: { id: number }
}

export default async function Container({ params }: ContainerInterface) {

  const pathName = usePathname();
  const paramsCategory = pathName.slice(10, -2);
  const mainProduct = ProductJson.filter(
    (product: { id: number; }) => (
      product.id == params.id
    ));

  // const productApi = await fetch('https://eatsmarty.vercel.app/api/products')
  // const product = await productApi.json();


  // const testApi = products.filter(pro => pro);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  }, []);

  const productFetch = await fetch('https://eatsmarty.vercel.app/api/products')
    .then((response) => response.json())
    .then((data) => {
      return data.result.productList
    });


  const filterCategory = ProductJson.filter(
    product => product.category == paramsCategory
  );

  const currentUrl = filterCategory.some((testCat) => testCat.category);


  const currentProduct = mainProduct[0];
  const checkProduct = productFetch.filter(product =>
    product.id === currentProduct.id
  );

  return (
    <div className={clsx(
      'w-full max-w-screen-xl',
      'px-10 md:px-10',
      'mx-auto',
      'border-b',
      'flex items-center',
    )}
    >
      <div className={clsx(
        'my-5',
      )}
      >
        <Image
          className={clsx(
            'rounded',
            'shadow',
          )}
          src={coc}
          height={200}
          width={200}
          alt="products"
        />
        <div className={clsx(
          'my-10',
        )}
        >
          <div className={clsx(
            'flex items-center',
            'text-xl',
          )}
          >
            <span className={clsx(
              'my-2 mr-1',
            )}
            >
              {currentProduct?.source}
            </span>
            <span>
              {currentProduct?.title}
            </span>
          </div>
          <div className={clsx(
            'md:flex',
            'text-white',
          )}
          >
            <Badgecheck
              title={currentProduct?.what}
              truthyOption={(
                <Ishalal
                  isHalal={currentProduct?.isHalal}
                />
              )}
              isTrue={currentProduct?.isHalal}
            />
            <Badgecheck
              title="Vegan"
              truthyOption={<LuVegan size={25} />}
              isTrue={currentProduct?.isVegan}
            />
            <Badgecheck
              title="Vegeterian"
              truthyOption={<LuVegan size={25} />}
              isTrue={currentProduct?.isVegetrian}
            />
            <Badgecheck
              title="Carcinogenic"
              truthyOption={<TbMoodSick size={25} />}
              isTrue={currentProduct?.isCarcinogenic}
            />
            <Badgecheck
              title="Pregnant"
              truthyOption={<MdPregnantWoman size={30} />}
              isTrue={currentProduct?.isPregnant}
            />
            <Badgecheck
              title="Allergey"
              truthyOption={<FaAllergies size={25} />}
              isTrue={currentProduct?.isAllergey}
            />
          </div>
          <Nutrition
            energy={currentProduct?.nutrition[0].energy}
            proteins={currentProduct?.nutrition[0].proteins}
            carbohydrate={currentProduct?.nutrition[0].carbohydrate}
            sugars={currentProduct?.nutrition[0].sugars}
            fat={currentProduct?.nutrition[0].fat}
            fibre={currentProduct?.nutrition[0].fibre}
            sodium={currentProduct?.nutrition[0].sodium}
            salt={currentProduct?.nutrition[0].salt}
            saturates={currentProduct?.nutrition[0].Saturates}
          />
          <Productdecscription />
        </div>
      </div>
    </div>
  );
}
