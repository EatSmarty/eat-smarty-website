import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'


interface NavigationButtonsProps {
    /**
   * Is this the principal set icon navigation buttons
   */
    icon?: string | null | undefined

    pathnameProp?: string | null
}

export default function Navigationbuttons({ icon, pathnameProp }: NavigationButtonsProps) {
    const pathname = usePathname();

    return (
        <Link className={clsx(
            pathname === `/${pathnameProp}` ? 'active' : '',
            "flex justify-center items-center",

        )} href={`./${pathnameProp}`} >
            <Image
                src={`${icon}`}
                height={28}
                width={28}
                alt={`${icon}`}
            />
        </Link>
    )

}