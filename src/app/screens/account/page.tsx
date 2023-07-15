import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='account-screen'>
        <Home></Home>
        <header className='header text-[#F6F8E2] flex justify-center items-center mt-7'>
          <h4 className='Account'>Account</h4>
        </header>
        <main className='flex justify-start items-center mt-10'>
          <section className='common'>
            <p className='text-[#F6F8E2] ml-10'>common</p>
            <div className='common-items'>
              <div className='language'></div>
              <div className='theme'></div>
              <div className='notification'></div>
            </div>
          </section>
        </main>
    </div>
  )
}

export default page