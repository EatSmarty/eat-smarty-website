'use client'

import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='additives-screen'>
      <Home></Home>
        <header className='flex justify-center items-center mt-7'>
          <section className='search-box'>
            <p className='text-[#F6F8E2] mt-10 mr-10'>Additives</p>
            <input className='placeholder-[#3C3D42] placeholder-opacity-50 w-full mt-3 rounded-sm bg-[#E0DDCA] text-[#3C3D42] outline-none p-2 px-12 pl-5' type="text" placeholder='search...'/>
          </section>
        </header>
        <main className='main-content'>
          <section className='filter-box flex justify-center items-center mt-5 ml-10'>
            <div>
              <p className='title'>Colors</p>
              <input type="checkbox" />
            </div>
            <div>
              <p className='title'>Preservatives</p>
              <input type="checkbox" />
            </div>
            <div>
              <p className='title'>Anticidants</p>
              <input type="checkbox" />
            </div>
            <div>
              <p className='title'>Sweeteners</p>
              <input type="checkbox" />
            </div>
            <div>
              <p className='title'>Emulsitiers</p>
              <input type="checkbox" />
            </div>
            <div>
              <p className='title'>Others</p>
              <input type="checkbox" />
            </div>
          </section>
        </main>
    </div>
  )
}

export default page