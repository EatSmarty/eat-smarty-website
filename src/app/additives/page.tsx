'use client'

import Navigation from '@/app/page'
import { FC } from 'react'
import Header from './header'
import SearchBox from './searchBox'
import AdditivesList from './additivesList'

interface pageProps {
  
}


const Page: FC<pageProps> = () => {
  return (
    <div className='home-screen mb-20'>
      <Navigation></Navigation>
      <Header></Header>
      <main className='flex justify-center items-center'>
        <div>
          <SearchBox></SearchBox>
          <AdditivesList></AdditivesList>
        </div>
      </main>
    </div>
  )
}

export default Page