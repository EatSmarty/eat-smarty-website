import Home from '@/app/page'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='account-screen flex justify-center flex-col items-center'>
        <Home></Home>
        <header className='header text-[#F6F8E2] flex justify-center items-center mt-7'>
          <h4 className='Account'>Account</h4>
        </header>
        <main className='main-content flex justify-center items-center mt-10'>
          <section className='common w-full'>
            <p className='text-[#F6F8E2]'>common</p>
            <div className='common-items text-[#F6F8E2]'>
              <div className='language flex justify-between itmes-center bg-[#E0DDCA] text-[#3C3D42] px-12 p-2 mt-3 rounded-sm pl-5 pr-5'>
                <div className='flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                  </svg>
                  <p>Language</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-8 mr-5 hover:mr-2 duration-200 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <div className='theme flex justify-between itmes-center bg-[#E0DDCA] text-[#3C3D42] px-12 p-2 mt-3 rounded-sm pl-5 pr-5'>
                <div className='flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                  <p>Theme</p>
                </div>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
              </div>
              <div className='notification flex justify-between itmes-center bg-[#E0DDCA] text-[#3C3D42] px-12 p-2 mt-3 rounded-sm pl-5 pr-5'>
                <div className='flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                  </svg>
                  <p>Notification</p>
                </div>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                  </label>
                </div>
            </div>
          </section>
        </main>
    </div>
  )
}

export default page