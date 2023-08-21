import clsx from 'clsx';
import Link from 'next/link';
import GaugeChart from 'react-gauge-chart'
import Source from './source';
import Ishalal from './ishalal';

interface AdditivesInterface {
  code: number;
  enumber: string;
  name: string;
  isHalal: boolean;
  source: string;
}

export default function AdditiveCart({ isHalal, enumber, name, source, danger }) {

  if (isHalal) {

  }

  return (
    <Link href={"/additives/desc"}>
      <div className={clsx(
        "list-container",
        "mt-5",
        "flex justify-between items-center",
        "rounded",
        "cursor-pointer"
      )}>
        <div>
          {enumber}
        </div>
        <p>
          {name}
        </p>
        <div className={clsx(
          "flex justify-between items-center",
          "w-10"
        )}>
          <GaugeChart id="gauge-chart1"
            nrOfLevels={5}
            percent={danger / 5}
            arcWidth={0.3}
            cornerRadius={1}
            animate={false}
          />
        </div>
        <Source source={source} />
        <Ishalal isHalal={isHalal} />
      </div>
    </Link>
  )
}