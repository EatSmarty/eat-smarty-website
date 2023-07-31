'use client'

import Navigation from '@/app/page'
import { FC } from 'react'
import Header from './header'
import Common from './common'
import Search from '../home/search'
import About from './about'

interface pageProps {
  
}


const Page: FC<pageProps> = () => {
  return (
    <div className='home-screen mb-20'>
      <Navigation></Navigation>
      <Header></Header>
      <main className='flex justify-center items-center'>
        <div>
          <Common></Common>
          <About></About>
        </div>
      </main>
    </div>
  )
}

export default Page