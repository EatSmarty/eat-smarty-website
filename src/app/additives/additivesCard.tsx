import clsx from 'clsx';
import Link from 'next/link';
import GaugeChart from 'react-gauge-chart'
import Image from 'next/image';

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
        <div className={clsx(
          "enumber"
        )}>
          {additives.eNumber}
        </div>
        <p className={clsx(
          "name"
        )}>
          {additives.name}
        </p>
        <div className={clsx(
          "flex justify-between items-center"
        )}>
          <div className={clsx(
            "mr-3 ",
            "w-1/3",
          )}>
            <GaugeChart id="gauge-chart1"
              nrOfLevels={5}
              percent={additives.danger / 5}
              arcWidth={0.3}
              cornerRadius={1}
              animate={false}
            />
          </div>
          <div>
            {
              // plant cond
              additives.source == "plant" || "pig" || "chemistry" || "synthetic" || "insec"
                ?
                <Image
                  src={`./${additives.source}.png`}
                  width={30} height={30}
                  alt={`${additives.source} icon`}
                />
                : undefined
            }
          </div>
          <p className={clsx(
            "badge"
          )}>{additives.isHalal == true ? "Halal" : undefined ||
            additives.isHalal == false ? "Haram" : undefined ||
              additives.isHalal == null ? "Mushbooh" : undefined}
          </p>
        </div>
      </div>
    </Link>
  )
}