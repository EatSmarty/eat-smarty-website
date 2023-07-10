import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return( 
    <div>
        <Home></Home>
        <header className='flex justify-center items-center mt-7'>
        <section className='flex justify-between items-center'>
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
    </div>
  )
}

export default page