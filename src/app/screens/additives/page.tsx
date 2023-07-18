'use client'

import Home from '@/app/page'
import { FC } from 'react'
import Header from './header'
import SearchBox from './main/searchBox'
import AdditivesList from './main/additivesList'
import Desc from './dicsPage/desc'

interface pageProps {
  
}


const page: FC<pageProps> = ({}) => {
  return (
    <div className='additives-screen flex justify-center items-center flex-col'>
      <Home></Home>
        <Header></Header>
        <main className='main-content flex justify-center items-center flex-col mt-4'>
          <SearchBox></SearchBox>
          <section className='additives-list mt-10 w-full'>
            <AdditivesList></AdditivesList>
          </section>
            <div className='bg-red-500'>
              <Desc></Desc>
            </div>
        </main>
        <div id='overlay'></div>
    </div>
  )
}

export default page

{/* <div className='flex mr-5'>
              <p className='mr-1 title'>Colors</p>
              <input type="checkbox" />
            </div>
            <div className='flex mr-5'>
              <p className='mr-1 title'>Preservatives</p>
              <input type="checkbox" />
            </div>
            <div className='flex mr-5'>
              <p className='mr-1 title'>Anticidants</p>
              <input type="checkbox" />
            </div>
            <div className='flex mr-5'>
              <p className='mr-1 title'>Sweeteners</p>
              <input type="checkbox" />
            </div>
            <div className='flex mr-5'>
              <p className='mr-1 title'>Emulsitiers</p>
              <input type="checkbox" />
            </div>
            <div className='flex mr-5'>
              <p className='mr-1 title'>Others</p>
              <input type="checkbox" />
            </div> */}