'use client'

import { FC } from 'react'
import SearchBox from './searchBox'
import Header from '../header'
import clsx from 'clsx'
import AdditiveCart from './additivesCart'

interface pageProps {

}


const Page: FC<pageProps> = () => {
  return (
    <div className='home-screen'>
      <main className={clsx(
        "main-content",
        "flex justify-center items-center flex-col"
      )}>
        <div>
          <SearchBox></SearchBox>
          <AdditiveCart></AdditiveCart>
        </div>
      </main>
    </div>
  )
}

export default Page