'use client'
import clsx from 'clsx';
import Navigationbuttons from '@/components/navigation/navigationbuttons';


export default function Navigation() {


    return (
        <nav className={clsx(
            "flex justify-between items-center",
            "overflow-hidden",
            "border-t",
            "w-full",
            "navigation-bottom"
        )}>

            <Navigationbuttons icon={'../../assets/svg/home.svg'} pathnameProp={'/'} />
            <Navigationbuttons icon={'../../assets/svg/list.svg'} pathnameProp={'additives'} />
            <Navigationbuttons icon={'../../assets/svg/scan.svg'} pathnameProp={'scan'} />
            <Navigationbuttons icon={'../../assets/svg/setting.svg'} pathnameProp={'setting'} />

        </nav>
    )
}