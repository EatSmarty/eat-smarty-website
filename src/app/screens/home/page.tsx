import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return( 
    <div>
        <Home></Home>
        <header className='flex justify-center items-center mt-10'>
        <section className='flex justify-between items-center'>
                <div className='flex justify-center items-center mr-40'>
                    <img className='w-10 rounded-full mr-3' src='/avatar-2023.jpg' alt="avatar" />
                    <h4>Hey Hosein</h4>
                </div>
                <div className="logo">
                    Hal.
                </div>
        </section>
    </header>
    </div>
  )
}

export default page