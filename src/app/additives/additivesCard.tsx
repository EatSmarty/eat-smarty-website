import clsx from 'clsx';
import Link from 'next/link';
import GaugeChart from 'react-gauge-chart'
import Image from 'next/image';

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
          <div className={clsx(
            "mr-2"
          )}>
            {
              // plant cond
              additives.source == "plant" || "pig" || "chemistry" || "synthetic" || "insec"
                ?
                <Image
                  src={`./${additives.source}.png`}
                  width={20} height={20}
                  alt={`${additives.source} icon`}
                />
                : undefined
            }
          </div>
          <p className={clsx(
            "badge"
          )}>{additives.isHalal == true ? <Image
            src={`./icon/ok.png`}
            width={30} height={30}
            alt={"halal"}
          /> : undefined ||
            additives.isHalal == false ? <Image
            src={`./icon/cancle.png`}
            width={30} height={30}
            alt={"haram"}
          /> : undefined ||
            additives.isHalal == null ? <Image
            src={`./icon/question-mark.png`}
            width={30} height={30}
            alt={"mushbooh"}
          /> : undefined}
          </p>
        </div>
      </div>
    </Link>
  )
}