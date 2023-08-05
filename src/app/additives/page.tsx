'use client'

import Navigation from '@/app/page'
import { FC } from 'react'
import SearchBox from './searchBox'
import AdditivesList from './additivesList'
import Header from '../header'

interface pageProps {

}


const Page: FC<pageProps> = () => {
  return (
    <div className='home-screen mb-20'>
      <Navigation></Navigation>
      <Header title="additives"></Header>
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