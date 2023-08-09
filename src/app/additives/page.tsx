'use client'

import { FC } from 'react'
import SearchBox from './searchBox'
import Header from '../header'
import clsx from 'clsx'
import AdditiveList from './additivesList'

interface pageProps {

}


const Page: FC<pageProps> = () => {
  return (
    <div className={clsx(
      "home-screen",
    )}>
      <main className={clsx(
        "main-content",
        "mt-5 mb-14",
        "flex justify-center items-center flex-col"
      )}>
        <div>
          <SearchBox></SearchBox>
          <AdditiveList></AdditiveList>
        </div>
      </main>
    </div>
  )
}

export default Page