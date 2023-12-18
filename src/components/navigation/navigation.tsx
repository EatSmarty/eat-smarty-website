'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AiOutlineHome,
  AiOutlineScan,
  AiOutlineUnorderedList
} from 'react-icons/ai';
import './navigation.css';

export default function Navigation() {
  const router = usePathname();
  return (
    <nav className={clsx(
      'flex items-center justify-center',
      'relative',
    )}
    >
      <ul className={clsx(
        'navigation-bottom',
        'rounded-tl-xl',
        'rounded-tr-xl',
        'mx-10',
        'h-20 w-11/12',
        'flex items-center justify-around',
        'shadow-2xl',
      )}
      >
        <li>
          <Link href="/">
            <span className={clsx(
              "relative",
              "flex justify-center items-center",
              "z-10",
              "mt-4",
            )}>
              {<AiOutlineHome color="#000" size={"25px"} />}
            </span>
          </Link>
          <span className={clsx(
            "w-7 h-1",
            "bg-[#7a00e6]",
            "drop-shadow-[0_0_14px_rgba(122,0,230,0.25)]",
            "relative z-10",
            "flex justify-center items-center",
            "-top-10 left-3",
            "rounded-b",
            `${router === "/" ? "opacity-100" : "opacity-0"}`
          )}></span>
        </li>
        <li>
          <Link href="/scan" >
            <span className={clsx(
              "relative",
              "flex justify-center items-center",
              "z-10",
              "transform -translate-y-[13px] -translate-x-[1.5px]"
            )}>
              {<AiOutlineScan color="#fff" size={"25px"} />}
            </span>
          </Link>
          <span className={clsx(
            "absolute -top-6 ",
            "w-[47px] h-[47px]",
            "bg-[#7a00e6]",
            "drop-shadow-[0_0_14px_rgba(122,0,230,0.25)]",
            "rounded-full",
          )}></span>
          <span className={clsx(
            "absolute -left-[5px] top-0",
            "w-14 h-7",
            "bg-[#F9F9F9]",
            "rounded-b-full",
            "-z-10"
          )}></span>
        </li>
        <li>
          <Link href="/additives">
            <span className={clsx(
              "relative",
              "flex justify-center items-center",
              "z-10",
              "mt-4"
            )}>
              {<AiOutlineUnorderedList color="#000" size={"25px"} />}
            </span>
          </Link>
          <span className={clsx(
            "w-7 h-1",
            "bg-[#7a00e6]",
            "drop-shadow-[0_0_14px_rgba(122,0,230,0.25)]",
            "relative z-10",
            "flex justify-center items-center",
            "-top-10 left-3",
            "rounded-b",
            `${router === "/additives" ? "opacity-100" : "opacity-0"}`
          )}></span>
        </li>
        {/* <li>
          <Link href="/setting">
            <span className="icon">
              {<AiOutlineSetting color="#000" />}

            </span>
            <span className="nav-text">Setting</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
