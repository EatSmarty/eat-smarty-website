'use client'

import { FC } from 'react'
import Header from './header'
import Desc from './e-number'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <div className='home-screen'>
            <Header></Header>
            <main className='flex justify-center items-center'>
                <div>
                    <Desc></Desc>
                </div>
            </main>
        </div>
    )
}

export default page