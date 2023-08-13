'use client'
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname();

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
                pathname == '/' ? 'active' : '',
            )} href={"./"} >
                <Image
                    src={'./svg/home.svg'}
                    height={30}
                    width={30}
                    alt='home'
                />
            </Link>

            <Link className={clsx(
                pathname == '/additives' ? 'active' : ''
            )} href={"/additives"} >
                <Image
                    src={'./svg/list.svg'}
                    height={30}
                    width={30}
                    alt='list'
                />
            </Link>

            <Link className={clsx(
                pathname == '/scan' ? 'active' : ''
            )} href={"/scan"} replace>
                <Image
                    src={'./svg/qrcode.svg'}
                    height={30}
                    width={30}
                    alt='qrcode'
                />
            </Link>

            <Link className={clsx(
                pathname == '/setting' ? 'active' : ''
            )} href={"/setting"}>
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
