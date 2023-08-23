import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link'


interface NavigationButtonsProps {
    /**
   * Is this the principal set icon navigation buttons
   */
    icon: string

    pathnameProp?: string | null
}

export default function Navigationbuttons({ icon, pathnameProp }: NavigationButtonsProps) {

    return (
        <Link className={clsx(
            "flex justify-center items-center",

        )} href={`/${pathnameProp}`} >
            <Image
                src={`${icon}`}
                height={28}
                width={28}
                alt='icon'
            />
        </Link>
    )

}