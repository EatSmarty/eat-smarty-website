import { useState } from 'react'
import clsx from 'clsx';
import Link from 'next/link';
import additives from '../additives.json'
import GaugeChart from 'react-gauge-chart'
import Image from 'next/image';

export default function AdditiveCart({ enumber, name, badge, danger, source }) {

  // const additivesType;

  return (
    <Link
      href={"/additives/e-number"}
      data-test="additives-card"
      className={clsx(
        "list-container",
        "w-full",
        "mt-5 p-2",
        "flex justify-between items-center",
        "rounded",
        "cursor-pointer",
        badge == true ? "bg-green-50" : undefined ||
          badge == false ? "bg-red-50" : undefined ||
            badge == null ? "bg-orange-50" : undefined,
      )}
    >
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
          <Image
            src={"./" + source + ".png"}
            width={30} height={30}
            alt={source + " icon"}
          />
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
    </Link>
  )
}