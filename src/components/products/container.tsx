'use client'

/* eslint-disable max-len */
import Ishalal from '@/components/additives/ishalal';
import ProductJson from '@/lib/Product.json';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { FaAllergies } from 'react-icons/fa';
import { LuVegan } from 'react-icons/lu';
import { MdPregnantWoman } from 'react-icons/md';
import { TbMoodSick } from 'react-icons/tb';
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

export default function Container({ params }: ContainerInterface) {

  const pathName = usePathname();
  const paramsCategory = pathName.slice(10, -2);
  const mainProduct = ProductJson.filter(
    (product: { id: number; }) => (
      product.id == params.id
    ));




  const filterCategory = ProductJson.filter(
    product => product.category == paramsCategory
  );

  const currentUrl = filterCategory.some((testCat) => testCat.category);


  const currentProduct = mainProduct[0];
  // const checkProduct = productFetch.filter(product =>
  //   product.id === currentProduct.id
  // );

  console.log(currentProduct.nutrition)
  return (
    <div className={clsx(
      'w-full max-w-screen-xl',
      'px-10 md:px-10',
      'mx-auto',
      'flex items-center',
    )}
    >
      <div>
        <div className={clsx(
          'my-2',
        )}
        >
          <h2 className={clsx(
            "text-4xl"
          )}>{currentProduct?.title}</h2>
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
                  isHalal={currentProduct.certificates?.isHalal}
                />
              )}
              isTrue={currentProduct.certificates?.isHalal}
            />
            <Badgecheck
              title="Vegan"
              truthyOption={<LuVegan size={25} />}
              isTrue={currentProduct.certificates?.isVegan}
            />
            <Badgecheck
              title="Vegeterian"
              truthyOption={<LuVegan size={25} />}
              isTrue={currentProduct.certificates?.isVegetrian}
            />
            <Badgecheck
              title="Carcinogenic"
              truthyOption={<TbMoodSick size={25} />}
              isTrue={currentProduct?.isCarcinogenic}
            />
            <Badgecheck
              title="Pregnant"
              truthyOption={<MdPregnantWoman size={30} />}
              isTrue={currentProduct.certificates?.isPregnant}
            />
            <Badgecheck
              title="Allergey"
              truthyOption={<FaAllergies size={25} />}
              isTrue={currentProduct.isAllergey}
            />
          </div>
          <Nutrition
            energy={currentProduct?.nutrition.energy}
            proteins={currentProduct?.nutrition.proteins}
            carbohydrate={currentProduct?.nutrition.carbohydrate}
            sugars={currentProduct?.nutrition.sugars}
            fat={currentProduct?.nutrition.fat}
            fibre={currentProduct?.nutrition.fibre}
            sodium={currentProduct?.nutrition.sodium}
            salt={currentProduct?.nutrition.salt}
            saturates={currentProduct?.nutrition.saturates}
          />
          <Productdecscription />
        </div>
      </div>
    </div>
  );
}
