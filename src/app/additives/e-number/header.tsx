import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
  return <header className={clsx(
    "leaf-header",
    "flex justify-start items-center",
    "w-full",
    "fixed",
    "bg-[#fff]",
    "border-b",
  )}>
    <Link href={"/additives"} className={clsx(
      "flex justify-between items-center",
      "w-full",
      "m-5"
    )}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke="currentColor"
        className={clsx(
          "w-6 h-6",
          "font-bold",
        )}>
        <path d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      <span className={clsx(
        "text-xl"
      )}>E-Number</span>
    </Link>
  </header>
}

export default Header