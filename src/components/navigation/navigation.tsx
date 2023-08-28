import clsx from 'clsx';
import Link from 'next/link'
import Homeicon from '../svg/homicon';
import Additivesicon from '../svg/additivesicon';
import Scanicon from '../svg/scanicon';
import Settingicon from '../svg/settingicon';

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
            <Link href={'/setting'} >
                <Settingicon />
            </Link>

        </nav>
    )
}