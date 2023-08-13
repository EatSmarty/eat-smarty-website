import clsx from 'clsx';
import Link from 'next/link';
import GaugeChart from 'react-gauge-chart'
import Image from 'next/image';

export default function AdditiveCart({ enumber, name, badge, danger, source }) {

  return (
    <Link href={"/additives/desc"}>
      <div className={clsx(
        "list-container",
        "w-full",
        "mt-5 p-2",
        "flex justify-between items-center",
        "rounded",
        "cursor-pointer",
        badge == true ? "bg-green-100" : undefined ||
          badge == false ? "bg-red-100" : undefined ||
            badge == null ? "bg-orange-100" : undefined,
      )}>
        <div className={clsx(
          "enumber"
        )}>
          {enumber}
        </div>
        <p className={clsx(
          "name"
        )}>
          {name}
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
              percent={danger / 5}
              arcWidth={0.3}
              cornerRadius={1}
              animate={false}
            />
          </div>
          <div>
            {
              // plant cond
              source == "plant" || "pig" || "chemistry" || "synthetic" || "insec"
                ?
                <Image
                  src={`./${source}.png`}
                  width={30} height={30}
                  alt={`${source} icon`}
                />
                : undefined
            }
          </div>
          <p className={clsx(
            "badge"
          )}>{badge == true ? "Halal" : undefined ||
            badge == false ? "Haram" : undefined ||
              badge == null ? "Mushbooh" : undefined}
          </p>
        </div>
      </div>
    </Link>
  )
}