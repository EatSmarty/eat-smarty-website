'use client'

import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return( 
    <div className='home-screen'>
      <Home></Home>
      <header className='home-header flex justify-center items-center mt-7'>
        <section className='flex justify-between items-center '>
          <div className='flex justify-center items-center mr-20'>
            <img className='w-10 rounded-full mr-3' src='/avatar-2023.jpg' alt="avatar" />
              <h4 className='text-[#F6F8E2] mr-1'>Hey Hosein</h4>
                <div className='wave text-xl'>👋</div>
          </div>
            <a href='https://halalvar.com/' className="logo bg-[#9CCD62] text-black rounded-full p-2 text-[#F6F8E2]">
              Hal.
            </a>
        </section>
      </header>
      <main className='flex justify-center items-center'>
        <div>
          <section className='search-box'>
            <p className='text-[#F6F8E2] font-light opacity-50 mt-10 mr-10'>What product are you looking for?</p>
            <input className='placeholder-white placeholder-opacity-50 w-full mt-3  rounded-full bg-[#3C3D42] outline-none p-2 pl-5' type="text" placeholder='search...'/>
          </section>
          <section className='category'>
            <p className='text-[#F6F8E2] mt-10 text-xl'>category</p>
            <div className='containers flex w-100 scroll-section-outer'>
                <div className='scroll-section-inner flex relative mt-5'>
                  <div className='item1 w-16 m-2'>
                    <img src="/fruit.png" alt="" />
                  </div>
                  <div className='item2 w-16 m-2'>
                    <img src="/trick-or-treat.png" alt="" />
                  </div>
                  <div className='item3 w-16 m-2'>
                    <img src="/frozen-food.png" alt="" />
                  </div>
                  <div className='item4 w-16 m-2'>
                    <img src="/soft-drink.png" alt="" />
                  </div>
                  <div className='item5 w-16 m-2'>
                    <img src="/bread.png" alt="" />
                  </div>
                  <div className='item6 w-16 m-2'>
                    <img src="/begetable.png" alt="" />
                  </div>
                </div>
            </div>
          </section>
          <section className='history'>
            <div className='mt-10'>
              <p className='text-[#F6F8E2] text-xl'>last search</p>
              <ul className='history-list mt-3'>
                <li className='bg-red-500 mb-4 p-5'>item1</li>
                <li className='bg-red-500 mb-4 p-5'>item2</li>
                <li className='bg-red-500 mb-4 p-5'>item3</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default page