import { useState } from 'react'
import clsx from 'clsx';
import Link from 'next/link';
import additives from './additives.json'
import GaugeChart from 'react-gauge-chart'
import Image from 'next/image';

export default function AdditiveCart({ enumber, name, badge, danger, source }) {

  return (
    <Link href={"/additives/e-number"}>
      <div className={clsx(
        "list-container",
        "w-full",
        "bg-green-50",
        "mt-5 p-2",
        "flex justify-between items-center",
        "rounded",
        "cursor-pointer"
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
              percent={danger}
              arcWidth={0.3}
              cornerRadius={1}
              animate={false}
            />
          </div>
          <div>
            {
              // plant cond
              source == "plant" ?
                <Image
                  src={"./plant.png"}
                  width={30} height={30}
                  alt={"plant icon"}
                />
                : "not define source" &&
                  // chemistry cond
                  source == "pig" ?
                  <Image
                    src={"./pig.png"}
                    width={30} height={30}
                    alt={"pig icon"}
                  />
                  : "not define source" &&
                    // pig meat cond
                    source == "chemistry" ?
                    <Image
                      src={"./chemistry.png"}
                      width={30} height={30}
                      alt={"chemistry icon"}
                    />
                    : "not define source" &&
                      // synthetic cond
                      source == "synthetic" ?
                      <Image
                        src={"./synthetic.png"}
                        width={30} height={30}
                        alt={"synthetic icon"}
                      />
                      : "not define source" &&
                        // insec cond
                        source == "insec" ?
                        <Image
                          src={"./insec.png"}
                          width={30} height={30}
                          alt={"synthetic icon"}
                        />
                        : "not define source"
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

// additives.map((data, index) =>
//         (<span>
//           {data.eNumber[index]}
//         </span>))


// {jsonData.map((index) => (
//   <p>
//     {index.eNumber || 'not define'}
//   </p>
// ))}



// {jsonData.map((enumber) => {
//   return (
//     <p>
//       {enumber.eNumber}
//     </p>
//   )
// })}