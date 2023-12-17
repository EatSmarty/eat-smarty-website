import Additivescheck from '@/components/additives/additivescheck';
import Additivesdesc from '@/components/additives/additivesdesc';
import Additivesexample from '@/components/additives/additivesexample';
import Additivesothername from '@/components/additives/additivesothername';
import Additivessource from '@/components/additives/additivesource';
import Approval from '@/components/additives/approval';
import additives from '@/lib/additives.json';
import clsx from 'clsx';
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';

interface PageProps {
  params: { number: string }
}

const page: FC<PageProps> = ({ params }) => {
  const mainEnumber = additives.filter(
    (additive: { eNumber: string; }) => (
      additive.eNumber
    ),
  );

  const currentEnumber = mainEnumber.filter(
    (item) => item.eNumber === params.number,
  );
  const currentUrl = mainEnumber.some(
    (item) => item.eNumber === params.number,
  );

  if (!currentUrl) {
    notFound();
  }

  const myEnumber = currentEnumber[0];
  const isHalal = myEnumber?.isHalal === true;
  const isHaram = myEnumber?.isHalal === false;
  const isMusbouh = myEnumber?.isHalal === null;

  return (
    <>
      <div className={clsx(
        'flex justify-center',
        'text-xl',
        'my-12',
        isHalal && 'bg-green-100',
        isHaram && 'bg-red-100',
        isMusbouh && 'bg-orange-100',
      )}
      >
        <p className={clsx(
          'mx-2',
        )}
        >
          {params.number}
        </p>
        <div>-</div>
        <h3 className={clsx(
          'mx-2',
        )}
        >
          {currentEnumber[0]?.name}
        </h3>
      </div>
      <div className={clsx(
        'flex flex-col items-center justify-center',
        'm-5',
      )}
      >
        <Additivessource
          origin={currentEnumber[0]?.source}
          category={currentEnumber[0]?.category}
        />
        <Additivesothername
          othername={currentEnumber[0]?.otherNames}
        />
        <Additivesdesc
          desc={currentEnumber[0]?.description}
        />
        <Additivesexample
          exampleUse={currentEnumber[0].exampleUse}
        />
        <Additivescheck
          allergy={currentEnumber[0].isAllergey
            ? <TiTick />
            : <RxCross2 />}
          halal={currentEnumber[0].isHalal
            ? <TiTick />
            : <RxCross2 />}
        />
        <Approval />
      </div>
    </>
  );
};

export default page;
