import Image from 'next/image'
import clsx from 'clsx';
import Link from 'next/link';
import additives from './additives.json'

export default function Home() {

  return (
    <div className={clsx(
      "list-container",
      "w-full",
      "bg-green-100",
      "mt-5 p-4",
      "flex justify-between items-center",
      "rounded",
      ""
    )}>
      <h3 className={clsx(

      )}>E100</h3>
      <p className={clsx(
        ""
      )}>Curcumin</p>
      <div className={clsx(
        "flex justify-center items-center"
      )}>
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
        )}>Halal</p>
      </div>
    </div>
  )
}