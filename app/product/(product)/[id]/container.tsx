import React from 'react'
import SwiperPage from './swiper'
import clsx from 'clsx'
import Maincontent from './maincontent'

export default function Container() {
    return (
        <div className={clsx(
            "flex justify-center items-start",
            "my-5"
        )}>
            <div>
                <SwiperPage />
            </div>
            <Maincontent />
        </div>
    )
}
