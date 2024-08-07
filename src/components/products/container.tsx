/* eslint-disable max-len */
import Ishalal from '@/components/additives/ishalal';
import ProductJson from '@/lib/Product.json';
import clsx from 'clsx';
import { FaAllergies } from 'react-icons/fa';
import { LuVegan } from 'react-icons/lu';
import { MdPregnantWoman } from 'react-icons/md';
import { TbMoodSick } from 'react-icons/tb';
import Badgecheck from './badgecheck';
import ImageContainer from './imagecontainer';
import Nutrition from './nutrition';
import Productdecscription from './productdecscription';
import Producttitle from './producttitle';

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
  const mainProduct = ProductJson.filter(
    (product: { id: number; }) => (
      product.id
    ),
  ).filter((mainItem) => (
    mainItem.id === params.id
  ));

  const currentProduct = mainProduct[0];

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
        <ImageContainer />
        <div className={clsx(
          'my-10',
        )}
        >
          <Producttitle name={currentProduct?.title} />
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
            <span>origin</span>
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
