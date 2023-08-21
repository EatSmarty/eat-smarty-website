'use client'
import clsx from 'clsx';
import Navigationbuttons from '../../components/navigation/navigationbuttons';


export default function Navigation() {


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
            <Navigationbuttons icon={'./svg/home.svg'} pathnameProp={''} />
            <Navigationbuttons icon={'./svg/list.svg'} pathnameProp={'additives'} />
            <Navigationbuttons icon={'./svg/scan.svg'} pathnameProp={'scan'} />
            <Navigationbuttons icon={'./svg/setting.svg'} pathnameProp={'setting'} />

        </nav>
    )
}

