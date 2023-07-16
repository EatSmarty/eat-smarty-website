import Home from '@/app/page'
import { FC } from 'react'
import Header from './header'
import Common from './common'
import Account from './account'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='account-screen flex justify-center flex-col items-center'>
        <Home></Home>
        <Header></Header>
        <main className='main-content flex justify-center items-center mt-10 flex-col'>
          <Common></Common>
          <Account></Account>
          {/* about */}
          <section className='about w-full mt-10'>
            <p className='text-[#F6F8E2]'>About</p>
            <div className='common-items text-[#F6F8E2]'>
              <div className='faq flex justify-between itmes-center bg-[#E0DDCA] text-[#3C3D42] px-12 p-2 mt-3 rounded-sm pl-5 pr-5'>
                <div className='flex justify-center items-center'>
                  <p>FAQ</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-8 mr-2 hover:mr-1 duration-200 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div className='cantact-us flex justify-between itmes-center bg-[#E0DDCA] text-[#3C3D42] px-12 p-2 mt-3 rounded-sm pl-5 pr-5'>
                <div className='flex justify-center items-center'>
                  <p>ContactUs</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-8 mr-2 hover:mr-1 duration-200 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </section>
        </main>
    </div>
  )
}

export default page