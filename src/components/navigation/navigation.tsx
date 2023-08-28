import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link'
import home from '../../assets/svg/home.svg'
import list from '../../assets/svg/list.svg'
import scan from '../../assets/svg/scan.svg'
import setting from '../../assets/svg/setting.svg'
import Homeicon from '../svg/homicon';

export default function Navigation() {


    return (
        <nav className={clsx(
            "flex justify-between items-center",
            "md:justify-around",
            "overflow-hidden",
            "border-t",
            "w-full",
            "navigation-bottom"
        )}>
            {/* home */}
            <Link href={'/'} >
                <Homeicon />
            </Link>
            {/* list */}
            <Link href={'/additives'} >
                <Image
                    src={list}
                    height={28}
                    width={28}
                    alt='icon'
                />
            </Link>
            {/* scan */}
            <Link href={'/scan'} >
                <Image
                    src={scan}
                    height={28}
                    width={28}
                    alt='icon'
                />
            </Link>
            {/* setting */}
            <Link href={'/setting'} >
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