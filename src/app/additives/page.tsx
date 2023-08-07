'use client'

import Navigation from '@/app/page'
import { FC } from 'react'
import SearchBox from './searchBox'
import AdditivesList from './additivesList'
import Header from '../header'
import clsx from 'clsx'

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
          <AdditivesList></AdditivesList>
        </div>
      </main>
    </div>
  )
}

export default Page