import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationButtonsProps {
    iconbutton?: string | null
    pathnameProp?: string | null
}

export default function Navigationbuttons({ iconbutton, pathnameProp }: NavigationButtonsProps) {
    const pathname = usePathname();

    return (
        <Link className={clsx(
            pathname === `/${pathnameProp}` ? 'active' : '',
        )} href={`./${pathnameProp}`} >
            <Image
                src={`./svg/${iconbutton}.svg`}
                height={28}
                width={28}
                alt={`${iconbutton}`}
            />
        </Link>
    )

}