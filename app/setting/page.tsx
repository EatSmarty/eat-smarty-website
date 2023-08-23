'use client'

import { FC } from 'react'
import About from './about'
import clsx from 'clsx'

interface pageProps {

}


const Page: FC<pageProps> = () => {
  return (
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
  )
}

export default Page