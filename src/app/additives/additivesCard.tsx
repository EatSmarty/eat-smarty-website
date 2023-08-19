import clsx from 'clsx';
import Link from 'next/link';
import GaugeChart from 'react-gauge-chart'
import Source from './source';
import Ishalal from './ishalal';

// interface AdditivesInterface {
//   code: number;
//   eNumber: string;
//   name: string;
// }

export default function AdditiveCart({ additives }) {
  return (
    <Link href={"/additives/desc"}>
      <div className={clsx(
        "list-container",
        "w-full",
        "mt-5 p-2",
        "flex justify-between items-center",
        "rounded",
        "cursor-pointer",
        additives.isHalal == true ? "bg-green-100" : undefined ||
          additives.isHalal == false ? "bg-red-100" : undefined ||
            additives.isHalal == null ? "bg-orange-100" : undefined,
      )}>
        <div>
          {additives.eNumber}
        </div>
        <p>
          {additives.name}
        </p>
        <div className={clsx(
          "flex justify-between items-center"
        )}>
          <div className={clsx(
            "mr-3 ",
            "w-12",
          )}>
            <GaugeChart id="gauge-chart1"
              nrOfLevels={5}
              percent={additives.danger / 5}
              arcWidth={0.3}
              cornerRadius={1}
              animate={false}
            />
          </div>
          <Source source={additives.source} />
          <Ishalal isHalal={additives.isHalal} />
        </div>
      </div>
    </Link>
  )
}