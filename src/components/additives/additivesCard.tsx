import clsx from 'clsx';
import Link from 'next/link';
import Ishalal from './ishalal';
import { SourceImage } from './source';

interface AdditivesInterface {
  // code: number | null;
  enumber: string;
  name: string;
  isHalal: boolean | null;
  source: string;
  danger: string | number
}

export default function AdditiveCart({
  isHalal,
  enumber,
  name,
  source,
  danger,
}: AdditivesInterface) {
  return (
    <Link
      href={`/additives/${enumber}`}
      className={clsx(
        'list-container',
        'flex flex-col items-center justify-between',
        'rounded',
        'px-7 py-2',
        'hover:shadow-lg',
        'w-40',
        'md:h-48',
        'shadow rounded-full bg-[#F3F0FF] md:rounded',

        // `${isHalal === true ? 'bg-green-100' : undefined
        //   || isHalal === false ? 'bg-red-100' : undefined
        //     || isHalal === null ? 'bg-orange-100' : undefined}`,
      )}
    >
      <p>
        {enumber}
      </p>
      <p className={clsx(
        'overflow-hidden'
      )}>
        {name}
      </p>
      <div className={clsx(
        'detail-card',
        'flex flex-col items-center justify-center',
      )}
      >
        {/* <Gauge danger={danger} /> */}
        <div className={clsx(
          'flex items-center justify-center',
          'mt-3',
        )}
        >
          <SourceImage source={source} />
          <Ishalal isHalal={isHalal} />
        </div>
      </div>
    </Link>
  );
}
