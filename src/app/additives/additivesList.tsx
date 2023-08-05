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
    </div>
  )
}