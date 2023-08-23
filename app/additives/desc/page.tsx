'use client'

import { FC } from 'react'
import Header from './header'
import Desc from './desc'
import clsx from 'clsx'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <div className='home-screen'>
            <Header></Header>
            <main className={clsx(
                "flex justify-center items-center",
                "main-content"
            )}>
                <Desc></Desc>
            </main>
        </div>
    )
}

export default page