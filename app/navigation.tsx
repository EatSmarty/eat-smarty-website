'use client'
import clsx from 'clsx';
import Navigationbuttons from '@/components/navigation/navigationbuttons';
import home from '@/assets/svg/home.svg'
import list from '@/assets/svg/list.svg'
import scan from '@/assets/svg/scan.svg'
import setting from '@/assets/svg/setting.svg'



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

            <Navigationbuttons icon={home} pathnameProp={''} />
            <Navigationbuttons icon={list} pathnameProp={'additives'} />
            <Navigationbuttons icon={scan} pathnameProp={'scan'} />
            <Navigationbuttons icon={setting} pathnameProp={'setting'} />

        </nav>
    )
}

