import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link'
import home from '../../assets/svg/home.svg'
import list from '../../assets/svg/list.svg'
import scan from '../../assets/svg/scan.svg'
import setting from '../../assets/svg/setting.svg'

export default function Navigation() {


    return (
        <nav className={clsx(
            "flex justify-between items-center",
            "overflow-hidden",
            "border-t",
            "w-full",
            "navigation-bottom"
        )}>
            {/* home */}
            <Link className={clsx(
                "flex justify-center items-center",

            )} href={'/'} >
                <Image
                    src={home}
                    height={28}
                    width={28}
                    alt='icon'
                />
            </Link>
            {/* list */}
            <Link className={clsx(
                "flex justify-center items-center",

            )} href={'/additives'} >
                <Image
                    src={list}
                    height={28}
                    width={28}
                    alt='icon'
                />
            </Link>
            {/* scan */}
            <Link className={clsx(
                "flex justify-center items-center",

            )} href={'/scan'} >
                <Image
                    src={scan}
                    height={28}
                    width={28}
                    alt='icon'
                />
            </Link>
            {/* setting */}
            <Link className={clsx(
                "flex justify-center items-center",

            )} href={'/setting'} >
                <Image
                    src={setting}
                    height={28}
                    width={28}
                    alt='icon'
                />
            </Link>

        </nav>
    )
}