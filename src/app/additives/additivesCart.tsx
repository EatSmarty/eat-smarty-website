import { useState } from 'react'
import clsx from 'clsx';
import Link from 'next/link';
import additives from './additives.json'
import GaugeChart from 'react-gauge-chart'

export default function AdditiveCart() {
  const [jsonData] = useState(additives)

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

        )}> {jsonData[0].eNumber}
        </div>
        <p className={clsx(
          ""
        )}>
          {jsonData[0].name}
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
              percent={0.3}
              arcWidth={0.3}
              cornerRadius={1}
              animate={false}
            />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className={clsx(
              "w-6 h-6",
              "mr-2"
            )}>
            <path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9
          3.75h.008v.008H12v-.008z" />
          </svg>
          <p className={clsx(
            "badge"
          )}>{additives[0].isHalal == true ? "Halal" : undefined ||
            additives[0].isHalal == false ? "Haram" : undefined ||
              additives[0].isHalal == null ? "Mushbooh" : undefined}
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