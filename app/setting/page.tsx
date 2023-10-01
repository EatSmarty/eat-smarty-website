'use client'

import { FC } from 'react'
import About from '@/components/setting/about'
import clsx from 'clsx'
import Header from '@/components/header/header'

interface pageProps {

}


const Page: FC<pageProps> = () => {
  return (
    <>
      <Header title={'Setting'}></Header>
      <div className='home-screen mb-20'>
        <main className={clsx(
          "main-content",
          "flex justify-center items-center flex-col"
        )}>
          <div>
            <About></About>
          </div>
        </main>
      </div>
    </>
  )
}

export default Page