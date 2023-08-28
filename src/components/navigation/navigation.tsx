import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link'
import list from '../../assets/svg/list.svg'
import scan from '../../assets/svg/scan.svg'
import setting from '../../assets/svg/setting.svg'
import Homeicon from '../svg/homicon';
import Additivesicon from '../svg/additivesicon';
import Scanicon from '../svg/scanicon';

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
            <Link href={'/'} >
                <Homeicon />
            </Link>
            <Link href={'/additives'} >
                <Additivesicon />
            </Link>
            <Link href={'/scan'} >
                <Scanicon />
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