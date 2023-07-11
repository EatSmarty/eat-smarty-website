'use client'
import { useSnapCarousel } from 'react-snap-carousel';
import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
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
            <p className='text-[#F6F8E2] mt-10'>category</p>
            <div className='containers flex w-100 scroll-section-outer'>
                <div className='scroll-section-inner flex relative'>
                  <div className='item1 w-20 bg-red-200 h-20 m-2'></div>
                  <div className='item2 w-20 bg-red-200 h-20 m-2'></div>
                  <div className='item3 w-20 bg-red-200 h-20 m-2'></div>
                  <div className='item4 w-20 bg-red-200 h-20 m-2'></div>
                  <div className='item5 w-20 bg-red-200 h-20 m-2'></div>
                  <div className='item6 w-20 bg-red-200 h-20 m-2'></div>
                </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default page