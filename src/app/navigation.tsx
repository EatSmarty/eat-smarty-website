'use client'
import clsx from 'clsx';
import Navigationbuttons from './navigationbuttons';



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
            <Navigationbuttons iconbutton={'home'} pathnameProp={''} />
            <Navigationbuttons iconbutton={'list'} pathnameProp={'additives'} />
            <Navigationbuttons iconbutton={'scan'} pathnameProp={'scan'} />
            <Navigationbuttons iconbutton={'setting'} pathnameProp={'setting'} />

        </nav>
    )
}

