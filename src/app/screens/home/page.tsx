import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return( 
    <div>
      <Home></Home>
      <header className='flex justify-center items-center mt-7'>
        <section className='flex justify-between items-center '>
          <div className='flex justify-center items-center mr-20'>
            <img className='w-10 rounded-full mr-3' src='/avatar-2023.jpg' alt="avatar" />
              <h4 className='mr-1'>Hey Hosein</h4>
                <div className='wave text-xl'>👋</div>
          </div>
            <a href='https://halalvar.com/' className="logo bg-[#9CCD62] text-black rounded-full p-2">
              Hal.
            </a>
        </section>
      </header>
      <main className='flex'>
        <div className=''>
          <p className='font-light opacity-50 mt-10 ml-10'>What product are you looking for?</p>
          <input className='w-full mt-3 ml-10 rounded-full bg-[#3C3D42] outline-none p-2' type="text" />
        </div>
      </main>
    </div>
  )
}

export default page