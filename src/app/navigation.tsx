'use client'
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react';
export default function Navigation() {
    const pathname = usePathname();
    const [pathName, setPathName] = useState("")

    function clickHandler() {
        setPathName(pathname)
    }

    return (
        <nav className={clsx(
            "flex justify-between items-center",
            "fixed bottom-0",
            "overflow-hidden",
            "border-t",
            "bg-white-500",
            "navigation-bottom",
            "w-full",
            "px-5"
        )}>
            <Link className={clsx(
                pathName === '/' ? 'active' : '',
            )} href={"./"} onClick={clickHandler} >
                <Image
                    src={'./svg/home.svg'}
                    height={30}
                    width={30}
                    alt='home'
                />
            </Link>

            <Link className={clsx(
                pathName === '/additives' ? 'active' : ''
            )} href={"/additives"} onClick={clickHandler} >
                <Image
                    src={'./svg/list.svg'}
                    height={30}
                    width={30}
                    alt='list'
                />
            </Link>

            <Link className={clsx(
                pathName === '/scan' ? 'active' : ''
            )} href={"/scan"} onClick={clickHandler}>
                <Image
                    src={'./svg/qrcode.svg'}
                    height={30}
                    width={30}
                    alt='qrcode'
                />
            </Link>

            <Link className={clsx(
                pathName === '/setting' ? 'active' : ''
            )} href={"/setting"} onClick={clickHandler}>
                <Image
                    src={'./svg/setting.svg'}
                    height={30}
                    width={30}
                    alt='list'
                />
            </Link>
        </nav>
    )
}

