'use client'

import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='additives-screen flex justify-center items-center flex-col'>
      <Home></Home>
        <header className='flex justify-center items-center mt-7'>
          <section className='search-box flex justify-between items-center'>
                <p className='text-[#F6F8E2] mr-40'>Additives</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
          </section>
        </header>
        <main className='main-content flex justify-center items-center mt-4'>
          <section className='filter-box'>
            <div>
              <input className='placeholder-[#3C3D42] placeholder-opacity-50 w-full mt-3 rounded-sm bg-[#E0DDCA] text-[#3C3D42] outline-none p-2 px-12 pl-5' type="text" placeholder='search...'/>
            </div>
          </section>
        </main>
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