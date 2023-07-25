'use client'

import Home from '@/app/page'
import { FC } from 'react'
import Header from './header'
import SearchBox from './searchBox'
import AdditivesList from './additivesList'

interface pageProps {
  
}


const Page: FC<pageProps> = () => {
  return (
    <div className='additives-screen flex justify-center items-center flex-col'>
      <Home></Home>
        <Header></Header>
        <main className='main-content flex justify-center items-center flex-col mt-4'>
          <SearchBox></SearchBox>
          <section className='additives-list mt-10 w-full'>
            <AdditivesList></AdditivesList>
          </section>
        </main>
    </div>
  )
}

export default Page